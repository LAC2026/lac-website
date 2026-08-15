export const prerender = false;

import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { saveBooking } from '../../lib/db';
import { sendNotificationEmail } from '../../lib/email';

export const POST: APIRoute = async ({ request }) => {
  const secretKey = import.meta.env.STRIPE_SECRET_KEY;
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || !webhookSecret) {
    console.error('Stripe secret key or webhook secret missing.');
    return new Response('Server not configured', { status: 500 });
  }

  const stripe = new Stripe(secretKey);
  const signature = request.headers.get('stripe-signature');

  // Stripe requires the exact raw request body (not re-serialized JSON) to verify the signature.
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    if (!signature) throw new Error('Missing stripe-signature header');
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new Response('Invalid signature', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};

    try {
      await saveBooking({
        retreatSlug: metadata.retreat_slug || '',
        retreatName: metadata.retreat || '',
        name: metadata.name || '',
        email: session.customer_details?.email || session.customer_email || '',
        phone: metadata.phone,
        gender: metadata.gender,
        spots: metadata.spots ? parseInt(metadata.spots, 10) : 1,
        notes: metadata.notes,
        amountCents: session.amount_total || 0,
        stripeSessionId: session.id,
      });

      await sendNotificationEmail(
        `New retreat booking: ${metadata.retreat || 'Unknown retreat'}`,
        `
          <h2>New retreat booking &amp; payment received</h2>
          <p><strong>Retreat:</strong> ${metadata.retreat || '\u2014'}</p>
          <p><strong>Name:</strong> ${metadata.name || '\u2014'}</p>
          <p><strong>Email:</strong> ${session.customer_details?.email || session.customer_email || '\u2014'}</p>
          <p><strong>Phone:</strong> ${metadata.phone || '\u2014'}</p>
          <p><strong>Gender:</strong> ${metadata.gender || '\u2014'}</p>
          <p><strong>Spots:</strong> ${metadata.spots || '1'}</p>
          <p><strong>Notes:</strong> ${metadata.notes || '\u2014'}</p>
          <p><strong>Amount paid:</strong> $${((session.amount_total || 0) / 100).toFixed(2)}</p>
        `
      );
    } catch (err) {
      // Don't fail the webhook response over a DB/email hiccup - Stripe will retry otherwise
      // and we don't want duplicate charges or infinite retries over a non-payment issue.
      console.error('Error saving booking or sending notification:', err);
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

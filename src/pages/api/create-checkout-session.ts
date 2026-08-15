// This route runs on the server (not in the browser) - that's what `prerender = false` means.
// It's the only place that ever touches the Stripe secret key.
export const prerender = false;

import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { retreats } from '../../data/retreats';

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const BOOKING_CUTOFF_DAYS = 3;

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const secretKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return new Response(
        JSON.stringify({ error: 'Stripe is not configured yet (missing STRIPE_SECRET_KEY).' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const stripe = new Stripe(secretKey);

    const body = await request.json();
    const { slug, name, email, phone, gender, spots, notes } = body as {
      slug: string;
      name: string;
      email: string;
      phone: string;
      gender: string;
      spots: string;
      notes?: string;
    };

    const retreat = retreats.find((r) => r.slug === slug);
    if (!retreat) {
      return new Response(JSON.stringify({ error: 'Retreat not found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Never trust the client alone on this - always re-check the booking cutoff on the server too.
    const startDate = new Date(`${retreat.startDate}T00:00:00`);
    const today = new Date();
    const daysUntilStart = Math.ceil((startDate.getTime() - today.getTime()) / MS_PER_DAY);
    if (daysUntilStart < BOOKING_CUTOFF_DAYS) {
      return new Response(
        JSON.stringify({
          error: `Bookings for ${retreat.name} are closed. Payments are no longer accepted within ${BOOKING_CUTOFF_DAYS} days of departure.`,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Full trip cost is due at booking now - no deposit/balance split.
    const totalDollars = parseInt(retreat.totalFrom.replace(/[^0-9]/g, ''), 10) || 0;
    const spotsCount = Math.max(1, parseInt(spots, 10) || 1);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${retreat.name} \u2014 Full payment (${spotsCount} spot${spotsCount > 1 ? 's' : ''})`,
              description: retreat.fullDates,
            },
            unit_amount: totalDollars * 100,
          },
          quantity: spotsCount,
        },
      ],
      // Everything from the form gets stored here so you can see it in the Stripe dashboard
      // for each payment - this is our stand-in for a database until one is set up.
      metadata: {
        retreat: retreat.name,
        retreat_slug: retreat.slug,
        name,
        phone,
        gender,
        spots: String(spotsCount),
        notes: notes || '',
      },
      success_url: `${url.origin}/retreats/${slug}/reserve/success`,
      cancel_url: `${url.origin}/retreats/${slug}/reserve?canceled=true`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Something went wrong creating the checkout session.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

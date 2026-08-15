export const prerender = false;

import type { APIRoute } from 'astro';
import { saveSignup } from '../../lib/db';
import { sendNotificationEmail } from '../../lib/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { type, name, email, phone, city, zip } = body as {
      type: 'hike' | 'community';
      name: string;
      email: string;
      phone?: string;
      city?: string;
      zip?: string;
    };

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await saveSignup({ type, name, email, phone, city, zip });

    await sendNotificationEmail(
      `New ${type === 'hike' ? 'hike list' : 'community'} signup: ${name}`,
      `
        <h2>New signup</h2>
        <p><strong>List:</strong> ${type === 'hike' ? 'Hike updates (from Hikes page)' : 'General community (from homepage)'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '\u2014'}</p>
        <p><strong>City:</strong> ${city || '\u2014'}</p>
        <p><strong>ZIP:</strong> ${zip || '\u2014'}</p>
      `
    );

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Something went wrong.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

import { sql } from '@vercel/postgres';

let initialized = false;

// Runs once per server instance - creates the tables if they don't already exist.
// Safe to call on every request; CREATE TABLE IF NOT EXISTS is a no-op after the first time.
async function ensureTables() {
  if (initialized) return;
  await sql`
    CREATE TABLE IF NOT EXISTS signups (
      id SERIAL PRIMARY KEY,
      type TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      city TEXT,
      zip TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      retreat_slug TEXT NOT NULL,
      retreat_name TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      gender TEXT,
      spots INTEGER,
      notes TEXT,
      amount_cents INTEGER,
      stripe_session_id TEXT UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
  initialized = true;
}

export interface SignupRecord {
  type: 'hike' | 'community';
  name: string;
  email: string;
  phone?: string;
  city?: string;
  zip?: string;
}

export async function saveSignup(data: SignupRecord) {
  await ensureTables();
  await sql`
    INSERT INTO signups (type, name, email, phone, city, zip)
    VALUES (${data.type}, ${data.name}, ${data.email}, ${data.phone || ''}, ${data.city || ''}, ${data.zip || ''});
  `;
}

export interface BookingRecord {
  retreatSlug: string;
  retreatName: string;
  name: string;
  email: string;
  phone?: string;
  gender?: string;
  spots?: number;
  notes?: string;
  amountCents?: number;
  stripeSessionId: string;
}

export async function saveBooking(data: BookingRecord) {
  await ensureTables();
  // ON CONFLICT DO NOTHING: Stripe can retry the same webhook event more than once,
  // so this stops the same booking getting saved twice.
  await sql`
    INSERT INTO bookings (retreat_slug, retreat_name, name, email, phone, gender, spots, notes, amount_cents, stripe_session_id)
    VALUES (${data.retreatSlug}, ${data.retreatName}, ${data.name}, ${data.email}, ${data.phone || ''}, ${data.gender || ''}, ${data.spots || 1}, ${data.notes || ''}, ${data.amountCents || 0}, ${data.stripeSessionId})
    ON CONFLICT (stripe_session_id) DO NOTHING;
  `;
}

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Astro is static by default; individual routes can opt into server rendering later
  // (needed for Stripe + newsletter API routes) via `export const prerender = false`.
  adapter: vercel(),
});

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid', // pages are static by default; individual routes can opt into server rendering (needed later for Stripe + newsletter API routes)
  adapter: vercel(),
});

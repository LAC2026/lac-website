# LA Activity Club — Website

Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com).

## Project structure

```
src/
  components/     Header, Hero, Split, Retreats, Testimonial, InstagramGrid, Newsletter, Footer, TrailRail
  data/
    retreats.ts   Retreat listings + Instagram grid photos + trail waypoints — edit here, not in components
  layouts/
    Layout.astro  Shared <head>, fonts, and site-wide scroll/reveal script
  pages/
    index.astro   Homepage — assembles all the components above
  styles/
    global.css    Design tokens (colors, fonts) + all component styles
```

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Editing content

- **Retreats / Instagram photos / trail waypoints**: edit `src/data/retreats.ts` — no need to touch component files.
- **Copy/text**: edit the relevant file in `src/components/`.
- **Colors/fonts**: edit the `:root` variables at the top of `src/styles/global.css`.

## Deploying (first time)

1. Push this project to the empty `lac-website` GitHub repo:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: LAC homepage"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lac-website.git
   git push -u origin main
   ```

   (Replace `YOUR_USERNAME` with your actual GitHub username — copy the exact URL from your repo's GitHub page, "Quick setup" section, if unsure.)

2. Go to vercel.com → New Project → Import `lac-website` → Deploy.
   Vercel auto-detects Astro, no configuration needed.

3. Every future `git push` to `main` automatically redeploys the live site.

## Still to do (see project roadmap)

- [ ] Swap placeholder photos (Wikimedia/picsum) for real LAC trip photography
- [ ] Stripe integration for retreat deposits + optional hike donations
- [ ] Email capture wired to a database (or Mailchimp/Klaviyo/ConvertKit once decided)
- [ ] Additional pages: Retreats, Hikes, About, Journal
- [ ] Live Instagram feed

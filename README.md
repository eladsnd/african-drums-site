# African Drums Teacher Website

Hebrew RTL portfolio site for an African drumming teacher — inspired by [yaelsharoni.com](https://www.yaelsharoni.com/) with distinct drum-focused branding.

## Stack

- **Next.js 16** + Tailwind CSS
- **Sanity CMS** at `/studio` (optional — works with built-in fallback content)
- **Vercel** for hosting

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero video, bio teaser, testimonials |
| `/lessons` | Class schedules, pricing, registration |
| `/workshops` | Upcoming + private workshops |
| `/about` | Bio + press links |
| `/gallery` | Photo & video grid |
| `/contact` | Form + WhatsApp |
| `/studio` | Sanity admin (when configured) |

## Quick start

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site runs immediately with Hebrew placeholder content — no Sanity setup required.

**Sanity CMS (for שלומי):** see [docs/SANITY-SETUP.md](docs/SANITY-SETUP.md) (developer) and [docs/STUDIO-GUIDE.md](docs/STUDIO-GUIDE.md) (editing + videos).

## Connect Sanity CMS

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Add credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your-token
   ```
3. Add CORS origin: `http://localhost:3000` (and your production domain)
4. Open `/studio`, sign in, and create singleton documents (IDs must match schema names: `siteSettings`, `homePage`, etc.)
5. See [docs/STUDIO-GUIDE.md](docs/STUDIO-GUIDE.md) for uncle handoff

## Contact form

Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` (create a form at [formspree.io](https://formspree.io)). Without it, the form falls back to `mailto:`.

## Deploy to Vercel

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Set environment variables from `.env.local.example`
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain
5. Set `WHATSAPP_NUMBER` to שלומי’s number (e.g. `972501234567`, digits only, no `+`) — then **Redeploy**
6. Point DNS to Vercel

## Asset checklist

Replace placeholder SVGs in `public/` with real photos, logo, and hero video. Upload final assets via Sanity Studio when connected.

See [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md) for the full go-live plan.

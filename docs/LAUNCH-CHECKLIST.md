# Launch Checklist — African Drums Site

## Before go-live

### Content from uncle
- [ ] Real name and business name (Hebrew)
- [ ] Bio text (150–300 words)
- [ ] Lesson schedule and locations
- [ ] Pricing
- [ ] WhatsApp number (format: 972XXXXXXXXX)
- [ ] Contact email
- [ ] 3+ testimonials
- [ ] 10+ gallery photos
- [ ] Hero video (30–90 sec, YouTube upload)

### Assets to replace
- [ ] `public/logo.svg` → final logo
- [ ] `public/images/hero-poster.svg` → real poster frame
- [ ] `public/images/portrait.svg` → professional photo
- [ ] `public/images/gallery-*.svg` → real photos
- [ ] Favicon (`app/icon.png` / `app/favicon.ico`)
- [ ] OG image (1200×630) — upload in Sanity `siteSettings.ogImage`

### Technical
- [ ] Sanity project created + env vars in Vercel
- [ ] Seed content in Studio (singleton docs with fixed IDs)
- [ ] `NEXT_PUBLIC_SITE_URL` = production domain
- [ ] `NEXT_PUBLIC_FORMSPREE_ID` for contact form
- [ ] CORS: add production domain in sanity.io/manage
- [ ] Test contact form + WhatsApp on mobile

### Domain & DNS
- [ ] Register domain (.co.il or .com)
- [ ] Add domain in Vercel project settings
- [ ] Configure DNS (A/CNAME per Vercel instructions)
- [ ] Verify HTTPS

### SEO & analytics (optional)
- [ ] Google Search Console
- [ ] Plausible or Google Analytics

## Post-launch
- [ ] 15-min Studio walkthrough with uncle
- [ ] Share `docs/STUDIO-GUIDE.md`

## Ongoing cost estimate
~₪50–120/year domain + free Vercel/Sanity/Formspree tiers

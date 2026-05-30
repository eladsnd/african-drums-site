/**
 * One-time (or safe re-run) seed: copies fallback site content + images into Sanity.
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET=production
 *   SANITY_API_WRITE_TOKEN  (Editor token from sanity.io/manage → API → Tokens)
 *
 * Run: npm run seed:sanity
 *
 * WhatsApp on the live site still comes from Vercel WHATSAPP_NUMBER — not this seed.
 */

import {loadEnvConfig} from '@next/env'
import {createClient} from '@sanity/client'
import {readFile} from 'node:fs/promises'
import path from 'node:path'
import {fallbackContent, FACEBOOK_PAGE_URL} from '../lib/fallback-data'

loadEnvConfig(process.cwd(), true, {info: () => null, error: console.error})

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error(`
Missing config in .env.local:

  NEXT_PUBLIC_SANITY_PROJECT_ID=1d3ieqkx
  SANITY_API_WRITE_TOKEN=<Editor token — NOT the Viewer/read token>

Create an Editor token:
  sanity.io/manage → shlomi drums → API → Tokens → Add API token
  Name: seed-local   Permissions: Editor   (needs create + upload)

SANITY_API_READ_TOKEN cannot seed — it is read-only.
`)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-02-27',
  token,
  useCdn: false,
})

const imageCache = new Map<string, string>()

async function uploadImage(relativePath: string): Promise<string> {
  const normalized = relativePath.replace(/^\//, '')
  if (imageCache.has(normalized)) return imageCache.get(normalized)!

  const filePath = path.join(process.cwd(), 'public', normalized)
  const buffer = await readFile(filePath)
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(filePath),
  })
  imageCache.set(normalized, asset._id)
  console.log(`  ↑ image ${normalized}`)
  return asset._id
}

function imageField(assetId: string) {
  return {
    _type: 'image' as const,
    asset: {_type: 'reference' as const, _ref: assetId},
  }
}

async function uploadFromUrlPath(urlPath: string) {
  if (!urlPath.startsWith('/images/')) return undefined
  const id = await uploadImage(urlPath)
  return imageField(id)
}

async function seed() {
  console.log(`Seeding Sanity project ${projectId} (${dataset})…\n`)

  const logo = await uploadFromUrlPath('/images/profile.jpg')
  const heroPoster = await uploadFromUrlPath('/images/hero.jpg')
  const portrait = await uploadFromUrlPath('/images/profile.jpg')

  const {settings, home, lessons, about, services, gallery, media} = fallbackContent

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: settings.siteName,
    tagline: settings.tagline,
    logo,
    accentColor: settings.accentColor,
    backgroundColor: settings.backgroundColor,
    whatsappNumber: settings.whatsappNumber,
    contactEmail: settings.contactEmail,
    facebookUrl: settings.facebookUrl,
    footerText: settings.footerText,
    seoDescription: settings.seoDescription,
  })
  console.log('✓ siteSettings')

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    headline: home.headline,
    subheadline: home.subheadline,
    heroPoster,
    aboutTeaser: home.aboutTeaser,
    aboutLinkText: home.aboutLinkText,
  })
  console.log('✓ homePage')

  await client.createOrReplace({
    _id: 'lessonPage',
    _type: 'lessonPage',
    title: lessons.title,
    intro: lessons.intro,
    registrationUrl: lessons.registrationUrl,
    registrationLabel: lessons.registrationLabel,
    lessonTypes: lessons.lessonTypes,
    pricing: lessons.pricing,
    pricingNote: lessons.pricingNote,
  })
  console.log('✓ lessonPage')

  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    title: about.title,
    bio: about.bio,
    portrait,
  })
  console.log('✓ aboutPage')

  for (let i = 0; i < services.length; i++) {
    const s = services[i]

    const images: ReturnType<typeof imageField>[] = []
    for (const url of s.imageUrls) {
      const field = await uploadFromUrlPath(url)
      if (field) images.push(field)
    }

    await client.createOrReplace({
      _id: `service-${s.slug}`,
      _type: 'servicePage',
      slug: s.slug,
      title: s.title,
      intro: s.intro,
      body: s.body,
      heroImage: s.heroImageUrl ? await uploadFromUrlPath(s.heroImageUrl) : undefined,
      images,
      order: i + 1,
      ctaLabel: s.ctaLabel,
    })
    console.log(`✓ servicePage (${s.slug})`)
  }

  for (let i = 0; i < gallery.length; i++) {
    const g = gallery[i]
    const img = g.imageUrl ? await uploadFromUrlPath(g.imageUrl) : undefined
    await client.createOrReplace({
      _id: `gallery-${g._key}`,
      _type: 'galleryItem',
      type: g.type,
      image: img,
      caption: g.caption,
      order: i + 1,
    })
    console.log(`✓ galleryItem ${g._key}`)
  }

  for (const m of media) {
    await client.createOrReplace({
      _id: 'media-facebook',
      _type: 'mediaItem',
      title: m.title,
      url: m.url || FACEBOOK_PAGE_URL,
      source: m.source,
    })
    console.log('✓ mediaItem (facebook)')
  }

  console.log('\nDone. Open /studio — content should match the site.')
  console.log('WhatsApp on production: still set WHATSAPP_NUMBER in Vercel (not overwritten by seed).')
}

seed().catch((err: {statusCode?: number; message?: string}) => {
  if (err?.statusCode === 403) {
    console.error(`
Permission denied — your token cannot create/upload.

Fix: create a new token with Editor (or Administrator) permissions.
Do not use the Viewer token from SANITY_API_READ_TOKEN.

sanity.io/manage → API → Tokens → Add API token → Editor
Then set SANITY_API_WRITE_TOKEN in .env.local and run again.
`)
  } else {
    console.error(err)
  }
  process.exit(1)
})

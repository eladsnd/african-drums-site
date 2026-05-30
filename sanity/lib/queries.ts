import {defineQuery} from 'next-sanity'

export const siteContentQuery = defineQuery(`{
  "settings": *[_type == "siteSettings"][0]{
    siteName,
    tagline,
    "logoUrl": logo.asset->url,
    accentColor,
    backgroundColor,
    whatsappNumber,
    contactEmail,
    facebookUrl,
    instagramUrl,
    youtubeUrl,
    footerText,
    seoDescription
  },
  "home": *[_type == "homePage"][0]{
    headline,
    subheadline,
    heroVideoUrl,
    "heroPosterUrl": heroPoster.asset->url,
    aboutTeaser,
    aboutLinkText
  },
  "lessons": *[_type == "lessonPage"][0]{
    title,
    intro,
    registrationUrl,
    registrationLabel,
    lessonTypes[]{
      _key,
      title,
      description,
      quote,
      schedules[]{
        _key,
        day,
        time,
        location,
        note
      }
    },
    pricing[]{
      _key,
      label,
      price
    },
    pricingNote
  },
  "services": *[_type == "servicePage"] | order(order asc){
    slug,
    title,
    intro,
    body,
    "imageUrls": images[].asset->url,
    "heroImageUrl": heroImage.asset->url,
    ctaLabel
  },
  "about": *[_type == "aboutPage"][0]{
    title,
    bio,
    "portraitUrl": portrait.asset->url
  },
  "media": *[_type == "mediaItem"] | order(_createdAt desc){
    _key,
    title,
    url,
    source
  },
  "testimonials": *[_type == "testimonial"] | order(order asc){
    _key,
    quote,
    author,
    role
  },
  "gallery": *[_type == "galleryItem"] | order(order asc){
    "_key": _id,
    type,
    "imageUrl": image.asset->url,
    videoUrl,
    caption
  }
}`)

export const settingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    siteName,
    tagline,
    seoDescription
  }
`)

import type {ServicePage, SiteContent} from './types'

/** Use Sanity when present; keep fallback for empty fields so partial CMS edits are safe */
export function mergeWithFallback(sanity: SiteContent, fallback: SiteContent): SiteContent {
  return {
    settings: {
      ...fallback.settings,
      ...sanity.settings,
      logoUrl: sanity.settings.logoUrl || fallback.settings.logoUrl,
      siteName: sanity.settings.siteName || fallback.settings.siteName,
      tagline: sanity.settings.tagline || fallback.settings.tagline,
    },
    home: {
      ...fallback.home,
      ...sanity.home,
      heroPosterUrl: sanity.home.heroPosterUrl || fallback.home.heroPosterUrl,
      headline: sanity.home.headline || fallback.home.headline,
      subheadline: sanity.home.subheadline || fallback.home.subheadline,
      aboutTeaser: sanity.home.aboutTeaser || fallback.home.aboutTeaser,
    },
    lessons: {
      ...fallback.lessons,
      ...sanity.lessons,
      title: sanity.lessons.title || fallback.lessons.title,
      intro: sanity.lessons.intro || fallback.lessons.intro,
      lessonTypes: sanity.lessons.lessonTypes?.length
        ? sanity.lessons.lessonTypes
        : fallback.lessons.lessonTypes,
      pricing: sanity.lessons.pricing?.length ? sanity.lessons.pricing : fallback.lessons.pricing,
    },
    services: fallback.services.map((fb) => mergeService(sanity.services.find((s) => s.slug === fb.slug), fb)),
    about: {
      ...fallback.about,
      ...sanity.about,
      portraitUrl: sanity.about.portraitUrl || fallback.about.portraitUrl,
      title: sanity.about.title || fallback.about.title,
      bio: sanity.about.bio || fallback.about.bio,
    },
    media: sanity.media?.length ? sanity.media : fallback.media,
    testimonials: sanity.testimonials?.length ? sanity.testimonials : fallback.testimonials,
    gallery: sanity.gallery?.length ? sanity.gallery : fallback.gallery,
  }
}

function mergeService(fromSanity: ServicePage | undefined, fallback: ServicePage): ServicePage {
  if (!fromSanity) return fallback
  return {
    slug: fallback.slug,
    title: fromSanity.title || fallback.title,
    intro: fromSanity.intro || fallback.intro,
    body: fromSanity.body || fallback.body,
    imageUrls: fromSanity.imageUrls?.length ? fromSanity.imageUrls : fallback.imageUrls,
    heroImageUrl: fromSanity.heroImageUrl || fallback.heroImageUrl,
    heroImagePosition: fromSanity.heroImagePosition || fallback.heroImagePosition,
    ctaLabel: fromSanity.ctaLabel || fallback.ctaLabel,
  }
}

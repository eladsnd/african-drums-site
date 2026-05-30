/** Stable image paths — files live in public/images/ */

export type PageHeroImage = {
  src: string
  /** CSS object-position for banner crop */
  objectPosition?: string
}

export const siteImages = {
  logo: '/images/profile.jpg',
  hero: '/images/hero.jpg',
  portrait: '/images/profile.jpg',
  gallery: [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
  ],
} as const

/** Page banners — tuned crop per section */
export const pageHeroConfig: Record<string, PageHeroImage> = {
  /** קבוצת שיעורים עם שלומי */
  lessons: {src: '/images/hero.jpg', objectPosition: 'center 42%'},
  /** מעגל תיפוף אפריקאי — אווירת סדנה */
  workshops: {src: '/images/gallery-1.jpg', objectPosition: '62% 48%'},
  about: {src: '/images/profile.jpg', objectPosition: 'center center'},
  gallery: {src: '/images/gallery-1.jpg', objectPosition: '55% 45%'},
  contact: {src: '/images/gallery-3.jpg', objectPosition: '72% 40%'},
}

export const pageHeroImages: Record<string, string> = Object.fromEntries(
  Object.entries(pageHeroConfig).map(([key, {src}]) => [key, src]),
)

/** Last-resort if a JPG fails to load */
export const imageSafeFallback = '/images/hero-poster.svg'

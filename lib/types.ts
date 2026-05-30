export type SanityImage = {
  _type: 'image'
  asset?: {_ref: string}
  alt?: string
}

export type SiteSettings = {
  siteName: string
  tagline: string
  logoUrl?: string
  accentColor: string
  backgroundColor: string
  whatsappNumber: string
  contactEmail: string
  facebookUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  footerText: string
  seoDescription: string
}

export type HomePage = {
  headline: string
  subheadline: string
  heroVideoUrl?: string
  heroPosterUrl?: string
  aboutTeaser: string
  aboutLinkText: string
}

export type ScheduleEntry = {
  _key: string
  day: string
  time: string
  location: string
  note?: string
}

export type PricingTier = {
  _key: string
  label: string
  price: string
}

export type LessonType = {
  _key: string
  title: string
  description: string
  quote?: string
  schedules: ScheduleEntry[]
}

export type LessonPage = {
  title: string
  intro: string
  registrationUrl?: string
  registrationLabel: string
  lessonTypes: LessonType[]
  pricing: PricingTier[]
  pricingNote?: string
}

export type ServicePage = {
  slug: string
  title: string
  intro: string
  body: string
  imageUrls: string[]
  heroImageUrl?: string
  heroImagePosition?: string
  ctaLabel?: string
}

export type AboutPage = {
  title: string
  bio: string
  portraitUrl?: string
}

export type MediaItem = {
  _key: string
  title: string
  url: string
  source?: string
}

export type Testimonial = {
  _key: string
  quote: string
  author: string
  role?: string
}

export type GalleryItem = {
  _key: string
  type: 'image' | 'video'
  imageUrl?: string
  videoUrl?: string
  caption?: string
}

export type SiteContent = {
  settings: SiteSettings
  home: HomePage
  lessons: LessonPage
  services: ServicePage[]
  about: AboutPage
  media: MediaItem[]
  testimonials: Testimonial[]
  gallery: GalleryItem[]
}

import type {ServicePage, SiteContent} from './types'

export const SERVICE_SLUGS = [
  'workshops',
  'performances',
  'bar-mitzvah',
  'schools',
  'special',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

export const servicePaths: Record<ServiceSlug, string> = {
  workshops: '/workshops',
  performances: '/performances',
  'bar-mitzvah': '/bar-mitzvah',
  schools: '/schools',
  special: '/special',
}

export function getServiceBySlug(
  content: SiteContent,
  slug: ServiceSlug,
): ServicePage | undefined {
  return content.services.find((s) => s.slug === slug)
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value)
}

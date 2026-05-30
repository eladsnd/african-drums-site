import {servicePaths, type ServiceSlug} from './services'

/** Main header navigation (RTL) */
export type NavItem = {
  href: string
  label: string
}

const serviceNav: {slug: ServiceSlug; label: string}[] = [
  {slug: 'workshops', label: 'סדנאות'},
  {slug: 'performances', label: 'הופעות'},
  {slug: 'bar-mitzvah', label: 'בר מצווה'},
  {slug: 'schools', label: 'בתי ספר'},
  {slug: 'special', label: 'צרכים מיוחדים'},
]

export const mainNavItems: NavItem[] = [
  {href: '/', label: 'בית'},
  ...serviceNav.map(({slug, label}) => ({href: servicePaths[slug], label})),
  {href: '/gallery', label: 'גלריה'},
  {href: '/about', label: 'אודות'},
  {href: '/contact', label: 'צרו קשר'},
]

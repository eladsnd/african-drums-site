/** Main header navigation (RTL). Service items anchor to /workshops sections. */
export type NavItem = {
  href: string
  label: string
  /** Section id on /workshops for hash links */
  sectionId?: string
}

export const mainNavItems: NavItem[] = [
  {href: '/', label: 'בית'},
  {href: '/workshops#workshops', label: 'סדנאות', sectionId: 'workshops'},
  {href: '/workshops#performances', label: 'הופעות', sectionId: 'performances'},
  {href: '/workshops#bar-mitzvah', label: 'בר מצווה', sectionId: 'bar-mitzvah'},
  {href: '/workshops#schools', label: 'בתי ספר', sectionId: 'schools'},
  {href: '/workshops#special', label: 'צרכים מיוחדים', sectionId: 'special'},
  {href: '/gallery', label: 'גלריה'},
  {href: '/about', label: 'אודות'},
  {href: '/contact', label: 'צרו קשר'},
]

'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import type {SiteSettings} from '@/lib/types'

const navItems = [
  {href: '/', label: 'בית'},
  {href: '/lessons', label: 'שיעורים'},
  {href: '/workshops', label: 'סדנאות'},
  {href: '/about', label: 'אודות'},
  {href: '/gallery', label: 'גלריה'},
  {href: '/contact', label: 'צרו קשר'},
]

export function SiteHeader({settings}: {settings: SiteSettings}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          {settings.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={settings.logoUrl} alt={settings.siteName} className="h-10 w-10 md:h-12 md:w-12" />
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-cream md:h-12 md:w-12">
              {settings.siteName.charAt(0)}
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-accent md:text-base ${
                pathname === item.href ? 'text-accent' : 'text-charcoal'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-charcoal md:hidden"
          aria-label="תפריט"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-stone-200/60 bg-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 text-base font-medium ${pathname === item.href ? 'text-accent' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

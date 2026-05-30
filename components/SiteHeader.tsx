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
    <header className="sticky top-0 z-50 border-b border-orange-200/50 bg-[var(--color-bg)]/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="group flex items-center gap-3">
          {settings.logoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={settings.logoUrl}
              alt=""
              className="h-11 w-11 rounded-full shadow-md ring-2 ring-orange-200/60 transition group-hover:ring-accent/40 md:h-12 md:w-12"
            />
          )}
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-extrabold leading-tight text-charcoal md:text-base">
              {settings.siteName}
            </span>
            <span className="text-xs font-medium text-accent">{settings.tagline.split('—')[0]}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition md:text-[15px] ${
                  active
                    ? 'nav-link-active bg-orange-50 text-accent'
                    : 'text-stone-700 hover:bg-orange-50/80 hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2.5 text-charcoal ring-1 ring-orange-200/60 md:hidden"
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
        <nav className="border-t border-orange-200/50 bg-[var(--color-bg)] px-4 py-4 shadow-inner md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2.5 text-base font-semibold ${
                  pathname === item.href ? 'bg-orange-100 text-accent' : 'text-stone-700'
                }`}
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

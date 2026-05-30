import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {getSiteContent} from '@/lib/data'
import type {Metadata} from 'next'

/** Read WHATSAPP_NUMBER from Vercel env on each request (not only at build) */
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const {settings} = await getSiteContent()
  return {
    title: {
      default: `${settings.siteName} — ${settings.tagline}`,
      template: `%s | ${settings.siteName}`,
    },
    description: settings.seoDescription,
    openGraph: {
      locale: 'he_IL',
      type: 'website',
    },
  }
}

export default async function WebsiteLayout({children}: LayoutProps<'/'>) {
  const {settings} = await getSiteContent()

  return (
    <div
      className="pattern-bg flex min-h-screen flex-col"
      style={
        {
          '--color-accent': settings.accentColor,
          '--color-accent-dark': '#9a3412',
          '--color-accent-light': '#fed7aa',
          '--color-bg': settings.backgroundColor,
        } as React.CSSProperties
      }
    >
      <SiteHeader settings={settings} />
      <main className="flex-grow">{children}</main>
      <SiteFooter settings={settings} />
    </div>
  )
}

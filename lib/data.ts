import 'server-only'

import {fallbackContent} from '@/lib/fallback-data'
import type {SiteContent} from '@/lib/types'
import {isSanityConfigured} from '@/sanity/lib/api'
import {client} from '@/sanity/lib/client'
import {siteContentQuery} from '@/sanity/lib/queries'

export async function getSiteContent(): Promise<SiteContent> {
  if (!isSanityConfigured) {
    return fallbackContent
  }

  try {
    const data = await client.fetch<SiteContent | null>(siteContentQuery)
    if (!data?.settings?.siteName) {
      return fallbackContent
    }
    return data
  } catch {
    return fallbackContent
  }
}

export async function getSettings() {
  const content = await getSiteContent()
  return content.settings
}

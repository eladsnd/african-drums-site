import 'server-only'

import {fallbackContent} from '@/lib/fallback-data'
import type {SiteContent} from '@/lib/types'
import {toYouTubeEmbedUrl} from '@/lib/youtube'
import {applyWhatsAppToContent} from '@/lib/whatsapp'
import {isSanityConfigured} from '@/sanity/lib/api'
import {client} from '@/sanity/lib/client'
import {siteContentQuery} from '@/sanity/lib/queries'

function resolveContent(data: SiteContent | null): SiteContent {
  if (!data?.settings?.siteName) return fallbackContent
  const normalized = normalizeSanityContent(data)
  if (!normalized.services?.length) {
    return {...normalized, services: fallbackContent.services}
  }
  return normalized
}

function normalizeSanityContent(content: SiteContent): SiteContent {
  return {
    ...content,
    home: {
      ...content.home,
      heroVideoUrl: toYouTubeEmbedUrl(content.home.heroVideoUrl),
    },
    gallery: content.gallery.map((item) =>
      item.type === 'video'
        ? {...item, videoUrl: toYouTubeEmbedUrl(item.videoUrl)}
        : item,
    ),
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  let content: SiteContent

  if (!isSanityConfigured) {
    content = fallbackContent
  } else {
    try {
      content = resolveContent(await client.fetch<SiteContent | null>(siteContentQuery))
    } catch {
      content = fallbackContent
    }
  }

  return applyWhatsAppToContent(content)
}

export async function getSettings() {
  const content = await getSiteContent()
  return content.settings
}

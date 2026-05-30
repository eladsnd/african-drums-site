import type {SiteContent} from './types'

/**
 * WhatsApp number in international format without + (e.g. 972501234567).
 * Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel / `.env.local`.
 */
export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim()
  if (raw) return raw.replace(/\D/g, '')
  return '972501234567'
}

/** Pre-filled WhatsApp text when someone clicks a contact / registration link */
export const WHATSAPP_INTEREST_MESSAGE = [
  'שלום שלומי,',
  '',
  'אני מעוניין/ת בפרטים על סדנה או הופעה ב״בקצב שלי״.',
  '',
  'אשמח שתחזור אליי.',
  '',
  'תודה!',
].join('\n')

export function buildWhatsAppUrl(
  phoneE164: string,
  message: string = WHATSAPP_INTEREST_MESSAGE,
): string {
  const digits = phoneE164.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

/** Apply env/CMS phone to all WhatsApp links in site content */
export function applyWhatsAppToContent(content: SiteContent): SiteContent {
  const num = getWhatsAppNumber()
  const waUrl = buildWhatsAppUrl(num)

  return {
    ...content,
    settings: {...content.settings, whatsappNumber: num},
    lessons: {
      ...content.lessons,
      registrationUrl: content.lessons.registrationUrl ? waUrl : undefined,
    },
    workshops: {
      ...content.workshops,
      upcomingWorkshops: content.workshops.upcomingWorkshops.map((w) => ({
        ...w,
        registrationUrl: w.registrationUrl ? waUrl : undefined,
      })),
      privateCtaUrl: content.workshops.privateCtaUrl ? waUrl : undefined,
    },
  }
}

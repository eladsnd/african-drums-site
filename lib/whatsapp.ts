import type {SiteContent} from './types'

/**
 * Israel mobile in international format without + (e.g. 972501234567).
 *
 * Prefer `WHATSAPP_NUMBER` (server, read at runtime on Vercel).
 * `NEXT_PUBLIC_WHATSAPP_NUMBER` also works but requires a rebuild when changed.
 */
export function getWhatsAppNumber(): string | undefined {
  const raw =
    process.env.WHATSAPP_NUMBER?.trim() ||
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim()
  if (!raw) return undefined
  const digits = raw.replace(/\D/g, '')
  return digits.length >= 10 ? digits : undefined
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
  if (!num) return content
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

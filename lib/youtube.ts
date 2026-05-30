/** Turn any common YouTube link into an embed URL for iframes */
export function toYouTubeEmbedUrl(url: string | undefined): string | undefined {
  if (!url?.trim()) return undefined

  const trimmed = url.trim()

  try {
    const parsed = new URL(trimmed)
    let id: string | null = null

    if (parsed.hostname.includes('youtu.be')) {
      id = parsed.pathname.replace(/^\//, '').split('/')[0] || null
    } else if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/embed/')) {
        return `https://www.youtube.com/embed/${parsed.pathname.split('/')[2]?.split('?')[0]}`
      }
      if (parsed.pathname.startsWith('/shorts/')) {
        id = parsed.pathname.split('/')[2] ?? null
      } else {
        id = parsed.searchParams.get('v')
      }
    }

    if (id) return `https://www.youtube.com/embed/${id}`
  } catch {
    /* not a URL */
  }

  return trimmed
}

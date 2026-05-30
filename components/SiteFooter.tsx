import type {SiteSettings} from '@/lib/types'

export function SiteFooter({settings}: {settings: SiteSettings}) {
  return (
    <footer className="mt-auto border-t border-stone-200/60 bg-cream">
      <div className="tribal-band-decor h-3" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-10 text-center md:px-8">
        <p className="text-sm text-stone-600 md:text-base">{settings.footerText}</p>
        <div className="mt-4 flex justify-center gap-4">
          {settings.instagramUrl && (
            <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
              Instagram
            </a>
          )}
          {settings.youtubeUrl && (
            <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
              YouTube
            </a>
          )}
          {settings.facebookUrl && (
            <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
              Facebook
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

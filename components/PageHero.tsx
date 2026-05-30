import {HebrewText} from '@/components/HebrewText'
import {HeroImage} from '@/components/HeroImage'
import {imageFallbacks} from '@/lib/fallback-data'

type PageHeroProps = {
  title: string
  subtitle?: string
  imageUrl?: string
  compact?: boolean
}

export function PageHero({title, subtitle, imageUrl, compact = false}: PageHeroProps) {
  const imageHeight = compact ? 'h-36 md:h-44' : 'h-48 md:h-64 lg:h-72'
  const titlePadding = compact ? 'py-5 md:py-6' : 'py-6 md:py-8'
  const subtitlePadding = compact ? 'py-4 md:py-5' : 'py-6 md:py-8'
  const imgFallback = imageUrl ? imageFallbacks[imageUrl] : undefined

  return (
    <header>
      <div className="tribal-band-decor h-2.5" aria-hidden />

      <div className={`page-hero-title-band px-4 ${titlePadding}`}>
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          {title}
        </h1>
        {subtitle && !imageUrl && (
          <HebrewText
            as="p"
            className={`mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-orange-50 md:text-lg`}
          >
            {subtitle}
          </HebrewText>
        )}
      </div>

      <div className="tribal-band-decor h-2.5" aria-hidden />

      {imageUrl && (
        <div className={`relative w-full overflow-hidden bg-stone-800 ${imageHeight}`}>
          <HeroImage
            src={imageUrl}
            fallback={imgFallback}
            className="h-full w-full object-cover brightness-90 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-black/15" />
        </div>
      )}

      {subtitle && imageUrl && (
        <div className={`border-b border-orange-100/80 bg-[var(--color-bg)] px-4 ${subtitlePadding}`}>
          <HebrewText className="mx-auto max-w-2xl text-center text-base leading-relaxed text-stone-700 md:text-lg">
            {subtitle}
          </HebrewText>
        </div>
      )}
    </header>
  )
}

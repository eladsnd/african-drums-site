type PageHeroProps = {
  title: string
  subtitle?: string
  imageUrl?: string
}

export function PageHero({title, subtitle, imageUrl}: PageHeroProps) {
  return (
    <div className="relative">
      {/* Decorative strips only — no text here */}
      <div className="tribal-band-decor h-3" aria-hidden />

      {/* Title on solid gradient (readable) */}
      <div className="page-hero-title-band px-4 py-8 md:py-10">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
      </div>

      <div className="tribal-band-decor h-3" aria-hidden />

      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden md:h-64 lg:h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full scale-105 object-cover"
            style={{filter: 'saturate(1.1) brightness(0.85)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-black/20" />
        </div>
      )}

      {/* Subtitle below image on cream — never on the pattern */}
      {subtitle && (
        <div className="border-b border-orange-100/80 bg-[var(--color-bg)] px-4 py-8 md:px-8 md:py-10">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-stone-700 md:text-xl">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}

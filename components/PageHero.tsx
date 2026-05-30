type PageHeroProps = {
  title: string
  subtitle?: string
  imageUrl?: string
}

export function PageHero({title, subtitle, imageUrl}: PageHeroProps) {
  return (
    <div className="relative">
      <div className="tribal-band flex min-h-[5.5rem] items-center justify-center px-4 py-8 md:min-h-[7rem]">
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-base font-medium text-orange-100 md:text-lg">{subtitle}</p>
          )}
        </div>
      </div>

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
    </div>
  )
}

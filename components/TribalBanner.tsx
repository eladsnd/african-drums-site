/** @deprecated Use PageHero instead */
export function TribalBanner({title}: {title?: string}) {
  if (!title) {
    return <div className="tribal-band-decor h-3" aria-hidden />
  }
  return (
    <div>
      <div className="tribal-band-decor h-3" aria-hidden />
      <div className="page-hero-title-band px-4 py-6">
        <h1 className="text-center text-2xl font-extrabold text-white md:text-4xl">{title}</h1>
      </div>
      <div className="tribal-band-decor h-3" aria-hidden />
    </div>
  )
}

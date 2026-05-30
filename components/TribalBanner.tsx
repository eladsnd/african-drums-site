export function TribalBanner({title}: {title?: string}) {
  return (
    <div className="tribal-band relative flex min-h-[4rem] items-center justify-center px-4 py-6 md:min-h-[5rem]">
      {title && (
        <h1 className="text-2xl font-bold text-white drop-shadow md:text-4xl">{title}</h1>
      )}
    </div>
  )
}

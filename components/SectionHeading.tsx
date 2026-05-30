export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string
  subtitle?: string
  centered?: boolean
}) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-2xl font-extrabold tracking-tight text-charcoal md:text-3xl">{title}</h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-l from-accent to-accent-light ${centered ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

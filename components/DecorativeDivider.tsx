export function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40" />
      <span className="text-accent">◆</span>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40" />
    </div>
  )
}

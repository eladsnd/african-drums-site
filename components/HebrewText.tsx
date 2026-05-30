import type {ReactNode} from 'react'

/**
 * RTL paragraph with sane bidirectional rendering for mixed Hebrew + numbers.
 */
export function HebrewText({
  children,
  className = '',
  as: Tag = 'p',
}: {
  children: ReactNode
  className?: string
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3'
}) {
  return (
    <Tag dir="rtl" lang="he" className={`text-pretty ${className}`}>
      {children}
    </Tag>
  )
}

/** Wrap isolated Latin words so they don't break Hebrew flow (דג'מבה not דג'מ+be). */
export function LatinWord({children}: {children: string}) {
  return (
    <bdi dir="ltr" lang="en" className="font-normal">
      {children}
    </bdi>
  )
}

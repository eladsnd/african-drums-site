'use client'

import {useState} from 'react'

export function HeroImage({
  src,
  fallback = '/images/hero-poster.svg',
  className = '',
}: {
  src: string
  fallback?: string
  className?: string
}) {
  const [current, setCurrent] = useState(src)

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt=""
      className={className}
      onError={() => {
        if (current !== fallback) setCurrent(fallback)
      }}
    />
  )
}

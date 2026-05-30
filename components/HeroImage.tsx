'use client'

import {imageFallbacks} from '@/lib/fallback-data'
import {useState} from 'react'

function resolveFallback(src: string, explicit?: string) {
  return imageFallbacks[src] || explicit || '/images/hero-poster.svg'
}

export function HeroImage({
  src,
  fallback,
  className = '',
  alt = '',
}: {
  src: string
  fallback?: string
  className?: string
  alt?: string
}) {
  const chain = [src, resolveFallback(src, fallback)].filter(
    (url, i, arr) => url && arr.indexOf(url) === i,
  )
  const [index, setIndex] = useState(0)

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={chain[index]}
      alt={alt}
      className={className}
      onError={() => {
        if (index < chain.length - 1) setIndex((i) => i + 1)
      }}
    />
  )
}

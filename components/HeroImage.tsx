'use client'

import {imageSafeFallback} from '@/lib/images'
import {useState} from 'react'

export function HeroImage({
  src,
  fallback,
  className = '',
  alt = '',
  objectPosition,
}: {
  src: string
  fallback?: string
  className?: string
  alt?: string
  objectPosition?: string
}) {
  const chain = [src, fallback, imageSafeFallback, '/logo.svg'].filter(
    (url, i, arr) => Boolean(url) && arr.indexOf(url) === i,
  )
  const [index, setIndex] = useState(0)
  const current = chain[Math.min(index, chain.length - 1)]

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={current}
      src={current}
      alt={alt}
      className={className}
      style={objectPosition ? {objectPosition} : undefined}
      onError={() => {
        setIndex((i) => (i < chain.length - 1 ? i + 1 : i))
      }}
    />
  )
}

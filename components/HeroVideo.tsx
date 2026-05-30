'use client'

import {HeroImage} from '@/components/HeroImage'
import {useState} from 'react'

export function HeroVideo({
  videoUrl,
  posterUrl,
  title,
}: {
  videoUrl?: string
  posterUrl?: string
  title: string
}) {
  const [playing, setPlaying] = useState(false)

  if (!videoUrl && posterUrl) {
    return (
      <HeroImage
        src={posterUrl}
        alt={title}
        className="aspect-video w-full object-cover"
      />
    )
  }

  if (!videoUrl) {
    return (
      <div className="relative aspect-video w-full bg-stone-800">
        <HeroImage src="/images/hero.jpg" alt={title} className="h-full w-full object-cover" />
      </div>
    )
  }

  if (playing) {
    return (
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={`${videoUrl}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      className="group relative aspect-video w-full bg-stone-900"
      onClick={() => setPlaying(true)}
      aria-label="הפעל וידאו"
    >
      {posterUrl && (
        <HeroImage
          src={posterUrl}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-accent shadow-2xl ring-4 ring-white/50 transition group-hover:scale-110 md:h-24 md:w-24">
          <svg className="mr-[-5px] h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}

'use client'

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

  if (!videoUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-stone-800">
        {posterUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={posterUrl} alt={title} className="h-full w-full object-cover opacity-80" />
        )}
      </div>
    )
  }

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg">
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
      className="group relative aspect-video w-full overflow-hidden rounded-lg bg-stone-800 shadow-lg"
      onClick={() => setPlaying(true)}
      aria-label="הפעל וידאו"
    >
      {posterUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={posterUrl} alt={title} className="h-full w-full object-cover transition group-hover:scale-105" />
      )}
      <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-lg md:h-20 md:w-20">
          <svg className="mr-[-4px] h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}

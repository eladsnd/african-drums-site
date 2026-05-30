'use client'

import {imageFallbacks} from '@/lib/fallback-data'
import {useState} from 'react'
import type {GalleryItem} from '@/lib/types'

function GalleryImage({src, alt}: {src: string; alt: string}) {
  const chain = [src, imageFallbacks[src]].filter((url, i, arr) => url && arr.indexOf(url) === i)
  const [index, setIndex] = useState(0)

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={chain[index]}
      alt={alt}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      onError={() => {
        if (index < chain.length - 1) setIndex((i) => i + 1)
      }}
    />
  )
}

export function GalleryGrid({items}: {items: GalleryItem[]}) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
      {items.map((item, i) => (
        <figure
          key={item._key}
          className={`group card-elevated overflow-hidden ${i === 0 ? 'sm:col-span-2' : ''}`}
        >
          {item.type === 'video' && item.videoUrl ? (
            <button
              type="button"
              className="relative block aspect-video w-full bg-stone-800"
              onClick={() => setActiveVideo(item.videoUrl!)}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <svg className="mr-[-3px] h-7 w-7 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </button>
          ) : item.imageUrl ? (
            <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[21/9]' : 'aspect-video'}`}>
              <GalleryImage src={item.imageUrl} alt={item.caption || ''} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ) : null}
          {item.caption && (
            <figcaption className="border-t border-orange-100/80 bg-orange-50/30 p-4 text-center font-medium text-stone-700">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 left-0 rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20"
              onClick={() => setActiveVideo(null)}
            >
              סגור ✕
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="גלריה וידאו"
              className="h-full w-full"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}

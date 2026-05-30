'use client'

import {useState} from 'react'
import type {GalleryItem} from '@/lib/types'

export function GalleryGrid({items}: {items: GalleryItem[]}) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item._key} className="group overflow-hidden rounded-lg bg-white shadow-sm">
          {item.type === 'video' && item.videoUrl ? (
            <button
              type="button"
              className="relative block aspect-video w-full bg-stone-800"
              onClick={() => setActiveVideo(item.videoUrl!)}
            >
              <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                  <svg className="mr-[-3px] h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          ) : item.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl}
              alt={item.caption || ''}
              className="aspect-video w-full object-cover transition group-hover:scale-105"
            />
          ) : null}
          {item.caption && (
            <figcaption className="p-3 text-center text-sm text-stone-600">{item.caption}</figcaption>
          )}
        </figure>
      ))}

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-10 left-0 text-white hover:underline"
              onClick={() => setActiveVideo(null)}
            >
              סגור ✕
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="גלריה וידאו"
              className="h-full w-full rounded-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}

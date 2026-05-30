'use client'

import {useState} from 'react'
import type {Testimonial} from '@/lib/types'

export function TestimonialCarousel({testimonials}: {testimonials: Testimonial[]}) {
  const [index, setIndex] = useState(0)

  if (!testimonials.length) return null

  const current = testimonials[index]

  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">המלצות</h2>
      <div className="mx-auto max-w-3xl rounded-xl bg-white/70 p-6 shadow-sm backdrop-blur md:p-10">
        <blockquote className="text-center text-lg leading-relaxed text-stone-700 md:text-xl">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        <p className="mt-6 text-center font-semibold text-charcoal">{current.author}</p>
        {current.role && <p className="text-center text-sm text-stone-500">{current.role}</p>}

        {testimonials.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm hover:bg-stone-100"
              aria-label="הקודם"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full ${i === index ? 'bg-accent' : 'bg-stone-300'}`}
                  aria-label={`המלצה ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm hover:bg-stone-100"
              aria-label="הבא"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

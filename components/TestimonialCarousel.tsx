'use client'

import {FACEBOOK_PAGE_URL} from '@/lib/facebook'
import {useState} from 'react'
import {DecorativeDivider} from '@/components/DecorativeDivider'
import {SectionHeading} from '@/components/SectionHeading'
import type {Testimonial} from '@/lib/types'

export function TestimonialCarousel({testimonials}: {testimonials: Testimonial[]}) {
  const [index, setIndex] = useState(0)

  if (!testimonials.length) return null

  const current = testimonials[index]

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(254, 215, 170, 0.6), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading title="המלצות" />
        <DecorativeDivider />

        <div className="card-elevated relative mt-10 px-6 py-10 md:px-12 md:py-14">
          <span className="quote-mark absolute right-6 top-4 md:right-10" aria-hidden>
            ״
          </span>
          <blockquote className="relative z-10 text-center text-lg leading-relaxed text-stone-700 md:text-xl md:leading-loose">
            {current.quote}
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="text-lg font-bold text-charcoal">{current.author}</p>
            {current.role && <p className="text-sm font-medium text-accent">{current.role}</p>}
          </div>

          {testimonials.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-200 bg-white text-accent shadow-sm transition hover:border-accent hover:bg-orange-50"
                aria-label="הקודם"
              >
                →
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? 'w-8 bg-accent' : 'w-2.5 bg-orange-200 hover:bg-orange-300'
                    }`}
                    aria-label={`המלצה ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-200 bg-white text-accent shadow-sm transition hover:border-accent hover:bg-orange-50"
                aria-label="הבא"
              >
                ←
              </button>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-stone-600">
          בפייסבוק אין עדיין ביקורות כוכבים — רק תגובות על פוסטים.
          <br />
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            עקבו בפייסבוק והשאירו המלצה
          </a>
        </p>
      </div>
    </section>
  )
}

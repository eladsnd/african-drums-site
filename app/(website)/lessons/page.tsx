import {DecorativeDivider} from '@/components/DecorativeDivider'
import {PageHero} from '@/components/PageHero'
import {SectionHeading} from '@/components/SectionHeading'
import {TestimonialCarousel} from '@/components/TestimonialCarousel'
import {getSiteContent} from '@/lib/data'
import {pageHeroImages} from '@/lib/fallback-data'
import type {Metadata} from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const {lessons, settings} = await getSiteContent()
  return {title: lessons.title, description: settings.seoDescription}
}

export default async function LessonsPage() {
  const {lessons, testimonials} = await getSiteContent()

  return (
    <>
      <PageHero
        title={lessons.title}
        subtitle={lessons.intro}
        imageUrl={pageHeroImages.lessons}
      />

      {lessons.lessonTypes.map((lesson, i) => (
        <section
          key={lesson._key}
          className={`section-ambient px-4 py-14 md:px-8 md:py-20 ${i % 2 === 1 ? 'bg-orange-50/40' : ''}`}
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-charcoal md:text-4xl">{lesson.title}</h2>
              {lesson.quote && (
                <p className="mt-5 text-xl font-medium italic text-accent md:text-2xl">
                  &ldquo;{lesson.quote}&rdquo;
                </p>
              )}
              <DecorativeDivider />
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                {lesson.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {lesson.schedules.map((s) => (
                <div key={s._key} className="schedule-card">
                  <p className="text-lg font-bold text-accent">{s.day}</p>
                  <p className="mt-2 text-2xl font-extrabold tracking-tight text-charcoal">{s.time}</p>
                  <p className="mt-2 text-stone-600">{s.location}</p>
                  {s.note && (
                    <span className="mt-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-accent-dark">
                      {s.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {lessons.registrationUrl && i === 0 && (
              <div className="mt-12 text-center">
                <Link
                  href={lessons.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {lessons.registrationLabel}
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="מחירון" subtitle={lessons.pricingNote} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {lessons.pricing.map((p, idx) => (
              <div
                key={p._key}
                className={`card-elevated p-8 text-center ${idx === 0 ? 'ring-2 ring-accent/30' : ''}`}
              >
                {idx === 0 && (
                  <span className="mb-3 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-white">
                    פופולרי
                  </span>
                )}
                <p className="font-medium text-stone-600">{p.label}</p>
                <p className="mt-3 text-3xl font-extrabold text-accent">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />
    </>
  )
}

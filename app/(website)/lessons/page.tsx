import {DecorativeDivider} from '@/components/DecorativeDivider'
import {HebrewText} from '@/components/HebrewText'
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
        compact
        title={lessons.title}
        subtitle={lessons.intro}
        imageUrl={pageHeroImages.lessons}
      />

      {lessons.lessonTypes.map((lesson, i) => (
        <section
          key={lesson._key}
          className={`px-4 py-10 md:px-8 md:py-12 ${i % 2 === 1 ? 'bg-orange-50/50' : ''}`}
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <HebrewText as="h2" className="text-2xl font-extrabold text-charcoal md:text-3xl">
                {lesson.title}
              </HebrewText>
              {lesson.quote && (
                <p className="mt-4 text-lg font-medium italic text-accent md:text-xl">
                  &ldquo;{lesson.quote}&rdquo;
                </p>
              )}
              <DecorativeDivider />
              <HebrewText className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
                {lesson.description}
              </HebrewText>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
              <div className="mt-10 text-center">
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

      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="מחירון" subtitle={lessons.pricingNote} />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {lessons.pricing.map((p, idx) => (
              <div
                key={p._key}
                className={`card-elevated p-6 text-center md:p-8 ${idx === 0 ? 'ring-2 ring-accent/30' : ''}`}
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

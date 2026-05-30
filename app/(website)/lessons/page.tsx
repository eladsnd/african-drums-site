import {TestimonialCarousel} from '@/components/TestimonialCarousel'
import {TribalBanner} from '@/components/TribalBanner'
import {getSiteContent} from '@/lib/data'
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
      <TribalBanner title={lessons.title} />

      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <p className="text-center text-lg text-stone-700 md:text-xl">{lessons.intro}</p>
      </section>

      {lessons.lessonTypes.map((lesson) => (
        <section key={lesson._key} className="border-t border-stone-200/60 bg-white/50 px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold md:text-3xl">{lesson.title}</h2>
            {lesson.quote && (
              <p className="mt-4 text-center text-lg italic text-accent">&ldquo;{lesson.quote}&rdquo;</p>
            )}
            <p className="mt-6 text-center leading-relaxed text-stone-700">{lesson.description}</p>

            <div className="mt-8 space-y-4">
              {lesson.schedules.map((s) => (
                <div
                  key={s._key}
                  className="rounded-lg border border-stone-200 bg-white p-5 text-center shadow-sm"
                >
                  <p className="font-semibold text-accent">{s.day}</p>
                  <p className="mt-1 text-lg">{s.time}</p>
                  <p className="mt-1 text-stone-600">{s.location}</p>
                  {s.note && <p className="mt-2 text-sm text-stone-500">{s.note}</p>}
                </div>
              ))}
            </div>

            {lessons.registrationUrl && (
              <div className="mt-8 text-center">
                <Link
                  href={lessons.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-white transition hover:bg-accent/90"
                >
                  {lessons.registrationLabel}
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <h2 className="mb-6 text-center text-2xl font-bold">מחירון</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {lessons.pricing.map((p) => (
            <div key={p._key} className="rounded-lg border border-stone-200 bg-white p-5 text-center shadow-sm">
              <p className="text-stone-600">{p.label}</p>
              <p className="mt-2 text-2xl font-bold text-accent">{p.price}</p>
            </div>
          ))}
        </div>
        {lessons.pricingNote && (
          <p className="mt-6 text-center text-sm text-stone-500">{lessons.pricingNote}</p>
        )}
      </section>

      <TestimonialCarousel testimonials={testimonials} />
    </>
  )
}

import {TribalBanner} from '@/components/TribalBanner'
import {getSiteContent} from '@/lib/data'
import type {Metadata} from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const {workshops, settings} = await getSiteContent()
  return {title: workshops.title, description: settings.seoDescription}
}

export default async function WorkshopsPage() {
  const {workshops} = await getSiteContent()

  return (
    <>
      <TribalBanner title={workshops.title} />

      <section className="mx-auto max-w-4xl px-4 py-10 text-center md:px-8 md:py-14">
        <p className="text-lg text-stone-700 md:text-xl">{workshops.intro}</p>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-4 pb-10 md:px-8">
        <h2 className="text-center text-2xl font-bold">סדנאות קרובות</h2>
        {workshops.upcomingWorkshops.map((w) => (
          <article key={w._key} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-bold text-accent md:text-2xl">{w.title}</h3>
            <p className="mt-2 font-medium">{w.date}</p>
            <p className="text-stone-600">{w.location}</p>
            <p className="mt-4 leading-relaxed text-stone-700">{w.description}</p>
            {w.registrationUrl && (
              <Link
                href={w.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-accent px-6 py-2 font-medium text-white hover:bg-accent/90"
              >
                הרשמה
              </Link>
            )}
          </article>
        ))}
      </section>

      <section className="border-t border-stone-200/60 bg-white/50 px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{workshops.privateTitle}</h2>
          <p className="mt-6 leading-relaxed text-stone-700">{workshops.privateDescription}</p>
          {workshops.privateCtaUrl && (
            <Link
              href={workshops.privateCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-white hover:bg-accent/90"
            >
              {workshops.privateCtaLabel}
            </Link>
          )}
        </div>
      </section>
    </>
  )
}

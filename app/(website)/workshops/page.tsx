import {PageHero} from '@/components/PageHero'
import {SectionHeading} from '@/components/SectionHeading'
import {getSiteContent} from '@/lib/data'
import {pageHeroConfig} from '@/lib/fallback-data'
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
      <PageHero
        compact
        title={workshops.title}
        subtitle={workshops.intro}
        imageUrl={pageHeroConfig.workshops.src}
        imagePosition={pageHeroConfig.workshops.objectPosition}
      />

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-14 md:px-8 md:py-20">
        <SectionHeading title="סדנאות קרובות" centered />
        {workshops.upcomingWorkshops.map((w) => (
          <article key={w._key} className="card-elevated p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-accent md:text-3xl">{w.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full bg-orange-100 px-4 py-1.5 text-accent-dark">{w.date}</span>
              <span className="rounded-full bg-stone-100 px-4 py-1.5 text-stone-700">{w.location}</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">{w.description}</p>
            {w.registrationUrl && (
              <Link
                href={w.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                הרשמה
              </Link>
            )}
          </article>
        ))}
      </section>

      <section className="section-ambient border-t border-orange-200/50 px-4 py-16 md:px-8 md:py-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionHeading title={workshops.privateTitle} subtitle={workshops.privateDescription} />
          {workshops.privateCtaUrl && (
            <Link
              href={workshops.privateCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10"
            >
              {workshops.privateCtaLabel}
            </Link>
          )}
        </div>
      </section>
    </>
  )
}

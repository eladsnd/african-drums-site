import {PageHero} from '@/components/PageHero'
import {SectionHeading} from '@/components/SectionHeading'
import {getSiteContent} from '@/lib/data'
import {pageHeroImages} from '@/lib/fallback-data'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {about, settings} = await getSiteContent()
  return {title: about.title, description: settings.seoDescription}
}

export default async function AboutPage() {
  const {about, media} = await getSiteContent()

  return (
    <>
      <PageHero compact title={about.title} imageUrl={pageHeroImages.about} />

      <section className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:items-start md:gap-14">
          {about.portraitUrl && (
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.portraitUrl}
                alt={about.title}
                className="h-56 w-56 rounded-2xl object-cover shadow-2xl ring-4 ring-orange-100 md:h-72 md:w-72"
              />
            </div>
          )}
          <div className="flex-1 whitespace-pre-line text-lg leading-loose text-stone-700 md:text-xl md:leading-loose">
            {about.bio}
          </div>
        </div>
      </section>

      {media.length > 0 && (
        <section className="border-t border-orange-200/50 bg-orange-50/30 px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="מהתקשורת" />
            <ul className="mt-10 space-y-4">
              {media.map((item) => (
                <li key={item._key}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-elevated flex flex-col gap-1 p-5 transition hover:ring-2 hover:ring-accent/20 md:p-6"
                  >
                    <span className="text-lg font-bold text-charcoal">{item.title}</span>
                    {item.source && (
                      <span className="text-sm font-medium text-accent">{item.source}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}

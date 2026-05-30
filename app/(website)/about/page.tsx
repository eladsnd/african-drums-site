import {TribalBanner} from '@/components/TribalBanner'
import {getSiteContent} from '@/lib/data'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {about, settings} = await getSiteContent()
  return {title: about.title, description: settings.seoDescription}
}

export default async function AboutPage() {
  const {about, media} = await getSiteContent()

  return (
    <>
      <TribalBanner title={about.title} />

      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-start">
          {about.portraitUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={about.portraitUrl}
              alt={about.title}
              className="h-48 w-48 flex-shrink-0 rounded-full border-4 border-accent object-cover shadow-lg md:h-64 md:w-64"
            />
          )}
          <div className="flex-1 whitespace-pre-line text-center leading-relaxed text-stone-700 md:text-right md:text-lg">
            {about.bio}
          </div>
        </div>
      </section>

      {media.length > 0 && (
        <section className="border-t border-stone-200/60 bg-white/50 px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold">מהתקשורת</h2>
            <ul className="space-y-4">
              {media.map((item) => (
                <li key={item._key}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-stone-200 bg-white p-4 transition hover:border-accent hover:shadow-sm"
                  >
                    <span className="font-medium text-charcoal">{item.title}</span>
                    {item.source && (
                      <span className="mt-1 block text-sm text-stone-500">{item.source}</span>
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

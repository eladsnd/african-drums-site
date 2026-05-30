import {HeroVideo} from '@/components/HeroVideo'
import {TestimonialCarousel} from '@/components/TestimonialCarousel'
import {TribalBanner} from '@/components/TribalBanner'
import {WhatsAppButton} from '@/components/WhatsAppButton'
import {getSiteContent} from '@/lib/data'
import Link from 'next/link'

export default async function HomePage() {
  const {settings, home, testimonials} = await getSiteContent()

  return (
    <>
      <section className="pattern-bg px-4 py-10 text-center md:px-8 md:py-16">
        <h1 className="text-3xl font-bold md:text-5xl">{home.headline}</h1>
        <p className="mt-3 text-lg text-accent md:text-2xl">{home.subheadline}</p>
      </section>

      <div className="tribal-band h-2" />

      <section className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
        <HeroVideo
          videoUrl={home.heroVideoUrl}
          posterUrl={home.heroPosterUrl}
          title={home.headline}
        />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 text-center md:px-8 md:py-12">
        <p className="text-lg leading-relaxed text-stone-700 md:text-xl">{home.aboutTeaser}</p>
        <Link
          href="/about"
          className="mt-4 inline-block font-medium text-accent hover:underline"
        >
          {home.aboutLinkText}
        </Link>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center md:px-8">
        <h2 className="mb-6 text-2xl font-bold">צרו קשר</h2>
        <WhatsAppButton settings={settings} />
      </section>
    </>
  )
}

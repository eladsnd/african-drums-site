import {HeroVideo} from '@/components/HeroVideo'
import {SectionHeading} from '@/components/SectionHeading'
import {TestimonialCarousel} from '@/components/TestimonialCarousel'
import {WhatsAppButton} from '@/components/WhatsAppButton'
import {getSiteContent} from '@/lib/data'
import Link from 'next/link'

export default async function HomePage() {
  const {settings, home, testimonials} = await getSiteContent()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(234, 88, 12, 0.15), transparent 70%)',
          }}
        />
        <div className="relative px-4 pb-4 pt-12 text-center md:px-8 md:pt-20 md:pb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">תיפוף מערב אפריקאי</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-charcoal md:text-6xl lg:text-7xl">
            {home.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-accent md:text-2xl">{home.subheadline}</p>
        </div>
        <div className="tribal-band-decor h-3" aria-hidden />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-14">
        <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-orange-100/80">
          <HeroVideo
            videoUrl={home.heroVideoUrl}
            posterUrl={home.heroPosterUrl}
            title={home.headline}
          />
        </div>
      </section>

      <section className="section-ambient px-4 py-16 md:px-8 md:py-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionHeading title="קצת על שלומי" />
          <p className="mt-8 text-lg leading-loose text-stone-700 md:text-xl">{home.aboutTeaser}</p>
          <Link href="/about" className="btn-primary mt-10">
            {home.aboutLinkText}
          </Link>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <section className="border-t border-orange-200/50 bg-gradient-to-b from-orange-50/50 to-[var(--color-bg)] px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-extrabold md:text-3xl">מוכנים להצטרף למעגל?</h2>
        <p className="mx-auto mt-3 max-w-md text-stone-600">שלחו הודעה בוואטסאפ ונחזור אליכם בהקדם</p>
        <div className="mt-8">
          <WhatsAppButton settings={settings} />
        </div>
      </section>
    </>
  )
}

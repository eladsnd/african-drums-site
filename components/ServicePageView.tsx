import {HebrewText} from '@/components/HebrewText'
import {PageHero} from '@/components/PageHero'
import {HeroImage} from '@/components/HeroImage'
import {WhatsAppButton} from '@/components/WhatsAppButton'
import {getSiteContent} from '@/lib/data'
import {imageSafeFallback, pageHeroConfig} from '@/lib/images'
import {getServiceBySlug, type ServiceSlug} from '@/lib/services'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import type {Metadata} from 'next'

export async function generateServiceMetadata(slug: ServiceSlug): Promise<Metadata> {
  const content = await getSiteContent()
  const service = getServiceBySlug(content, slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.intro,
  }
}

export async function ServicePageView({slug}: {slug: ServiceSlug}) {
  const content = await getSiteContent()
  const service = getServiceBySlug(content, slug)
  if (!service) notFound()

  const hero = service.heroImageUrl
    ? {src: service.heroImageUrl, objectPosition: service.heroImagePosition || 'center center'}
    : pageHeroConfig[slug] || pageHeroConfig.workshops

  const paragraphs = service.body.split(/\n\n+/).filter(Boolean)

  return (
    <>
      <PageHero
        compact
        title={service.title}
        subtitle={service.intro}
        imageUrl={hero.src}
        imagePosition={hero.objectPosition}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <HebrewText key={i} className="text-lg leading-relaxed text-stone-700 md:text-xl">
              {p}
            </HebrewText>
          ))}
        </div>
      </section>

      {service.imageUrls.length > 0 && (
        <section className="border-t border-orange-100/80 bg-orange-50/20 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-extrabold text-charcoal md:text-3xl">
              רגעים מהשטח
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.imageUrls.map((url, i) => (
                <div
                  key={url + i}
                  className={`card-elevated overflow-hidden ${i === 0 && service.imageUrls.length > 2 ? 'sm:col-span-2' : ''}`}
                >
                  <div
                    className={`relative overflow-hidden ${i === 0 && service.imageUrls.length > 2 ? 'aspect-[21/9]' : 'aspect-video'}`}
                  >
                    <HeroImage
                      src={url}
                      fallback={imageSafeFallback}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-ambient border-t border-orange-200/50 px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-extrabold text-charcoal md:text-3xl">רוצים לתאם {service.title}?</h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            שלחו הודעה לשלומי — נחזור אליכם עם פרטים, מחיר ומועדים.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton settings={content.settings} className="w-full sm:w-auto" />
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">
              טופס יצירת קשר
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

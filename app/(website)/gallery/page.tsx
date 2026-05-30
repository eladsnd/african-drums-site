import {GalleryGrid} from '@/components/GalleryGrid'
import {PageHero} from '@/components/PageHero'
import {getSiteContent} from '@/lib/data'
import {pageHeroConfig} from '@/lib/fallback-data'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {settings} = await getSiteContent()
  return {title: 'גלריה', description: settings.seoDescription}
}

export default async function GalleryPage() {
  const {gallery} = await getSiteContent()

  return (
    <>
      <PageHero
        compact
        title="גלריה"
        subtitle="רגעים מהשיעורים, הסדנאות וההופעות"
        imageUrl={pageHeroConfig.gallery.src}
        imagePosition={pageHeroConfig.gallery.objectPosition}
      />
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <GalleryGrid items={gallery} />
      </section>
    </>
  )
}

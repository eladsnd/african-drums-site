import {GalleryGrid} from '@/components/GalleryGrid'
import {PageHero} from '@/components/PageHero'
import {getSiteContent} from '@/lib/data'
import {pageHeroImages} from '@/lib/fallback-data'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {settings} = await getSiteContent()
  return {title: 'גלריה', description: settings.seoDescription}
}

export default async function GalleryPage() {
  const {gallery} = await getSiteContent()

  return (
    <>
      <PageHero title="גלריה" subtitle="רגעים מהשיעורים, הסדנאות וההופעות" imageUrl={pageHeroImages.gallery} />
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <GalleryGrid items={gallery} />
      </section>
    </>
  )
}

import {GalleryGrid} from '@/components/GalleryGrid'
import {TribalBanner} from '@/components/TribalBanner'
import {getSiteContent} from '@/lib/data'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {settings} = await getSiteContent()
  return {title: 'גלריה', description: settings.seoDescription}
}

export default async function GalleryPage() {
  const {gallery} = await getSiteContent()

  return (
    <>
      <TribalBanner title="גלריה" />
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <GalleryGrid items={gallery} />
      </section>
    </>
  )
}

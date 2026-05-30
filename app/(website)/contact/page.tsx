import {ContactForm} from '@/components/ContactForm'
import {TribalBanner} from '@/components/TribalBanner'
import {WhatsAppButton} from '@/components/WhatsAppButton'
import {getSiteContent} from '@/lib/data'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {settings} = await getSiteContent()
  return {title: 'צרו קשר', description: settings.seoDescription}
}

export default async function ContactPage() {
  const {settings} = await getSiteContent()

  return (
    <>
      <TribalBanner title="צרו קשר" />

      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <div className="mb-10 text-center">
          <WhatsAppButton settings={settings} />
        </div>
        <ContactForm email={settings.contactEmail} />
      </section>
    </>
  )
}

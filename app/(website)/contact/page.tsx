import {ContactForm} from '@/components/ContactForm'
import {PageHero} from '@/components/PageHero'
import {WhatsAppButton} from '@/components/WhatsAppButton'
import {getSiteContent} from '@/lib/data'
import {pageHeroImages} from '@/lib/fallback-data'
import type {Metadata} from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const {settings} = await getSiteContent()
  return {title: 'צרו קשר', description: settings.seoDescription}
}

export default async function ContactPage() {
  const {settings} = await getSiteContent()

  return (
    <>
      <PageHero compact title="צרו קשר" subtitle="נשמח לשמוע מכם ולחזור בהקדם" imageUrl={pageHeroImages.contact} />

      <section className="mx-auto max-w-lg px-4 py-14 md:px-8 md:py-20">
        <div className="card-elevated mb-12 p-8 text-center">
          <p className="mb-6 text-stone-600">הדרך המהירה ביותר — שלחו הודעה בוואטסאפ</p>
          <WhatsAppButton settings={settings} className="w-full justify-center sm:w-auto" />
        </div>
        <div className="card-elevated p-8 md:p-10">
          <h2 className="mb-6 text-center text-xl font-bold">או השאירו פרטים</h2>
          <ContactForm email={settings.contactEmail} />
        </div>
      </section>
    </>
  )
}

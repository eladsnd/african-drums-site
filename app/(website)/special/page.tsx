import {ServicePageView, generateServiceMetadata} from '@/components/ServicePageView'

export const generateMetadata = () => generateServiceMetadata('special')

export default function SpecialNeedsPage() {
  return <ServicePageView slug="special" />
}

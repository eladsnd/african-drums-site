import {ServicePageView, generateServiceMetadata} from '@/components/ServicePageView'

export const generateMetadata = () => generateServiceMetadata('bar-mitzvah')

export default function BarMitzvahPage() {
  return <ServicePageView slug="bar-mitzvah" />
}

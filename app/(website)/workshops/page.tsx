import {ServicePageView, generateServiceMetadata} from '@/components/ServicePageView'

export const generateMetadata = () => generateServiceMetadata('workshops')

export default function WorkshopsServicePage() {
  return <ServicePageView slug="workshops" />
}

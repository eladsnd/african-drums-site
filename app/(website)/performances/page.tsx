import {ServicePageView, generateServiceMetadata} from '@/components/ServicePageView'

export const generateMetadata = () => generateServiceMetadata('performances')

export default function PerformancesPage() {
  return <ServicePageView slug="performances" />
}

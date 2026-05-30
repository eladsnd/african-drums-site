import {ServicePageView, generateServiceMetadata} from '@/components/ServicePageView'

export const generateMetadata = () => generateServiceMetadata('schools')

export default function SchoolsPage() {
  return <ServicePageView slug="schools" />
}

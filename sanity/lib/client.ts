import {createClient} from 'next-sanity'
import {apiVersion, dataset, isSanityConfigured, projectId} from './api'

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: isSanityConfigured,
  stega: {enabled: false},
})

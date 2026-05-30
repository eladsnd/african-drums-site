'use client'

import {apiVersion, dataset, isSanityConfigured, projectId, studioUrl} from '@/sanity/lib/api'
import {pageStructure, singletonPlugin} from '@/sanity/plugins/settings'
import galleryItem from '@/sanity/schemas/documents/galleryItem'
import mediaItem from '@/sanity/schemas/documents/mediaItem'
import testimonial from '@/sanity/schemas/documents/testimonial'
import aboutPage from '@/sanity/schemas/singletons/aboutPage'
import homePage from '@/sanity/schemas/singletons/homePage'
import lessonPage, {
  lessonType,
  pricingTier,
  scheduleEntry,
} from '@/sanity/schemas/singletons/lessonPage'
import siteSettings from '@/sanity/schemas/singletons/siteSettings'
import workshopsPage, {workshop} from '@/sanity/schemas/singletons/workshopsPage'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

const singletons = [siteSettings, homePage, lessonPage, workshopsPage, aboutPage]

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'ניהול אתר — תיפוף אפריקאי'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  title,
  schema: {
    types: [
      siteSettings,
      homePage,
      lessonPage,
      workshopsPage,
      aboutPage,
      scheduleEntry,
      lessonType,
      pricingTier,
      workshop,
      testimonial,
      galleryItem,
      mediaItem,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure(singletons),
    }),
    singletonPlugin(singletons.map((s) => s.name)),
    ...(isSanityConfigured ? [visionTool({defaultApiVersion: apiVersion})] : []),
  ],
})

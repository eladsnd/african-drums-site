/**
 * Seed script reference — run manually after Sanity is configured.
 *
 * 1. Open /studio
 * 2. Create singleton documents with these IDs:
 *    - siteSettings (document ID: siteSettings)
 *    - homePage (document ID: homePage)
 *    - lessonPage (document ID: lessonPage)
 *    - workshopsPage (document ID: workshopsPage)
 *    - aboutPage (document ID: aboutPage)
 * 3. Copy field values from lib/fallback-data.ts
 * 4. Add testimonials, galleryItem, mediaItem as separate documents
 *
 * Or use Sanity CLI import once project is linked:
 *   npx sanity dataset import seed.ndjson production
 */

export {fallbackContent as seedContent} from '../lib/fallback-data'

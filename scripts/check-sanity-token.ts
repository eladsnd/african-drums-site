/**
 * Verify SANITY_API_WRITE_TOKEN can create content (not just read).
 * Run: npm run sanity:check-token
 */

import {loadEnvConfig} from '@next/env'
import {createClient} from '@sanity/client'

loadEnvConfig(process.cwd(), true, {info: () => null, error: console.error})

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-02-27',
  token,
  useCdn: false,
})

const testId = 'token-permission-check-delete-me'

async function main() {
  console.log(`Project: ${projectId}  Dataset: ${dataset}\n`)

  const name = await client.fetch<string | null>('*[_type == "siteSettings"][0].siteName')
  console.log(`Read access: OK (siteSettings.siteName = ${name ?? '(empty)'})`)

  try {
    await client.createOrReplace({
      _id: testId,
      _type: 'siteSettings',
      siteName: '__permission_test__',
    })
    console.log('Write access: OK — token can seed')
    await client.delete(testId)
    process.exit(0)
  } catch {
    console.log('Write access: DENIED — token cannot seed\n')
    console.log(`Your SANITY_API_WRITE_TOKEN is read-only in practice.

Common fixes:
1. In sanity.io/manage → shlomi drums → API → Tokens
   Delete the old token and create a NEW one.
   Permissions must be Editor or Administrator (not Viewer).

2. The token must be created by a user who is Administrator/Editor
   on THIS project (Members tab). If only Shlomi is a member, Shlomi
   should create the token and send it to you.

3. Put the new token ONLY in .env.local as:
   SANITY_API_WRITE_TOKEN=sk....
   (Keep SANITY_API_READ_TOKEN as the separate Viewer token for the site.)
`)
    process.exit(1)
  }
}

main()

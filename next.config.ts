import type {NextConfig} from 'next'

const config: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {hostname: 'cdn.sanity.io'},
      {hostname: 'images.unsplash.com'},
    ],
  },
  env: {
    SC_DISABLE_SPEEDY: 'false',
  },
}

export default config

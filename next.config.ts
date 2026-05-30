import type {NextConfig} from 'next'

const config: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [{hostname: 'cdn.sanity.io'}],
  },
  env: {
    SC_DISABLE_SPEEDY: 'false',
  },
}

export default config

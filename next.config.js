const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@adobe/react-spectrum',
  // '@spectrum-icons/.*',
  // '@react-spectrum/.*',
])

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    /** Prefer loading of ES Modules over CommonJS */
    esmExternals: true,
    // swcLoader: true,
    swcMinify: true,
  },
  reactStrictMode: true,
}

module.exports = withPlugins([withTM], nextConfig)

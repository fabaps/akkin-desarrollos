/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

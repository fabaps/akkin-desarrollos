/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimizaciones de imágenes
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  // Optimizaciones para producción
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  // Configuración para resolver problemas de dependencias
  experimental: {
    esmExternals: 'loose',
    optimizeCss: true, // Optimizar CSS
    scrollRestoration: true, // Mejorar la restauración del scroll
  },
  // Ignorar errores durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

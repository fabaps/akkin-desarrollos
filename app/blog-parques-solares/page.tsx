import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogContent } from "@/components/blog-content"
import { ServicesBackground } from "@/components/services-background"

export const metadata: Metadata = {
  title: "Blog Parques Solares Guatemala | Guías Técnicas y Análisis - AKKIN",
  description:
    "Blog especializado en parques solares Guatemala, GDRs, energía renovable y proyectos fotovoltaicos. Guías técnicas, análisis regulatorios y tendencias del sector solar en Guatemala, El Salvador y Honduras.",
  keywords: [
    "blog parques solares Guatemala",
    "GDRs Guatemala blog",
    "energía solar Guatemala artículos",
    "NTGDR Guatemala guías",
    "parques fotovoltaicos Guatemala",
    "energía renovable Guatemala blog",
    "EPC solar Guatemala artículos",
    "instalación solar Guatemala guías",
    "licencias ambientales Guatemala",
    "CNEE Guatemala normativas",
    "MEM Guatemala regulaciones",
    "paneles solares Guatemala blog",
    "inversores solares Guatemala",
    "proyectos solares Guatemala análisis",
  ].join(", "),
  authors: [{ name: "Equipo AKKIN" }],
  creator: "AKKIN",
  publisher: "AKKIN",
  category: "Energía Renovable",
  classification: "Blog Técnico",

  // Open Graph optimizado
  openGraph: {
    title: "Blog Parques Solares Guatemala | Guías Técnicas y Análisis - AKKIN",
    description:
      "Blog especializado en parques solares Guatemala, GDRs, energía renovable y proyectos fotovoltaicos. Guías técnicas, análisis regulatorios y tendencias del sector solar.",
    url: "https://www.akkindesarrollos.com/blog-parques-solares",
    siteName: "AKKIN - Desarrollo de Parques Solares",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
        width: 1200,
        height: 630,
        alt: "Blog Parques Solares Guatemala - AKKIN",
        type: "image/jpeg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
        width: 800,
        height: 600,
        alt: "Artículos sobre energía solar Guatemala",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    type: "website",
    tags: ["parques solares", "energía renovable", "Guatemala", "GDRs", "blog técnico"],
  },

  // Twitter Card optimizado
  twitter: {
    card: "summary_large_image",
    site: "@akkin_solar",
    creator: "@akkin_solar",
    title: "Blog Parques Solares Guatemala | Guías Técnicas - AKKIN",
    description:
      "Blog especializado en parques solares Guatemala, GDRs y energía renovable. Guías técnicas y análisis del sector solar.",
    images: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
      alt: "Blog Parques Solares Guatemala - AKKIN",
    },
  },

  // Robots optimizado
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Metadatos adicionales
  alternates: {
    canonical: "https://www.akkindesarrollos.com/blog-parques-solares",
    languages: {
      "es-ES": "https://www.akkindesarrollos.com/blog-parques-solares",
      es: "https://www.akkindesarrollos.com/blog-parques-solares",
    },
  },

  // Otros metadatos importantes
  other: {
    "article:publisher": "https://www.facebook.com/akkin.solar",
    "article:author": "Equipo AKKIN",
    "article:section": "Energía Renovable",
    "article:tag": "parques solares, GDRs Guatemala, energía solar",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:locale:alternate": "es_GT",
    "theme-color": "#f97316",
    "msapplication-TileColor": "#f97316",
    "application-name": "AKKIN Blog",
    "apple-mobile-web-app-title": "AKKIN Blog",
    "format-detection": "telephone=no",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main>
          <BlogHero />
          <BlogContent />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

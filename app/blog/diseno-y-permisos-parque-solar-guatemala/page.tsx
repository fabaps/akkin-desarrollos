import type { Metadata } from "next"
import ArticlePageClient from "./ArticlePageClient"

export const metadata: Metadata = {
  title: "Diseño y Permisos de un Parque Solar en Guatemala: Guía Completa 2025 - AKKIN",
  description:
    "Guía completa sobre diseño y permisos para parques solares en Guatemala. Aprende sobre licencias ambientales, dictámenes de conexión, MARN, CNEE, MEM y todos los requisitos legales para proyectos solares.",
  keywords: [
    "diseño parque solar Guatemala",
    "permisos parque solar Guatemala",
    "licencia ambiental Guatemala MARN",
    "dictamen conexión CNEE Guatemala",
    "MEM Guatemala energía solar",
    "permisos construcción solar Guatemala",
    "EIA parque solar Guatemala",
    "normativas parques solares Guatemala",
    "regulaciones energía solar Guatemala",
    "CNEE Guatemala parques solares",
    "SAT Guatemala energía renovable",
    "municipalidad permisos solar Guatemala",
    "empresa distribuidora Guatemala solar",
    "interconexión red eléctrica Guatemala",
    "Ley General Electricidad Guatemala",
  ].join(", "),
  authors: [{ name: "Equipo AKKIN", url: "https://www.akkindesarrollos.com" }],
  creator: "Equipo AKKIN",
  publisher: "AKKIN",
  category: "Guía Técnica",
  classification: "Artículo Técnico",

  openGraph: {
    title: "Diseño y Permisos de un Parque Solar en Guatemala: Guía Completa 2025",
    description:
      "Guía completa sobre diseño y permisos para parques solares en Guatemala. Licencias ambientales, dictámenes de conexión y todos los requisitos legales.",
    url: "https://www.akkindesarrollos.com/blog/diseno-y-permisos-parque-solar-guatemala",
    siteName: "AKKIN Blog",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
        width: 1200,
        height: 630,
        alt: "Diseño y Permisos Parque Solar Guatemala - Guía AKKIN",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2025-01-15T00:00:00.000Z",
    section: "Guías Técnicas",
    tags: ["parque solar", "permisos", "Guatemala", "licencias", "MARN", "CNEE"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@akkin_solar",
    creator: "@akkin_solar",
    title: "Diseño y Permisos de un Parque Solar en Guatemala: Guía Completa",
    description:
      "Guía completa sobre diseño y permisos para parques solares en Guatemala. Licencias ambientales y requisitos legales.",
    images: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
      alt: "Diseño y Permisos Parque Solar Guatemala",
    },
  },

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

  alternates: {
    canonical: "https://www.akkindesarrollos.com/blog/diseno-y-permisos-parque-solar-guatemala",
  },

  other: {
    "article:publisher": "https://www.akkindesarrollos.com",
    "article:author": "Equipo AKKIN",
    "article:section": "Guías Técnicas",
    "article:tag": "parque solar, permisos Guatemala, licencias ambientales, MARN, CNEE",
    "article:published_time": "2025-01-15T00:00:00.000Z",
    "article:modified_time": "2025-01-15T00:00:00.000Z",
    "og:image:width": "1200",
    "og:image:height": "630",
    "theme-color": "#f97316",
  },
}

export default function ArticlePage() {
  return <ArticlePageClient />
}

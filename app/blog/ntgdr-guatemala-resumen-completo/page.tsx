import type { Metadata } from "next"
import ArticlePageClient from "./ArticlePageClient"

export const metadata: Metadata = {
  title: "NTGDR Guatemala: Análisis Completo Norma Técnica CNEE-227-2014 - AKKIN",
  description:
    "Análisis detallado de la Norma Técnica de Generación Distribuida Renovable (NTGDR) Guatemala CNEE-227-2014. Requisitos técnicos, comercialización, usuarios autoproductores y net metering.",
  keywords: [
    "NTGDR Guatemala análisis completo",
    "CNEE-227-2014 Guatemala",
    "norma técnica generación distribuida Guatemala",
    "usuarios autoproductores Guatemala UAEE",
    "net metering Guatemala CNEE",
    "energía renovable Guatemala normativa",
    "distribuidores eléctricos Guatemala GDR",
    "sistemas protección GDR Guatemala",
    "comercialización energía Guatemala NTGDR",
    "mercado mayorista Guatemala GDR",
    "peajes red eléctrica Guatemala",
    "inspecciones GDR Guatemala CNEE",
    "sanciones Ley General Electricidad",
    "generadores asíncronos Guatemala",
    "fuentes no convencionales Guatemala",
  ].join(", "),
  authors: [{ name: "Ing. María González", url: "https://www.akkindesarrollos.com" }],
  creator: "AKKIN",
  publisher: "AKKIN",
  category: "Análisis Técnico",
  classification: "Artículo Técnico",

  openGraph: {
    title: "NTGDR Guatemala: Análisis Completo Norma Técnica CNEE-227-2014",
    description:
      "Análisis detallado de la NTGDR Guatemala. Requisitos técnicos, comercialización y usuarios autoproductores.",
    url: "https://www.akkindesarrollos.com/blog/ntgdr-guatemala-resumen-completo",
    siteName: "AKKIN Blog",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
        width: 1200,
        height: 630,
        alt: "NTGDR Guatemala - Análisis Norma Técnica CNEE-227-2014",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    type: "article",
    publishedTime: "2025-01-05T00:00:00.000Z",
    modifiedTime: "2025-01-05T00:00:00.000Z",
    section: "Análisis Técnico",
    tags: ["NTGDR", "CNEE-227-2014", "Guatemala", "norma técnica", "generación distribuida"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@akkin_solar",
    creator: "@akkin_solar",
    title: "NTGDR Guatemala: Análisis Completo Norma Técnica CNEE-227-2014",
    description:
      "Análisis detallado de la NTGDR Guatemala. Requisitos técnicos, comercialización y usuarios autoproductores.",
    images: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
      alt: "NTGDR Guatemala - Norma Técnica",
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
    canonical: "https://www.akkindesarrollos.com/blog/ntgdr-guatemala-resumen-completo",
  },

  other: {
    "article:publisher": "https://www.akkindesarrollos.com",
    "article:author": "Ing. María González",
    "article:section": "Análisis Técnico",
    "article:tag": "NTGDR Guatemala, CNEE-227-2014, norma técnica, generación distribuida, UAEE",
    "article:published_time": "2025-01-05T00:00:00.000Z",
    "article:modified_time": "2025-01-05T00:00:00.000Z",
    "og:image:width": "1200",
    "og:image:height": "630",
    "theme-color": "#f97316",
  },
}

export default function ArticlePage() {
  return <ArticlePageClient />
}

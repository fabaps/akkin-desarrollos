import type { Metadata } from "next"
import ArticlePageClient from "./ArticlePageClient"

export const metadata: Metadata = {
  title: "Generación Distribuida Renovable Guatemala: Guía NTGDR Paso a Paso 2025 - AKKIN",
  description:
    "Guía completa paso a paso para implementar Generación Distribuida Renovable (GDR) en Guatemala según NTGDR. Proceso completo desde solicitud hasta operación comercial con CNEE y distribuidores.",
  keywords: [
    "generación distribuida renovable Guatemala",
    "GDR Guatemala paso a paso",
    "NTGDR Guatemala guía completa",
    "CNEE Guatemala GDR",
    "dictamen capacidad conexión Guatemala",
    "distribuidor eléctrico Guatemala GDR",
    "energía solar distribuida Guatemala",
    "autoproductores Guatemala CNEE",
    "excedentes energía Guatemala",
    "net metering Guatemala",
    "conexión red eléctrica Guatemala",
    "AMM Guatemala generación distribuida",
    "mercado mayorista Guatemala GDR",
    "comercialización energía Guatemala",
    "CNEE-227-2014 Guatemala",
  ].join(", "),
  authors: [{ name: "Ing. Carlos Mendoza", url: "https://www.akkindesarrollos.com" }],
  creator: "AKKIN",
  publisher: "AKKIN",
  category: "Guía Regulatoria",
  classification: "Artículo Regulatorio",

  openGraph: {
    title: "Generación Distribuida Renovable Guatemala: Guía NTGDR Paso a Paso 2025",
    description:
      "Guía completa para implementar GDR en Guatemala según NTGDR. Proceso desde solicitud hasta operación comercial.",
    url: "https://www.akkindesarrollos.com/blog/generacion-distribuida-renovable-guatemala-guia",
    siteName: "AKKIN Blog",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
        width: 1200,
        height: 630,
        alt: "Generación Distribuida Renovable Guatemala - Guía NTGDR",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    type: "article",
    publishedTime: "2025-01-10T00:00:00.000Z",
    modifiedTime: "2025-01-10T00:00:00.000Z",
    section: "Guías Regulatorias",
    tags: ["GDR", "NTGDR", "Guatemala", "CNEE", "generación distribuida"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@akkin_solar",
    creator: "@akkin_solar",
    title: "Generación Distribuida Renovable Guatemala: Guía NTGDR Paso a Paso",
    description:
      "Guía completa para implementar GDR en Guatemala según NTGDR. Proceso desde solicitud hasta operación.",
    images: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.JPG-xh1cVAPlLGHqYmBWpSwHRVxDIkK8vA.jpeg",
      alt: "Generación Distribuida Renovable Guatemala",
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
    canonical: "https://www.akkindesarrollos.com/blog/generacion-distribuida-renovable-guatemala-guia",
  },

  other: {
    "article:publisher": "https://www.akkindesarrollos.com",
    "article:author": "Ing. Carlos Mendoza",
    "article:section": "Guías Regulatorias",
    "article:tag": "GDR Guatemala, NTGDR, CNEE, generación distribuida, energía renovable",
    "article:published_time": "2025-01-10T00:00:00.000Z",
    "article:modified_time": "2025-01-10T00:00:00.000Z",
    "og:image:width": "1200",
    "og:image:height": "630",
    "theme-color": "#f97316",
  },
}

export default function ArticlePage() {
  return <ArticlePageClient />
}

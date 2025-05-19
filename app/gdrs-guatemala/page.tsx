import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import { FeaturedProject } from "@/components/featured-project"
import { ProximosProyectos } from "@/components/proximos-proyectos"
import { GdrsHero } from "@/components/gdrs-hero"

export const metadata = {
  title: "GDRs Guatemala | Parques Solares a Gran Escala | AKKIN",
  description:
    "Desarrollo e implementación de proyectos GDRs Guatemala con alta eficiencia. Especialistas en parques solares Guatemala, diseño, instalación y gestión de licencias para GDRs Guatemala.",
  keywords:
    "GDRs Guatemala, parques solares Guatemala, generador distribuido renovable, energía solar Guatemala, proyectos solares Guatemala, EPC solar Guatemala, AMM Guatemala",
  // Open Graph
  openGraph: {
    title: "GDRs Guatemala | Parques Solares a Gran Escala | AKKIN",
    description:
      "Desarrollo e implementación de proyectos GDRs Guatemala con alta eficiencia. Especialistas en parques solares Guatemala.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro%20Tecnol%C3%B3gico_edited-gtmuhJVDTt1BK3DNJ734xefWVsftTA.png",
        width: 1200,
        height: 630,
        alt: "GDRs Guatemala - Parques Solares",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "GDRs Guatemala | Parques Solares a Gran Escala | AKKIN",
    description:
      "Desarrollo e implementación de proyectos GDRs Guatemala con alta eficiencia. Especialistas en parques solares Guatemala.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro%20Tecnol%C3%B3gico_edited-gtmuhJVDTt1BK3DNJ734xefWVsftTA.png",
    ],
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function GdrsGuatemalaPage() {
  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main className="pt-12">
          <GdrsHero />
          <FeaturedProject />
          <ProximosProyectos />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

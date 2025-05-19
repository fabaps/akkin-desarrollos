import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import { InstalacionHero } from "@/components/instalacion-hero"
import { InstalacionContent } from "@/components/instalacion-content"
import { InstalacionCTA } from "@/components/instalacion-cta"

export const metadata = {
  title: "Instalación y Logística de Parques Solares Guatemala | AKKIN",
  description:
    "Implementación física de parques solares Guatemala con equipo altamente calificado. Contamos con maquinaria propia y experiencia en EPC solar Guatemala en Guatemala, El Salvador y Honduras.",
  keywords:
    "EPC solar Guatemala, distribución paneles solares e inversores, instalación parque solar GDRs Guatemala, maquinaria especializada, equipo calificado",
  // Open Graph
  openGraph: {
    title: "Instalación y Logística de Parques Solares Guatemala | AKKIN",
    description:
      "Implementación física de parques solares Guatemala con equipo altamente calificado y maquinaria propia.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1152955763-612x612.jpg-ucnzbHNx9ESdyc9aCAdWsLdAXqtEou.jpeg",
        width: 1200,
        height: 630,
        alt: "Instalación y Logística de Parques Solares Guatemala",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Instalación y Logística de Parques Solares Guatemala | AKKIN",
    description: "Implementación física de parques solares Guatemala con equipo altamente calificado",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1152955763-612x612.jpg-ucnzbHNx9ESdyc9aCAdWsLdAXqtEou.jpeg",
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

export default function InstalacionPage() {
  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main className="pt-12">
          <InstalacionHero />
          <InstalacionContent />
          <InstalacionCTA />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

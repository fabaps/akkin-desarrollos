import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import { PreProyectosHero } from "@/components/pre-proyectos-hero"
import { PreProyectosContent } from "@/components/pre-proyectos-content"
import { PreProyectosCTA } from "@/components/pre-proyectos-cta"

export const metadata = {
  title: "Diseño y Permisología de Parques Solares Guatemala | AKKIN",
  description:
    "Obtención de dictámenes de capacidad y conexión, licencias ambientales y diseño técnico avanzado de parques solares Guatemala con normativa NEC en Guatemala, El Salvador y Honduras.",
  keywords:
    "diseño de planta solar Guatemala a gran escala, dictamen de conexión GDRs Guatemala, instalación parque solar Guatemala, normativa NEC, exención de impuestos",
  // Open Graph
  openGraph: {
    title: "Diseño y Permisología de Parques Solares Guatemala | AKKIN",
    description:
      "Obtención de dictámenes de capacidad y conexión, licencias ambientales y diseño técnico avanzado de parques solares Guatemala.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWqbDF1JNtHZP9fb7ZjlEUuZhntxBK.png",
        width: 1200,
        height: 630,
        alt: "Diseño y Permisología de Parques Solares Guatemala",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Diseño y Permisología de Parques Solares Guatemala | AKKIN",
    description:
      "Obtención de dictámenes de capacidad y conexión, licencias ambientales y diseño técnico avanzado de parques solares Guatemala",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWqbDF1JNtHZP9fb7ZjlEUuZhntxBK.png"],
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

export default function PreProyectosPage() {
  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main className="pt-12">
          <PreProyectosHero />
          <PreProyectosContent />
          <PreProyectosCTA />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

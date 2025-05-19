import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import { LicenciasHero } from "@/components/licencias-hero"
import { LicenciasContent } from "@/components/licencias-content"
import { LicenciasCTA } from "@/components/licencias-cta"

export const metadata = {
  title: "Gestión de Licencias para Parques Solares Guatemala | AKKIN",
  description:
    "Gestión de licencias ambientales y permisos de conexión para plantas solares Guatemala. Registro de generadoras en la AMM con apoyo local en Guatemala, El Salvador y Honduras.",
  keywords:
    "dictamen de conexión GDRs Guatemala, GDRs Guatemala, EPC Solar Guatemala, licencia ambiental, registro generadora AMM",
  // Open Graph
  openGraph: {
    title: "Gestión de Licencias para Parques Solares Guatemala | AKKIN",
    description:
      "Gestión de licencias ambientales y permisos de conexión para plantas solares Guatemala. Registro de generadoras en la AMM.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H1nMrPXW4SpIQzMIQXXfbdhRHTE6QA.png",
        width: 1200,
        height: 630,
        alt: "Gestión de Licencias para Parques Solares Guatemala",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Gestión de Licencias para Parques Solares Guatemala | AKKIN",
    description: "Gestión de licencias ambientales y permisos de conexión para plantas solares Guatemala",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H1nMrPXW4SpIQzMIQXXfbdhRHTE6QA.png"],
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

export default function LicenciasPage() {
  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main className="pt-12">
          <LicenciasHero />
          <LicenciasContent />
          <LicenciasCTA />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

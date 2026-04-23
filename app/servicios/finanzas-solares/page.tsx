import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import { FinanzasHero } from "@/components/finanzas-hero"
import { FinanzasContent } from "@/components/finanzas-content"
import { FinanzasCTA } from "@/components/finanzas-cta"

export const metadata = {
  title: "Finanzas Solares Guatemala | AKKIN",
  description:
    "Asesoría financiera integral para proyectos de energía renovable en Guatemala. Análisis de ROI, opciones de financiamiento y beneficios fiscales.",
  keywords:
    "finanzas solares Guatemala, financiamiento parque solar, ROI energía renovable, exenciones de impuestos Guatemala, leasing solar",
  openGraph: {
    title: "Finanzas Solares Guatemala | AKKIN",
    description:
      "Asesoría financiera integral para proyectos de energía renovable. Análisis de ROI, opciones de financiamiento y beneficios fiscales.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1597872200969-2b65d56bd09b?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Finanzas Solares Guatemala",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finanzas Solares Guatemala | AKKIN",
    description:
      "Asesoría financiera integral para proyectos de energía renovable",
    images: ["https://images.unsplash.com/photo-1597872200969-2b65d56bd09b?w=1200&auto=format&fit=crop&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FinanzasPage() {
  return (
    <div className="min-h-screen bg-oxford-800">
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main className="pt-12">
          <FinanzasHero />
          <FinanzasContent />
          <FinanzasCTA />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
import { ContactForm } from "@/components/contact-form"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"

// Modificar el title, description, keywords y los metadatos de Open Graph y Twitter
export const metadata = {
  title: "Contacto | AKKIN - Desarrollo de Parques Solares Guatemala",
  description:
    "Contáctanos para desarrollar e instalar tu parque solar Guatemala a gran escala. Especialistas en proyectos GDRs Guatemala y EPC solar Guatemala en Guatemala, El Salvador y Honduras.",
  keywords:
    "contacto parques solares Guatemala, instalación solar Guatemala, desarrollo GDRs Guatemala, EPC solar Guatemala",
  // Open Graph
  openGraph: {
    title: "Contacto | AKKIN - Desarrollo de Parques Solares Guatemala",
    description:
      "Contáctanos para desarrollar e instalar tu parque solar Guatemala a gran escala en Guatemala, El Salvador y Honduras.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro%20Tecnol%C3%B3gico_edited-gtmuhJVDTt1BK3DNJ734xefWVsftTA.png",
        width: 1200,
        height: 630,
        alt: "AKKIN - Contacto Parques Solares Guatemala",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Contacto | AKKIN - Desarrollo de Parques Solares Guatemala",
    description: "Contáctanos para desarrollar e instalar tu parque solar Guatemala a gran escala",
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main className="pt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="py-12">
              <ContactForm />
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

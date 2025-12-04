import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { LoadingProvider } from "@/components/loading-context"
import { I18nProvider } from "@/lib/i18n-context"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

// Modificar el title, description, keywords y los metadatos de Open Graph y Twitter
export const metadata = {
  title: "AKKIN - Desarrollo e Instalación de Parques Solares Guatemala a Gran Escala",
  description:
    "Desarrollo de parques solares a mediana y gran escala. Especialistas en desarrollo e instalación de parques solares Guatemala, GDRs Guatemala, EPC solar y granjas solares en Guatemala, El Salvador y Honduras.",
  keywords:
    "parques solares Guatemala, GDRs Guatemala, EPC solar Guatemala, granja solar Guatemala, paneles solares, inversores huawei, energía renovable, Guatemala, El Salvador, Honduras",
  icons: {
    icon: [
      {
        url: "/images/centro-20tecnol-c3-b3gico-edited.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/centro-20tecnol-c3-b3gico-edited.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  // Open Graph
  openGraph: {
    title: "AKKIN - Parques Solares Guatemala a Gran Escala",
    description:
      "Desarrollo de parques solares a mediana y gran escala. Especialistas en desarrollo e instalación de parques solares Guatemala, GDRs Guatemala y EPC solar Guatemala en Guatemala, El Salvador y Honduras.",
    images: [
      {
        url: "/images/dji-0266-20-281-29-edited-edited.jpeg",
        width: 1200,
        height: 630,
        alt: "AKKIN - Desarrollo de Parques Solares a Gran Escala",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    type: "website",
    siteName: "AKKIN",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "AKKIN - Parques Solares Guatemala a Gran Escala",
    description:
      "Desarrollo de parques solares a mediana y gran escala. Especialistas en desarrollo e instalación de parques solares Guatemala, GDRs Guatemala y EPC solar Guatemala",
    images: ["/images/dji-0266-20-281-29-edited-edited.jpeg"],
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
  // Metadatos específicos para WhatsApp
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:alt": "AKKIN - Desarrollo de Parques Solares a Gran Escala",
  },
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Preconectar a dominios de recursos */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Precargar recursos críticos */}
        <link rel="preload" href="/images/centro-20tecnol-c3-b3gico-edited.png" as="image" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-B2GDY0W8BX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B2GDY0W8BX');
          `}
        </Script>

        <I18nProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </I18nProvider>
      </body>
    </html>
  )
}

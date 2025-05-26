"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { GA_MEASUREMENT_ID, initGA, trackPageView, isAnalyticsEnabled, getAnalyticsConsent } from "@/lib/analytics"

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Solo inicializar si tenemos consentimiento o si no se ha preguntado aún
    const consent = getAnalyticsConsent()
    if (consent === false) return

    if (isAnalyticsEnabled()) {
      initGA()
    }
  }, [])

  useEffect(() => {
    // Rastrear cambios de página
    const consent = getAnalyticsConsent()
    if (consent !== false && isAnalyticsEnabled()) {
      trackPageView(window.location.href, document.title)
    }
  }, [pathname])

  // No cargar en desarrollo o si no tenemos consentimiento
  const consent = getAnalyticsConsent()
  if (!isAnalyticsEnabled() || consent === false) {
    return null
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Google Analytics loaded successfully")
        }}
        onError={(e) => {
          console.error("Error loading Google Analytics:", e)
        }}
      />
    </>
  )
}

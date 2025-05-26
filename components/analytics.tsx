"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Script from "next/script"
import { initGA, trackPageView, GA_MEASUREMENT_ID } from "@/lib/analytics"

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Rastrear cambios de página
    if (pathname) {
      trackPageView(window.location.href, document.title)
    }
  }, [pathname])

  // Solo cargar en producción
  if (process.env.NODE_ENV !== "production" || !GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={initGA}
      />
    </>
  )
}

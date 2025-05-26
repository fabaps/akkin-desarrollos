// Configuración de Google Analytics optimizada
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-B2GDY0W8BX"

// Verificar si estamos en producción y si GA está habilitado
export const isAnalyticsEnabled = () => {
  return (
    typeof window !== "undefined" && process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID && !navigator.doNotTrack
  )
}

// Inicializar Google Analytics
export const initGA = () => {
  if (!isAnalyticsEnabled()) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  // Configuración inicial
  window.gtag("js", new Date())
  window.gtag("config", GA_MEASUREMENT_ID, {
    // Configuraciones de privacidad
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // Configuraciones de rendimiento
    send_page_view: true,
    // Configuraciones específicas del sitio
    custom_map: {
      custom_parameter_1: "service_type",
      custom_parameter_2: "user_location",
    },
  })
}

// Rastrear páginas manualmente (para SPA)
export const trackPageView = (url: string, title?: string) => {
  if (!isAnalyticsEnabled()) return

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_location: url,
    page_title: title,
  })
}

// Eventos personalizados para el sitio de AKKIN
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!isAnalyticsEnabled()) return

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Eventos específicos para AKKIN
export const trackContactForm = (formType: "contact" | "quote" | "consultation") => {
  trackEvent("form_submit", "engagement", `${formType}_form`)
}

export const trackServiceView = (serviceType: "pre-proyectos" | "instalacion" | "licencias" | "gdrs") => {
  trackEvent("page_view", "services", serviceType)
}

export const trackCTAClick = (ctaType: string, location: string) => {
  trackEvent("cta_click", "engagement", `${ctaType}_${location}`)
}

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("file_download", "engagement", `${fileType}_${fileName}`)
}

// Configurar consentimiento de cookies
export const setAnalyticsConsent = (granted: boolean) => {
  if (typeof window === "undefined") return

  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied", // Siempre denegado para mayor privacidad
  })

  // Guardar preferencia en localStorage
  localStorage.setItem("analytics_consent", granted.toString())
}

// Verificar consentimiento guardado
export const getAnalyticsConsent = (): boolean | null => {
  if (typeof window === "undefined") return null

  const consent = localStorage.getItem("analytics_consent")
  return consent ? consent === "true" : null
}

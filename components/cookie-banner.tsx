"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Shield, BarChart3 } from "lucide-react"
import { setAnalyticsConsent, getAnalyticsConsent } from "@/lib/analytics"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Mostrar banner solo si no se ha dado consentimiento
    const consent = getAnalyticsConsent()
    if (consent === null) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    setAnalyticsConsent(true)
    setShowBanner(false)
    // Recargar para inicializar Analytics
    window.location.reload()
  }

  const handleReject = () => {
    setAnalyticsConsent(false)
    setShowBanner(false)
  }

  const handleAcceptNecessary = () => {
    setAnalyticsConsent(false)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-white border-2 border-blue-200 shadow-2xl">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Configuración de Cookies</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={handleReject} className="text-gray-500 hover:text-gray-700">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web y analizar el tráfico. Puedes elegir
              qué tipos de cookies aceptar.
            </p>

            {showDetails && (
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies Necesarias</h4>
                    <p className="text-sm text-gray-600">
                      Esenciales para el funcionamiento del sitio web. Siempre activas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies de Análisis</h4>
                    <p className="text-sm text-gray-600">
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando
                      información de forma anónima.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button onClick={handleAccept} className="bg-blue-600 hover:bg-blue-700 text-white">
                Aceptar Todas
              </Button>
              <Button onClick={handleAcceptNecessary} variant="outline" className="border-gray-300">
                Solo Necesarias
              </Button>
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="ghost"
                className="text-blue-600 hover:text-blue-700"
              >
                {showDetails ? "Ocultar" : "Ver"} Detalles
              </Button>
            </div>

            <p className="text-xs text-gray-500">
              Al continuar navegando, aceptas nuestra{" "}
              <a href="/politica-privacidad" className="text-blue-600 hover:underline">
                Política de Privacidad
              </a>{" "}
              y el uso de cookies.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

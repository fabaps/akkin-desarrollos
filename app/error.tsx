"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-oxford-800 flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-oxford-100 mb-4">Algo salió mal</h2>
        <p className="text-oxford-300 mb-6">Ha ocurrido un error inesperado. Por favor, intente recargar la página.</p>
        <Button onClick={reset} className="bg-oxford-600 text-white hover:bg-oxford-500 transition-colors">
          Intentar de nuevo
        </Button>
      </div>
    </div>
  )
}

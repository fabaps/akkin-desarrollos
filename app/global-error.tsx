"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function GlobalError({
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
    <html lang="es">
      <body>
        <div className="min-h-screen bg-oxford-800 flex items-center justify-center px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-oxford-100 mb-4">Algo salió mal</h2>
            <p className="text-oxford-300 mb-6">Ha ocurrido un error inesperado a nivel global.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-solar-500 text-white rounded-md hover:bg-solar-600 transition-colors"
              >
                Intentar de nuevo
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-oxford-600 text-white rounded-md hover:bg-oxford-500 transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

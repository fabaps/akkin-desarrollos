"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LoadingContextType = {
  hasLoaded: boolean
  setHasLoaded: (value: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  // Verificar si ya se ha cargado antes (usando localStorage)
  const [hasLoaded, setHasLoaded] = useState(true) // Por defecto true para SSR

  useEffect(() => {
    // Comprobar si es la primera visita
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore")

    if (!hasVisitedBefore) {
      // Primera visita
      setHasLoaded(false)
      localStorage.setItem("hasVisitedBefore", "true")
    } else {
      // Ya ha visitado antes
      setHasLoaded(true)
    }
  }, [])

  return <LoadingContext.Provider value={{ hasLoaded, setHasLoaded }}>{children}</LoadingContext.Provider>
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}

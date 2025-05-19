"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface LazyLoadWrapperProps {
  children: ReactNode
  height?: string
  threshold?: number
}

export function LazyLoadWrapper({ children, height = "400px", threshold = 0.1 }: LazyLoadWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isInView, isLoaded])

  return (
    <div ref={ref} style={{ minHeight: isLoaded ? "auto" : height }}>
      {isLoaded ? children : null}
    </div>
  )
}

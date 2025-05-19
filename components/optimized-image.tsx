"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string
  lowQualitySrc?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg",
  lowQualitySrc,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src)

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true)
    setError(false)
    setCurrentSrc(lowQualitySrc || src)
  }, [src, lowQualitySrc])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && <div className="absolute inset-0 bg-oxford-700/50 animate-pulse" />}
      <Image
        {...props}
        src={error ? fallbackSrc : currentSrc}
        alt={alt}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-60" : "opacity-100")}
        onLoad={() => {
          if (currentSrc === (lowQualitySrc || src)) {
            setIsLoading(false)
            if (lowQualitySrc && currentSrc !== src) {
              // If we're showing the low quality version, load the high quality one
              setCurrentSrc(src)
            }
          }
        }}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
        loading="lazy"
        sizes={props.sizes || "(max-width: 768px) 100vw, 50vw"}
      />
    </div>
  )
}

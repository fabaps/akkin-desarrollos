"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useLoading } from "./loading-context"

export function LoadingScreen() {
  const { hasLoaded, setHasLoaded } = useLoading()
  const [isLoading, setIsLoading] = useState(!hasLoaded)

  useEffect(() => {
    if (!hasLoaded) {
      // Simular tiempo de carga
      const timer = setTimeout(() => {
        setIsLoading(false)
        setHasLoaded(true)
      }, 1500) // Reducido de 3000ms a 1500ms

      return () => clearTimeout(timer)
    }
  }, [hasLoaded, setHasLoaded])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-oxford-900"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Fondo con partículas */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Patrón de paneles solares */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(-45deg,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

              {/* Partículas flotantes */}
              {[...Array(5)].map(
                (
                  _,
                  i, // Reducido de 10 a 5
                ) => (
                  <motion.div
                    key={i}
                    className="absolute h-1 w-1 bg-solar-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -15, 0], // Reducido el rango de movimiento
                      opacity: [0.1, 0.3, 0.1], // Reducida la opacidad
                    }}
                    transition={{
                      duration: 2, // Reducido de 3+ a 2
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random(),
                    }}
                  />
                ),
              )}
            </div>

            {/* Contenido central */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo animado */}
              <motion.div
                className="relative mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                }}
              >
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro%20Tecnol%C3%B3gico_edited-gtmuhJVDTt1BK3DNJ734xefWVsftTA.png"
                    alt="ADEP Ingeniería Logo"
                    width={96}
                    height={96}
                    className="object-contain brightness-0 invert"
                  />

                  {/* Efecto de brillo alrededor del logo */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-solar-500/20 blur-xl -z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                </div>

                <motion.h1
                  className="text-3xl font-bold text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                    },
                  }}
                >
                  ADEP Ingeniería
                </motion.h1>
              </motion.div>

              {/* Animación de carga */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.8,
                  },
                }}
              >
                {/* Círculo solar animado */}
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-full border-4 border-solar-500/30"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="absolute w-4 h-4 bg-solar-500 rounded-full"
                      style={{ top: "-8px", left: "calc(50% - 8px)" }}
                    />
                  </motion.div>

                  {/* Rayos solares */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 h-10 bg-gradient-to-t from-solar-500/80 to-transparent origin-top"
                      style={{
                        transform: `rotate(${i * 45}deg) translateX(-50%)`,
                      }}
                      animate={{
                        scaleY: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Texto de carga */}
                <motion.p
                  className="text-oxford-300 mt-8 text-center"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  Cargando soluciones solares...
                </motion.p>
              </motion.div>
            </div>

            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-oxford-900 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

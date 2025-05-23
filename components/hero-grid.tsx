"use client"

import type React from "react"
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { ServicesBackground } from "@/components/services-background"
import { useI18n } from "@/lib/i18n-context"

export function HeroGrid() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  // Mouse tracking setup
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth mouse movement
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const handleMouseMove = (event: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = event
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Parallax effect for background
  const xBg = useTransform(smoothX, [0, 1000], [100, -100])
  const yBg = useTransform(smoothY, [0, 1000], [100, -100])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-oxford-800"
    >
      {/* Services Background */}
      <div className="absolute inset-0">
        <ServicesBackground />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-oxford-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Espaciado para el header fijo */}
        <div className="h-16" />

        {/* Estructura principal */}
        <div className="flex flex-col py-2 md:py-12 min-h-[calc(100vh-4rem)] space-y-3 md:space-y-8">
          {/* Título para móvil (arriba del video) */}
          <motion.div
            className="w-full relative mb-3 md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative p-4 rounded-xl bg-oxford-800/40 backdrop-blur-[2px] border border-oxford-700/20">
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.h1
                className="text-3xl font-bold text-white leading-tight pl-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block"
                >
                  {t("hero.title1")}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                >
                  {t("hero.title2")}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="block text-xl text-gray-300 mt-2"
                >
                  {t("hero.subtitle")}
                </motion.span>
              </motion.h1>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            className="w-full relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-oxford-700/50 backdrop-blur-sm border border-oxford-500/20 hover:border-oxford-400/30 transition-all duration-300 h-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-oxford-600/20 to-oxford-500/20"
                style={{
                  x: xBg,
                  y: yBg,
                }}
              />
              <div className="relative aspect-[16/9] md:aspect-[16/9] overflow-hidden rounded-2xl h-full">
                <iframe
                  className="w-full h-full object-cover cursor-pointer"
                  src="https://www.youtube.com/embed/kF74SgusZu4?autoplay=1&mute=1&loop=1&playlist=kF74SgusZu4&rel=0&controls=0&showinfo=0&modestbranding=1"
                  title="AKKIN - Desarrollo de Parques Solares"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  onClick={(e) => {
                    window.open("https://youtu.be/kF74SgusZu4", "_blank")
                    e.preventDefault()
                  }}
                ></iframe>

                {/* Título superpuesto SOLO en tablet y desktop */}
                <div className="absolute top-8 left-8 max-w-2xl pointer-events-none hidden md:block">
                  <div className="relative">
                    <div className="p-6 rounded-xl bg-oxford-800/40 backdrop-blur-[2px] border border-oxford-700/20">
                      <motion.div
                        className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.h1
                        className="text-5xl lg:text-6xl font-bold text-white leading-tight pl-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="block"
                        >
                          {t("hero.title1")}
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                        >
                          {t("hero.title2")}
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="block text-3xl lg:text-4xl text-gray-300 mt-2"
                        >
                          {t("hero.subtitle")}
                        </motion.span>
                      </motion.h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -inset-px bg-gradient-to-r from-oxford-400/20 to-oxford-300/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
          </motion.div>

          {/* Sección de certificaciones */}
          <motion.div
            className="w-full relative mt-4 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-oxford-700/50 backdrop-blur-sm border border-oxford-500/20 hover:border-oxford-400/30 transition-all duration-300 p-4 md:p-6">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                {/* Título de normativos */}
                <div className="md:w-1/3">
                  <h2 className="text-xl font-bold text-oxford-100 mb-2 md:mb-3">{t("certifications.title")}</h2>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-solar-500 mt-1 flex-shrink-0" />
                    <p className="text-oxford-200">{t("certifications.description")}</p>
                  </div>
                </div>

                {/* Certificaciones */}
                <div className="md:w-2/3">
                  <p className="text-oxford-300 mb-3 md:mb-4 text-sm">{t("certifications.label")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-solar-500 mt-0.5 flex-shrink-0" />
                      <p className="text-oxford-300 text-sm">{t("certifications.item1")}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-solar-500 mt-0.5 flex-shrink-0" />
                      <p className="text-oxford-300 text-sm">{t("certifications.item2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-oxford-800 to-transparent" />
    </div>
  )
}

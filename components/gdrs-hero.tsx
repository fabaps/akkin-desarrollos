"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Zap, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

export function GdrsHero() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <section ref={containerRef} className="relative overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="space-y-6 pl-4">
                <div className="inline-block rounded-lg bg-oxford-600/70 p-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-oxford-50 leading-tight">
                  GDRs <br />
                  <span className="bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text">
                    Guatemala
                  </span>
                </h1>
                <div className="space-y-4">
                  <p className="text-xl text-oxford-300">
                    Somos especialistas en el desarrollo e implementación de Generadores Distribuidos Renovables (GDRs)
                    en Guatemala, ofreciendo soluciones completas desde el diseño hasta la puesta en marcha.
                  </p>
                  <ul className="space-y-2 text-lg text-oxford-300">
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-solar-500 mt-2.5 flex-shrink-0" />
                      <span>Diseño técnico y financiero de GDRs Guatemala</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-solar-500 mt-2.5 flex-shrink-0" />
                      <span>Gestión de permisos y licencias ante la AMM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-solar-500 mt-2.5 flex-shrink-0" />
                      <span>Instalación y puesta en marcha de parques solares</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Link
                    href="/#servicios"
                    className="inline-flex group relative px-6 py-3 bg-gradient-to-r from-solar-500/10 to-solar-600/10 backdrop-blur-sm rounded-full overflow-hidden 
                         border border-solar-400/20 hover:border-solar-400/40 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-solar-500/20 to-solar-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center space-x-2 text-solar-100 group-hover:text-white">
                      <span className="text-sm font-medium">Ver servicios</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gdrs-guatemala-hero.png"
                alt="GDRs Guatemala - Parques Solares en paisaje montañoso"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxford-900/80 via-oxford-900/30 to-transparent" />
            </div>

            {/* Decoración */}
            <div className="absolute -inset-px bg-gradient-to-r from-oxford-400/20 to-oxford-300/20 rounded-2xl blur-xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Partículas decorativas */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-oxford-300/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ServicesBackground } from "./services-background"
import { useRef } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

export function CTASection() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <section ref={containerRef} className="relative isolate px-6 py-24 sm:py-32 lg:px-8 overflow-hidden bg-oxford-800">
      {/* Services Background */}
      <div className="absolute inset-0">
        <ServicesBackground />
      </div>

      <div className="mx-auto max-w-4xl text-center relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-oxford-400 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Text container with crystal effect */}
          <div className="relative rounded-2xl bg-oxford-800/50 backdrop-blur-sm p-8 border border-oxford-600/30">
            <div className="absolute -inset-px bg-gradient-to-r from-solar-500/20 via-oxford-400/20 to-solar-600/20 rounded-2xl [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
            <p className="relative text-xl md:text-2xl leading-relaxed text-oxford-100">
              {t("ctaSection.description")}
            </p>
          </div>

          {/* CTA Button - Mejorado */}
          <div className="relative">
            {/* Efecto de brillo pulsante */}
            <motion.div
              className="absolute -inset-4 bg-solar-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />

            <Link
              href="/contacto"
              className="inline-flex group relative px-8 py-3 bg-gradient-to-r from-solar-500 to-solar-600 backdrop-blur-sm rounded-full overflow-hidden 
           border border-solar-400/50 hover:border-solar-400 transition-all duration-300 shadow-lg shadow-solar-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-solar-600 to-solar-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center space-x-3 text-white font-medium">
                <span>{t("ctaSection.button")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Partículas decorativas */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5 + Math.random(),
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Decorative floating elements */}
        {[...Array(3)].map((_, i) => (
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
      </div>
    </section>
  )
}

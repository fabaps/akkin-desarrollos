"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { useI18n } from "@/lib/i18n-context"
import { LazyLoadWrapper } from "./lazy-load-wrapper"
import { OptimizedImage } from "./optimized-image"

export function GdrsProximosProyectos() {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <SectionWrapper id="proximos-proyectos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("proximosProyectos.title")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce nuestro futuro parque solar a gran escala en Guatemala
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-oxford-700/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
          >
            <LazyLoadWrapper>
              <div className="relative h-64 md:h-80">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro%20Tecnol%C3%B3gico_edited-gtmuhJVDTt1BK3DNJ734xefWVsftTA.png"
                  alt="Parque Solar Centro Tecnológico"
                  fill
                  className="object-cover"
                />
              </div>
            </LazyLoadWrapper>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Parque Solar Centro Tecnológico</h3>
              <p className="text-gray-300 mb-4">{t("proximosProyectos.project1.description")}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.location")}</p>
                  <p className="text-white font-medium">{t("proximosProyectos.project1.location")}</p>
                </div>
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.capacity")}</p>
                  <p className="text-white font-medium">5 MW</p>
                </div>
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.startDate")}</p>
                  <p className="text-white font-medium">2025</p>
                </div>
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.status")}</p>
                  <p className="text-white font-medium">{t("proximosProyectos.project1.status")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-oxford-700/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
          >
            <LazyLoadWrapper>
              <div className="relative h-64 md:h-80">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parque%20Solar%20Occidente-Nt9YdKWbvGHJKLMnOpQrStUvWxYz.png"
                  alt="Parque Solar Occidente"
                  fill
                  className="object-cover"
                />
              </div>
            </LazyLoadWrapper>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Parque Solar Occidente</h3>
              <p className="text-gray-300 mb-4">{t("proximosProyectos.project2.description")}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.location")}</p>
                  <p className="text-white font-medium">{t("proximosProyectos.project2.location")}</p>
                </div>
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.capacity")}</p>
                  <p className="text-white font-medium">10 MW</p>
                </div>
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.startDate")}</p>
                  <p className="text-white font-medium">2026</p>
                </div>
                <div>
                  <p className="text-gray-400">{t("proximosProyectos.status")}</p>
                  <p className="text-white font-medium">{t("proximosProyectos.project2.status")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

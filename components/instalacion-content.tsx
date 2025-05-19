"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Construction, Hammer, Grid, Cable, Radio, Wifi } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function InstalacionContent() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  // Definición de los pasos del proceso
  const steps = [
    {
      step: "2.1",
      title: t("instalacion.step1.title"),
      description: t("instalacion.step1.description"),
      icon: <Construction className="h-5 w-5 text-solar-500" />,
    },
    {
      step: "2.2",
      title: t("instalacion.step2.title"),
      description: t("instalacion.step2.description"),
      icon: <Hammer className="h-5 w-5 text-solar-500" />,
    },
    {
      step: "2.3",
      title: t("instalacion.step3.title"),
      description: t("instalacion.step3.description"),
      icon: <Grid className="h-5 w-5 text-solar-500" />,
    },
    {
      step: "2.4",
      title: t("instalacion.step4.title"),
      description: t("instalacion.step4.description"),
      icon: <Cable className="h-5 w-5 text-solar-500" />,
    },
    {
      step: "2.5",
      title: t("instalacion.step5.title"),
      description: t("instalacion.step5.description"),
      icon: <Radio className="h-5 w-5 text-solar-500" />,
    },
    {
      step: "2.6",
      title: t("instalacion.step6.title"),
      description: t("instalacion.step6.description"),
      icon: <Wifi className="h-5 w-5 text-solar-500" />,
    },
  ]

  return (
    <section ref={containerRef} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <div className="mb-12">
          <div className="relative">
            <motion.div
              className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="space-y-4 pl-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tighter text-oxford-50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                {t("instalacion.content.title1")}
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {t("instalacion.content.title2")}
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {t("instalacion.content.subtitle")}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Sección de línea de tiempo vertical - más compacta */}
        <div className="relative mt-10">
          {/* Línea central vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-oxford-600/50"></div>

          {/* Contenedor de pasos */}
          <div className="relative space-y-8">
            {/* Pasos - grid más compacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {steps.map((step, index) => {
                // Determinar si el paso va a la izquierda o derecha
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={step.step}
                    className={`relative ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Línea horizontal hacia el centro */}
                    <div
                      className={`absolute top-6 ${isLeft ? "right-0 left-auto" : "left-0 right-auto"} hidden md:block h-px w-6 bg-oxford-600/50`}
                    ></div>

                    {/* Contenido del paso - más compacto */}
                    <div
                      className={`relative p-4 rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-600/30 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                    >
                      <div className="absolute -top-3 left-4 bg-oxford-800 px-2 py-0.5 rounded-full border border-oxford-600/50">
                        <span className="text-xs font-bold text-solar-400">{step.step}</span>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center mb-2">
                          <div className="p-1.5 rounded-lg bg-oxford-600/50">{step.icon}</div>
                          <h4 className="ml-2 text-lg font-bold text-oxford-100">{step.title}</h4>
                        </div>
                        <p className="text-oxford-300 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

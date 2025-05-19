"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import {
  FileCheck,
  Ruler,
  Leaf,
  Zap,
  BarChart3,
  ScrollText,
  Hammer,
  Shovel,
  Mountain,
  Receipt,
  ShoppingCart,
  PenTool,
  Clock,
} from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function PreProyectosContent() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  // Definición de las fases y sus pasos
  const phases = [
    {
      id: 1,
      title: t("preProyectos.phase1.title"),
      duration: t("preProyectos.phase1.duration"),
      description: t("preProyectos.phase1.description"),
      steps: [
        {
          step: "1.1",
          title: t("preProyectos.phase1.step1.title"),
          description: t("preProyectos.phase1.step1.description"),
          icon: <Ruler className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "1.2",
          title: t("preProyectos.phase1.step2.title"),
          description: t("preProyectos.phase1.step2.description"),
          icon: <Leaf className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "1.3",
          title: t("preProyectos.phase1.step3.title"),
          description: t("preProyectos.phase1.step3.description"),
          icon: <Zap className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "1.4",
          title: t("preProyectos.phase1.step4.title"),
          description: t("preProyectos.phase1.step4.description"),
          icon: <BarChart3 className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "1.5",
          title: t("preProyectos.phase1.step5.title"),
          description: t("preProyectos.phase1.step5.description"),
          icon: <ScrollText className="h-5 w-5 text-solar-500" />,
        },
      ],
    },
    {
      id: 2,
      title: t("preProyectos.phase2.title"),
      duration: t("preProyectos.phase2.duration"),
      description: t("preProyectos.phase2.description"),
      steps: [
        {
          step: "2.1",
          title: t("preProyectos.phase2.step1.title"),
          description: t("preProyectos.phase2.step1.description"),
          icon: <Hammer className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "2.2",
          title: t("preProyectos.phase2.step2.title"),
          description: t("preProyectos.phase2.step2.description"),
          icon: <Shovel className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "2.3",
          title: t("preProyectos.phase2.step3.title"),
          description: t("preProyectos.phase2.step3.description"),
          icon: <Mountain className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "2.4",
          title: t("preProyectos.phase2.step4.title"),
          description: t("preProyectos.phase2.step4.description"),
          icon: <Receipt className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "2.5",
          title: t("preProyectos.phase2.step5.title"),
          description: t("preProyectos.phase2.step5.description"),
          icon: <ShoppingCart className="h-5 w-5 text-solar-500" />,
        },
        {
          step: "2.6",
          title: t("preProyectos.phase2.step6.title"),
          description: t("preProyectos.phase2.step6.description"),
          icon: <PenTool className="h-5 w-5 text-solar-500" />,
        },
      ],
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
                {t("preProyectos.content.title1")}
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {t("preProyectos.content.title2")}
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {t("preProyectos.content.subtitle")}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Sección de línea de tiempo vertical - más compacta */}
        <div className="relative mt-10">
          {/* Línea central vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-oxford-600/50"></div>

          {/* Contenedor de fases */}
          <div className="relative space-y-12">
            {phases.map((phase, phaseIndex) => (
              <div key={phase.id} className="relative">
                {/* Encabezado de fase */}
                <motion.div
                  className="relative z-10 flex justify-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-oxford-700 border-4 border-solar-500 flex items-center justify-center text-solar-100 font-bold text-xl mb-3">
                      {phase.id}
                    </div>
                    <h3 className="text-xl font-bold text-oxford-100">{phase.title}</h3>
                    <div className="flex items-center mt-1 text-oxford-300">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      <span className="text-sm">{phase.duration}</span>
                    </div>
                    <p className="mt-1 text-oxford-400 max-w-md text-center text-sm">{phase.description}</p>
                  </div>
                </motion.div>

                {/* Pasos de la fase - grid más compacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {phase.steps.map((step, stepIndex) => {
                    // Determinar si el paso va a la izquierda o derecha
                    const isLeft = stepIndex % 2 === 0

                    return (
                      <motion.div
                        key={step.step}
                        className={`relative ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
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
            ))}
          </div>

          {/* Indicador de finalización */}
          <motion.div
            className="relative z-10 flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-oxford-700/50 border-4 border-oxford-500/50 text-oxford-300">
              <FileCheck className="h-5 w-5" />
            </div>
          </motion.div>
        </div>

        {/* Sección de Diseño Fotovoltaico */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Título con el mismo estilo que las otras secciones */}
          <div className="mb-8">
            <div className="relative">
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
              <div className="space-y-4 pl-4">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold tracking-tighter text-oxford-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {t("preProyectos.photovoltaic.title1")}
                </motion.h2>
                <motion.span
                  className="block text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {t("preProyectos.photovoltaic.title2")}
                </motion.span>
                <motion.p
                  className="text-lg md:text-xl text-oxford-300 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {t("preProyectos.photovoltaic.subtitle")}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Contenido del diseño fotovoltaico */}
          <div className="relative overflow-hidden rounded-2xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-600/30 p-6 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-oxford-600/20 to-oxford-500/20 rounded-2xl" />

            {/* Patrón de fondo */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(-45deg,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                {/* Columna de descripción */}
                <div className="w-full md:w-1/2">
                  <p className="text-oxford-300 text-base mb-6 leading-relaxed">
                    {t("preProyectos.photovoltaic.description")}
                  </p>
                </div>

                {/* Columna de "qué diseñamos" */}
                <div className="w-full md:w-1/2">
                  <h4 className="text-lg font-semibold text-solar-400 mb-4">
                    {t("preProyectos.photovoltaic.whatWeDesign")}
                  </h4>
                  <ul className="space-y-2">
                    {[
                      t("preProyectos.photovoltaic.item1"),
                      t("preProyectos.photovoltaic.item2"),
                      t("preProyectos.photovoltaic.item3"),
                      t("preProyectos.photovoltaic.item4"),
                      t("preProyectos.photovoltaic.item5"),
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="text-oxford-100 text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-solar-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-oxford-400/5 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

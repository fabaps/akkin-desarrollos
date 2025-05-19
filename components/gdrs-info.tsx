"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { FileCheck, Leaf, Zap, BarChart3, ScrollText } from "lucide-react"

export function GdrsInfo() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  // Información sobre GDRs Guatemala
  const gdrsInfo = [
    {
      icon: <Zap className="h-5 w-5 text-solar-500" />,
      title: "¿Qué son los GDRs?",
      description:
        "Los Generadores Distribuidos Renovables (GDRs) son sistemas de generación de energía renovable conectados a la red de distribución en Guatemala, con capacidad de hasta 5MW.",
    },
    {
      icon: <Leaf className="h-5 w-5 text-solar-500" />,
      title: "Beneficios Ambientales",
      description:
        "Los GDRs Guatemala contribuyen a la reducción de emisiones de CO2 y promueven la sostenibilidad energética del país, alineándose con los objetivos de desarrollo sostenible.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-solar-500" />,
      title: "Ventajas Económicas",
      description:
        "Implementar un GDR en Guatemala permite reducir costos energéticos, obtener incentivos fiscales y generar ingresos por la venta de excedentes de energía a la red.",
    },
    {
      icon: <ScrollText className="h-5 w-5 text-solar-500" />,
      title: "Marco Regulatorio",
      description:
        "Los GDRs en Guatemala están regulados por la CNEE y el AMM, bajo la Norma Técnica de Generación Distribuida Renovable (NTGDR) y la Ley General de Electricidad.",
    },
    {
      icon: <FileCheck className="h-5 w-5 text-solar-500" />,
      title: "Proceso de Implementación",
      description:
        "AKKIN gestiona todo el proceso de implementación de GDRs Guatemala, desde el estudio de factibilidad hasta la conexión a la red y puesta en marcha.",
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
                Información sobre
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                GDRs Guatemala
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                Todo lo que necesitas saber sobre los Generadores Distribuidos Renovables en Guatemala
              </motion.p>
            </div>
          </div>
        </div>

        {/* Grid de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gdrsInfo.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-600/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-oxford-600/50">{item.icon}</div>
                <h3 className="text-lg font-bold text-oxford-100">{item.title}</h3>
              </div>
              <p className="text-oxford-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ServicesBackground } from "./services-background"
import { useI18n } from "@/lib/i18n-context"

const proyectosFuturos = [
  {
    id: 1,
    nombre: "Parqueo Solar Lumina",
    ubicacion: "Villa Canales, Guatemala",
    fechaInicio: "2025",
    descripcion: "Proyecto de energía solar fotovoltaica con capacidad de 6MW.",
    imagen: "/images/lumina-project.png",
  },
  {
    id: 2,
    nombre: "Parque Solar Voltia",
    ubicacion: "San Marcos, Los Limones, Guatemala",
    fechaInicio: "2026", // Assuming a future date for a new project
    descripcion: "Proyecto de energía solar fotovoltaica con capacidad de 6MW.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20jul%202025%2C%2021_52_32-Ap8Dkh369Aul76cmCTpbYHSPQcFUP9.png",
  },
  {
    id: 3,
    nombre: "Parque Solar Olimpia",
    ubicacion: "San Marcos, Guatemala",
    fechaInicio: "2026",
    descripcion: "Proyecto de energía solar fotovoltaica con capacidad de 3MW.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%203%20nov%202025%2C%2016_30_47-EsW94lv57R3Vo3E2dsXw508J8DGgLU.png",
  },
]

export function ProximosProyectos() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <section id="proximos-proyectos" ref={containerRef} className="relative py-24 overflow-hidden scroll-mt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <ServicesBackground />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="mb-16">
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
                {t("upcomingProjects.title")}
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {t("upcomingProjects.subtitle")}
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {t("upcomingProjects.description")}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Tarjetas de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {proyectosFuturos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              className="relative overflow-hidden rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-500/20 hover:border-oxford-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={proyecto.imagen || "/placeholder.svg"}
                  alt={proyecto.nombre}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-900/90 via-oxford-900/50 to-transparent" />

                {/* Badge de fecha */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-solar-500/80 text-white backdrop-blur-sm border-none px-3 py-1">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {proyecto.fechaInicio}
                  </Badge>
                </div>

                {/* Título superpuesto */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{proyecto.nombre}</h3>
                  <div className="flex items-center text-oxford-200 text-sm">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    <span>{proyecto.ubicacion}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-4">
                <p className="text-oxford-300">{proyecto.descripcion}</p>
              </div>

              {/* Efecto de brillo */}
              <div className="absolute -inset-px bg-gradient-to-r from-oxford-400/5 to-oxford-300/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partículas decorativas */}
      {[...Array(6)].map((_, i) => (
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

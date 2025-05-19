"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { FileCheck, Leaf } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"

export function LicenciasContent() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título principal con el estilo consistente */}
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
                {t("licencias.content.title1")}
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {t("licencias.content.title2")}
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {t("licencias.content.subtitle")}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Sección de Contenido Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2010.21.49%20AM%20%281%29-6loYt4ZsdIUt3PW1zQI1pCshAJmBFW.jpeg"
                    alt="Gestión de Conexión"
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford-900/60 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6 rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-600/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-oxford-600/50">
                    <FileCheck className="h-5 w-5 text-solar-500" />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-100">{t("licencias.connection.title")}</h3>
                </div>
                <p className="text-oxford-300 mb-6">{t("licencias.connection.description")}</p>
              </div>
            </motion.div>
          </div>

          {/* Nueva sección para Licencia Ambiental */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Descripción de Licencia Ambiental */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6 rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-600/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-oxford-600/50">
                    <Leaf className="h-5 w-5 text-solar-500" />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-100">Licencia Ambiental</h3>
                </div>
                <p className="text-oxford-300 mb-6">
                  Gestionamos la obtención de licencias ambientales para tu proyecto solar, asegurando el cumplimiento
                  de todas las normativas y requisitos medioambientales. Nuestro equipo se encarga del proceso completo,
                  desde la evaluación de impacto ambiental hasta la aprobación final por parte del MARN (Ministerio de
                  Ambiente y Recursos Naturales).
                </p>
                <ul className="space-y-2 text-oxford-300">
                  <li className="flex items-start gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-solar-500 mt-2.5 flex-shrink-0" />
                    <span>Evaluación de impacto ambiental</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-solar-500 mt-2.5 flex-shrink-0" />
                    <span>Preparación y presentación de documentación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-solar-500 mt-2.5 flex-shrink-0" />
                    <span>Seguimiento del proceso de aprobación</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Imagen para Licencia Ambiental */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
                    alt="Licencia Ambiental"
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford-900/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

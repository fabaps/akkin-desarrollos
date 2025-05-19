"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  Wrench,
  Plug,
  ArrowRight,
  Ruler,
  FileCheck,
  Construction,
  Hammer,
  Grid,
  Cable,
  Radio,
  Wifi,
} from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

interface ServiceDetail {
  title: string
  description: string
  icon: React.ReactNode
  image?: string
}

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  details: ServiceDetail[]
  image: string
  url?: string // URL para "Ver más" (a definir en el futuro)
}

export function ServiceCards() {
  const { t } = useI18n()

  // En el array de servicios, mantener los títulos exactamente como están en las páginas individuales:
  const services: Service[] = [
    {
      id: 1,
      title: t("serviceCards.design.title"),
      description: t("serviceCards.design.description"),
      icon: <FileText className="h-6 w-6 text-white" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tWqbDF1JNtHZP9fb7ZjlEUuZhntxBK.png",
      details: [
        {
          title: "Diseño Financiero y Técnico",
          description:
            "Evaluamos las necesidades específicas del cliente y diseñamos una solución personalizada con análisis de inversión, retorno financiero y optimización de recursos.",
          icon: <Ruler className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
        {
          title: "Trámites y Expedientes",
          description:
            "Gestionamos todos los permisos y documentación requerida para garantizar una instalación sin contratiempos y en cumplimiento con la normativa vigente.",
          icon: <FileCheck className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
      ],
      url: "/servicios/pre-proyectos-y-permisos",
    },
    {
      id: 2,
      title: t("serviceCards.construction.title"),
      description: t("serviceCards.construction.description"),
      icon: <Wrench className="h-6 w-6 text-white" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266.JPG-Iabxu7gISdybNLzK0xZjG3yDS1IIMe.jpeg",
      details: [
        {
          title: "Hincado",
          description:
            "Instalación de estructuras de soporte para garantizar estabilidad y resistencia de los paneles solares.",
          icon: <Construction className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
        {
          title: "Ensamblado de Estructura",
          description:
            "Armado de la estructura metálica y de aluminio sobre la cual se montan los paneles solares, siguiendo las normativas de seguridad y calidad. ",
          icon: <Hammer className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1605980776566-0486c3ac7cbd?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
        {
          title: "Montaje de Paneles",
          description:
            "Colocación y fijación de paneles solares con técnicas especializadas para optimizar tiempos de entrega. ",
          icon: <Grid className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
        {
          title: "Cableado en DC y AC",
          description:
            "Interconexión de los sistemas de corriente directa y corriente alterna para la distribución eficiente de la energía generada.",
          icon: <Cable className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1473308822086-710304d7d30c?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
        {
          title: "Conexión de Subestación",
          description:
            "Instalación y configuración de la subestación para garantizar la transferencia de energía segura y estable.",
          icon: <Radio className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1626193082855-c4c8e9af1b18?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
        {
          title: "Integración y Comunicación",
          description:
            "Implementación de sistemas de monitoreo y control remoto para la supervisión y gestión eficiente del parque solar.",
          icon: <Wifi className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1581092921461-39b9d08ed9ad?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
      ],
      url: "/servicios/instalacion-y-logistica",
    },
    {
      id: 3,
      title: t("serviceCards.licenses.title"),
      description: t("serviceCards.licenses.description"),
      icon: <Plug className="h-6 w-6 text-white" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H1nMrPXW4SpIQzMIQXXfbdhRHTE6QA.png",
      details: [
        {
          title: "Gestión de Conexión",
          description:
            "Nos encargamos de todo el proceso de certificación y autorización para la interconexión del parque solar a la red eléctrica, asegurando el cumplimiento de los requisitos legales y regulatorios.",
          icon: <FileCheck className="h-5 w-5 text-white" />,
          image:
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        },
      ],
      url: "/servicios/gestion-de-licencias",
    },
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <div ref={containerRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <motion.div
          key={service.id}
          data-service-id={service.id}
          layout
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="group relative overflow-hidden rounded-xl backdrop-blur-sm border transition-all duration-300
              bg-oxford-700/50 border-oxford-500/20 hover:border-oxford-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-oxford-600/20 to-oxford-500/20" />

            {/* Imagen principal del servicio */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={800}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxford-900/80 to-transparent" />

              {/* Título superpuesto en la imagen */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  className="mb-2 inline-block rounded-lg bg-oxford-600/70 p-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-oxford-100">{service.title}</h3>
              </div>
            </div>

            {/* Descripción y botón de "Ver más" */}
            <div className="relative p-6 pt-3">
              <p className="text-oxford-300">{service.description}</p>

              <Link
                href={service.url || "#"}
                className="mt-4 flex items-center text-oxford-200 hover:text-white transition-colors group/link"
              >
                <span className="text-sm mr-2">{t("serviceCards.viewMore")}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

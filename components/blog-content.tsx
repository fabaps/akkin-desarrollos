"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Diseño y Permisos de un Parque Solar en Guatemala: Guía Completa",
    excerpt:
      "Aprende sobre el proceso de diseño, los permisos necesarios y las mejores prácticas para desarrollar un parque solar en Guatemala.",
    date: "25 de mayo de 2025",
    author: "Equipo AKKIN",
    readTime: "8 min lectura",
    category: "Guía Técnica",
    slug: "/blog/diseno-y-permisos-parque-solar-guatemala",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Generación Distribuida Renovable en Guatemala: Guía Completa NTGDR",
    excerpt:
      "Guía paso a paso para realizar una Generación Distribuida Renovable (GDR) en Guatemala según la Norma Técnica NTGDR.",
    date: "25 de mayo de 2025",
    author: "Equipo AKKIN",
    readTime: "12 min lectura",
    category: "Guía Regulatoria",
    slug: "/blog/generacion-distribuida-renovable-guatemala-guia",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "NTGDR Guatemala: Resumen Completo de la Norma Técnica de Generación Distribuida",
    excerpt:
      "Análisis completo de la Norma Técnica de Generación Distribuida Renovable (NTGDR) de Guatemala según CNEE-227-2014.",
    date: "25 de mayo de 2025",
    author: "Equipo AKKIN",
    readTime: "15 min lectura",
    category: "Análisis Técnico",
    slug: "/blog/ntgdr-guatemala-resumen-completo",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  },
]

export function BlogContent() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
                Últimos
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                Artículos
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                Conocimiento especializado sobre energía solar y proyectos renovables
              </motion.p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="relative overflow-hidden rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-500/20 hover:border-oxford-400/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-900/80 via-oxford-900/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-solar-500/80 text-white backdrop-blur-sm border-none px-3 py-1">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-oxford-400 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-oxford-100 mb-3 line-clamp-2 group-hover:text-solar-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-oxford-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-oxford-400" />
                    <span className="text-oxford-400 text-sm">{post.author}</span>
                  </div>

                  <Link
                    href={post.slug}
                    className="inline-flex items-center text-solar-400 hover:text-solar-300 transition-colors group/link"
                  >
                    <span className="text-sm mr-2">Leer más</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-oxford-400/5 to-oxford-300/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-16 bg-oxford-700/30 backdrop-blur-sm rounded-xl p-8 border border-oxford-600/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿Te interesa la energía solar?</h3>
          <p className="text-oxford-200 mb-6 max-w-2xl mx-auto">
            Mantente al día con las últimas tendencias, análisis y oportunidades en el sector de energía renovable en
            Guatemala y Centroamérica.
          </p>
          <Link href="/contacto">
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-solar-500 hover:bg-solar-600 text-white rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar para más información
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      {[...Array(5)].map((_, i) => (
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

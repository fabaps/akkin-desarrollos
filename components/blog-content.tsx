"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Diseño y Permisos de un Parque Solar en Guatemala",
    excerpt:
      "Guía completa sobre el proceso de diseño y obtención de permisos para desarrollar un parque solar en Guatemala, incluyendo regulaciones del MEM y CNEE.",
    date: "25 de mayo, 2025",
    readTime: "8 min lectura",
    category: "Guía Técnica",
    slug: "diseno-y-permisos-parque-solar-guatemala",
    image: "/placeholder.svg?height=300&width=500&query=parque+solar+guatemala+paneles+fotovoltaicos",
  },
  {
    id: 2,
    title: "Generación Distribuida Renovable en Guatemala: Guía NTGDR",
    excerpt:
      "Guía paso a paso para realizar una Generación Distribuida Renovable según la Norma Técnica NTGDR de Guatemala, incluyendo todos los requisitos y procesos.",
    date: "25 de mayo, 2025",
    readTime: "12 min lectura",
    category: "Guía Regulatoria",
    slug: "generacion-distribuida-renovable-guatemala-guia",
    image: "/placeholder.svg?height=300&width=500&query=generacion+distribuida+renovable+guatemala+energia+solar",
  },
  {
    id: 3,
    title: "NTGDR Guatemala: Resumen Completo de la Norma Técnica",
    excerpt:
      "Análisis detallado de la Norma Técnica de Generación Distribuida Renovable y Usuarios Autoproductores con Excedentes de Energía según CNEE-227-2014.",
    date: "25 de mayo, 2025",
    readTime: "15 min lectura",
    category: "Análisis Técnico",
    slug: "ntgdr-guatemala-resumen-completo",
    image: "/placeholder.svg?height=300&width=500&query=ntgdr+guatemala+norma+tecnica+energia+renovable",
  },
]

export function BlogContent() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid de Artículos */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl border border-oxford-600/20 overflow-hidden hover:border-solar-500/30 transition-all duration-300">
                {/* Imagen del artículo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-solar-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Contenido del artículo */}
                <div className="p-6">
                  {/* Metadatos */}
                  <div className="flex items-center space-x-4 text-oxford-300 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-solar-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-oxford-200 mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Autor */}
                  <div className="flex items-center space-x-2 text-oxford-300 text-sm mb-4">
                    <User className="h-4 w-4" />
                    <span>Por Equipo AKKIN</span>
                  </div>

                  {/* Botón de leer más */}
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="w-full text-solar-400 hover:text-white hover:bg-solar-500/20 group"
                    >
                      Leer artículo completo
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA para más contenido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-8 border border-oxford-600/20">
            <h3 className="text-2xl font-bold text-white mb-4">¿Buscas más información?</h3>
            <p className="text-oxford-200 mb-6 max-w-2xl mx-auto">
              Nuestro equipo de expertos está aquí para ayudarte con cualquier consulta sobre parques solares,
              generación distribuida renovable y regulaciones en Guatemala.
            </p>
            <Link href="/contacto">
              <Button className="bg-solar-500 hover:bg-solar-600 text-white">Contactar Especialistas</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

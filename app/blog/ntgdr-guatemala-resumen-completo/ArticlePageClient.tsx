"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  FileText,
  Zap,
  Shield,
  DollarSign,
  Users,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ArticlePageClient() {
  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main className="pt-20">
          <ArticleContent />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

function ArticleContent() {
  const sections = [
    {
      icon: <FileText className="h-6 w-6 text-solar-400" />,
      title: "Propósito y Ámbito de Aplicación",
      content:
        "La NTGDR establece las reglas para la conexión, operación, control y comercialización de la Generación Distribuida Renovable (GDR) y de los Usuarios Autoproductores con Excedentes de Energía (UAEE). Esta normativa busca regular el acceso a la red eléctrica de los generadores que utilizan fuentes de energía renovable, promoviendo el uso de tecnologías limpias en el país.",
    },
    {
      icon: <Users className="h-6 w-6 text-solar-400" />,
      title: "Obligaciones de los Distribuidores",
      content:
        "Todos los distribuidores eléctricos deben permitir la conexión de estos generadores y realizar las modificaciones necesarias en sus redes para facilitar su operación. Las obligaciones del distribuidor incluyen proporcionar información técnica, permitir la conexión y garantizar la seguridad del sistema.",
    },
    {
      icon: <FileText className="h-6 w-6 text-solar-400" />,
      title: "Proceso de Autorización",
      content:
        "Para operar como GDR, se debe seguir un proceso que comienza con la presentación de una solicitud de Dictamen de Capacidad y Conexión ante el distribuidor. Este dictamen evalúa si la infraestructura eléctrica existente puede soportar la inyección de energía del nuevo generador.",
    },
    {
      icon: <Shield className="h-6 w-6 text-solar-400" />,
      title: "Requisitos Técnicos y Seguridad",
      content:
        "La norma detalla los dispositivos y medidas de seguridad que deben cumplir los GDR, como los sistemas de protección y desconexión automática. Se establecen reglas específicas para la conexión de generadores asíncronos y fuentes no convencionales, asegurando el cumplimiento de estándares internacionales.",
    },
    {
      icon: <Zap className="h-6 w-6 text-solar-400" />,
      title: "Operación y Control",
      content:
        "Los GDR solo podrán inyectar energía cuando la red eléctrica esté en condiciones adecuadas. En caso de fallas o mantenimiento, los distribuidores pueden desconectarlos temporalmente. Se exigen inspecciones y pruebas periódicas para garantizar la seguridad y calidad del suministro.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-solar-400" />,
      title: "Comercialización de Energía",
      content:
        "Los GDR pueden vender su energía a distribuidores mediante contratos de suministro o participar en el Mercado Mayorista de Electricidad. No pagarán peajes por el uso de la red secundaria, aunque sí pueden incurrir en costos de transporte si venden energía a través del sistema principal.",
    },
  ]

  const uaeeFeatures = [
    "Inyección de energía a la red sin recibir pago directo",
    "Obtención de créditos de energía mediante Net Metering",
    "Compensación del consumo eléctrico en meses futuros",
    "Sin remuneración económica directa por excedentes",
  ]

  return (
    <article className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <Link
            href="/blog-parques-solares"
            className="inline-flex items-center text-oxford-300 hover:text-solar-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>
        </nav>

        {/* Header del Artículo */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-oxford-300 text-sm mb-6">
            <span className="bg-solar-500/20 text-solar-400 px-3 py-1 rounded-full">Análisis Técnico</span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>5 de Enero, 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>15 min lectura</span>
            </div>
          </div>

          <div className="relative p-6 rounded-xl bg-oxford-800/40 backdrop-blur-[2px] border border-oxford-700/20 mb-6">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pl-4">
              <span className="block text-white">NTGDR Guatemala:</span>
              <span className="block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Resumen Completo
              </span>
              <span className="block text-oxford-300 text-2xl md:text-3xl mt-2">de la Norma Técnica</span>
            </h1>
          </div>

          <p className="text-xl text-oxford-300 max-w-4xl mb-8">
            Análisis detallado de la Norma Técnica de Generación Distribuida Renovable y Usuarios Autoproductores con
            Excedentes de Energía según CNEE-227-2014
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-oxford-300" />
              <span className="text-oxford-300">Por Ing. María González</span>
            </div>
            <Button variant="outline" size="sm" className="border-oxford-600 text-oxford-300 hover:bg-oxford-700">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="max-w-none">
          {/* Tabla de Contenidos */}
          <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-6 mb-12 border border-oxford-600/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-solar-400" />
              Contenido del Artículo
            </h3>
            <ul className="space-y-2 text-oxford-200">
              <li>
                <a href="#introduccion" className="hover:text-solar-400 transition-colors">
                  Introducción a la NTGDR
                </a>
              </li>
              <li>
                <a href="#aspectos-clave" className="hover:text-solar-400 transition-colors">
                  Aspectos Clave de la Normativa
                </a>
              </li>
              <li>
                <a href="#uaee" className="hover:text-solar-400 transition-colors">
                  Usuarios Autoproductores (UAEE)
                </a>
              </li>
              <li>
                <a href="#supervision" className="hover:text-solar-400 transition-colors">
                  Supervisión y Cumplimiento
                </a>
              </li>
              <li>
                <a href="#conclusion" className="hover:text-solar-400 transition-colors">
                  Conclusiones
                </a>
              </li>
            </ul>
          </div>

          {/* Contenido del Artículo */}
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Introducción */}
            <section id="introduccion" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Introducción a la NTGDR
                </span>
              </h2>
              <div className="text-oxford-200 leading-relaxed mb-8">
                <p className="text-xl mb-6">
                  La Norma Técnica de Generación Distribuida Renovable y Usuarios Autoproductores con Excedentes de
                  Energía (NTGDR), establecida por la Comisión Nacional de Energía Eléctrica (CNEE) de Guatemala
                  mediante la resolución CNEE-227-2014, representa un marco regulatorio fundamental para el desarrollo
                  de la energía renovable en el país.
                </p>
                <p className="mb-6">
                  Esta normativa define los términos y acrónimos clave como GDR (Generación Distribuida Renovable), UAEE
                  (Usuarios Autoproductores con Excedentes de Energía) y establece su ámbito de aplicación en todo el
                  territorio nacional.
                </p>
              </div>

              {/* Destacado de la resolución */}
              <div className="bg-gradient-to-r from-solar-600/20 to-solar-500/20 backdrop-blur-sm rounded-lg p-6 border border-solar-500/20 mb-8">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-solar-400" />
                  Resolución CNEE-227-2014
                </h3>
                <p className="text-oxford-200">
                  Esta resolución deroga la versión anterior de la norma (CNEE-171-2008) y establece que entró en vigor
                  al día siguiente de su publicación en el Diario de Centro América, modernizando el marco regulatorio
                  para la integración de energías renovables.
                </p>
              </div>
            </section>

            {/* Aspectos Clave */}
            <section id="aspectos-clave" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Aspectos Clave de la Normativa
                </span>
              </h2>

              <div className="grid gap-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-6 border border-oxford-600/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-oxford-600/50 rounded-lg">{section.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                        <p className="text-oxford-200 leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* UAEE Section */}
            <section id="uaee" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Usuarios Autoproductores con Excedentes de Energía (UAEE)
                </span>
              </h2>

              <div className="text-oxford-200 leading-relaxed mb-6">
                <p className="mb-6">
                  Para los Usuarios Autoproductores con Excedentes de Energía (UAEE), la norma establece un sistema
                  especial que permite la inyección de energía a la red sin recibir pago directo por ello, pero con la
                  posibilidad de obtener créditos energéticos.
                </p>
              </div>

              <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-6 border border-oxford-600/20 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-solar-400" />
                  Sistema de Medición Neta (Net Metering)
                </h3>
                <p className="text-oxford-200 mb-4">
                  Los UAEE pueden obtener créditos de energía mediante el sistema de medición neta, que les permite:
                </p>
                <ul className="space-y-2">
                  {uaeeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-solar-400 mt-1">•</span>
                      <span className="text-oxford-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Requisitos Técnicos Detallados */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Requisitos Técnicos Específicos
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Sistemas de Protección</h3>
                  <ul className="text-oxford-200 space-y-2 text-sm">
                    <li>• Desconexión automática en caso de fallas</li>
                    <li>• Sistemas de protección contra sobretensiones</li>
                    <li>• Dispositivos de seguridad certificados</li>
                    <li>• Cumplimiento de estándares internacionales</li>
                  </ul>
                </div>

                <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Generadores No Convencionales</h3>
                  <ul className="text-oxford-200 space-y-2 text-sm">
                    <li>• Paneles solares fotovoltaicos</li>
                    <li>• Turbinas eólicas de pequeña escala</li>
                    <li>• Sistemas de biomasa</li>
                    <li>• Micro-hidroeléctricas</li>
                  </ul>
                </div>

                <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Inspecciones y Pruebas</h3>
                  <ul className="text-oxford-200 space-y-2 text-sm">
                    <li>• Pruebas periódicas de funcionamiento</li>
                    <li>• Inspecciones de seguridad regulares</li>
                    <li>• Verificación de sistemas de protección</li>
                    <li>• Mantenimiento preventivo obligatorio</li>
                  </ul>
                </div>

                <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Condiciones de Operación</h3>
                  <ul className="text-oxford-200 space-y-2 text-sm">
                    <li>• Inyección solo con red en condiciones adecuadas</li>
                    <li>• Desconexión durante mantenimiento</li>
                    <li>• Coordinación con el distribuidor</li>
                    <li>• Monitoreo continuo de calidad</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Supervisión */}
            <section id="supervision" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Supervisión y Cumplimiento
                </span>
              </h2>

              <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-6 border border-oxford-600/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-oxford-600/50 rounded-lg">
                    <Eye className="h-6 w-6 text-solar-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Facultades de la CNEE</h3>
                    <p className="text-oxford-200 leading-relaxed mb-4">
                      La CNEE se reserva la facultad de supervisar el cumplimiento de la normativa y sancionar cualquier
                      incumplimiento. Esta supervisión incluye:
                    </p>
                    <ul className="space-y-2 text-oxford-200">
                      <li className="flex items-start space-x-2">
                        <span className="text-solar-400 mt-1">•</span>
                        <span>Inspecciones regulares a las instalaciones</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-solar-400 mt-1">•</span>
                        <span>Verificación del cumplimiento técnico</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-solar-400 mt-1">•</span>
                        <span>Aplicación de sanciones según la Ley General de Electricidad</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-solar-400 mt-1">•</span>
                        <span>Monitoreo de la calidad del servicio eléctrico</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusión */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Conclusiones
                </span>
              </h2>
              <div className="text-oxford-200 leading-relaxed">
                <p className="mb-4">
                  La NTGDR representa un marco regulatorio integral que busca integrar eficientemente la energía
                  renovable en el sistema eléctrico guatemalteco. Establece reglas claras para la conexión y
                  comercialización de la generación distribuida, con el objetivo de mejorar la sostenibilidad y
                  seguridad del sistema energético del país.
                </p>
                <p className="mb-4">
                  La normativa equilibra la promoción de tecnologías limpias con la necesidad de mantener la estabilidad
                  y calidad del sistema eléctrico, estableciendo requisitos técnicos rigurosos y procedimientos claros
                  para todos los actores involucrados.
                </p>
                <p>
                  Para los desarrolladores de proyectos de energía renovable, es fundamental comprender y cumplir con
                  todos los aspectos de esta normativa para asegurar el éxito de sus proyectos y contribuir al
                  desarrollo sostenible del sector energético guatemalteco.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-8 border border-oxford-600/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas asesoría sobre la NTGDR?</h3>
              <p className="text-oxford-200 mb-6">
                Nuestro equipo de expertos puede ayudarte a navegar los requisitos de la normativa y asegurar el
                cumplimiento de tu proyecto.
              </p>
              <Link href="/contacto">
                <Button className="bg-solar-500 hover:bg-solar-600 text-white">Contactar Especialistas</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, CheckCircle } from "lucide-react"
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
  const steps = [
    {
      number: "1",
      title: "Presentación de Solicitud de Dictamen de Capacidad y Conexión",
      content: "El interesado presenta la solicitud de Dictamen de Capacidad y Conexión al Distribuidor",
      requirements: [
        "Información general del proyecto (nombre, ubicación, contacto)",
        "Mapa cartográfico y coordenadas del proyecto",
        "Datos técnicos (fuente de energía, potencia, diagrama unifilar)",
        "Parámetros eléctricos y planos de la línea de conexión",
        "Registro de cotas (si es un proyecto hidroeléctrico)",
        "Resolución ambiental o constancia de proceso de autorización ambiental",
      ],
    },
    {
      number: "2",
      title: "Evaluación por el Distribuidor",
      content: "El Distribuidor revisa la solicitud y elabora los estudios necesarios",
      requirements: [
        "Revisión de la solicitud (5 días para pedir aclaraciones)",
        "Respuesta del interesado (5 días)",
        "Envío de copia a la CNEE",
        "Elaboración de estudios eléctricos (máximo 45 días)",
        "Dictamen incluye: análisis de capacidad, evaluación de pérdidas, costos de modificaciones",
      ],
    },
    {
      number: "3",
      title: "Revisión y Autorización por la CNEE",
      content: "La CNEE revisa el Dictamen y emite la resolución de autorización",
      requirements: [
        "Revisión del Dictamen (30 días)",
        "Solicitud de información adicional si es necesario",
        "Emisión de resolución de autorización de conexión",
      ],
    },
    {
      number: "4",
      title: "Construcción e Instalación de Equipos",
      content: "El interesado construye la infraestructura necesaria bajo supervisión",
      requirements: [
        "Construcción de línea de conexión y equipos (costos a cargo del interesado)",
        "Instalación de sistemas de protección y desconexión",
        "Inclusión de inversores si no produce corriente alterna",
        "Supervisión del Distribuidor para cumplimiento de normas técnicas",
      ],
    },
    {
      number: "5",
      title: "Pruebas y Conexión",
      content: "Realización de pruebas y coordinación para la conexión final",
      requirements: [
        "Pruebas de funcionamiento de instalaciones",
        "Entrega de informe técnico al Distribuidor",
        "Acuerdo de fecha de conexión",
        "Conexión supervisada y coordinada con el Distribuidor",
      ],
    },
  ]

  const operationalSteps = [
    {
      title: "Operación y Control",
      description: "El GDR opera cumpliendo normas de calidad con desconexión automática en caso de fallas",
    },
    {
      title: "Comercialización de Energía",
      description: "Venta a Distribuidores, Mercado Mayorista o acreditación de excedentes en facturación",
    },
    {
      title: "Mantenimiento e Inspecciones",
      description: "Responsabilidad del GDR con inspecciones del Distribuidor y CNEE",
    },
    {
      title: "Desconexión",
      description: "Por mantenimiento, fallas o incumplimiento, coordinada con el Distribuidor",
    },
    {
      title: "Sanciones y Vigencia",
      description: "Fiscalización por CNEE con sanciones según Ley General de Electricidad",
    },
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
            <span className="bg-solar-500/20 text-solar-400 px-3 py-1 rounded-full">Guía Regulatoria</span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>10 de Enero, 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>12 min lectura</span>
            </div>
          </div>

          <div className="relative p-6 rounded-xl bg-oxford-800/40 backdrop-blur-[2px] border border-oxford-700/20 mb-6">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pl-4">
              <span className="block text-white">Generación Distribuida</span>
              <span className="block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Renovable en Guatemala
              </span>
              <span className="block text-oxford-300 text-2xl md:text-3xl mt-2">Guía NTGDR</span>
            </h1>
          </div>

          <p className="text-xl text-oxford-300 max-w-3xl mb-8">
            Guía paso a paso para realizar una Generación Distribuida Renovable según la Norma Técnica NTGDR de
            Guatemala
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-oxford-300" />
              <span className="text-oxford-300">Por Ing. Carlos Mendoza</span>
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
                <a href="#proceso-solicitud" className="hover:text-solar-400 transition-colors">
                  Proceso de Solicitud y Autorización
                </a>
              </li>
              <li>
                <a href="#operacion" className="hover:text-solar-400 transition-colors">
                  Operación y Mantenimiento
                </a>
              </li>
              <li>
                <a href="#comercializacion" className="hover:text-solar-400 transition-colors">
                  Comercialización de Energía
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
              <div className="text-oxford-200 leading-relaxed mb-6">
                <p className="text-xl mb-6">
                  La Norma Técnica de Generación Distribuida Renovable y Usuarios Autoproductores con Excedentes de
                  Energía (NTGDR) establece el marco regulatorio para el desarrollo de proyectos de generación
                  distribuida en Guatemala.
                </p>
                <p>
                  Esta guía detalla los 10 pasos esenciales que todo desarrollador debe seguir para implementar
                  exitosamente un proyecto de Generación Distribuida Renovable (GDR) en el país.
                </p>
              </div>
            </section>

            {/* Proceso de Solicitud */}
            <section id="proceso-solicitud" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Proceso de Solicitud y Autorización
                </span>
              </h2>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-6 border border-oxford-600/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-solar-500 rounded-full flex items-center justify-center text-white font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                        <p className="text-oxford-200 mb-4">{step.content}</p>
                        <div className="space-y-2">
                          {step.requirements.map((req, reqIndex) => (
                            <div key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-solar-400 mt-1 flex-shrink-0" />
                              <span className="text-oxford-300 text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Operación */}
            <section id="operacion" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Operación y Mantenimiento
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {operationalSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-oxford-200 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comercialización */}
            <section id="comercializacion" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Opciones de Comercialización
                </span>
              </h2>

              <div className="bg-gradient-to-r from-solar-600/20 to-solar-500/20 backdrop-blur-sm rounded-lg p-6 border border-solar-500/20 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">El GDR puede vender su energía a:</h3>
                <ul className="space-y-3 text-oxford-200">
                  <li className="flex items-start">
                    <span className="text-solar-400 mr-3">•</span>
                    <strong>Distribuidores:</strong> Mediante contratos directos
                  </li>
                  <li className="flex items-start">
                    <span className="text-solar-400 mr-3">•</span>
                    <strong>Mercado Mayorista:</strong> Bajo las reglas del AMM
                  </li>
                  <li className="flex items-start">
                    <span className="text-solar-400 mr-3">•</span>
                    <strong>Excedentes:</strong> Acreditados como saldo en facturación eléctrica
                  </li>
                </ul>
              </div>
            </section>

            {/* Aspectos Importantes */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-solar-400 via-solar-500 to-solar-600 bg-clip-text text-transparent">
                  Aspectos Importantes a Considerar
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Plazos Clave</h3>
                  <ul className="text-oxford-200 space-y-2 text-sm">
                    <li>• Aclaraciones del Distribuidor: 5 días</li>
                    <li>• Respuesta del interesado: 5 días</li>
                    <li>• Estudios eléctricos: máximo 45 días</li>
                    <li>• Revisión CNEE: 30 días</li>
                  </ul>
                </div>

                <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Responsabilidades</h3>
                  <ul className="text-oxford-200 space-y-2 text-sm">
                    <li>• Costos de construcción: a cargo del interesado</li>
                    <li>• Mantenimiento: responsabilidad del GDR</li>
                    <li>• Supervisión: Distribuidor y CNEE</li>
                    <li>• Fiscalización: CNEE</li>
                  </ul>
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
                  La implementación de un proyecto de Generación Distribuida Renovable en Guatemala requiere seguir un
                  proceso estructurado y cumplir con múltiples requisitos técnicos y regulatorios. El éxito del proyecto
                  depende de una planificación cuidadosa y el cumplimiento estricto de la NTGDR.
                </p>
                <p>
                  Es fundamental contar con asesoría especializada para navegar eficientemente este proceso y asegurar
                  el cumplimiento de todas las normativas vigentes.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-8 border border-oxford-600/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas asesoría para tu proyecto GDR?</h3>
              <p className="text-oxford-200 mb-6">
                Nuestro equipo de expertos puede guiarte en todo el proceso de implementación de Generación Distribuida
                Renovable.
              </p>
              <Link href="/contacto">
                <Button className="bg-solar-500 hover:bg-solar-600 text-white">Contactar Ahora</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

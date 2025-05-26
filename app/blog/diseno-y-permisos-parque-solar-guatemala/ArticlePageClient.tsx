"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesBackground } from "@/components/services-background"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react"
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
  return (
    <article className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-oxford-300 hover:text-solar-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>
        </nav>

        {/* Header del Artículo */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-oxford-300 text-sm mb-6">
            <span className="bg-solar-500/20 text-solar-400 px-3 py-1 rounded-full">Guía Técnica</span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>15 de Enero, 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>8 min lectura</span>
            </div>
          </div>

          <div className="relative p-6 rounded-xl bg-oxford-800/40 backdrop-blur-[2px] border border-oxford-700/20 mb-6">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight pl-4">
              <span className="block text-white">Diseño y Permisos de un</span>
              <span className="block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Parque Solar en Guatemala
              </span>
              <span className="block text-oxford-300 text-2xl md:text-3xl mt-2">Guía Completa</span>
            </h1>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-oxford-300" />
              <span className="text-oxford-300">Por Equipo AKKIN</span>
            </div>
            <Button variant="outline" size="sm" className="border-oxford-600 text-oxford-300 hover:bg-oxford-700">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </div>
        </header>

        {/* Tabla de Contenidos */}
        <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-6 mb-12 border border-oxford-600/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-solar-400" />
            Contenido del Artículo
          </h3>
          <ul className="space-y-2 text-oxford-200">
            <li>
              <a href="#que-es" className="hover:text-solar-400 transition-colors">
                ¿Qué es un Parque Solar?
              </a>
            </li>
            <li>
              <a href="#diseno" className="hover:text-solar-400 transition-colors">
                Diseño de un Parque Solar
              </a>
            </li>
            <li>
              <a href="#permisos" className="hover:text-solar-400 transition-colors">
                Permisos Necesarios
              </a>
            </li>
            <li>
              <a href="#beneficios" className="hover:text-solar-400 transition-colors">
                Beneficios del Cumplimiento
              </a>
            </li>
            <li>
              <a href="#conclusion" className="hover:text-solar-400 transition-colors">
                Conclusión
              </a>
            </li>
          </ul>
        </div>

        {/* Contenido del Artículo */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Introducción */}
          <div className="text-oxford-200 leading-relaxed mb-8">
            <p className="text-xl mb-6">
              La energía solar en Guatemala ha ganado relevancia como una solución sustentable y rentable. Diseñar y
              obtener los permisos para un parque solar requiere cumplir con diversas regulaciones y normativas para
              garantizar su operación legal y eficiente.
            </p>
            <p>
              En este artículo, explicamos el proceso de diseño, los permisos necesarios y las mejores prácticas para
              desarrollar un parque solar en Guatemala.
            </p>
          </div>

          {/* ¿Qué es un Parque Solar? */}
          <section id="que-es" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">¿Qué es un Parque Solar?</h2>
            <div className="text-oxford-200 leading-relaxed">
              <p>
                Un parque solar es una instalación de gran escala donde se generan grandes cantidades de energía
                eléctrica mediante paneles fotovoltaicos. En Guatemala, estos proyectos deben cumplir con regulaciones
                del Ministerio de Energía y Minas (MEM), la Comisión Nacional de Energía Eléctrica (CNEE) y otras
                entidades gubernamentales.
              </p>
            </div>
          </section>

          {/* Diseño */}
          <section id="diseno" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Diseño de un Parque Solar en Guatemala</h2>
            <div className="text-oxford-200 leading-relaxed mb-6">
              <p>
                El diseño de un parque solar debe considerar factores técnicos, ambientales y regulatorios para su
                correcta implementación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                <h3 className="text-xl font-semibold text-white mb-4">1. Selección del Terreno</h3>
                <ul className="text-oxford-200 space-y-2">
                  <li>• Ubicación con alta irradiación solar</li>
                  <li>• Terreno sin obstrucciones (montañas, edificios altos, árboles)</li>
                  <li>• Disponibilidad de acceso a redes eléctricas</li>
                </ul>
              </div>

              <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                <h3 className="text-xl font-semibold text-white mb-4">2. Diseño de la Infraestructura</h3>
                <ul className="text-oxford-200 space-y-2">
                  <li>• Capacidad instalada en megavatios (MW)</li>
                  <li>• Tipo y orientación de paneles solares</li>
                  <li>• Sistema de inversores y baterías (si aplica)</li>
                  <li>• Infraestructura de conexión a la red eléctrica</li>
                </ul>
              </div>

              <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                <h3 className="text-xl font-semibold text-white mb-4">3. Estudios Técnicos y Ambientales</h3>
                <ul className="text-oxford-200 space-y-2">
                  <li>• Estudio de impacto ambiental</li>
                  <li>• Evaluación de eficiencia energética</li>
                  <li>• Análisis de viabilidad financiera</li>
                </ul>
              </div>

              <div className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20">
                <h3 className="text-xl font-semibold text-white mb-4">4. Normativas y Regulaciones</h3>
                <ul className="text-oxford-200 space-y-2">
                  <li>• Ley General de Electricidad (Decreto 93-96)</li>
                  <li>• Reglamento de Generación Distribuida (Acuerdo Gubernativo 201-2013)</li>
                  <li>• Normativa municipal para uso de suelo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Permisos */}
          <section id="permisos" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Permisos Necesarios para un Parque Solar en Guatemala
            </h2>
            <div className="text-oxford-200 leading-relaxed mb-6">
              <p>Para operar un parque solar, es indispensable obtener los siguientes permisos:</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "1. Licencia Ambiental",
                  details: [
                    "Otorgada por el Ministerio de Ambiente y Recursos Naturales (MARN)",
                    "Requiere un Estudio de Impacto Ambiental (EIA)",
                  ],
                },
                {
                  title: "2. Autorización del MEM y la CNEE",
                  details: [
                    "Registro del parque solar como generador de energía",
                    "Aprobación para inyección a la red eléctrica nacional",
                  ],
                },
                {
                  title: "3. Permiso Municipal",
                  details: ["Autorización para construcción y operación según normativa local"],
                },
                {
                  title: "4. Contrato de Interconexión con la Empresa Distribuidora",
                  details: ["Para vender energía a la red o autoconsumo"],
                },
                {
                  title: "5. Registro Tributario ante la SAT",
                  details: ["Para formalizar operaciones y cumplir con obligaciones fiscales"],
                },
              ].map((permiso, index) => (
                <div
                  key={index}
                  className="bg-oxford-700/30 backdrop-blur-sm rounded-lg p-6 border border-oxford-600/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{permiso.title}</h3>
                  <ul className="text-oxford-200 space-y-1">
                    {permiso.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Beneficios */}
          <section id="beneficios" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Beneficios de Cumplir con la Regulación</h2>
            <div className="bg-gradient-to-r from-solar-600/20 to-solar-500/20 backdrop-blur-sm rounded-lg p-6 border border-solar-500/20">
              <ul className="text-oxford-200 space-y-3">
                <li className="flex items-start">
                  <span className="text-solar-400 mr-3">✓</span>
                  Evita sanciones legales y demoras
                </li>
                <li className="flex items-start">
                  <span className="text-solar-400 mr-3">✓</span>
                  Acceso a incentivos fiscales y financiamiento
                </li>
                <li className="flex items-start">
                  <span className="text-solar-400 mr-3">✓</span>
                  Reducción de costos energéticos
                </li>
                <li className="flex items-start">
                  <span className="text-solar-400 mr-3">✓</span>
                  Contribución a la sostenibilidad ambiental
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusión */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusión</h2>
            <div className="text-oxford-200 leading-relaxed">
              <p className="mb-4">
                El diseño y la obtención de permisos para un parque solar en Guatemala es un proceso complejo pero
                fundamental para garantizar la eficiencia y legalidad del proyecto. Cumplir con las normativas permite
                operar sin inconvenientes y maximizar los beneficios de la energía solar.
              </p>
              <p>
                Si deseas asesoría para el diseño y permisos de un parque solar, contáctanos para guiarte en el proceso.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-oxford-700/30 backdrop-blur-sm rounded-xl p-8 border border-oxford-600/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas asesoría para tu proyecto solar?</h3>
            <p className="text-oxford-200 mb-6">
              Nuestro equipo de expertos puede guiarte en todo el proceso de diseño y obtención de permisos.
            </p>
            <Link href="/contacto">
              <Button className="bg-solar-500 hover:bg-solar-600 text-white">Contactar Ahora</Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ServicesBackground } from "./services-background"
import { Sun, Calendar, Users, ChevronLeft, ChevronRight, Zap, Grid } from "lucide-react"
import { useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n-context"

const projectImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0253.jpg-bsaYiaPs14ppbI8WQSE1sMPsZ4a5kh.jpeg",
    alt: "Vista aérea del Parque Solar Jutiapa mostrando la instalación completa de paneles solares",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0259.jpg-u2Zwf6ZELJ34HLV3hzQrEpzNlXAm5T.jpeg",
    alt: "Vista aérea del Parque Solar Jutiapa desde otro ángulo mostrando los paneles y campos agrícolas circundantes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0262.jpg-LTXWy1vq6lsK7mfxDBgnvHuP7Aaq2X.jpeg",
    alt: "Vista aérea del Parque Solar Jutiapa mostrando paneles instalados y estructuras de montaje en preparación",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0266%20%281%29.jpg-uL3MVsjjoy108XzODNyv32fJzyzNNG.jpeg",
    alt: "Equipo de ingenieros e instaladores del Parque Solar Jutiapa posando entre filas de paneles solares",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-05%20at%2010.21.49%20AM%20%281%29-BcKtXJZkIcNLMmEGFNfZu4Nt50VFJb.jpeg",
    alt: "Operador en maquinaria de hincado instalando soportes para el parque solar",
  },
]

export function FeaturedProjectHeader() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <div ref={containerRef} className="mb-16">
      <div className="relative">
        <motion.div
          className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="relative space-y-8 pl-4">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                className="relative bg-oxford-700/60 text-solar-200 backdrop-blur-sm border border-solar-500/30 
                     px-4 py-1.5 text-sm font-medium"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-solar-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-solar-500"></span>
                  </span>
                  {t("featuredProject.inProgress")}
                </span>
              </Badge>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tighter text-oxford-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              {t("featuredProject.project")}
            </motion.h2>
            <motion.span
              className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              {t("featuredProject.largeScale")}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-2xl md:text-3xl text-oxford-100">{t("featuredProject.solarPark")}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProject() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const projectStats = [
    {
      icon: Sun,
      value: "6MW",
      label: t("featuredProject.capacity"),
    },
    {
      icon: Calendar,
      value: "2025",
      label: t("featuredProject.operations"),
    },
    {
      icon: Users,
      value: "100+",
      label: t("featuredProject.jobs"),
    },
    {
      icon: Zap,
      value: "16",
      label: t("featuredProject.inverters"),
    },
    {
      icon: Grid,
      value: "10,300",
      label: t("featuredProject.panels"),
    },
  ]

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length)
    }

    // Usar setTimeout en lugar de setInterval para mejor rendimiento
    const timer = setTimeout(nextSlide, 8000)

    return () => {
      clearTimeout(timer)
    }
  }, [isAutoPlaying, currentSlide, projectImages.length])

  const handlePrevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  const handleNextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % projectImages.length)
  }

  return (
    <section id="proyecto-destacado" ref={containerRef} className="relative overflow-hidden bg-oxford-800 py-24">
      <div className="absolute inset-0">
        <ServicesBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FeaturedProjectHeader />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Slideshow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {/* Slideshow */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={projectImages[currentSlide].src || "/placeholder.svg"}
                      alt={projectImages[currentSlide].alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-500"
                      loading={currentSlide === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-oxford-900/80 via-oxford-900/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <button
                    onClick={handlePrevSlide}
                    className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full 
         bg-white/5 backdrop-blur-sm border border-white/10 
         hover:bg-white/10 transition-all duration-300 group"
                  >
                    <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white/90 transition-colors" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full 
         bg-white/5 backdrop-blur-sm border border-white/10 
         hover:bg-white/10 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white/90 transition-colors" />
                  </button>
                </div>

                {/* Slide Indicators - Ajustar el estilo de los indicadores también */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setCurrentSlide(index)
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "w-6 bg-white/90" : "w-1.5 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {projectStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden rounded-xl bg-oxford-700/50 backdrop-blur-sm p-4 border border-oxford-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-oxford-600/50">
                        <Icon className="w-4 h-4 text-oxford-100" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-oxford-100">{stat.value}</div>
                        <div className="text-sm text-oxford-300">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {/* Project Description */}
              <div className="relative rounded-2xl bg-oxford-800/50 backdrop-blur-sm p-8 border border-oxford-600/30">
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold text-oxford-100">{t("featuredProject.joinTitle")}</h3>
                  <p className="text-oxford-300 leading-relaxed">{t("featuredProject.description")}</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                {[
                  t("featuredProject.benefit1"),
                  t("featuredProject.benefit2"),
                  t("featuredProject.benefit3"),
                  t("featuredProject.benefit4"),
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-oxford-400" />
                    <span className="text-oxford-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-oxford-300/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random(),
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ServicesBackground } from "./services-background"
import { useInView } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

const partners = [
  {
    name: "NEC",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6cb99df2-0aa8-4333-a9b5-ff176b79be21_removalai_preview-RkPhuj6yD27wXOdEtcas2sKBJfZB2n.png",
    width: 220,
  },
  {
    name: "Canadian Solar",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CS%20LOGO%20WHITE%20RGB%20NEW%202024%20-%20No%20TAG-SNio2bw2eRA06YLqQwamPWsUeNEfLy.png",
    width: 280,
  },
  {
    name: "Longi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/longi_green_energy_technology-logo_brandlogos.net_s56hx-xUa0mxe3rA0Icsmn5fxOmrtqSyGOvJ.png",
    width: 260,
  },
  {
    name: "Mayorista Solar",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-Nz7qamhaQVUKR8Y5iVJzAXXTDBgxIv.png",
    width: 280,
  },
  {
    name: "Huawei",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/huaweii%20logo-3X4X2ZsoETYaBEIu9d7H5lLbsBuiu8.png",
    width: 220,
  },
]

export function PartnersSlider() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <section ref={containerRef} className="relative overflow-hidden py-16 bg-oxford-800">
      <div className="absolute inset-0">
        <ServicesBackground />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="mb-16">
          <div className="relative">
            <motion.div
              className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tighter text-oxford-50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                {t("partners.our")}
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {t("partners.alliances")}
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {t("partners.description")}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative group flex items-center justify-center"
            >
              <motion.div
                className="relative flex items-center justify-center h-32 md:h-40 w-full"
                whileHover={{ y: -5 }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={partner.width}
                  height={120}
                  className={`object-contain relative z-10 w-auto max-h-32 ${
                    partner.name === "Longi" || partner.name === "Huawei"
                      ? "filter brightness-0 invert opacity-75 group-hover:opacity-100"
                      : "filter brightness-0 invert opacity-75 group-hover:opacity-100"
                  }`}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </motion.div>

              {/* Efecto de brillo */}
              <div className="absolute -inset-px bg-gradient-to-r from-oxford-400/20 to-oxford-300/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partículas decorativas */}
      {[...Array(8)].map((_, i) => (
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

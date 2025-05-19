"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Sun, Package } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function StatsSection() {
  const { t } = useI18n()

  const stats = [
    {
      icon: Users,
      value: 40,
      suffix: "%",
      label: t("stats.advisors"),
    },
    {
      icon: Sun,
      value: 676860,
      label: t("stats.watts"),
    },
    {
      icon: Package,
      value: 64,
      label: t("stats.projects"),
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isInView) return

    const duration = 500 // Cambiado de 1000 a 500 para una animación mucho más rápida
    const frameDuration = 1000 / 60 // 60 FPS
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const countUp = () => {
      frame++
      const progress = frame / totalFrames
      const newCounts = stats.map((stat) => Math.floor(progress * stat.value))

      setCounts(newCounts)

      if (frame < totalFrames) {
        requestAnimationFrame(countUp)
      } else {
        setCounts(stats.map((stat) => stat.value))
      }
    }

    requestAnimationFrame(countUp)
  }, [isInView])

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        const count = counts[index]

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-lg bg-oxford-700/50 backdrop-blur-sm p-3 border border-oxford-500/20 hover:border-oxford-400/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-oxford-600/20 to-oxford-500/20" />
              <div className="relative z-10">
                <div className="mb-2 inline-block rounded-lg bg-oxford-600/50 p-2">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-5xl md:text-6xl font-bold text-oxford-100">
                    {count.toLocaleString()}
                    {stat.suffix}
                  </p>
                  <p className="text-xs text-oxford-300 mt-1">{stat.label}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

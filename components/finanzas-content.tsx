"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Wallet, PiggyBank, Receipt, TrendingDown } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function FinanzasContent() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  const steps = [
    {
      title: t("services.finances.content.step1.title"),
      description: t("services.finances.content.step1.description"),
      icon: <TrendingDown className="h-5 w-5 text-solar-500" />,
    },
    {
      title: t("services.finances.content.step2.title"),
      description: t("services.finances.content.step2.description"),
      icon: <Wallet className="h-5 w-5 text-solar-500" />,
    },
    {
      title: t("services.finances.content.step3.title"),
      description: t("services.finances.content.step3.description"),
      icon: <Receipt className="h-5 w-5 text-solar-500" />,
    },
    {
      title: t("services.finances.content.step4.title"),
      description: t("services.finances.content.step4.description"),
      icon: <PiggyBank className="h-5 w-5 text-solar-500" />,
    },
  ]

  return (
    <section ref={containerRef} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
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
                {t("services.finances.content.title1")}
              </motion.h2>
              <motion.span
                className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {t("services.finances.content.title2")}
              </motion.span>
              <motion.p
                className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {t("services.finances.content.subtitle")}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-600/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-3 left-4 bg-oxford-800 px-2 py-0.5 rounded-full border border-oxford-600/50">
                <span className="text-xs font-bold text-solar-400">{index + 1}</span>
              </div>
              <div className="mt-3">
                <div className="flex items-center mb-2">
                  <div className="p-1.5 rounded-lg bg-oxford-600/50">{step.icon}</div>
                  <h4 className="ml-2 text-lg font-bold text-oxford-100">{step.title}</h4>
                </div>
                <p className="text-oxford-300 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
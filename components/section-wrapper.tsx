"use client"

import type React from "react"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/framer-animations"

export function SectionWrapper({
  children,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  className?: string
}) {
  return (
    <motion.div
      variants={fadeIn(direction)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

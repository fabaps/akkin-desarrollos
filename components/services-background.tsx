"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ServicesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  // Canvas para el efecto de partículas
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el tamaño del canvas
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Crear partículas
    const particles: Particle[] = []
    const particleCount = 10 // Reducido de 20 o más

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1 + 0.5 // Tamaño más pequeño
        this.speedX = (Math.random() - 0.5) * 0.3 // Velocidad reducida
        this.speedY = (Math.random() - 0.5) * 0.3 // Velocidad reducida
        this.opacity = Math.random() * 0.1 + 0.05 // Opacidad reducida
        const hue = Math.random() * 20 + 200
        this.color = `hsla(${hue}, 70%, 80%, ${this.opacity})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Pulso más lento y suave
        this.opacity = 0.1 + Math.sin(Date.now() * 0.001) * 0.05
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color

        // Brillo más sutil
        ctx.shadowColor = "rgba(255, 255, 255, 0.3)"
        ctx.shadowBlur = 5
        ctx.fill()

        ctx.shadowBlur = 0
      }
    }

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Función de animación
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Limitar la frecuencia de actualización para mejorar el rendimiento
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Usar requestAnimationFrame con throttling para mejorar el rendimiento
      setTimeout(() => {
        requestAnimationFrame(animate)
      }, 1000 / 20) // Limitar a 20 FPS para mejorar el rendimiento
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Capa de gradiente base */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-oxford-800/95 via-oxford-800/90 to-oxford-800/95"
        style={{ opacity }}
      />

      {/* Patrón de paneles solares */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(-45deg,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      {/* Efecto de brillo de paneles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 10, // Más lento para reducir la carga de CPU
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>

      {/* Canvas para partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }} />

      {/* Capa de brillo superior */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent" />

      {/* Efecto de reflejo en movimiento */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Viñeta suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
    </div>
  )
}

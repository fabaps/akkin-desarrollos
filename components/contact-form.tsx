"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"

export function ContactForm() {
  const { t } = useI18n()

  return (
    <div>
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-solar-400 to-solar-600"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tighter text-oxford-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("contact.title1")}
            </motion.h2>
            <motion.span
              className="block text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-oxford-200 to-oxford-300 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("contact.title2")}
            </motion.span>
            <motion.p
              className="text-xl md:text-2xl text-oxford-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative rounded-2xl backdrop-blur-sm border border-oxford-600/30 p-8 md:p-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-600/20 to-oxford-500/20 rounded-2xl" />

        <div className="relative space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-oxford-100">Información de contacto</h3>

              {/* Dirección */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-solar-400 mt-1" />
                <a
                  href="https://maps.google.com/?q=Ruta+4+5-58,+Ciudad+de+Guatemala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oxford-300 hover:text-oxford-100 transition-colors"
                >
                  {t("contact.address")
                    .split("\n")
                    .map((line, i) =>
                      i === 0 ? (
                        line
                      ) : (
                        <>
                          <br key={i} />
                          {line}
                        </>
                      ),
                    )}
                </a>
              </div>

              {/* Teléfono */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-solar-400" />
                <a href="tel:30916300" className="text-oxford-300 hover:text-oxford-100 transition-colors">
                  3091 6300
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-solar-400" />
                <a
                  href="mailto:admin@adepenlinea.com"
                  className="text-oxford-300 hover:text-oxford-100 transition-colors"
                >
                  admin@adepenlinea.com
                </a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-oxford-100">Síguenos en redes</h3>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://wa.link/ajdda4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rtGx2m4QEipJJ1Yifzp9QigOtu2rhZ.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
                <motion.a
                  href="https://gt.linkedin.com/in/academia-de-proyectos-08834b312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6 text-oxford-300 group-hover:text-solar-400" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/academiadeproyectos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-6 w-6 text-oxford-300 group-hover:text-solar-400" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/academiayproyectos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-6 w-6 text-oxford-300 group-hover:text-solar-400" />
                </motion.a>
              </div>

              <p className="text-oxford-300 mt-6">
                Estamos disponibles para atender tus consultas y brindarte información sobre nuestros servicios de
                energía solar. Contáctanos por cualquiera de estos medios y te responderemos a la brevedad.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      {[...Array(5)].map((_, i) => (
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
    </div>
  )
}

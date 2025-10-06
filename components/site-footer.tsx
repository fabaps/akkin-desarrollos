"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black,transparent)]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro%20Tecnol%C3%B3gico_edited-gtmuhJVDTt1BK3DNJ734xefWVsftTA.png"
                alt="AKKIN Logo"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <h3 className="text-2xl font-bold text-oxford-100">AKKIN</h3>
            </div>
            <p className="text-oxford-300 leading-relaxed">{t("footer.description")}</p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://wa.me/50230916300"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
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
                className="p-2 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5 text-oxford-300 group-hover:text-solar-400" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-oxford-100 mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-4">
              {[
                { text: t("nav.services"), href: "#servicios" },
                {
                  text: "Proyecto Destacado",
                  href: "#proyecto-destacado",
                  onClick: (e: React.MouseEvent) => {
                    e.preventDefault()
                    const section = document.getElementById("proyecto-destacado")
                    if (section) {
                      const headerOffset = 64
                      const elementPosition = section.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  },
                },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} className="transform transition-transform duration-200">
                  {link.isButton ? (
                    <Link href={link.href}>
                      <Button
                        className="group relative px-6 py-2 bg-gradient-to-r from-solar-500 to-solar-600 backdrop-blur-sm rounded-full overflow-hidden 
                        border border-solar-400/50 hover:border-solar-400 transition-all duration-300 w-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-solar-600 to-solar-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative text-white">{link.text}</span>
                      </Button>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="text-oxford-300 hover:text-oxford-100 transition-colors flex items-center space-x-2"
                    >
                      <span className="h-px w-4 bg-oxford-500" />
                      <span>{link.text}</span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-oxford-100 mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-oxford-300 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Ruta+4+5-58,+Ciudad+de+Guatemala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oxford-300 hover:text-oxford-100 transition-colors"
                >
                  Ruta 4 5-58,
                  <br />
                  Cdad. de Guatemala
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-oxford-300 flex-shrink-0" />
                <a href="tel:30916300" className="text-oxford-300 hover:text-oxford-100 transition-colors">
                  3091 6300
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-oxford-300 flex-shrink-0" />
                <a
                  href="mailto:admin@adepenlinea.com"
                  className="text-oxford-300 hover:text-oxford-100 transition-colors"
                >
                  admin@adepenlinea.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="pt-4">
                <Link href="/contacto">
                  <Button
                    className="group relative px-6 py-2 bg-gradient-to-r from-solar-500 to-solar-600 backdrop-blur-sm rounded-full overflow-hidden 
                    border border-solar-400/50 hover:border-solar-400 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-solar-600 to-solar-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative text-white">{t("nav.contact")}</span>
                  </Button>
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-oxford-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-oxford-400 text-sm">
              © {new Date().getFullYear()} AKKIN. {t("footer.rights")}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-oxford-400 hover:text-oxford-300 text-sm">
                {t("footer.privacy")}
              </a>
              <a href="#" className="text-oxford-400 hover:text-oxford-300 text-sm">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-oxford-500/50 to-transparent" />
        {[...Array(3)].map((_, i) => (
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
    </footer>
  )
}

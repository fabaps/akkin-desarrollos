"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n-context"

export function SiteHeader() {
  const { t } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrolledDown = currentScrollPos > prevScrollPos

      // Solo cambiamos la visibilidad si hemos scrolleado más de 70px
      if (Math.abs(currentScrollPos - prevScrollPos) > 70) {
        setIsVisible(!isScrolledDown)
        setPrevScrollPos(currentScrollPos)
      }

      setIsScrolled(currentScrollPos > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 64
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-8 w-8"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro%20Tecnol%C3%B3gico_edited-gtmuhJVDTt1BK3DNJ734xefWVsftTA.png"
                alt="AKKIN Logo"
                width={32}
                height={32}
                className={`object-contain transition-all duration-500 ${
                  isScrolled
                    ? "brightness-0 invert [filter:invert(56%)_sepia(75%)_saturate(1619%)_hue-rotate(346deg)_brightness(98%)_contrast(95%)]"
                    : "brightness-0 invert"
                }`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.3,
              }}
              className="overflow-hidden"
            >
              <motion.span
                className={`font-medium block transition-colors duration-500 ${
                  isScrolled ? "text-oxford-600" : "text-white"
                }`}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.5,
                }}
              >
                AKKIN
              </motion.span>
            </motion.div>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => scrollToSection("servicios")}
                className={`text-sm font-medium transition-colors duration-500 flex items-center ${
                  isScrolled ? "text-oxford-600 hover:text-oxford-800" : "text-white hover:text-white/80"
                }`}
              >
                {t("nav.services")}
              </motion.button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div
                  className={`py-2 rounded-md shadow-lg ${isScrolled ? "bg-white" : "bg-oxford-800/90 backdrop-blur-md"}`}
                >
                  <Link
                    href="/servicios/pre-proyectos-y-permisos"
                    className={`block px-4 py-2 text-sm ${isScrolled ? "text-oxford-600 hover:bg-gray-100" : "text-oxford-100 hover:bg-oxford-700/50"}`}
                  >
                    {t("services.design")}
                  </Link>
                  <Link
                    href="/servicios/instalacion-y-logistica"
                    className={`block px-4 py-2 text-sm ${isScrolled ? "text-oxford-600 hover:bg-gray-100" : "text-oxford-100 hover:bg-oxford-700/50"}`}
                  >
                    {t("services.installation")}
                  </Link>
                  <Link
                    href="/servicios/gestion-de-licencias"
                    className={`block px-4 py-2 text-sm ${isScrolled ? "text-oxford-600 hover:bg-gray-100" : "text-oxford-100 hover:bg-oxford-700/50"}`}
                  >
                    {t("services.licenses")}
                  </Link>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                href="/gdrs-guatemala"
                className={`text-sm font-medium transition-colors duration-500 ${
                  isScrolled ? "text-oxford-600 hover:text-oxford-800" : "text-white hover:text-white/80"
                }`}
              >
                {t("nav.projects")}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/blog-parques-solares"
                className={`text-sm font-medium transition-colors duration-500 ${
                  isScrolled ? "text-oxford-600 hover:text-oxford-800" : "text-white hover:text-white/80"
                }`}
              >
                BLOG
              </Link>
            </motion.div>
            <Link
              href="/contacto"
              className={`group relative px-6 py-2 backdrop-blur-sm rounded-full overflow-hidden 
              border transition-all duration-500 ${
                isScrolled
                  ? "bg-gradient-to-r from-solar-500/20 to-solar-600/20 border-solar-500/40 hover:border-solar-500/60"
                  : "bg-white/10 border-white/30 hover:bg-white/20"
              }`}
            >
              <span
                className={`relative text-sm font-medium transition-colors duration-500 ${
                  isScrolled ? "text-solar-500" : "text-white"
                }`}
              >
                {t("nav.contact")}
              </span>
            </Link>

            {/* Selector de idioma */}
            <LanguageSwitcher isScrolled={isScrolled} />

            {/* Redes sociales en desktop */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/50230916027"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors group ${
                  isScrolled ? "hover:bg-oxford-100/10" : "hover:bg-white/10"
                }`}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rtGx2m4QEipJJ1Yifzp9QigOtu2rhZ.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className={`transition-all duration-500 ${
                    isScrolled
                      ? "brightness-0 invert-0 opacity-70 group-hover:opacity-100"
                      : "brightness-0 invert opacity-90 group-hover:opacity-100"
                  }`}
                />
              </a>
              <a
                href="https://gt.linkedin.com/in/academia-de-proyectos-08834b312"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors group ${
                  isScrolled ? "hover:bg-oxford-100/10" : "hover:bg-white/10"
                }`}
              >
                <Linkedin
                  className={`h-5 w-5 transition-colors ${
                    isScrolled ? "text-oxford-600 group-hover:text-solar-500" : "text-white group-hover:text-white/80"
                  }`}
                />
              </a>
            </div>
          </nav>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Botón de WhatsApp móvil */}
            <a
              href="https://wa.me/50230916027"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors group ${
                isScrolled ? "hover:bg-oxford-100/10" : "hover:bg-white/10"
              }`}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rtGx2m4QEipJJ1Yifzp9QigOtu2rhZ.png"
                alt="WhatsApp"
                width={24}
                height={24}
                className={`transition-all duration-500 ${
                  isScrolled
                    ? "brightness-0 invert-0 opacity-70 group-hover:opacity-100"
                    : "brightness-0 invert opacity-90 group-hover:opacity-100"
                }`}
              />
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-2 transition-colors duration-500 ${
                    isScrolled ? "text-oxford-600 hover:text-oxford-800" : "text-white hover:text-white/80"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-oxford-800/95 backdrop-blur-md border-oxford-700">
                <nav className="flex flex-col h-full">
                  {/* Enlaces principales */}
                  <div className="flex-1 space-y-6 mt-8">
                    <div>
                      <button
                        onClick={() => scrollToSection("servicios")}
                        className="w-full text-left px-4 py-2 text-lg font-medium text-oxford-100 hover:text-solar-400 transition-colors"
                      >
                        {t("nav.services")}
                      </button>
                      <div className="pl-8 space-y-3 mt-2">
                        <Link
                          href="/servicios/pre-proyectos-y-permisos"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-1 text-base text-oxford-300 hover:text-solar-400 transition-colors"
                        >
                          {t("services.design")}
                        </Link>
                        <Link
                          href="/servicios/instalacion-y-logistica"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-1 text-base text-oxford-300 hover:text-solar-400 transition-colors"
                        >
                          {t("services.installation")}
                        </Link>
                        <Link
                          href="/servicios/gestion-de-licencias"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-1 text-base text-oxford-300 hover:text-solar-400 transition-colors"
                        >
                          {t("services.licenses")}
                        </Link>
                      </div>
                    </div>
                    <Link
                      href="/gdrs-guatemala"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-4 py-2 text-lg font-medium text-oxford-100 hover:text-solar-400 transition-colors"
                    >
                      {t("nav.projects")}
                    </Link>
                    <Link
                      href="/blog-parques-solares"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-4 py-2 text-lg font-medium text-oxford-100 hover:text-solar-400 transition-colors"
                    >
                      BLOG
                    </Link>
                    <Link
                      href="/contacto"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-lg font-medium text-oxford-100 hover:text-solar-400 transition-colors"
                    >
                      {t("nav.contact")}
                    </Link>
                  </div>

                  {/* Selector de idioma en menú móvil */}
                  <div className="border-t border-oxford-700/50 pt-6">
                    <p className="px-4 text-sm text-oxford-400 mb-4">Idioma / Language</p>
                    <div className="px-4">
                      <LanguageSwitcher isScrolled={false} />
                    </div>
                  </div>

                  {/* Redes sociales */}
                  <div className="border-t border-oxford-700/50 pt-6 pb-8">
                    <p className="px-4 text-sm text-oxford-400 mb-4">Síguenos en redes sociales</p>
                    <div className="flex gap-4 px-4">
                      <a
                        href="https://wa.me/50230916027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
                      >
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rtGx2m4QEipJJ1Yifzp9QigOtu2rhZ.png"
                          alt="WhatsApp"
                          width={32}
                          height={32}
                          className="brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                      <a
                        href="https://gt.linkedin.com/in/academia-de-proyectos-08834b312"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-oxford-700/50 hover:bg-oxford-600/50 transition-colors group"
                      >
                        <Linkedin className="h-5 w-5 text-oxford-300 group-hover:text-solar-400" />
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

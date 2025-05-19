"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n, type Language } from "@/lib/i18n-context"

interface LanguageSwitcherProps {
  isScrolled?: boolean
}

export function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 px-2 py-1 transition-colors duration-500 ${
          isScrolled ? "text-oxford-600 hover:text-oxford-800" : "text-white hover:text-white/80"
        }`}
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-medium uppercase">{language}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-0 mt-2 w-24 rounded-md shadow-lg ${
              isScrolled ? "bg-white" : "bg-oxford-800/90 backdrop-blur-md"
            }`}
          >
            <div className="py-1">
              <button
                onClick={() => toggleLanguage("es")}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  isScrolled ? "text-oxford-600 hover:bg-gray-100" : "text-oxford-100 hover:bg-oxford-700/50"
                } ${language === "es" ? "font-bold" : ""}`}
              >
                <span className="mr-2">🇪🇸</span>
                Español
              </button>
              <button
                onClick={() => toggleLanguage("en")}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  isScrolled ? "text-oxford-600 hover:bg-gray-100" : "text-oxford-100 hover:bg-oxford-700/50"
                } ${language === "en" ? "font-bold" : ""}`}
              >
                <span className="mr-2">🇺🇸</span>
                English
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

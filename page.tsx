"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroGrid } from "@/components/hero-grid"
import { PartnersSlider } from "@/components/partners-slider"
import { ServiceCards } from "@/components/service-cards"
import { ServicesBackground } from "@/components/services-background"
import { CTASection } from "@/components/cta-section"
import { FeaturedProject } from "@/components/featured-project"
import { ProximosProyectos } from "@/components/proximos-proyectos"
import { ServicesHeader } from "@/components/services-header"
import { LoadingScreen } from "@/components/loading-screen"
import { useI18n } from "@/lib/i18n-context"

// Importar el componente LazyLoadWrapper
import { LazyLoadWrapper } from "@/components/lazy-load-wrapper"

// Modificar la estructura para usar LazyLoadWrapper en componentes no críticos
export default function Page() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-oxford-800">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Fondo global */}
      <div className="fixed inset-0">
        <ServicesBackground />
      </div>

      <div className="relative">
        <SiteHeader />
        <main>
          <HeroGrid />
          <section id="servicios" className="relative scroll-mt-16">
            <div className="relative mx-auto max-w-7xl px-6 py-24">
              <ServicesHeader />
              <ServiceCards />
            </div>
          </section>
          <LazyLoadWrapper>
            <FeaturedProject />
          </LazyLoadWrapper>
          <LazyLoadWrapper>
            <ProximosProyectos />
          </LazyLoadWrapper>
          <LazyLoadWrapper>
            <CTASection />
          </LazyLoadWrapper>
          <LazyLoadWrapper>
            <PartnersSlider />
          </LazyLoadWrapper>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

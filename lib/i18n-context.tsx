"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Tipos de idiomas soportados
export type Language = "es" | "en"

// Estructura de traducciones
type TranslationsType = {
  [key: string]: {
    [key in Language]: string
  }
}

// Diccionario de traducciones
// Aquí incluimos todas las cadenas de texto que aparecen en la aplicación
const translations: TranslationsType = {
  // Navegación
  "nav.services": {
    es: "SERVICIOS",
    en: "SERVICES",
  },
  "nav.projects": {
    es: "GDRs 2025-2026",
    en: "GDRs 2025-2026",
  },
  "nav.contact": {
    es: "CONTACTO",
    en: "CONTACT",
  },

  // Servicios
  "services.design": {
    es: "Diseño y Permisología",
    en: "Design and Permits",
  },
  "services.installation": {
    es: "Instalación y Logística",
    en: "Installation and Logistics",
  },
  "services.licenses": {
    es: "Gestión de Licencias",
    en: "License Management",
  },
  "services.title": {
    es: "Nuestros Servicios",
    en: "Our Services",
  },
  "services.subtitle": {
    es: "Cubrimos todas las partes del proceso para proyectos de energía solar, desde la planificación inicial hasta la implementación y gestion de licencias.",
    en: "We cover all parts of the process for solar energy projects, from initial planning to implementation and license management.",
  },

  // Hero
  "hero.title1": {
    es: "Desarrollo de",
    en: "Development of",
  },
  "hero.title2": {
    es: "Parques Solares",
    en: "Solar Parks",
  },
  "hero.subtitle": {
    es: "a mediana y gran escala (GDRs)",
    en: "medium and large scale (GDRs)",
  },

  // Certificaciones
  "certifications.title": {
    es: "Normativas",
    en: "Standards",
  },
  "certifications.description": {
    es: "Gestionamos eficientemente plantas fotovoltaicas EPC, desde permisos hasta operación.",
    en: "We efficiently manage EPC photovoltaic plants, from permits to operation.",
  },
  "certifications.label": {
    es: "Certificaciones:",
    en: "Certifications:",
  },
  "certifications.item1": {
    es: "Diseño Fotovoltaico Avanzado y el NEC (Sistemas interactivos)",
    en: "Advanced Photovoltaic Design and NEC (Interactive Systems)",
  },
  "certifications.item2": {
    es: "Fundamentos de Sistemas Fotovoltaicos Basados en Baterías",
    en: "Fundamentals of Battery-Based Photovoltaic Systems",
  },

  // Secciones de servicios
  "services.header.discover": {
    es: "Descubre",
    en: "Discover",
  },
  "services.header.ourServices": {
    es: "Nuestros Servicios",
    en: "Our Services",
  },

  // Estadísticas
  "stats.advisors": {
    es: "Asesores han hecho proyectos",
    en: "Advisors have completed projects",
  },
  "stats.watts": {
    es: "Watts en paneles vendidos",
    en: "Watts in panels sold",
  },
  "stats.projects": {
    es: "Proyectos Realizados",
    en: "Completed Projects",
  },

  // Tarjetas de servicios
  "serviceCards.design.title": {
    es: "Diseño y Permisología",
    en: "Design and Permits",
  },
  "serviceCards.design.description": {
    es: "Análisis detallado de viabilidad financiera y técnica para asegurar el mejor rendimiento.",
    en: "Detailed analysis of financial and technical viability to ensure the best performance.",
  },
  "serviceCards.construction.title": {
    es: "Construcción y Logística",
    en: "Construction and Logistics",
  },
  "serviceCards.construction.description": {
    es: "Implementación física del parque solar con equipo altamente calificado.",
    en: "Physical implementation of the solar park with highly qualified equipment.",
  },
  "serviceCards.licenses.title": {
    es: "Gestión de Licencias",
    en: "License Management",
  },
  "serviceCards.licenses.description": {
    es: "Proceso completo de certificación y autorización para interconexión.",
    en: "Complete certification and authorization process for interconnection.",
  },
  "serviceCards.viewMore": {
    es: "Ver más",
    en: "View more",
  },

  // Proceso de instalación
  "installation.title": {
    es: "Proceso de Instalación",
    en: "Installation Process",
  },
  "installation.step1.title": {
    es: "Hincado",
    en: "Piling",
  },
  "installation.step1.description": {
    es: "Instalación de estructuras de soporte para máxima estabilidad",
    en: "Installation of support structures for maximum stability",
  },
  "installation.step2.title": {
    es: "Ensamblado",
    en: "Assembly",
  },
  "installation.step2.description": {
    es: "Armado preciso de estructura metálica",
    en: "Precise assembly of metal structure",
  },
  "installation.step3.title": {
    es: "Montaje de Paneles",
    en: "Panel Mounting",
  },
  "installation.step3.description": {
    es: "Colocación optimizada para máximo rendimiento",
    en: "Optimized placement for maximum performance",
  },
  "installation.step4.title": {
    es: "Cableado DC/AC",
    en: "DC/AC Wiring",
  },
  "installation.step4.description": {
    es: "Interconexión eficiente de sistemas eléctricos",
    en: "Efficient interconnection of electrical systems",
  },
  "installation.step5.title": {
    es: "Conexión Subestación",
    en: "Substation Connection",
  },
  "installation.step5.description": {
    es: "Instalación segura para transferencia de energía",
    en: "Safe installation for energy transfer",
  },
  "installation.step6.title": {
    es: "Integración",
    en: "Integration",
  },
  "installation.step6.description": {
    es: "Sistemas de monitoreo y control remoto",
    en: "Monitoring and remote control systems",
  },

  // CTA
  "cta.title": {
    es: "¿Listo para transformar tu energía?",
    en: "Ready to transform your energy?",
  },
  "cta.description": {
    es: "En ADEP INGENIERía, nos especializamos en el diseño, instalación y puesta en marcha de parques solares bajo las normativas NEC y Caribe aplicadas a energía solar. Nuestro compromiso es brindar soluciones energéticas eficientes, seguras y sostenibles para nuestros clientes, asegurando el cumplimiento de los más altos estándares de calidad y regulación.",
    en: "At ADEP ENGINEERING, we specialize in the design, installation, and commissioning of solar parks under NEC and Caribbean regulations applied to solar energy. Our commitment is to provide efficient, safe, and sustainable energy solutions for our clients, ensuring compliance with the highest standards of quality and regulation.",
  },
  "cta.button": {
    es: "Solicitar consulta gratuita",
    en: "Request free consultation",
  },

  // Proyecto destacado
  "featuredProject.inProgress": {
    es: "En Ejecución",
    en: "In Progress",
  },
  "featuredProject.project": {
    es: "Proyecto",
    en: "Project",
  },
  "featuredProject.largeScale": {
    es: "Gran Escala",
    en: "Large Scale",
  },
  "featuredProject.solarPark": {
    es: "Parque Solar Guatemala, Jutiapa",
    en: "Guatemala,Jutiapa Solar Park",
  },
  "featuredProject.joinTitle": {
    es: "Únete al Futuro de la Energía Solar",
    en: "Join the Future of Solar Energy",
  },
  "featuredProject.description": {
    es: "El Parque Solar Jutiapa marca una nueva era para la energía limpia en Guatemala. Forma parte del crecimiento de parques solares en el país y contribuye a los esfuerzos de Generación Distribuida Renovable (GDRs). Con tecnología de punta y enfoque sostenible, impulsa el desarrollo económico, crea empleo local y fortalece la matriz energética renovable, posicionando a Guatemala como referente en energía solar en la región.",
    en: "The Jutiapa Solar Park represents a new era in clean energy generation in the region. With cutting-edge technology and a commitment to sustainability, this project will not only transform the local energy landscape but also create significant employment and economic development opportunities.",
  },
  "featuredProject.benefit1": {
    es: "Capacitación técnica especializada",
    en: "Specialized technical training",
  },
  "featuredProject.benefit2": {
    es: "Oportunidades de crecimiento profesional",
    en: "Professional growth opportunities",
  },
  "featuredProject.benefit3": {
    es: "Participación en un proyecto innovador",
    en: "Participation in an innovative project",
  },
  "featuredProject.benefit4": {
    es: "Beneficios competitivos",
    en: "Competitive benefits",
  },
  "featuredProject.capacity": {
    es: "Capacidad Total",
    en: "Total Capacity",
  },
  "featuredProject.operations": {
    es: "Inicio de Operaciones",
    en: "Start of Operations",
  },
  "featuredProject.jobs": {
    es: "Empleos Generados",
    en: "Jobs Generated",
  },
  "featuredProject.inverters": {
    es: "Inversores Huawei",
    en: "Huawei Inverters",
  },
  "featuredProject.panels": {
    es: "Paneles Instalados",
    en: "Installed Panels",
  },

  // Próximos proyectos
  "upcomingProjects.title": {
    es: "Próximos",
    en: "Upcoming",
  },
  "upcomingProjects.subtitle": {
    es: "Proyectos",
    en: "Projects",
  },
  "upcomingProjects.description": {
    es: "Conoce nuestros futuros desarrollos de energía renovable",
    en: "Learn about our future renewable energy developments",
  },

  // Partners
  "partners.our": {
    es: "Nuestras",
    en: "Our",
  },
  "partners.alliances": {
    es: "Alianzas",
    en: "Alliances",
  },
  "partners.description": {
    es: "Trabajamos con los mejores socios de la industria para garantizar la más alta calidad",
    en: "We work with the best partners in the industry to ensure the highest quality",
  },

  // CTA Section
  "ctaSection.description": {
    es: "Transformamos la energía solar en soluciones inteligentes y sostenibles. Contáctanos y descubre cómo podemos ayudarte a hacer realidad tu proyecto solar con tecnología de punta y normativas NEC.",
    en: "We transform solar energy into smart and sustainable solutions. Contact us and discover how we can help you make your solar project a reality with cutting-edge technology and NEC regulations.",
  },
  "ctaSection.button": {
    es: "Comunicarse con un experto",
    en: "Contact an expert",
  },

  // Footer
  "footer.description": {
    es: "Transformando el futuro energético con soluciones solares innovadoras y sostenibles bajo los más altos estándares de calidad.",
    en: "Transforming the energy future with innovative and sustainable solar solutions under the highest quality standards.",
  },
  "footer.quickLinks": {
    es: "Enlaces Rápidos",
    en: "Quick Links",
  },
  "footer.contact": {
    es: "Contacto",
    en: "Contact",
  },
  "footer.newsletter": {
    es: "Mantente Informado",
    en: "Stay Informed",
  },
  "footer.newsletterDesc": {
    es: "Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones.",
    en: "Subscribe to our newsletter to receive the latest news and updates.",
  },
  "footer.subscribe": {
    es: "Suscribirse",
    en: "Subscribe",
  },
  "footer.emailPlaceholder": {
    es: "Tu correo electrónico",
    en: "Your email",
  },
  "footer.rights": {
    es: "Todos los derechos reservados.",
    en: "All rights reserved.",
  },
  "footer.privacy": {
    es: "Política de Privacidad",
    en: "Privacy Policy",
  },
  "footer.terms": {
    es: "Términos de Servicio",
    en: "Terms of Service",
  },
  "footer.featuredProject": {
    es: "Proyecto Destacado",
    en: "Featured Project",
  },

  // Página de Diseño y Permisología
  "preProyectos.hero.title": {
    es: "Diseño",
    en: "Design",
  },
  "preProyectos.hero.subtitle": {
    es: "y Permisología",
    en: "and Permits",
  },
  "preProyectos.hero.description": {
    es: "Este etapa tiene como objetivo obtener:",
    en: "This stage aims to obtain:",
  },
  "preProyectos.hero.item1": {
    es: "Dictamen de capacidad y conexion",
    en: "Capacity and connection assessment",
  },
  "preProyectos.hero.item2": {
    es: "Licencia Ambiental.",
    en: "Environmental License.",
  },
  "preProyectos.hero.item3": {
    es: "Resolucion de exencion de impuestos",
    en: "Tax exemption resolution",
  },
  "preProyectos.hero.item4": {
    es: "Diseno tecnico avanzado del parque",
    en: "Advanced technical design of the park",
  },
  "preProyectos.hero.item5": {
    es: "Diseno financiero del parque.",
    en: "Financial design of the park.",
  },
  "preProyectos.hero.cta": {
    es: "Solicitar consulta",
    en: "Request consultation",
  },

  // Contenido de la página de Diseño y Permisología
  "preProyectos.content.title1": {
    es: "Proceso de",
    en: "Process of",
  },
  "preProyectos.content.title2": {
    es: "Diseño y Permisología",
    en: "Design and Permits",
  },
  "preProyectos.content.subtitle": {
    es: "Desarrollo completo del proyecto solar desde la concepción hasta la implementación",
    en: "Complete development of the solar project from conception to implementation",
  },

  // Fases
  "preProyectos.phase1.title": {
    es: "Fase 1",
    en: "Phase 1",
  },
  "preProyectos.phase1.duration": {
    es: "3 meses",
    en: "3 months",
  },
  "preProyectos.phase1.description": {
    es: "Diseño básico y estudios preliminares",
    en: "Basic design and preliminary studies",
  },

  "preProyectos.phase1.step1.title": {
    es: "Diseño básico del parque solar",
    en: "Basic design of the solar park",
  },
  "preProyectos.phase1.step1.description": {
    es: "Desarrollo del concepto inicial y planificación básica del parque solar, incluyendo distribución preliminar y estimaciones de capacidad.",
    en: "Development of the initial concept and basic planning of the solar park, including preliminary layout and capacity estimates.",
  },

  "preProyectos.phase1.step2.title": {
    es: "Estudio Impacto Ambiental",
    en: "Environmental Impact Study",
  },
  "preProyectos.phase1.step2.description": {
    es: "Evaluación detallada del impacto ambiental del proyecto que se entrega al MARN (Ministerio de Ambiente y Recursos Naturales).",
    en: "Detailed assessment of the environmental impact of the project that is delivered to MARN (Ministry of Environment and Natural Resources).",
  },

  "preProyectos.phase1.step3.title": {
    es: "Expediente dictamen de conexión",
    en: "Connection assessment file",
  },
  "preProyectos.phase1.step3.description": {
    es: "Preparación y entrega del expediente técnico a la empresa eléctrica para obtener el dictamen de capacidad y conexión.",
    en: "Preparation and delivery of the technical file to the electric company to obtain the capacity and connection assessment.",
  },

  "preProyectos.phase1.step4.title": {
    es: "Prefactibilidad Financiera",
    en: "Financial Prefeasibility",
  },
  "preProyectos.phase1.step4.description": {
    es: "Análisis preliminar de viabilidad económica, estimación de costos, retorno de inversión y proyecciones financieras.",
    en: "Preliminary analysis of economic viability, cost estimation, return on investment and financial projections.",
  },

  "preProyectos.phase1.step5.title": {
    es: "Documentación legal",
    en: "Legal documentation",
  },
  "preProyectos.phase1.step5.description": {
    es: "Preparación de todos los documentos legales necesarios para el proyecto, incluyendo contratos, permisos y acuerdos.",
    en: "Preparation of all legal documents necessary for the project, including contracts, permits and agreements.",
  },

  "preProyectos.phase2.title": {
    es: "Fase 2",
    en: "Phase 2",
  },
  "preProyectos.phase2.duration": {
    es: "3-5 meses",
    en: "3-5 months",
  },
  "preProyectos.phase2.description": {
    es: "Pruebas técnicas y diseño avanzado",
    en: "Technical tests and advanced design",
  },

  "preProyectos.phase2.step1.title": {
    es: "Pull out test (PTO)",
    en: "Pull out test (PTO)",
  },
  "preProyectos.phase2.step1.description": {
    es: "Pruebas de resistencia a la extracción para determinar la capacidad de carga y estabilidad de las estructuras de soporte.",
    en: "Extraction resistance tests to determine the load capacity and stability of the support structures.",
  },

  "preProyectos.phase2.step2.title": {
    es: "Pruebas de hincado",
    en: "Piling tests",
  },
  "preProyectos.phase2.step2.description": {
    es: "Evaluación de la instalación de estructuras de soporte en el terreno para garantizar estabilidad y resistencia.",
    en: "Evaluation of the installation of support structures on the ground to ensure stability and resistance.",
  },

  "preProyectos.phase2.step3.title": {
    es: "Estudio de suelos",
    en: "Soil study",
  },
  "preProyectos.phase2.step3.description": {
    es: "Análisis detallado de las características del terreno para determinar su idoneidad y requisitos específicos de cimentación.",
    en: "Detailed analysis of the terrain characteristics to determine its suitability and specific foundation requirements.",
  },

  "preProyectos.phase2.step4.title": {
    es: "Solicitud de exención de impuestos",
    en: "Tax exemption request",
  },
  "preProyectos.phase2.step4.description": {
    es: "Preparación y entrega de documentación al MEM y a la SAT para obtener beneficios fiscales aplicables a proyectos de energía renovable.",
    en: "Preparation and delivery of documentation to MEM and SAT to obtain tax benefits applicable to renewable energy projects.",
  },

  "preProyectos.phase2.step5.title": {
    es: "Ingeniería de Compras",
    en: "Procurement Engineering",
  },
  "preProyectos.phase2.step5.description": {
    es: "Planificación y gestión de adquisiciones de equipos y materiales, optimizando costos y calidad para el proyecto.",
    en: "Planning and management of equipment and materials procurement, optimizing costs and quality for the project.",
  },

  "preProyectos.phase2.step6.title": {
    es: "Diseño avanzado del parque solar",
    en: "Advanced design of the solar park",
  },
  "preProyectos.phase2.step6.description": {
    es: "Desarrollo detallado de la ingeniería del proyecto, incluyendo especificaciones técnicas, planos y cálculos finales.",
    en: "Detailed development of the project engineering, including technical specifications, plans and final calculations.",
  },

  // Diseño Fotovoltaico
  "preProyectos.photovoltaic.title1": {
    es: "Diseño",
    en: "Design",
  },
  "preProyectos.photovoltaic.title2": {
    es: "Fotovoltaico",
    en: "Photovoltaic",
  },
  "preProyectos.photovoltaic.subtitle": {
    es: "Diseño técnico avanzado basado en pruebas de ingeniería",
    en: "Advanced technical design based on engineering tests",
  },
  "preProyectos.photovoltaic.description": {
    es: "Te damos un diseño técnico avanzado de tu parque solar basado en las resultados en las pruebas de ingeniería, para obtener un diseño óptimo que contemple todos campos que afecten a un parque solar.",
    en: "We provide you with an advanced technical design of your solar park based on the results of engineering tests, to obtain an optimal design that contemplates all fields that affect a solar park.",
  },
  "preProyectos.photovoltaic.whatWeDesign": {
    es: "¿Qué diseñamos?",
    en: "What do we design?",
  },
  "preProyectos.photovoltaic.item1": {
    es: "Diseño de estructura",
    en: "Structure design",
  },
  "preProyectos.photovoltaic.item2": {
    es: "Diseño eléctrico",
    en: "Electrical design",
  },
  "preProyectos.photovoltaic.item3": {
    es: "Monitorización",
    en: "Monitoring",
  },
  "preProyectos.photovoltaic.item4": {
    es: "Comisionado y puesta en marcha parque",
    en: "Commissioning and start-up of the park",
  },
  "preProyectos.photovoltaic.item5": {
    es: "Producción",
    en: "Production",
  },

  // CTA de la página de Diseño y Permisología
  "preProyectos.cta.title": {
    es: "¿Listo para iniciar su proyecto solar?",
    en: "Ready to start your solar project?",
  },
  "preProyectos.cta.button": {
    es: "Contactar ahora",
    en: "Contact now",
  },

  // Página de Instalación y Logística
  "instalacion.hero.title": {
    es: "Construcción",
    en: "Construction",
  },
  "instalacion.hero.subtitle": {
    es: "y Logística",
    en: "and Logistics",
  },
  "instalacion.hero.description": {
    es: "Contamos con un equipo altamente calificado para la implementación física del parque solar, asegurando eficiencia y precisión en cada fase del montaje.",
    en: "We have a highly qualified team for the physical implementation of the solar park, ensuring efficiency and precision in each phase of the assembly.",
  },
  "instalacion.hero.cta": {
    es: "Solicitar consulta",
    en: "Request consultation",
  },

  // Contenido de la página de Instalación y Logística
  "instalacion.content.title1": {
    es: "Proceso de",
    en: "Process of",
  },
  "instalacion.content.title2": {
    es: "Construcción y Logística",
    en: "Construction and Logistics",
  },
  "instalacion.content.subtitle": {
    es: "Implementación física del parque solar con equipo altamente calificado",
    en: "Physical implementation of the solar park with highly qualified team",
  },

  // Pasos del proceso de instalación
  "instalacion.step1.title": {
    es: "Hincado",
    en: "Piling",
  },
  "instalacion.step1.description": {
    es: "Instalación de estructuras de soporte para garantizar estabilidad y resistencia de los paneles solares.",
    en: "Installation of support structures to ensure stability and resistance of solar panels.",
  },
  "instalacion.step2.title": {
    es: "Ensamblado de Estructura",
    en: "Structure Assembly",
  },
  "instalacion.step2.description": {
    es: "Armado de la estructura metálica sobre la cual se montan los paneles solares, siguiendo las normativas de seguridad y calidad.",
    en: "Assembly of the metal structure on which the solar panels are mounted, following safety and quality regulations.",
  },
  "instalacion.step3.title": {
    es: "Montaje de Paneles",
    en: "Panel Mounting",
  },
  "instalacion.step3.description": {
    es: "Colocación y fijación de paneles solares con técnicas especializadas para optimizar su rendimiento y durabilidad.",
    en: "Placement and fixing of solar panels with specialized techniques to optimize their performance and durability.",
  },
  "instalacion.step4.title": {
    es: "Cableado en DC y AC",
    en: "DC and AC Wiring",
  },
  "instalacion.step4.description": {
    es: "Interconexión de los sistemas de corriente directa y corriente alterna para la distribución eficiente de la energía generada.",
    en: "Interconnection of direct current and alternating current systems for efficient distribution of generated energy.",
  },
  "instalacion.step5.title": {
    es: "Conexión de Subestación",
    en: "Substation Connection",
  },
  "instalacion.step5.description": {
    es: "Instalación y configuración de la subestación para garantizar la transferencia de energía segura y estable.",
    en: "Installation and configuration of the substation to ensure safe and stable energy transfer.",
  },
  "instalacion.step6.title": {
    es: "Integración y Comunicación del Parque",
    en: "Park Integration and Communication",
  },
  "instalacion.step6.description": {
    es: "Implementación de sistemas de monitoreo y control remoto para la supervisión y gestión eficiente del parque solar.",
    en: "Implementation of monitoring and remote control systems for efficient supervision and management of the solar park.",
  },

  // CTA de la página de Instalación y Logística
  "instalacion.cta.title": {
    es: "¿Listo para iniciar su proyecto solar?",
    en: "Ready to start your solar project?",
  },
  "instalacion.cta.button": {
    es: "Contactar ahora",
    en: "Contact now",
  },

  // Página de Gestión de Licencias
  "licencias.hero.title": {
    es: "Gestión de",
    en: "Management of",
  },
  "licencias.hero.subtitle": {
    es: "Licencias",
    en: "Licenses",
  },
  "licencias.hero.description": {
    es: "Proceso completo de certificación y autorización para la interconexión del parque solar a la red eléctrica, asegurando el cumplimiento de los requisitos legales y regulatorios.",
    en: "Complete certification and authorization process for the interconnection of the solar park to the electrical grid, ensuring compliance with legal and regulatory requirements.",
  },
  "licencias.hero.cta": {
    es: "Solicitar consulta",
    en: "Request consultation",
  },

  // Contenido de la página de Gestión de Licencias
  "licencias.content.title1": {
    es: "Gestión de Licencia",
    en: "License Management",
  },
  "licencias.content.title2": {
    es: "de Conexión",
    en: "of Connection",
  },
  "licencias.content.subtitle": {
    es: "Proceso completo de certificación y autorización para interconexión",
    en: "Complete certification and authorization process for interconnection",
  },

  // Detalles de Gestión de Conexión
  "licencias.connection.title": {
    es: "Gestión de Conexión",
    en: "Connection Management",
  },
  "licencias.connection.description": {
    es: "Nos encargamos de todo el proceso de certificación y autorización para la interconexión del parque solar a la red eléctrica, asegurando el cumplimiento de los requisitos legales y regulatorios.",
    en: "We take care of the entire certification and authorization process for the interconnection of the solar park to the electrical grid, ensuring compliance with legal and regulatory requirements.",
  },

  // CTA de la página de Gestión de Licencias
  "licencias.cta.title": {
    es: "¿Listo para iniciar su proyecto solar?",
    en: "Ready to start your solar project?",
  },
  "licencias.cta.button": {
    es: "Contactar ahora",
    en: "Contact now",
  },

  // Página de Contacto
  "contact.title1": {
    es: "Contacta con",
    en: "Contact",
  },
  "contact.title2": {
    es: "Nuestro Equipo",
    en: "Our Team",
  },
  "contact.subtitle": {
    es: "Estamos aquí para ayudarte con tu proyecto de energía solar",
    en: "We are here to help you with your solar energy project",
  },
  "contact.form.firstName": {
    es: "Nombre",
    en: "First Name",
  },
  "contact.form.lastName": {
    es: "Apellido",
    en: "Last Name",
  },
  "contact.form.email": {
    es: "Correo electrónico",
    en: "Email",
  },
  "contact.form.phone": {
    es: "Teléfono",
    en: "Phone",
  },
  "contact.form.preferredDate": {
    es: "Fecha preferida de contacto",
    en: "Preferred contact date",
  },
  "contact.form.message": {
    es: "Mensaje",
    en: "Message",
  },
  "contact.form.messagePlaceholder": {
    es: "¿En qué podemos ayudarte?",
    en: "How can we help you?",
  },
  "contact.form.emailPlaceholder": {
    es: "tu@email.com",
    en: "your@email.com",
  },
  "contact.form.phonePlaceholder": {
    es: "+1 (123) 456-7890",
    en: "+1 (123) 456-7890",
  },
  "contact.form.submit": {
    es: "Contactar ahora",
    en: "Contact now",
  },
  "contact.form.sending": {
    es: "Enviando...",
    en: "Sending...",
  },
  "contact.form.success.title": {
    es: "¡Mensaje enviado con éxito!",
    en: "Message sent successfully!",
  },
  "contact.form.success.message": {
    es: "Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.",
    en: "Thank you for contacting us. We will get back to you as soon as possible.",
  },
  "contact.address": {
    es: "Ruta 4 5-58,\nCdad. de Guatemala",
    en: "Ruta 4 5-58,\nGuatemala City",
  },
}

// Tipo para el contexto
type I18nContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Crear el contexto
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Proveedor del contexto
export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  // Cargar preferencia de idioma del usuario si existe
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Guardar preferencia de idioma cuando cambia
  useEffect(() => {
    localStorage.setItem("language", language)
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = language
  }, [language])

  // Función para obtener traducciones
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language]
    }
    console.warn(`Translation missing for key: ${key} in language: ${language}`)
    return key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

// Hook para usar el contexto
export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

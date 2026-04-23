# AGENTS.md - Proyecto AKKIN Desarrollo de Parques Solares

## Información General

- **Proyecto**: AKKIN - Desarrollo e Instalación de Parques Solares Guatemala a Gran Escala
- **Stack**: Next.js, React, TypeScript
- **Framework UI**: Radix UI + Tailwind CSS + Framer Motion
- **Estado**: Proyecto activo de Site Corporate para empresa de energía solar

## Estructura del Proyecto

```
/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout (I18nProvider wrapping)
│   ├── servicios/
│   │   ├── gestion-de-licencias/
│   │   ├── instalacion-y-logistica/
│   │   └── pre-proyectos-y-permisos/
│   ├── contacto/
│   ├── blog-parques-solares/
│   ├── gdrs-guatemala/
│   └── blog/              # Artículos del blog
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes UI (Radix-based)
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── hero-grid.tsx
│   ├── service-cards.tsx
│   ├── featured-project.tsx
│   └── ...Más componentes
├── lib/
│   ├── i18n-context.tsx   # Sistema i18n completo
│   ├── i18n.ts          # Archivo vacío
│   ├── utils.ts
│   └── framer-animations.ts
└── public/
    └── images/
```

## Sistema i18n (Internacionalización)

### Implementación Custom (React Context)

El proyecto usa un sistema i18n custom basado en React Context (no usa next-intl ni otras librerías).

**Archivo principal**: `lib/i18n-context.tsx`

### Idiomas Soportados

- `es` - Español (default)
- `en` - Inglés

### Uso del Hook useI18n

```tsx
import { useI18n } from "@/lib/i18n-context"

function Componente() {
  const { t, language, setLanguage } = useI18n()
  
  // Obtener traducción
  const titulo = t("hero.title1")
  
  // Cambiar idioma
  setLanguage("en")
}
```

### Estructura de Traducciones

Todas las traducciones están en `lib/i18n-context.tsx`:

```typescript
type TranslationsType = {
  [key: string]: {
    [key in Language]: string
  }
}
```

### keys de Traducciones Principales

| Sección | Prefijo de key | Ejemplo |
|---------|---------------|---------|
| Navegación | `nav.` | `nav.services`, `nav.projects`, `nav.contact` |
| Hero | `hero.` | `hero.title1`, `hero.title2`, `hero.subtitle` |
| Servicios | `services.` | `services.title`, `services.design`, `services.installation` |
| Instalación | `installation.` | `installation.title`, `installation.step1.title` |
| Proyecto destacado | `featuredProject.` | `featuredProject.inProgress`, `featuredProject.capacity` |
| Footer | `footer.` | `footer.description`, `footer.quickLinks` |
| Contacto | `contact.` | `contact.title1`, `contact.form.firstName` |

### Persistencia de Idioma

- Se guarda en `localStorage` con la key `language`
- Se aplica al atributo `lang` del HTML `<html lang="es">`
- Por defecto: Español (`es`)

### Componente Language Switcher

Existe un componente para cambiar idioma: `components/language-switcher.tsx`

## Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Start producción
npm run start

# Lint
npm run lint
```

## Dependencias Principales

- `next`: 16.2.4
- `react`: 19.2.5
- `@radix-ui/*`: Varios componentes UI
- `framer-motion`: Animaciones
- `tailwindcss`: Estilos
- `lucide-react`: Iconos
- `react-hook-form` + `zod`: Formularios

## Convenciones de Código

- TypeScript strict
- Rutas con @ alias (configureado en tsconfig.json)
- Componentes UI en carpeta `components/ui/`
- Estilos con Tailwind CSS (no CSS modules)
- Imágenes en `public/images/`
- Metadatos SEO en `layout.tsx` (metadata export)

## Notas Importantes

1. El archivo `lib/i18n.ts` está vacío - toda la lógica está en `lib/i18n-context.tsx`
2. Para agregar nuevas traducciones, agregar al objeto `translations` en `i18n-context.tsx`
3. El componentes `I18nProvider` debe envolver a los children en el layout raíz
4. Usar el hook `useI18n()` dentro de componentes que están bajo el `I18nProvider`

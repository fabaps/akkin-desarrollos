#!/bin/bash
# Script para limpiar dependencias problemáticas

# Eliminar node_modules y caché
rm -rf node_modules
rm -rf .next
rm -rf .vercel

# Eliminar archivos de bloqueo
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Buscar y eliminar cualquier importación de react-day-picker o date-fns
find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.js" | xargs grep -l "react-day-picker\|date-fns" | xargs sed -i 's/.*react-day-picker.*//g; s/.*date-fns.*//g'

# Reinstalar dependencias
npm install

echo "Limpieza completa. Ahora intenta construir el proyecto nuevamente."

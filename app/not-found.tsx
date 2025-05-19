import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-oxford-800 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold text-oxford-100 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-oxford-200 mb-6">Página no encontrada</h3>
        <p className="text-oxford-300 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-solar-500 text-white rounded-md hover:bg-solar-600 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

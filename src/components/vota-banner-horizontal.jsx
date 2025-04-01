"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Calendar, ChevronRight, Check } from "lucide-react"

export const VotaBannerHorizontal = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  // Color salmón extraído de la imagen
  const salmonColor = "#FA8072"

  // Efecto de pulsación para el número 13
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full my-6 md:my-8">
      <Link to="/vota13" className="block">
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          {/* Fondo con gradiente */}
          <div
            className="absolute inset-0 bg-gradient-to-r"
            style={{
              background: `linear-gradient(90deg, ${salmonColor} 0%, #ff9f8d 100%)`,
            }}
          ></div>

          {/* Patrón decorativo */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          ></div>

          {/* Contenido del banner */}
          <div className="relative z-10 flex items-center justify-between p-3 md:p-4">
            {/* Número 13 destacado */}
            <div className={`relative flex-shrink-0 ${isAnimating ? "animate-pulse" : ""}`}>
              <div className="absolute -inset-1 bg-white/30 rounded-full blur-md"></div>
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: salmonColor }}>
                  13
                </div>
              </div>
            </div>

            {/* Texto principal */}
            <div className="ml-3 md:ml-4 flex-grow">
              <div className="flex items-center mb-0.5">
                <Calendar className="h-3 w-3 text-white mr-1" />
                <span className="text-white/90 text-xs">1 de junio</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white drop-shadow-md">¡VOTA POR SERGIO ARTURO!</h2>
            </div>

            {/* Cualidades */}
            <div className="hidden md:flex items-center space-x-2 mr-3">
              <div className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium inline-flex items-center">
                <Check className="h-3 w-3 mr-1" />
                Justo
              </div>
              <div className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium inline-flex items-center">
                <Check className="h-3 w-3 mr-1" />
                Claro
              </div>
            </div>

            {/* Botón de acción */}
            <div
              className="bg-white rounded-full px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium flex items-center group-hover:shadow-md transition-all"
              style={{ color: salmonColor }}
            >
              <span className="hidden md:inline">Conoce más</span>
              <span className="md:hidden">Más</span>
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Indicador de hover */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </Link>
    </div>
  )
}

export default VotaBannerHorizontal


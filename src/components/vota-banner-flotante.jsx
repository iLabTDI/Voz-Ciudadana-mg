"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Calendar, X } from "lucide-react"

export const VotaBannerFlotante = () => {
  const [isVisible, setIsVisible] = useState(true)

  // Color salmón extraído de la imagen
  const salmonColor = "#FA8072"

  // Si no es visible, no renderizar nada
  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-xs md:max-w-sm">
      <div className="relative rounded-xl overflow-hidden shadow-xl">
        {/* Fondo con gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${salmonColor}ee, ${salmonColor}aa, #ff9f8d)`,
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 10s ease infinite",
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
        <Link to="/vota13" className="block relative z-10 p-4">
          <div className="flex items-center mb-3">
            {/* Número 13 destacado - sin animación */}
            <div className="relative">
              <div className="absolute -inset-1 bg-white/30 rounded-full blur-md"></div>
              <div className="relative w-14 h-14 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: salmonColor }}>
                  13
                </div>
              </div>
            </div>

            {/* Texto principal */}
            <div className="ml-3">
              <div className="flex items-center mb-0.5">
                <Calendar className="h-3 w-3 text-white mr-1" />
                <span className="text-white/90 text-sm mr-10">1 de junio de 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-white drop-shadow-md">¡VOTA!</h2>
              <p className="text-white/90 text-base">Sergio Arturo Guerrero Olvera</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="text-white text-base">Boleta color salmón</p>
          </div>
        </Link>

        {/* Botón para cerrar */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsVisible(false)
          }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white hover:bg-white/50 transition-colors z-50"
          aria-label="Cerrar banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default VotaBannerFlotante


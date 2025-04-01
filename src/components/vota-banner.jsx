"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Calendar, ChevronRight } from "lucide-react"

export const VotaBanner = () => {
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
    <div className="w-full my-8 md:my-12">
      <Link to="/vota13" className="block">
        <div className="relative overflow-hidden rounded-2xl shadow-xl group">
          {/* Fondo con gradiente */}
          <div
            className="absolute inset-0 bg-gradient-to-r"
            style={{
              background: `linear-gradient(135deg, ${salmonColor}ee 0%, ${salmonColor}aa 50%, #ff9f8d 100%)`,
              backgroundSize: "200% 200%",
              animation: "gradientAnimation 15s ease infinite",
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
          <div className="relative z-10 flex items-center justify-between p-6 md:p-8">
            <div className="flex items-center">
              {/* Número 13 destacado */}
              <div className={`relative ${isAnimating ? "animate-pulse" : ""}`}>
                <div className="absolute -inset-1 bg-white/30 rounded-full blur-md"></div>
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white">
                  <div className="text-3xl md:text-5xl font-bold" style={{ color: salmonColor }}>
                    13
                  </div>
                </div>
              </div>

              {/* Texto principal */}
              <div className="ml-4 md:ml-6">
                <div className="flex items-center mb-1">
                  <Calendar className="h-4 w-4 text-white mr-2" />
                  <span className="text-white/90 text-sm">1 de junio de 2024</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
                  ¡VOTA POR LA JUSTICIA ELECTORAL!
                </h2>
                <p className="text-white/90 text-sm md:text-base mt-1">
                  Sergio Arturo Guerrero Olvera • Justo, claro y cercano
                </p>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-5 py-3 text-white font-medium flex items-center group-hover:bg-white/30 transition-all">
                Conoce más
                <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Elemento decorativo */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 blur-xl"></div>

          {/* Indicador de hover */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </Link>

    </div>
  )
}

export default VotaBanner


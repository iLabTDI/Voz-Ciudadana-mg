"use client"

import { useState, useEffect } from "react"
import { Check, MapPin, Calendar, ChevronRight, X } from "lucide-react"

export const VotaPromocion = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Color salmón extraído de la imagen
  const salmonColor = "#FA8072"

  // Estados que aparecen en la promoción
  const estados = [
    "Baja California",
    "Baja California Sur",
    "Sinaloa",
    "Sonora",
    "Chihuahua",
    "Durango",
    "Jalisco",
    "Nayarit",
  ]

  // Frases destacadas
  const frases = [
    { texto: "Justicia honesta, austera y oportuna", icono: <Check className="h-5 w-5" /> },
    { texto: "Lenguaje sencillo pero certero", icono: <Check className="h-5 w-5" /> },
    { texto: "Independiente pero sensible", icono: <Check className="h-5 w-5" /> },
    { texto: "Comprobada honestidad", icono: <Check className="h-5 w-5" /> },
    { texto: "Justicia de calidad y moderna", icono: <Check className="h-5 w-5" /> },
    { texto: "Justicia transformadora", icono: <Check className="h-5 w-5" /> },
  ]

  // Cambiar slide automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === frases.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          {/* Fondo con gradiente salmón */}
          <div
            className="absolute inset-0 bg-gradient-to-br"
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

          {/* Contenido principal */}
          <div className="relative z-10 flex flex-col md:flex-row items-center p-4 md:p-6">
            {/* Imagen del candidato */}
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-white rounded-full transform rotate-3 opacity-50"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-white shadow-lg aspect-square max-w-[250px] mx-auto">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magistrado.jpg-8iW44ZGetDvQPYHPIhhyqPzExPEo3m.jpeg"
                    alt="Sergio Arturo Guerrero Olvera"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Número 13 destacado */}
                <div
                  className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-4"
                  style={{ borderColor: salmonColor }}
                >
                  <div className="text-2xl md:text-4xl font-bold" style={{ color: salmonColor }}>
                    13
                  </div>
                </div>
              </div>
            </div>

            {/* Información de la campaña */}
            <div className="md:w-2/3 md:pl-6 text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left drop-shadow-md">
                ¡VOTA{" "}
                <span className="text-3xl md:text-5xl" style={{ color: "#FFD700" }}>
                  13
                </span>
                !
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Sergio Arturo Guerrero Olvera
              </h3>

              <p className="text-sm md:text-base mb-4 font-medium">
                Candidato a magistrado regional en la Sala Regional Guadalajara del Tribunal Electoral del Poder
                Judicial de la Federación.
              </p>

              {/* Estados */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-sm font-medium">Si eres de:</p>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {estados.map((estado, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm"
                    >
                      {estado}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frases destacadas */}
              <div className="relative h-8 md:h-10 overflow-hidden mb-4">
                {frases.map((frase, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                        {frase.icono}
                      </div>
                      <p className="font-medium text-sm md:text-base">{frase.texto}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Llamado a la acción */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-3 md:mb-0">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <p className="text-sm font-medium">1 de junio - Boleta color salmón</p>
                  </div>
                </div>

                <button
                  className="px-4 py-2 rounded-full bg-white text-sm md:text-base font-bold flex items-center shadow-md hover:shadow-lg transition-all"
                  style={{ color: salmonColor }}
                >
                  Justo, claro y cercano
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Botón para cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            aria-label="Cerrar promoción"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Estilos para la animación del gradiente */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </div>
  )
}

export default VotaPromocion


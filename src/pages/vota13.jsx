"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Check, Calendar, MapPin, Award, ChevronRight, ExternalLink } from "lucide-react"

export const Vota13Page = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

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

  // Propuestas y cualidades
  const propuestas = [
    { titulo: "Justicia honesta", descripcion: "Transparencia en cada decisión y proceso judicial." },
    { titulo: "Justicia austera", descripcion: "Optimización de recursos sin sacrificar la calidad." },
    { titulo: "Justicia oportuna", descripcion: "Resoluciones en tiempo adecuado para garantizar efectividad." },
    { titulo: "Lenguaje sencillo", descripcion: "Comunicación clara y accesible para todos los ciudadanos." },
    { titulo: "Independencia", descripcion: "Decisiones basadas únicamente en la ley y los hechos." },
    { titulo: "Sensibilidad", descripcion: "Comprensión de las realidades sociales en cada caso." },
  ]

  // Reproducir/pausar video
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Fondo con textura */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('/patterns/paper-texture.png')", backgroundRepeat: "repeat" }}
      ></div>

      {/* Header */}
      <header className="bg-gradient-to-r from-law-600 to-law-700 text-white py-4 md:py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-gold-300 transition-colors group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center mr-2 md:mr-3 group-hover:bg-white/20 transition-all">
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span className="font-medium text-sm md:text-base">Volver al inicio</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold">Vota 13</h1>
            <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shadow-md overflow-hidden">
              <img src="/images/mexican-flag.svg" alt="Bandera de México" className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-90"
          style={{
            background: `linear-gradient(135deg, ${salmonColor}ee, ${salmonColor}aa, #ff9f8d)`,
          }}
        ></div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1920&h=1080&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -top-4 -left-4 w-full h-full bg-white rounded-2xl transform rotate-3 opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-white rounded-2xl transform -rotate-3 opacity-50"></div>

                <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magistrado.jpg-8iW44ZGetDvQPYHPIhhyqPzExPEo3m.jpeg"
                    alt="Sergio Arturo Guerrero Olvera"
                    className="w-full h-auto"
                  />

                  {/* Número 13 destacado */}
                  <div
                    className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-8"
                    style={{ borderColor: salmonColor }}
                  >
                    <div className="text-5xl font-bold" style={{ color: salmonColor }}>
                      13
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <div className="inline-block mb-4 md:mb-6">
                <div
                  className="px-4 py-1 rounded-full bg-white inline-flex items-center shadow-md"
                  style={{ color: salmonColor }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="font-medium">1 de junio de 2024</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                VOTA{" "}
                <span className="text-5xl md:text-7xl" style={{ color: "#FFD700" }}>
                  13
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Sergio Arturo Guerrero Olvera</h2>

              <p className="text-lg md:text-xl mb-6 text-white font-medium">
                Candidato a magistrado regional en la Sala Regional Guadalajara del Tribunal Electoral del Poder
                Judicial de la Federación.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Justo
                </div>
                <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Claro
                </div>
                <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Cercano
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <button
                  className="px-6 py-3 rounded-full bg-white font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  style={{ color: salmonColor }}
                >
                  Conoce mis propuestas
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>

                <button className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold flex items-center justify-center hover:bg-white/30 transition-all">
                  Ver video
                  <ExternalLink className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estados Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-law-800 mb-4">
              Si eres de alguno de estos estados, esta información te interesa
            </h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">
              La Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación tiene jurisdicción
              sobre los siguientes estados:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {estados.map((estado, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-4 text-center shadow-md border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-law-500 flex items-center justify-center text-white mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-medium text-law-800">{estado}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={toggleVideo}>
                  <div className="aspect-video bg-slate-200 flex items-center justify-center">
                    <video
                      ref={videoRef}
                      poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-03-31%20a%20las%2014.13.32_41cfd4a4.jpg-ZORJ1MzPvTYWNgOOQOAH84viOqbzq0.jpeg"
                      className="w-full h-full object-cover"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src="#" type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>

                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-law-600 ml-1"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-law-800 mb-4">Mensaje del candidato</h2>
                <div className="h-1 w-16 bg-gold-500 mb-6 rounded-full"></div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    "Hola, te habla tu amigo Sergio Arturo Guerrero Olvera, orgullosamente candidato a magistrado
                    regional en la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la
                    Federación."
                  </p>
                  <p>
                    "He recorrido cada uno de los ocho estados que te mencioné, desde los 19 años he trabajado en la
                    impartición de justicia y hoy vengo a proponerte una justicia honesta, austera y oportuna, con
                    lenguaje sencillo pero certero, independiente pero sensible y sobre todo comprobada honestidad."
                  </p>
                  <p>
                    "Soy promotor de una justicia de calidad, moderna, digital, una justicia transformadora y ajustada a
                    los nuevos tiempos. Hoy la nueva realidad democrática exige una nueva justicia."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuestas Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-law-800 mb-4">
              Mis propuestas para una mejor justicia electoral
            </h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">
              Conoce los pilares fundamentales de mi candidatura para la Sala Regional Guadalajara
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {propuestas.map((propuesta, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-law-500 flex items-center justify-center text-white mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-law-800 mb-2">{propuesta.titulo}</h3>
                <p className="text-gray-600">{propuesta.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-gradient-to-br"
                style={{
                  background: `linear-gradient(135deg, ${salmonColor}ee, ${salmonColor}aa, #ff9f8d)`,
                }}
              ></div>

              <div className="relative z-10 p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Este 1 de junio, vota con el número 13</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  En la boleta de color salmón, casi melón, busca el número 13: Guerrero Olvera Sergio Arturo, justo,
                  claro y cercano.
                </p>

                <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full p-2 mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg mr-4">
                    <div className="text-3xl md:text-4xl font-bold" style={{ color: salmonColor }}>
                      13
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Boleta color salmón</p>
                    <p className="text-sm">Magistrado de Sala Regional</p>
                  </div>
                </div>

                <button
                  className="px-8 py-4 rounded-full bg-white font-bold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all mx-auto"
                  style={{ color: salmonColor }}
                >
                  Comparte este mensaje
                  <ExternalLink className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-law-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="mb-2">© 2024 Campaña Sergio Arturo Guerrero Olvera - Todos los derechos reservados</p>
          <p className="text-sm text-gray-400">
            Este material es de carácter informativo y no constituye propaganda electoral.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Vota13Page


"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Check,
  Calendar,
  MapPin,
  Award,
  ChevronRight,
  ExternalLink,
  Pause,
  Play,
  Share2,
  Loader2,
  Search,
  Info,
} from "lucide-react"

export const Vota13Page = () => {
  const videoRef = useRef(null)
  const videoSectionRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [showShareOptions, setShowShareOptions] = useState(false)

  // Color salmón extraído de la imagen
  const salmonColor = "#FA8072"

  // Estados que aparecen en la promoción con sus imágenes
  const estados = [
    {
      nombre: "Baja California",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yrew7qrlOv2CxpBLCpldxea7TvJgvk.png",
    },
    {
      nombre: "Baja California Sur",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yrew7qrlOv2CxpBLCpldxea7TvJgvk.png", // Usando la misma imagen por ahora
    },
    {
      nombre: "Sinaloa",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d5m87tAlsWOkxqnJmRoxi4ppforCcJ.png",
    },
    {
      nombre: "Sonora",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YVuOFai8HHaXEVkmOnBrJW0IKF6bBP.png",
    },
    {
      nombre: "Chihuahua",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-McsZorzNnTx5idEDaFvFBrcjdv9B3z.png",
    },
    {
      nombre: "Durango",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cs7l2FGa1QRsvtCJgIJVgHYglhMWC6.png",
    },
    {
      nombre: "Jalisco",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7e3t3whUBlu01Q5qbPN02yXv9z0Xqb.png",
    },
    {
      nombre: "Nayarit",
      imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GGF5qjwvZXGk0iusrvvLCaQUXqp9VX.png",
    },
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

  // Mensaje para compartir
  const shareMessage =
    "¡Vota por Sergio Arturo Guerrero Olvera con el número 13 este 1 de junio! Boleta color salmón para Magistrado de Sala Regional Guadalajara. Justo, claro y cercano. Visita: https://sergioarturo.mx #Vota13 #JusticiaElectoral"

  // Reproducir/pausar video manualmente
  const toggleVideo = (e) => {
    e.stopPropagation() // Evitar que el evento se propague

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Error al reproducir el video:", error)
          })
      }
    }
  }

  // Compartir en redes sociales
  const shareOnSocial = (platform) => {
    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareMessage)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(window.location.href)}`
        break
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage + " " + window.location.href)}`
        break
      default:
        // Usar la API Web Share si está disponible
        if (navigator.share) {
          navigator.share({
            title: "Vota 13 - Sergio Arturo Guerrero Olvera",
            text: shareMessage,
            url: window.location.href,
          })
          return
        }
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }

    setShowShareOptions(false)
  }

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Manejar eventos de carga del video
  useEffect(() => {
    const videoElement = videoRef.current

    if (videoElement) {
      const handleLoadStart = () => setIsVideoLoading(true)
      const handleCanPlay = () => setIsVideoLoading(false)

      videoElement.addEventListener("loadstart", handleLoadStart)
      videoElement.addEventListener("canplay", handleCanPlay)

      return () => {
        videoElement.removeEventListener("loadstart", handleLoadStart)
        videoElement.removeEventListener("canplay", handleCanPlay)
      }
    }
  }, [])

  // Configurar IntersectionObserver para detectar cuando el video está visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // El video se reproducirá cuando al menos el 50% sea visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVideoVisible(entry.isIntersecting)

        if (entry.isIntersecting && videoRef.current && !isPlaying) {
          // Reproducir video cuando sea visible
          videoRef.current
            .play()
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error) => {
              console.error("Error al reproducir el video:", error)
            })
        } else if (!entry.isIntersecting && videoRef.current && isPlaying) {
          // Pausar video cuando no sea visible
          videoRef.current.pause()
          setIsPlaying(false)
        }
      })
    }, options)

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current)
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current)
      }
    }
  }, [isPlaying])

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
            {/* <h1 className="text-xl md:text-2xl font-bold">Vota 13</h1> */}
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

                <a
                  href="#video-section"
                  className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold flex items-center justify-center hover:bg-white/30 transition-all"
                >
                  Ver video
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estados Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-law-800 mb-4">
              Si eres de alguno de estos estados, esta información te interesa
            </h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">
              La Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación tiene jurisdicción sobre los siguientes estados:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-4">
            {estados.map((estado, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-lg transition-all transform hover:scale-105 duration-300"
              >
                <div className="h-32 md:h-40 relative overflow-hidden">
                  <img
                    src={estado.imagen || "/placeholder.svg"}
                    alt={`Letras turísticas de ${estado.nombre}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center bg-white">
                  <h3 className="font-medium text-law-800">{estado.nombre}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Video Section */}
      <section id="video-section" ref={videoSectionRef} className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  {/* Video sin miniatura/poster */}
                  <div className=" bg-slate-800 flex items-center justify-center relative">
                    {/* Capa para hacer clic en todo el video */}
                    <div
                      className="absolute inset-0 z-10 cursor-pointer"
                      onClick={toggleVideo}
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                    ></div>

                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted={false}
                      playsInline
                      preload="auto"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src="/propuestas.mp4" type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>

                    {/* Indicador de carga */}
                    {isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
                        <div className="text-white text-center">
                          <Loader2 className="h-12 w-12 mx-auto mb-2 animate-spin" />
                          <p className="text-sm">Cargando video...</p>
                        </div>
                      </div>
                    )}

                    {/* Botón de control para pausar/reproducir */}
                    <button
                      onClick={toggleVideo}
                      className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all z-20"
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5 text-law-800" />
                      ) : (
                        <Play className="h-5 w-5 text-law-800 ml-0.5" />
                      )}
                    </button>

                    {/* Indicador de reproducción automática */}
                    {isVideoVisible && !isPlaying && !isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 z-15">
                        <div className="text-white text-center">
                          <Play className="h-16 w-16 mx-auto mb-2" />
                          <p className="text-sm">Haz clic para reproducir</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-law-800 mb-4">Mensaje del candidato</h2>
                  <div className="h-1 w-16 bg-gold-500 mb-6 rounded-full"></div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-law-50 to-white p-4 rounded-lg border-l-4 border-law-500">
                      <p className="text-gray-700 italic">
                        "Hola, te habla tu amigo Sergio Arturo Guerrero Olvera, orgullosamente candidato a magistrado
                        regional en la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la
                        Federación."
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-law-50 to-white p-4 rounded-lg border-l-4 border-gold-500">
                      <p className="text-gray-700 italic">
                        "He recorrido cada uno de los ocho estados que te mencioné, desde los 19 años he trabajado en la
                        impartición de justicia y hoy vengo a proponerte una justicia honesta, austera y oportuna, con
                        lenguaje sencillo pero certero, independiente pero sensible y sobre todo comprobada honestidad."
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-law-50 to-white p-4 rounded-lg border-l-4 border-law-500">
                      <p className="text-gray-700 italic">
                        "Soy promotor de una justicia de calidad, moderna, digital, una justicia transformadora y
                        ajustada a los nuevos tiempos. Hoy la nueva realidad democrática exige una nueva justicia."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuestas Section */}
      <section className="py-12 md:py-10 bg-white">
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

          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {propuestas.map((propuesta, index) => (
              <div
                key={index}
                className="bg-slate-50 flex flex-col items-center text-center rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-law-800 mb-2">{propuesta.titulo}</h3>
                <p className="text-gray-600 text-sm">{propuesta.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nueva sección: Próximamente ubica tu casilla (versión compacta) */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-4xl mx-auto text-center mb-6">
      <h2 className="text-xl md:text-3xl font-bold text-law-800 mb-2">
        Próximamente: Ubica tu casilla electoral
      </h2>
      <div className="h-1 w-20 bg-gold-500 mx-auto mb-3 rounded-full"></div>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm">
        Estamos preparando una herramienta para que encuentres fácilmente dónde votar el 1 de junio.
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 relative">
        {/* Fondo decorativo con calendario */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute -right-10 -bottom-10 w-64 h-64">
            <Calendar className="w-full h-full text-law-800" />
          </div>
          <div className="absolute -left-10 -top-10 w-64 h-64 transform rotate-180">
            <Calendar className="w-full h-full text-gold-500" />
          </div>
        </div>

        <div className="relative z-10 p-6 md:p-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-law-600 to-law-700 flex items-center justify-center text-white mb-4 shadow-md">
            <MapPin className="h-8 w-8" />
          </div>

          <h3 className="text-xl font-bold text-law-800 mb-1 text-center">
            Localizador de casillas electorales
          </h3>
          <p className="text-gray-600 text-center max-w-xl mb-4 text-sm">
            Pronto podrás consultar la ubicación exacta de tu casilla ingresando tu sección o dirección.
          </p>

          {/* Solo 2 cards para mantenerlo compacto */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-3xl mb-4">
            <div className="bg-law-50 rounded-xl p-4 text-center hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-law-100 flex items-center justify-center text-law-600 mx-auto mb-2">
                <MapPin className="h-5 w-5" />
              </div>
              <h4 className="font-medium text-law-700 mb-1 text-sm">Localiza tu casilla</h4>
              <p className="text-gray-600 text-xs">Encuentra la más cercana.</p>
            </div>

            <div className="bg-law-50 rounded-xl p-4 text-center hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-law-100 flex items-center justify-center text-law-600 mx-auto mb-2">
                <Search className="h-5 w-5" />
              </div>
              <h4 className="font-medium text-law-700 mb-1 text-sm">Consulta tu sección</h4>
              <p className="text-gray-600 text-xs">Revisa tu sección electoral.</p>
            </div>
          </div>

          {/* <div className="inline-flex items-center bg-gradient-to-r from-law-50 to-white rounded-full px-4 py-2 shadow-md border border-law-100">
            <Calendar className="h-4 w-4 text-law-600 mr-2" />
            <span className="text-law-700 font-medium text-sm">Disponible a partir del 15 de mayo</span>
          </div> */}

          <div className="mt-4">
            <button
              className="px-4 py-2 rounded-full bg-gradient-to-r from-law-600 to-law-700 text-white font-medium shadow-md opacity-70 cursor-not-allowed text-sm"
              disabled
            >
              Próximamente
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-12 md:py-15 bg-gradient-to-br from-[#ffe4e1] to-[#ffd5c2]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-lg">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${salmonColor}ee, ${salmonColor}cc, #ff9f8d)`,
                }}
              ></div>

              <div className="relative z-10 p-10 md:p-16 text-white text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
                  Este <span className="underline decoration-white/50">1 de junio</span>, vota con el número{" "}
                  <span className="text-white/90">13</span>
                </h2>

                <p className="text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-white/90">
                  En la boleta de color <span className="font-semibold">salmón (casi melón)</span>, busca el número{" "}
                  <span className="font-bold">13</span>: <br />
                  <span className="font-semibold">Guerrero Olvera Sergio Arturo</span>, una opción justa, clara y
                  cercana. <br />
                  <span className="italic">
                    ¡Tu voto hace la diferencia para una justicia electoral moderna y eficiente!
                  </span>
                </p>

                <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center mr-4 shadow-inner border border-white/50">
                    <div className="text-4xl md:text-5xl font-black" style={{ color: salmonColor }}>
                      13
                    </div>
                  </div>
                  <div className="text-left text-white/90">
                    <p className="font-semibold text-lg">Boleta color salmón</p>
                    <p className="text-sm italic">Magistrade de Sala Regional</p>
                  </div>
                </div>

                <div className="relative pt-4 flex justify-center">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: "Comparte este mensaje",
                          text: "Este 1 de junio, vota con el número 13: Guerrero Olvera Sergio Arturo. ¡Tu voto hace la diferencia!",
                          url: window.location.href,
                        })
                      } else {
                        window.prompt("Copia este enlace:", window.location.href)
                      }
                    }}
                    className="px-5 py-4 rounded-full bg-white text-lg font-bold text-salmon-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                    style={{ color: salmonColor }}
                  >
                    ¡Comparte este mensaje!
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
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


"use client"
import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export const Magistrado3D = ({ isWaiting, isTyping, lastBotMessage }) => {
  const [videoSrc, setVideoSrc] = useState("/videos/greeting.mp4")
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef(null)

  // Efecto para cambiar el video según el estado
  useEffect(() => {
    if (isWaiting) {
      setVideoSrc("/videos/waiting.mp4")
    } else if (isTyping) {
      setVideoSrc("/videos/responding.mp4")
    } else if (lastBotMessage) {
      setVideoSrc("/videos/responding.mp4")
      // Volver a "idle" después de 5s
      const timer = setTimeout(() => {
        setVideoSrc("/videos/greeting.mp4")
      }, 5000)
      return () => clearTimeout(timer)
    } else {
      setVideoSrc("/videos/greeting.mp4")
    }
  }, [isWaiting, isTyping, lastBotMessage])

  // Función para alternar el sonido
  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
      {/* Fondo decorativo con gradiente oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] z-0" />

      {/* Efectos de luz */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] rounded-full bg-purple-500/5 blur-2xl" />
      </div>

      {/* Patrón de fondo */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-5 z-1"></div>

      {/* Overlay con efecto de viñeta */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 z-1"></div>


      {/* Video del magistrado */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        />
      </div>

      {/* Controles flotantes */}
      <div
        className={`absolute bottom-6 right-6 z-30 flex items-center space-x-3 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 md:opacity-100"
        }`}
      >
        <button
          onClick={toggleMute}
          className="bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>

      {/* Indicador de estado */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm flex items-center border border-white/10 shadow-lg">
          <span
            className={`w-2 h-2 rounded-full mr-2 ${
              isTyping ? "bg-green-500 animate-pulse" : isWaiting ? "bg-amber-500 animate-pulse" : "bg-blue-400"
            }`}
          />
          <span className="font-medium">
            {isTyping ? "Respondiendo..." : isWaiting ? "Escuchando..." : "Listo para ayudar"}
          </span>
        </div>
      </div>

      {/* Efecto de brillo en los bordes */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/5 z-20"></div>
      <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.1)] z-20"></div>
    </div>
  )
}

export default Magistrado3D


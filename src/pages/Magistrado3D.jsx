"use client"
import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export const Magistrado3D = ({ isWaiting, isTyping, lastBotMessage }) => {
  // Por defecto el audio está activo (no muteado)
  const [videoSrc, setVideoSrc] = useState("/intro.mp4")
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [hasAudioPlayed, setHasAudioPlayed] = useState(false)
  const [isManualToggle, setIsManualToggle] = useState(false)
  const videoRef = useRef(null)

  // Cambio de video según el estado
  useEffect(() => {
    if (isWaiting) {
      setVideoSrc("/waiting.mp4")
    } else if (isTyping) {
      setVideoSrc("/responding.mp4")
    } else if (lastBotMessage) {
      setVideoSrc("/responding.mp4")
      const timer = setTimeout(() => {
        setVideoSrc("/intro.mp4")
      }, 5000)
      return () => clearTimeout(timer)
    } else {
      setVideoSrc("/intro.mp4")
    }
  }, [isWaiting, isTyping, lastBotMessage])

  // Efecto para marcar que se reprodujo el audio 3 segundos después de cargar
  useEffect(() => {
    if (!hasAudioPlayed && videoRef.current) {
      const timer = setTimeout(() => {
        if (!isManualToggle) {
          setIsMuted(false)
          videoRef.current.muted = false
          setHasAudioPlayed(true)
        }
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [hasAudioPlayed, isManualToggle])

  // Efecto para forzar el mute en el inicio de cada loop (solo después de la primera reproducción)
  useEffect(() => {
    const handleTimeUpdate = () => {
      if (hasAudioPlayed && !isManualToggle && videoRef.current && videoRef.current.currentTime < 1) {
        videoRef.current.muted = true
      }
    }
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate)
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate)
      }
    }
  }, [hasAudioPlayed, isManualToggle])

  // Función para alternar el sonido manualmente
  const toggleMute = () => {
    setIsManualToggle(true)
    setIsMuted((prev) => {
      const newMuted = !prev
      if (videoRef.current) {
        videoRef.current.muted = newMuted
      }
      return newMuted
    })
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
  

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
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

    </div>
  )
}

export default Magistrado3D

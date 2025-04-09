"use client"
import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export const Magistrado3D = ({ isWaiting, isTyping, lastBotMessage }) => {
  // Estados para controlar el video y audio
  const [videoSrc, setVideoSrc] = useState("/intro2.mp4")
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [videoState, setVideoState] = useState("intro") // posibles estados: intro, idle, waiting, responding
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isPlayingAnimation, setIsPlayingAnimation] = useState(false)

  const videoRef = useRef(null)
  const audioContext = useRef(null)
  const responseTimerRef = useRef(null)
  const transitionTimeoutRef = useRef(null)

  // Usar sessionStorage para detectar primera visita
  useEffect(() => {
    // Verificar si hay un contexto de audio existente para evitar errores en móviles
    try {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)()
    } catch (e) {
      console.error("El navegador no soporta AudioContext:", e)
    }

    const hasVisited = sessionStorage.getItem("hasVisitedMagistrado")
    
    if (!hasVisited) {
      // Primera visita: mostrar intro
      sessionStorage.setItem("hasVisitedMagistrado", "true")
      setIsFirstVisit(true)
      setVideoState("intro")
      setVideoSrc("/intro2.mp4")
      setIsMuted(false)
    } else {
      // No es primera visita: ir directo a idle
      setIsFirstVisit(false)
      setVideoState("idle")
      setVideoSrc("/idle.mp4")
    }

    // Limpieza
    return () => {
      clearAllTimers()
    }
  }, [])

  // Función para limpiar todos los temporizadores
  const clearAllTimers = () => {
    if (responseTimerRef.current) clearTimeout(responseTimerRef.current)
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
  }

  // Manejar el evento de finalización de videos
  useEffect(() => {
    const handleVideoEnded = () => {
      console.log(`Video ${videoSrc} finished playing`)
      
      if (videoState === "intro") {
        console.log("Intro video ended, transitioning to idle")
        transitionToState("idle")
      } else if (videoState === "waiting") {
        console.log("Waiting video ended")
        // Si estamos esperando pero ya hay respuesta y están escribiendo, ir a responding
        if (isTyping) {
          transitionToState("responding")
        } else {
          // Si terminó de esperar pero no hay typing, volver a idle
          transitionToState("idle")
        }
      }
      // Los estados idle y responding hacen loop, así que no necesitan manejarse aquí
    }

    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded)
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnded)
      }
    }
  }, [videoSrc, videoState, isTyping])

  // Función para transicionar entre estados con seguridad
  const transitionToState = (newState) => {
    console.log(`Transitioning from ${videoState} to ${newState}`)
    
    // Limpiar cualquier transición pendiente
    clearAllTimers()
    
    // Actualizar el estado y el src del video
    setVideoState(newState)
    
    // Actualizar la fuente del video según el estado
    switch (newState) {
      case "intro":
        setVideoSrc("/intro2.mp4")
        setIsMuted(false)
        break
      case "idle":
        setVideoSrc("/idle.mp4")
        setIsMuted(true) // Idle suele ser silencioso
        break
      case "waiting":
        setVideoSrc("/waiting.mp4")
        setIsMuted(false)
        break
      case "responding":
        setVideoSrc("/responding.mp4")
        setIsMuted(true) // Para no solapar con el audio del chat
        break
      default:
        setVideoSrc("/idle.mp4")
        setIsMuted(true)
    }
    
    // Marcar que estamos en transición para evitar cambios simultáneos
    setIsPlayingAnimation(true)
    
    // Después de un tiempo prudente, permitir nuevas transiciones
    transitionTimeoutRef.current = setTimeout(() => {
      setIsPlayingAnimation(false)
    }, 500) // Tiempo suficiente para que el video comience
  }

  // Manejar cambios en los props
  useEffect(() => {
    // Si estamos en intro y es primera visita, no interrumpir
    if (videoState === "intro" && isFirstVisit) {
      return
    }
    
    // Evitar transiciones durante una animación en curso
    if (isPlayingAnimation) {
      return
    }

    // Manejar la lógica de transiciones según los props
    if (isWaiting && videoState !== "waiting") {
      transitionToState("waiting")
    } else if (isTyping && videoState !== "responding") {
      transitionToState("responding")
    } else if (!isWaiting && !isTyping && lastBotMessage && videoState === "responding") {
      // Si terminó de escribir pero estamos en "responding", esperar un poco antes de volver a idle
      responseTimerRef.current = setTimeout(() => {
        if (!isWaiting && !isTyping) { // Verificar nuevamente el estado
          transitionToState("idle")
        }
      }, 3000) // Esperar 3 segundos después de que termina la respuesta
    } else if (!isWaiting && !isTyping && videoState !== "intro" && videoState !== "idle") {
      // Si no hay actividad y no estamos en intro ni idle, ir a idle
      transitionToState("idle")
    }
  }, [isWaiting, isTyping, lastBotMessage, videoState, isFirstVisit, isPlayingAnimation])

  // Optimizar la carga y reproducción del video
  useEffect(() => {
    const playVideo = async () => {
      if (!videoRef.current) return
      
      try {
        // Pausar cualquier reproducción previa
        videoRef.current.pause()
        
        // Configurar volumen y mute
        videoRef.current.muted = isMuted
        videoRef.current.volume = 0.8 // volumen no muy alto
        
        // Cargar el nuevo video
        videoRef.current.load()
        
        // Intentar reproducir con manejo de errores
        await videoRef.current.play()
        console.log(`Playing video: ${videoSrc}, muted: ${isMuted}`)
      } catch (error) {
        console.error("Error al reproducir el video:", error)
        
        // Si falló la reproducción, intentar reproducir en silencio (política de autoplay)
        if (!isMuted) {
          console.log("Intentando reproducir en silencio debido a política de autoplay")
          setIsMuted(true)
          videoRef.current.muted = true
          
          try {
            await videoRef.current.play()
          } catch (e) {
            console.error("Falló incluso reproduciendo en silencio:", e)
          }
        }
      }
    }
    
    // Asegurarse de que el DOM está listo
    if (document.readyState === "complete") {
      playVideo()
    } else {
      window.addEventListener("load", playVideo)
      return () => window.removeEventListener("load", playVideo)
    }
  }, [videoSrc, isMuted])

  // Función para alternar el sonido manualmente
  const toggleMute = () => {
    setIsMuted(prev => {
      const newMuted = !prev
      if (videoRef.current) {
        videoRef.current.muted = newMuted
      }
      return newMuted
    })
  }

  // Manejar visibilidad de la página para pausar/reanudar el video
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause()
      } else if (!document.hidden && videoRef.current) {
        try {
          await videoRef.current.play()
        } catch (e) {
          console.error("Error al reanudar el video:", e)
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  // Determinar si el video debe hacer loop
  const shouldLoop = () => {
    // Solo idle y responding deben hacer loop
    return videoState === "idle" || videoState === "responding"
  }

  // Reiniciar el contexto de audio si hay problemas
  const resetAudioContext = () => {
    if (audioContext.current && audioContext.current.state === "suspended") {
      audioContext.current.resume()
    }
  }

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      onClick={resetAudioContext} // Permitir interacción para activar audio
    >
      {/* Video del magistrado */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop={shouldLoop()}
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

      {/* Indicador de estado (para depuración) */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 left-4 z-30 bg-black/50 text-white px-2 py-1 text-xs rounded">
          Estado: {videoState} | Video: {videoSrc.replace("/", "")} | 
          Loop: {shouldLoop() ? "Sí" : "No"} | 
          Audio: {isMuted ? "Silenciado" : "Activado"}
        </div>
      )}
    </div>
  )
}

export default Magistrado3D
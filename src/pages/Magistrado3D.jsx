"use client"
import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export const Magistrado3D = ({ isWaiting, isTyping, lastBotMessage }) => {
  // Estados para controlar el video y audio
  const [videoSrc, setVideoSrc] = useState("/intro2.mp4")
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [introEnded, setIntroEnded] = useState(false)
  const [waitingEnded, setWaitingEnded] = useState(false)
  const [pendingStateChange, setPendingStateChange] = useState(null)

  const videoRef = useRef(null)
  const responseTimerRef = useRef(null)

  // Verificar si es la primera visita usando sessionStorage
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedMagistrado")

    if (!hasVisited) {
      // Primera visita: reproducir intro
      sessionStorage.setItem("hasVisitedMagistrado", "true")
      setIsFirstVisit(true)
      setVideoSrc("/intro2.mp4")
      setIsMuted(false)
    } else {
      // No es la primera visita: marcar intro como ya reproducida
      setIsFirstVisit(false)
      setHasPlayedIntro(true)
      setIntroEnded(true)
      // Comenzar con el estado idle
      setVideoSrc("/idle.mp4")
    }

    // Limpieza al desmontar
    return () => {
      if (responseTimerRef.current) clearTimeout(responseTimerRef.current)
    }
  }, []) // Solo ejecutar al montar el componente

  // Manejar el evento de finalización de videos
  useEffect(() => {
    const handleVideoEnded = () => {
      if (videoSrc === "/intro2.mp4" && isFirstVisit) {
        console.log("Intro video ended naturally")
        setIntroEnded(true)
        setHasPlayedIntro(true)

        // Cambiar al estado pendiente o a idle
        if (pendingStateChange) {
          setVideoSrc(pendingStateChange)
          setPendingStateChange(null)
        } else if (!isWaiting && !isTyping) {
          setVideoSrc("/idle.mp4")
        }
      } else if (videoSrc === "/waiting.mp4") {
        console.log("Waiting video ended naturally")
        setWaitingEnded(true)

        // Si hay un cambio de estado pendiente, aplicarlo ahora
        if (pendingStateChange) {
          setVideoSrc(pendingStateChange)
          setPendingStateChange(null)
        }
      }
      // No hacemos nada cuando termina responding porque debe hacer loop
    }

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded)
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded)
      }
    }
  }, [videoSrc, isFirstVisit, isWaiting, isTyping, pendingStateChange])

  // Manejar cambios de estado basados en props
  useEffect(() => {
    // Limpiar cualquier temporizador pendiente
    if (responseTimerRef.current) {
      clearTimeout(responseTimerRef.current)
    }

    // Caso 1: Intro está reproduciéndose - no interrumpir
    if (videoSrc === "/intro2.mp4" && !introEnded && isFirstVisit) {
      console.log("Intro is still playing, queuing state change")

      // Guardar el cambio de estado para aplicarlo cuando termine la intro
      if (isWaiting) {
        setPendingStateChange("/waiting.mp4")
      } else if (isTyping) {
        setPendingStateChange("/responding.mp4")
      }
      return
    }

    // Caso 2: Waiting está reproduciéndose - no interrumpir hasta que termine
    if (videoSrc === "/waiting.mp4" && !waitingEnded) {
      console.log("Waiting is still playing, queuing state change")

      // Guardar el cambio de estado para aplicarlo cuando termine waiting
      if (isTyping) {
        setPendingStateChange("/responding.mp4")
      } else if (!isWaiting && !isTyping) {
        setPendingStateChange("/idle.mp4")
      }
      return
    }

    // Caso 3: Cambios de estado normales cuando no hay videos en reproducción que no deban interrumpirse
    if (isWaiting && videoSrc !== "/waiting.mp4") {
      console.log("Changing to waiting state")
      setVideoSrc("/waiting.mp4")
      setWaitingEnded(false)
      setIsMuted(false) // Con audio
    } else if (isTyping && videoSrc !== "/responding.mp4") {
      console.log("Changing to responding state")
      setVideoSrc("/responding.mp4")
      setIsMuted(true) // Sin audio
    } else if (lastBotMessage && !isTyping && !isWaiting && videoSrc === "/responding.mp4") {
      // Terminar de responder después de un tiempo
      console.log("Response finished, scheduling change to idle")
      responseTimerRef.current = setTimeout(() => {
        setVideoSrc("/idle.mp4")
      }, 5000) // Ajusta este tiempo según necesites
    } else if (
      hasPlayedIntro &&
      !isWaiting &&
      !isTyping &&
      videoSrc !== "/idle.mp4" &&
      introEnded &&
      videoSrc !== "/waiting.mp4" &&
      videoSrc !== "/responding.mp4"
    ) {
      // Estado idle cuando no hay actividad y no hay videos en reproducción
      console.log("Changing to idle state")
      setVideoSrc("/idle.mp4")
    }
  }, [isWaiting, isTyping, lastBotMessage, hasPlayedIntro, videoSrc, introEnded, waitingEnded, isFirstVisit])

  // Asegurar que el video se reproduzca correctamente cuando cambie la fuente
  useEffect(() => {
    if (videoRef.current) {
      // Detener cualquier reproducción actual
      videoRef.current.pause()

      // Cargar y reproducir el nuevo video
      videoRef.current.load()

      // Intentar reproducir con manejo de errores
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error)
        // Intentar reproducir sin sonido si hay error (política de autoplay)
        if (!isMuted) {
          setIsMuted(true)
          videoRef.current.muted = true
          videoRef.current.play().catch((e) => console.error("No se pudo reproducir ni siquiera silenciado:", e))
        }
      })
    }
  }, [videoSrc])

  // Función para alternar el sonido manualmente
  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMuted = !prev
      if (videoRef.current) {
        videoRef.current.muted = newMuted
      }
      return newMuted
    })
  }

  // Manejar visibilidad de la página para pausar/reanudar el video
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause()
      } else if (!document.hidden && videoRef.current) {
        videoRef.current.play().catch((e) => console.error("Error al reanudar el video:", e))
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  // Determinar si el video actual debe hacer loop
  const shouldLoop = () => {
    // La intro nunca hace loop
    if (videoSrc === "/intro2.mp4") return false

    // Responding siempre hace loop mientras está respondiendo
    if (videoSrc === "/responding.mp4" && isTyping) return true

    // Waiting no hace loop, debe reproducirse una vez completo
    if (videoSrc === "/waiting.mp4") return false

    // Idle siempre hace loop
    if (videoSrc === "/idle.mp4") return true

    // Por defecto, hacer loop
    return true
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Video del magistrado */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop={shouldLoop()} // Loop condicional con el estado
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

      {/* Indicador de estado (opcional, para depuracion) */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 left-4 z-30 bg-black/50 text-white px-2 py-1 text-xs rounded">
          Video: {videoSrc.replace("/", "")} |
          {pendingStateChange ? ` Pendiente: ${pendingStateChange.replace("/", "")} |` : ""}
          Loop: {shouldLoop() ? "Sí" : "No"}
        </div>
      )}
    </div>
  )
}

export default Magistrado3D


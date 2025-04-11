"use client"
import { useRef, useState, useEffect } from "react"
import { Play, Pause } from "lucide-react"

export const Magistrado = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updatePlayState = () => setIsPlaying(!video.paused)
    video.addEventListener("play", updatePlayState)
    video.addEventListener("pause", updatePlayState)

    return () => {
      video.removeEventListener("play", updatePlayState)
      video.removeEventListener("pause", updatePlayState)
    }
  }, [])

  const handleToggle = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="relative w-full max-w-[420px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
        <video
          ref={videoRef}
          src="/propuestas.mp4"
          playsInline
          autoPlay
          loop={false}
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Botón flotante para mobile y hover en desktop */}
        <div
          className={`
            absolute z-30 left-1/2 -translate-x-1/2
            bottom-60 md: md:top-1/2 md:-translate-y-1/2 md:bottom-auto
            pointer-events-none
            opacity-100 md:opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300
          `}
        >
          <button
            onClick={handleToggle}
            className="pointer-events-auto bg-black/60 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all backdrop-blur-md"
            aria-label="Reproducir o pausar"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Magistrado

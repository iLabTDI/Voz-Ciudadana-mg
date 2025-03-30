"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const HeroSection = ({ scrollToSection }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} className="absolute min-w-full min-h-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/greeting.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80 z-10"></div>
      </div>

      {/* Mexican flag colors strip at the top */}
      <div className="absolute top-0 left-0 w-full h-3 z-20 flex">
        <div className="w-1/3 h-full bg-green-700"></div>
        <div className="w-1/3 h-full bg-white"></div>
        <div className="w-1/3 h-full bg-red-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Magistrado Sergio Arturo Rivera Olvera</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprometido con la justicia electoral y la democracia en México
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md shadow-lg"
              onClick={() => scrollToSection("conoceme")}
            >
              Conóceme
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-md shadow-lg"
              onClick={() => scrollToSection("propuestas")}
            >
              Mis Propuestas
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={() => scrollToSection("conoceme")}
        >
          <ChevronDown size={40} className="text-white" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection


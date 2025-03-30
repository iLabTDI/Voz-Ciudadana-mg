"use client"

import { useState, useEffect, useRef } from "react"
import { MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

// Componentes
import { ProfileSection } from "../components/ProfileSection"
import { InspirationSection } from "../components/InspirationSection"
import { ProposalsSection } from "../components/ProposalsSection"
import { GallerySection } from "../components/GallerySection"
import { Chatbot } from "./Chatbot"
import { Magistrado3D } from "./Magistrado3D"

import fondo from "../../assets/fondo.jpeg"

export default function ElectoralLandingPage() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [heroImage, setHeroImage] = useState(fondo)
  const heroRef = useRef(null)

  // Control para el "avatar"
  const [isWaitingGlobal, setIsWaitingGlobal] = useState(false)
  const [isTypingGlobal, setIsTypingGlobal] = useState(false)
  const [lastBotMessageGlobal, setLastBotMessageGlobal] = useState(null)

  // Estado de visibilidad
  const [isVisible, setIsVisible] = useState({
    hero: false,
    profile: false,
    proposals: false,
    inspiration: false,
    gallery: false,
  })

  // Cargar imagen de fondo y activar Hero
  useEffect(() => {
    setHeroImage(fondo)
    setTimeout(() => setIsVisible((prev) => ({ ...prev, hero: true })), 300)
  }, [])

  // Manejo de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      setShowScrollIndicator(scrollPosition <= 100)
      setIsVisible((prev) => ({
        hero: true,
        profile: scrollPosition > windowHeight * 0.5,
        proposals: scrollPosition > windowHeight * 1.3,
        inspiration: scrollPosition > windowHeight * 2.1,
        gallery: scrollPosition > windowHeight * 2.9,
      }))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Variantes de animación personalizadas
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const profileVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  }

  const proposalsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const inspirationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  }

  const galleryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  return (
    <div className="relative bg-gray-100">
      {/* Sección Hero */}
      <motion.section
        id="inicio"
        ref={heroRef}
        className="relative min-h-screen px-4 py-16 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundAttachment: "scroll",
        }}
        variants={heroVariants}
        initial="hidden"
        animate={isVisible.hero ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-law-700/70 via-law-900/50 to-law-900/30"></div>
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gold-500/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gold-500/10 blur-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-600 via-white to-red-600"></div>

        <motion.div
          className="container mx-auto max-w-7xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible.hero ? "visible" : "hidden"}
        >
          <motion.div variants={heroVariants} className="text-center mb-10 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight tracking-tight">
              Bienvenido al Primer Asistente
              <br />
              <span className="text-gold-300">Virtual Electoral Sergio</span>
            </h1>
            <p className="text-gray-100 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Interactúa con Sergio Arturo Guerrero Olvera y conoce su visión electoral.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-stretch justify-center gap-0 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-white/10 backdrop-blur-md"
            variants={containerVariants}
          >
            <div className="bg-gradient-to-r from-law-700 to-law-800 p-3 md:p-4 text-white flex items-center justify-between w-full border-b border-white/10">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-law-500" />
                </div>
                <div className="text-sm md:text-base">
                  <h3 className="font-semibold text-base md:text-lg">Sergio Arturo Guerrero Olvera</h3>
                  <p className="text-xs md:text-sm text-gray-200">Tribunal Electoral · Sala Guadalajara</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium bg-green-100 text-green-800 animate-pulse shadow-sm">
                En línea
              </span>
            </div>

            <div className="flex flex-col lg:flex-row w-full">
              <motion.div
                className="relative w-full lg:w-2/5 bg-gradient-to-b from-law-800/80 to-law-900/60 overflow-hidden"
                variants={heroVariants}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/subtle-pattern.png')] bg-repeat opacity-10 z-0"></div>
                <div className="relative z-10 h-[350px] lg:h-[600px] flex items-center justify-center">
                  <Magistrado3D
                    isWaiting={isWaitingGlobal}
                    isTyping={isTypingGlobal}
                    lastBotMessage={lastBotMessageGlobal}
                  />
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-3/5 bg-white"
                variants={heroVariants}
              >
                <Chatbot
                  setIsWaitingGlobal={setIsWaitingGlobal}
                  setIsTypingGlobal={setIsTypingGlobal}
                  setLastBotMessageGlobal={setLastBotMessageGlobal}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Sección de Perfil */}
      <motion.div
        className="bg-gradient-to-b from-gray-100 to-blue-50 py-12 md:py-16"
        variants={profileVariants}
        initial="hidden"
        animate={isVisible.profile ? "visible" : "hidden"}
      >
        <ProfileSection isVisible={isVisible.profile} />
      </motion.div>

      {/* Sección Propuestas */}
      <motion.div
        className="bg-gradient-to-b from-blue-50 to-green-50 py-12 md:py-16"
        variants={proposalsVariants}
        initial="hidden"
        animate={isVisible.proposals ? "visible" : "hidden"}
      >
        <ProposalsSection isVisible={isVisible.proposals} />
      </motion.div>

      {/* Sección Lo Que Me Inspira */}
      <motion.div
        className="bg-gradient-to-b from-green-50 to-yellow-50 py-12 md:py-16"
        variants={inspirationVariants}
        initial="hidden"
        animate={isVisible.inspiration ? "visible" : "hidden"}
      >
        <InspirationSection isVisible={isVisible.inspiration} />
      </motion.div>

      {/* Sección Galería */}
      <motion.div
        className="bg-gradient-to-b from-yellow-50 to-gray-100 py-12 md:py-16"
        variants={galleryVariants}
        initial="hidden"
        animate={isVisible.gallery ? "visible" : "hidden"}
      >
        <GallerySection isVisible={isVisible.gallery} />
      </motion.div>
    </div>
  )
}
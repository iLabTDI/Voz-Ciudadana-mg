"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Mail, Share2, X } from "lucide-react"

export const FloatingSocialBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  // Variantes para animaciones
  const buttonVariants = {
    open: {
      rotate: 45,
      backgroundColor: "#ef4444",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
    closed: {
      rotate: 0,
      backgroundColor: "#1e3a8a",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: { duration: 0.2 },
    },
  }

  const socialItemVariants = {
    open: (i) => ({
      opacity: 1,
      y: -i * 60,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 15 },
        opacity: { duration: 0.2 },
      },
    }),
    closed: {
      opacity: 0,
      y: 0,
      transition: {
        y: { duration: 0.2 },
        opacity: { duration: 0.1 },
      },
    },
  }

  // Datos de redes sociales
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/profile.php?id=100011499285580&ref=ig_profile_ac",
      bgColor: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#0E5FC0]",
    },
    {
      name: "Twitter",
      icon: <img src="/assets/twitter.avif" alt="Twitter" className="h-6 w-6 rounded-full" />,
      url: "#",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-100",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/sergioarturoguerreroolvera/",
      bgColor: "bg-[#E4405F]",
      hoverColor: "hover:bg-[#D32645]",
    },
    {
      name: "TikTok",
      icon: <img src="/assets/tiktok.png" alt="TikTok" className="h-6 w-6" />,
      url: "#",
      bgColor: "bg-black",
      hoverColor: "hover:bg-gray-900",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:contacto@tribunalelectoral.gob.mx",
      bgColor: "bg-[#EA4335]",
      hoverColor: "hover:bg-[#D33426]",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      {/* Botón principal */}
      <motion.button
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg z-50 relative"
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        onClick={toggleOpen}
        aria-label={isOpen ? "Cerrar menú social" : "Abrir menú social"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Share2 className="h-6 w-6" />}
      </motion.button>

      {/* Overlay para cerrar al hacer clic fuera */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}

      {/* Elementos de redes sociales */}
      <AnimatePresence>
        {isOpen && (
          <>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                className={`w-12 h-12 rounded-full ${social.bgColor} ${social.hoverColor} flex items-center justify-center text-white shadow-lg absolute right-1 bottom-1 z-40`}
                custom={index + 1}
                variants={socialItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}


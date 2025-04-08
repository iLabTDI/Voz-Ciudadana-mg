"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Mail, Share2, X } from "lucide-react"

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

  // SVG personalizado para Facebook
  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  )

  // SVG personalizado para X (Twitter)
  const XIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 462.799"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path
        fillRule="nonzero"
        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
      />
    </svg>
  )

  // SVG personalizado para TikTok
  const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 293768 333327"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path
        d="M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z"
        fill="currentColor"
      />
      <path
        d="M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z"
        fill="currentColor"
      />
      <path
        d="M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z"
        fill="currentColor"
      />
    </svg>
  )

  // Datos de redes sociales con SVGs y enlaces correctos
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/profile.php?id=100011499285580&ref=ig_profile_ac",
      bgColor: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#0E5FC0]",
    },
    {
      name: "Twitter",
      icon: <XIcon />,
      url: "https://x.com/magdo_sago?s=11&t=MKfjsVTqflfn65JjxQ5hTg", // Reemplaza con el enlace real si lo tienes
      bgColor: "bg-[#000000]",
      hoverColor: "hover:bg-[#1A1A1A]",
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
      icon: <TikTokIcon />,
      url: "https://www.tiktok.com/@sergioguerreroolvera?_t=ZM-8vLD0vFwG63&_r=1", // Reemplaza con el enlace real si lo tienes
      bgColor: "bg-[#000000]",
      hoverColor: "hover:bg-[#1A1A1A]",
    },
    // {
    //   name: "Email",
    //   icon: <Mail className="h-5 w-5" />,
    //   url: "mailto:contacto@tribunalelectoral.gob.mx",
    //   bgColor: "bg-[#EA4335]",
    //   hoverColor: "hover:bg-[#D33426]",
    // },
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
                target="_blank"
                rel="noopener noreferrer"
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

export default FloatingSocialBar
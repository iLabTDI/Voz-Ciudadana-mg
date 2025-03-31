"use client"

import { Instagram, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = ({ scrollToSection }) => {
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
      className="w-5 h-5 md:w-6 md:h-6 text-white/90 group-hover:text-gold-300 transition-colors"
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
      className="w-5 h-5 md:w-6 md:h-6 text-white/90 group-hover:text-gold-300 transition-colors"
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

  // SVG personalizado para Facebook
  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5 md:w-6 md:h-6 text-white/90 group-hover:text-gold-300 transition-colors"
      fill="currentColor"
    >
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  )

  return (
    <footer className="bg-gradient-to-b from-law-800 to-law-900 text-white relative z-10 overflow-hidden">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400/50 via-gold-500 to-gold-400/50"></div>

      {/* Elementos decorativos más grandes */}
      <div className="absolute top-24 left-12 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gold-500/10 blur-[100px]"></div>
      <div className="absolute bottom-12 right-12 w-80 h-80 md:w-112 md:h-112 rounded-full bg-law-500/15 blur-[120px]"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Sección superior con logo y redes sociales */}
        <div className="pt-12 pb-8 border-b border-law-600/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full opacity-80 blur-[3px]"></div>
              <div className="relative w-16 h-16 rounded-full bg-white p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                <img src="/images/mexican-flag.svg" alt="Bandera de México" className="w-full h-full rounded-full" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg text-white">Sergio Arturo Guerrero</h3>
              <p className="text-gold-200/90 text-sm">Candidato a Magistrado · Sala Guadalajara</p>
            </div>
          </div>

          <div className="flex space-x-4">
            {[
              {
                icon: "facebook",
                label: "Facebook",
                href: "https://www.facebook.com/profile.php?id=100011499285580&ref=ig_profile_ac",
              },
              {
                icon: "x",
                label: "X",
                href: "https://twitter.com", // Reemplaza con el enlace real si lo tienes
              },
              {
                icon: "instagram",
                label: "Instagram",
                href: "https://www.instagram.com/sergioarturoguerreroolvera/",
              },
              {
                icon: "tiktok",
                label: "TikTok",
                href: "https://www.tiktok.com", // Reemplaza con el enlace real si lo tienes
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-law-700 border border-law-600 flex items-center justify-center shadow-md group-hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:border-gold-500/70 transition-all duration-300">
                  {social.icon === "facebook" && <FacebookIcon />}
                  {social.icon === "x" && <XIcon />}
                  {social.icon === "instagram" && <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white/90 group-hover:text-gold-300 transition-colors" />}
                  {social.icon === "tiktok" && <TikTokIcon />}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Sección principal del footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Columna 1: Descripción */}
          <div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              El primer asistente virtual electoral interactivo para candidatos a magistrados en Guadalajara. Innovando
              en la justicia electoral para un México más democrático.
            </p>

            <div className="bg-law-700/70 rounded-xl p-4 border border-law-600/70 backdrop-blur-md">
              <p className="text-white/80 text-sm leading-relaxed">
                "Mi compromiso es con la justicia electoral y la democracia. Cada decisión que tomo está orientada a
                fortalecer nuestras instituciones y garantizar que la voluntad del pueblo sea respetada."
              </p>
              <p className="text-right text-gold-300 font-medium mt-2 text-sm">— Sergio Arturo Guerrero</p>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-base mb-4 relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"></span>
            </h4>

            <ul className="space-y-3 mt-5">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "profile", label: "Perfil" },
                { id: "proposals", label: "Propuestas" },
                { id: "inspiration", label: "Inspiración" },
                { id: "gallery", label: "Galería" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-gold-300 transition-colors flex items-center text-sm md:text-base"
                  >
                    <span className="text-gold-400 mr-2">{">"}</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/foro"
                  className="text-gray-300 hover:text-gold-300 transition-colors flex items-center text-sm md:text-base"
                >
                  <span className="text-gold-400 mr-2">{">"}</span>
                  <span>Foro</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Boletín */}
          <div>
            <h4 className="font-semibold text-base mb-4 relative inline-block">
              Boletín Informativo
              <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"></span>
            </h4>

            <p className="text-gray-300 text-sm md:text-base mb-5 mt-5">
              Suscríbete para estar al día con mis propuestas y novedades electorales.
            </p>

            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full bg-law-700/80 border border-law-600/80 rounded-full px-4 py-3 text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/60 focus:border-transparent transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-law-900 font-semibold py-3 px-6 rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm md:text-base flex items-center justify-center shadow-md hover:shadow-lg"
              >
                Suscribirse
                <Mail className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-law-700/70 py-6 flex flex-col md:flex-row items-center justify-center">
          <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-0">
            © {new Date().getFullYear()} Sergio Arturo Guerrero Olvera - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
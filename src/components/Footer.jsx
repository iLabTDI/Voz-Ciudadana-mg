"use client"

import { Mail, Phone, MapPin, Calendar, ExternalLink, Heart, MailIcon } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = ({ scrollToSection }) => {
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
              <h3 className="font-bold text-lg text-white">Candidato Sergio</h3>
              <p className="text-gold-200/90 text-sm">Tribunal Electoral · Sala Guadalajara</p>
            </div>
          </div>

          <div className="flex space-x-4">
            {[
              {
                icon: "x",
                label: "X",
              },
              {
                icon: "instagram",
                label: "Instagram",
              },
              {
                icon: "tiktok",
                label: "TikTok",
              },
            ].map((social, index) => (
              <a key={index} href="#" className="group" aria-label={social.label}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-law-700 border border-law-600 flex items-center justify-center shadow-md group-hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:border-gold-500/70 transition-all duration-300">
                  {social.icon === "x" && (
                    <svg intranet
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="text-white/90 group-hover:text-gold-300 transition-colors"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="text-white/90 group-hover:text-gold-300 transition-colors"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    </svg>
                  )}
                  {social.icon === "tiktok" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="text-white/90 group-hover:text-gold-300 transition-colors"
                    >
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c0 1.43.39 2.87 1.17 4.3.78 1.43 1.96 2.5 3.43 3.2v3.6c-1.47 0-2.94-.4-4.41-.8-.78-.2-1.57-.4-2.35-.6v7.9c0 2.8-2.3 5.1-5.1 5.1-2.8 0-5.1-2.3-5.1-5.1 0-2.8 2.3-5.1 5.1-5.1.6 0 1.2.1 1.8.3v3.6c-.6-.2-1.2-.3-1.8-.3-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c1.4 0 2.5-1.1 2.5-2.5V2.62c0-.6.5-1.1 1.1-1.1z" />
                    </svg>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Sección principal del footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Descripción */}
          <div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              El primer asistente virtual electoral interactivo del Poder Judicial de la Federación en Guadalajara.
              Innovando en la justicia electoral para un México más democrático.
            </p>

            <div className="bg-law-700/70 rounded-xl p-4 border border-law-600/70 backdrop-blur-md">
              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 text-gold-300 mr-2" />
                <h5 className="font-medium text-white text-sm">Horario de Atención</h5>
              </div>
              <div className="ml-7 border-l border-gold-500/40 pl-3">
                <div className="flex items-center py-1">
                  <p className="text-sm text-white">Lunes a Viernes:</p>
                  <p className="text-sm text-gold-200 ml-2">9:00 AM - 6:00 PM</p>
                </div>
                <div className="flex items-center py-1">
                  <p className="text-sm text-white">Sábados:</p>
                  <p className="text-sm text-gold-200 ml-2">9:00 AM - 1:00 PM</p>
                </div>
              </div>
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
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-gold-300 transition-colors flex items-center text-sm md:text-base"
                  >
                    <span className="text-gold-400 mr-2">{'>'}</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/foro"
                  className="text-gray-300 hover:text-gold-300 transition-colors flex items-center text-sm md:text-base"
                >
                  <span className="text-gold-400 mr-2">{'>'}</span>
                  <span>Foro</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="font-semibold text-base mb-4 relative inline-block">
              Contacto
              <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"></span>
            </h4>

            <ul className="space-y-6 mt-5">
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-gold-300 mr-3" />
                <div>
                  <p className="text-white text-sm md:text-base">(33) 3648-1670</p>
                  <p className="text-gray-400 text-xs">Atención telefónica</p>
                </div>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-4 w-4 text-gold-300 mr-3" />
                <div>
                  <p className="text-white text-sm md:text-base">contacto@tribunalelectoral.gob.mx</p>
                  <p className="text-gray-400 text-xs">Correo electrónico</p>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-gold-300 mr-3" />
                <div>
                  <p className="text-white text-sm md:text-base">Av. López Mateos Norte 1749</p>
                  <p className="text-gray-400 text-xs">Guadalajara, Jalisco</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Boletín */}
          <div>
            <h4 className="font-semibold text-base mb-4 relative inline-block">
              Boletín Informativo
              <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"></span>
            </h4>

            <p className="text-gray-300 text-sm md:text-base mb-5 mt-5">
              Suscríbete para estar al día con las novedades electorales.
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
                <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-law-700/70 py-6 flex flex-col md:flex-row items-center justify-center">
          <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-0 ">
            © {new Date().getFullYear()} Tribunal Electoral del Poder Judicial de la Federación
          </p>
        </div>
      </div>
    </footer>
  )
}
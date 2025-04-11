"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Scale } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate() // Para navegar programáticamente
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest("nav")) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const handleClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  // Función para ir a la raíz y subir arriba
  const handleLogoClick = () => {
    navigate("/") // Navega a la raíz
    window.scrollTo({ top: 0, behavior: "smooth" }) // Sube hasta arriba con animación suave
    setIsMenuOpen(false) // Cierra el menú móvil si está abierto
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-law-800/95 backdrop-blur-md shadow-lg py-2"
        : "bg-gradient-to-b from-law-900/90 to-law-900/70 backdrop-blur-sm py-3"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <button onClick={handleLogoClick} className="focus:outline-none">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 p-0.5 shadow-glow overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 opacity-70 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-law-800 flex items-center justify-center">
                <Scale className="w-5 h-5 text-gold-400" />
              </div>
            </div>
          </button>

          <div className="flex flex-col">
            <span className="font-bold text-lg text-white">Sergio Guerrero</span>
            <span className="text-sm text-gold-200/80">Candidato a Magistrado</span>
          </div>
        </div>

        {/* Menú en escritorio */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {isHomePage ? (
            <>
              {[
                { id: "inicio", label: "Inicio" },
                { id: "profile", label: "Perfil" },
                { id: "proposals", label: "Propuestas" },
                // { id: "inspiration", label: "Inspiración" },
                { id: "gallery", label: "Galería" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`relative px-3 py-2 text-sm transition-colors rounded-xl ${activeSection === item.id
                    ? "text-gold-300 font-medium bg-white/10"
                    : "text-white hover:text-gold-300 hover:bg-white/5"
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gold-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </>
          ) : (
            <>
              <Link
                to="/"
                className="relative px-3 py-2 text-sm transition-colors rounded-lg text-white hover:text-gold-300 hover:bg-white/5"
              >
                Inicio
              </Link>
              <Link
                to="/#profile"
                className="relative px-3 py-2 text-sm transition-colors rounded-lg text-white hover:text-gold-300 hover:bg-white/5"
              >
                Perfil
              </Link>
              <Link
                to="/#proposals"
                className="relative px-3 py-2 text-sm transition-colors rounded-lg text-white hover:text-gold-300 hover:bg-white/5"
              >
                Propuestas
              </Link>
              {/* <Link
                to="/#inspiration"
                className="relative px-3 py-2 text-sm transition-colors rounded-lg text-white hover:text-gold-300 hover:bg-white/5"
              >
                Inspiración
              </Link> */}
              <Link
                to="/#gallery"
                className="relative px-3 py-2 text-sm transition-colors rounded-lg text-white hover:text-gold-300 hover:bg-white/5"
              >
                Galería
              </Link>
            </>
          )}

          <Link
            to="/foro"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-law-900 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-1 transform hover:scale-105"
          >
            <span>Foro</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed inset-0 bg-law-900/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
          }`}
        style={{ top: "60px", height: "calc(100vh - 60px)" }}
      >
        <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {isHomePage ? (
              <>
                {[
                  { id: "inicio", label: "Inicio" },
                  { id: "profile", label: "Perfil" },
                  { id: "proposals", label: "Propuestas" },
                  { id: "inspiration", label: "Inspiración" },
                  { id: "gallery", label: "Galería" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`text-left py-4 px-4 rounded-xl transition-all duration-300 flex items-center ${activeSection === item.id
                      ? "bg-gold-500/20 text-gold-300 font-medium"
                      : "text-white hover:bg-white/10"
                      }`}
                  >
                    <div
                      className={`w-1 h-8 rounded-full mr-4 transition-all duration-300 ${activeSection === item.id ? "bg-gold-400" : "bg-transparent"
                        }`}
                    ></div>
                    <span className="text-lg">{item.label}</span>
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-left py-4 px-4 rounded-xl transition-all duration-300 flex items-center text-white hover:bg-white/10"
                >
                  <div className="w-1 h-8 rounded-full mr-4 bg-transparent"></div>
                  <span className="text-lg">Inicio</span>
                </Link>
                <Link
                  to="/#profile"
                  className="text-left py-4 px-4 rounded-xl transition-all duration-300 flex items-center text-white hover:bg-white/10"
                >
                  <div className="w-1 h-8 rounded-full mr-4 bg-transparent"></div>
                  <span className="text-lg">Perfil</span>
                </Link>
                <Link
                  to="/#proposals"
                  className="text-left py-4 px-4 rounded-xl transition-all duration-300 flex items-center text-white hover:bg-white/10"
                >
                  <div className="w-1 h-8 rounded-full mr-4 bg-transparent"></div>
                  <span className="text-lg">Propuestas</span>
                </Link>
                {/* <Link
                  to="/#inspiration"
                  className="text-left py-4 px-4 rounded-xl transition-all duration-300 flex items-center text-white hover:bg-white/10"
                >
                  <div className="w-1 h-8 rounded-full mr-4 bg-transparent"></div>
                  <span className="text-lg">Inspiración</span>
                </Link> */}
                <Link
                  to="/#gallery"
                  className="text-left py-4 px-4 rounded-xl transition-all duration-300 flex items-center text-white hover:bg-white/10"
                >
                  <div className="w-1 h-8 rounded-full mr-4 bg-transparent"></div>
                  <span className="text-lg">Galería</span>
                </Link>
              </>
            )}

            <div className="pt-6 pb-4">
              <Link
                to="/foro"
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-law-900 py-4 px-4 rounded-xl text-center font-medium transition-all duration-300 shadow-lg hover:shadow-xl block text-lg"
              >
                Acceder al Foro
              </Link>
            </div>

            {/* Información de contacto en móvil */}

            <div className="flex justified-center items-center space-x-2 mt-4">
              <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-0">
                © {new Date().getFullYear()} Sergio Arturo Guerrero Olvera - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
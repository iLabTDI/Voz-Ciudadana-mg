"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Gavel } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-law-700 shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white rounded-full shadow-md">
            <Gavel className="w-6 h-6 text-blue-900" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white">
              Sergio Guerrero IA
            </span>
            <span className="text-sm text-blue-200">
              Tribunal Electoral · Sala Guadalajara
            </span>
          </div>
        </div>
        {/* Menú en escritorio */}
        <div className="hidden md:flex space-x-6">
          {isHomePage ? (
            <>
              <button
                onClick={() => handleClick("inicio")}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === "inicio"
                    ? "text-gold-300 font-semibold"
                    : "text-white hover:text-gold-300"
                }`}
              >
                Inicio
                {activeSection === "inicio" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-300 rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => handleClick("profile")}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === "profile"
                    ? "text-gold-300 font-semibold"
                    : "text-white hover:text-gold-300"
                }`}
              >
                Perfil
                {activeSection === "profile" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-300 rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => handleClick("proposals")}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === "proposals"
                    ? "text-gold-300 font-semibold"
                    : "text-white hover:text-gold-300"
                }`}
              >
                Propuestas
                {activeSection === "proposals" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-300 rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => handleClick("inspiration")}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === "inspiration"
                    ? "text-gold-300 font-semibold"
                    : "text-white hover:text-gold-300"
                }`}
              >
                Inspiración
                {activeSection === "inspiration" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-300 rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => handleClick("gallery")}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === "gallery"
                    ? "text-gold-300 font-semibold"
                    : "text-white hover:text-gold-300"
                }`}
              >
                Galería
                {activeSection === "gallery" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-300 rounded-full"></span>
                )}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="relative px-2 py-1 transition-colors hover:text-gold-300"
              >
                Inicio
              </Link>
              <Link
                to="/#profile"
                className="relative px-2 py-1 transition-colors hover:text-gold-300"
              >
                Perfil
              </Link>
              <Link
                to="/#proposals"
                className="relative px-2 py-1 transition-colors hover:text-gold-300"
              >
                Propuestas
              </Link>
              <Link
                to="/#inspiration"
                className="relative px-2 py-1 transition-colors hover:text-gold-300"
              >
                Inspiración
              </Link>
              <Link
                to="/#gallery"
                className="relative px-2 py-1 transition-colors hover:text-gold-300"
              >
                Galería
              </Link>
            </>
          )}
          <Link
            to="/foro"
            className="bg-gold-500 hover:bg-gold-400 text-law-900 px-4 py-1.5 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg flex items-center space-x-1"
          >
            <span>Foro</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>
        {/* Botón menú móvil */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-md pb-4 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {isHomePage ? (
              <>
                <button
                  onClick={() => handleClick("inicio")}
                  className={`text-left py-2 px-2 rounded-lg transition-colors ${
                    activeSection === "inicio"
                      ? "bg-gold-500/20 border-l-4 border-gold-400 text-gold-300"
                      : "hover:bg-gold-500/10"
                  }`}
                >
                  Inicio
                </button>
                <button
                  onClick={() => handleClick("profile")}
                  className={`text-left py-2 px-2 rounded-lg transition-colors ${
                    activeSection === "profile"
                      ? "bg-gold-500/20 border-l-4 border-gold-400 text-gold-300"
                      : "hover:bg-gold-500/10"
                  }`}
                >
                  Perfil
                </button>
                <button
                  onClick={() => handleClick("proposals")}
                  className={`text-left py-2 px-2 rounded-lg transition-colors ${
                    activeSection === "proposals"
                      ? "bg-gold-500/20 border-l-4 border-gold-400 text-gold-300"
                      : "hover:bg-gold-500/10"
                  }`}
                >
                  Propuestas
                </button>
                <button
                  onClick={() => handleClick("inspiration")}
                  className={`text-left py-2 px-2 rounded-lg transition-colors ${
                    activeSection === "inspiration"
                      ? "bg-gold-500/20 border-l-4 border-gold-400 text-gold-300"
                      : "hover:bg-gold-500/10"
                  }`}
                >
                  Inspiración
                </button>
                <button
                  onClick={() => handleClick("gallery")}
                  className={`text-left py-2 px-2 rounded-lg transition-colors ${
                    activeSection === "gallery"
                      ? "bg-gold-500/20 border-l-4 border-gold-400 text-gold-300"
                      : "hover:bg-gold-500/10"
                  }`}
                >
                  Galería
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-left py-2 px-2 rounded-lg transition-colors hover:bg-gold-500/10"
                >
                  Inicio
                </Link>
                <Link
                  to="/#profile"
                  className="text-left py-2 px-2 rounded-lg transition-colors hover:bg-gold-500/10"
                >
                  Perfil
                </Link>
                <Link
                  to="/#proposals"
                  className="text-left py-2 px-2 rounded-lg transition-colors hover:bg-gold-500/10"
                >
                  Propuestas
                </Link>
                <Link
                  to="/#inspiration"
                  className="text-left py-2 px-2 rounded-lg transition-colors hover:bg-gold-500/10"
                >
                  Inspiración
                </Link>
                <Link
                  to="/#gallery"
                  className="text-left py-2 px-2 rounded-lg transition-colors hover:bg-gold-500/10"
                >
                  Galería
                </Link>
              </>
            )}
            <Link
              to="/foro"
              className="bg-gold-500 hover:bg-gold-400 text-law-900 px-4 py-2 rounded-lg text-center font-medium transition-colors shadow-md"
            >
              Foro
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

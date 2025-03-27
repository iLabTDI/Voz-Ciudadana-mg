import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import negrito from "../assets/negrito.jpg";


export const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#006847]/95 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full bg-[#E8DDB5] p-1 flex items-center justify-center shadow-glow">
          <img src={negrito} alt="Negrito" className="w-full h-full rounded-full" />
       </div>

          <div className="flex flex-col">
            <span className="font-bold text-sm md:text-base">Magistrado Sergio</span>
            <span className="text-xs text-[#E8DDB5]">Tribunal Electoral · Sala Guadalajara</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => handleClick("inicio")}
            className={`hover:text-[#E8DDB5] transition-all ${
              activeSection === "inicio" ? "text-[#E8DDB5] font-semibold" : "text-white"
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleClick("informacion")}
            className={`hover:text-[#E8DDB5] transition-all ${
              activeSection === "informacion" ? "text-[#E8DDB5] font-semibold" : "text-white"
            }`}
          >
            Trayectoria
          </button>
          <button
            onClick={() => handleClick("propuestas")}
            className={`hover:text-[#E8DDB5] transition-all ${
              activeSection === "propuestas" ? "text-[#E8DDB5] font-semibold" : "text-white"
            }`}
          >
            Propuestas
          </button>
          <button
            onClick={() => handleClick("preguntas")}
            className={`hover:text-[#E8DDB5] transition-all ${
              activeSection === "preguntas" ? "text-[#E8DDB5] font-semibold" : "text-white"
            }`}
          >
            Preguntas Frecuentes
          </button>
          <button
            onClick={() => handleClick("contacto")}
            className={`hover:text-[#E8DDB5] transition-all ${
              activeSection === "contacto" ? "text-[#E8DDB5] font-semibold" : "text-white"
            }`}
          >
            Contacto
          </button>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#006847]/95 backdrop-blur-md pb-4 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleClick("inicio")}
              className={`text-left py-2 px-2 rounded transition-colors ${
                activeSection === "inicio"
                  ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]"
                  : "hover:bg-[#E8DDB5]/10"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleClick("informacion")}
              className={`text-left py-2 px-2 rounded transition-colors ${
                activeSection === "informacion"
                  ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]"
                  : "hover:bg-[#E8DDB5]/10"
              }`}
            >
              Trayectoria
            </button>
            <button
              onClick={() => handleClick("propuestas")}
              className={`text-left py-2 px-2 rounded transition-colors ${
                activeSection === "propuestas"
                  ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]"
                  : "hover:bg-[#E8DDB5]/10"
              }`}
            >
              Propuestas
            </button>
            <button
              onClick={() => handleClick("preguntas")}
              className={`text-left py-2 px-2 rounded transition-colors ${
                activeSection === "preguntas"
                  ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]"
                  : "hover:bg-[#E8DDB5]/10"
              }`}
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => handleClick("contacto")}
              className={`text-left py-2 px-2 rounded transition-colors ${
                activeSection === "contacto"
                  ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]"
                  : "hover:bg-[#E8DDB5]/10"
              }`}
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

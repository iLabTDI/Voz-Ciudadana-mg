import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = ({ scrollToSection }) => {
    return (
        <footer className="bg-[#006847] text-white py-12 px-4 relative z-10">
            <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#E8DDB5] p-1 flex items-center justify-center shadow-glow">
                                {/* Aquí puedes colocar tu logo */}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm">Magistrado Sergio</span>
                                <span className="text-xs text-[#E8DDB5]">
                                    Tribunal Electoral · Sala Guadalajara
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-200 text-sm">
                            El primer asistente virtual electoral interactivo del Poder Judicial de la Federación en Guadalajara.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 relative inline-block">
                            Enlaces Rápidos
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#E8DDB5]"></span>
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection("inicio")}
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Inicio
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("informacion")}
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Trayectoria
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("propuestas")}
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Propuestas
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("preguntas")}
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Preguntas Frecuentes
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("contacto")}
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Contacto
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 relative inline-block">
                            Recursos
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#E8DDB5]"></span>
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Jurisprudencia Electoral
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Leyes y Reglamentos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Procesos Electorales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center"
                                >
                                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5]" /> Publicaciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 relative inline-block">
                            Boletín Informativo
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#E8DDB5]"></span>
                        </h4>
                        <p className="text-sm text-gray-200 mb-4">
                            Suscríbase a nuestro boletín para recibir actualizaciones sobre temas electorales.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Su correo electrónico"
                                className="px-3 py-2 text-gray-800 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] w-full bg-white/90"
                            />
                            <button
                                type="submit"
                                className="bg-[#E8DDB5] text-[#006847] hover:bg-[#E8DDB5]/90 px-4 py-2 rounded-r-md transition-all duration-300 flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </form>
                        <div className="mt-6">
                            <h5 className="font-medium text-sm mb-2">Síguenos:</h5>
                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all transform hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all transform hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all transform hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-200">
                    <p>
                        &copy; {new Date().getFullYear()} Tribunal Electoral del Poder Judicial de la Federación. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

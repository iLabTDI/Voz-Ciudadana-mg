"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Calendar, ChevronRight, Check, Award } from "lucide-react"

export const VotaBannerFull = () => {
    const [isAnimating, setIsAnimating] = useState(false)

    // Color salmón extraído de la imagen
    const salmonColor = "#FA8072"

    // Efecto de pulsación para el número 13
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 1000)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <Link to="/vota13" className="block">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                            {/* Fondo con gradiente */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br"
                                style={{
                                    background: `linear-gradient(135deg, ${salmonColor}ee, ${salmonColor}aa, #ff9f8d)`,
                                    backgroundSize: "200% 200%",
                                    animation: "gradientAnimation 15s ease infinite",
                                }}
                            ></div>

                            {/* Patrón decorativo */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage:
                                        'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
                                }}
                            ></div>

                            {/* Elementos decorativos */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>

                            {/* Contenido del banner */}
                            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
                                {/* Lado izquierdo - Número y texto */}
                                <div className="md:w-2/3 flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-8 md:mb-0">
                                    {/* Número 13 destacado */}
                                    <div className={`relative mb-6 md:mb-0 ${isAnimating ? "animate-pulse" : ""}`}>
                                        <div className="absolute -inset-2 bg-white/30 rounded-full blur-md"></div>
                                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white">
                                            <div className="text-6xl md:text-7xl font-bold" style={{ color: salmonColor }}>
                                                13
                                            </div>
                                        </div>
                                    </div>

                                    {/* Texto principal */}
                                    <div className="md:ml-8">
                                        <div className="flex items-center justify-center md:justify-start mb-2">
                                            <Calendar className="h-5 w-5 text-white mr-2" />
                                            <span className="text-white/90 text-sm md:text-base font-medium">1 de junio de 2024</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mb-3">
                                            ¡VOTA POR LA JUSTICIA ELECTORAL!
                                        </h2>
                                        <p className="text-white/90 text-lg mb-4">
                                            Sergio Arturo Guerrero Olvera • Magistrado de Sala Regional Guadalajara
                                        </p>

                                        {/* Cualidades */}
                                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                            <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium inline-flex items-center">
                                                <Check className="h-4 w-4 mr-1.5" />
                                                Justo
                                            </div>
                                            <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium inline-flex items-center">
                                                <Check className="h-4 w-4 mr-1.5" />
                                                Claro
                                            </div>
                                            <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium inline-flex items-center">
                                                <Check className="h-4 w-4 mr-1.5" />
                                                Cercano
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Lado derecho - Boleta */}
                                <div className="md:w-1/3 flex justify-center md:justify-end">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center transform group-hover:scale-105 transition-transform duration-300">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                                            <Award className="h-8 w-8" style={{ color: salmonColor }} />
                                        </div>
                                        <h3 className="text-white font-bold text-xl mb-2">Boleta color salmón</h3>
                                        <p className="text-white/90 text-sm mb-4">
                                            Busca el número 13 en tu boleta para Magistrado de Sala Regional
                                        </p>
                                        <button
                                            className="w-full bg-white py-3 px-6 rounded-full font-bold flex items-center justify-center group-hover:shadow-lg transition-all"
                                            style={{ color: salmonColor }}
                                        >
                                            Ver mas
                                            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Indicador de hover */}
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default VotaBannerFull


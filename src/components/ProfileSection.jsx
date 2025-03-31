"use client"

import { useEffect, useRef } from "react"
import { Award, BookOpen, GraduationCap, Briefcase, ExternalLink, Scale, Gavel } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion"
import magistrado from "../../assets/Magistrado.png"
import pattern from "../../public/pateerns/paper-texture.png";

export const ProfileSection = ({ isVisible }) => {
  const controls = useAnimation()
  const sectionRef = useRef(null)

  useEffect(() => {
    if (isVisible) {
      controls.start("visible")
    }
  }, [isVisible, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

 

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100"
    >
      {/* Fondo con textura */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: pattern, backgroundRepeat: "repeat" }}
      ></div>

      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-law-600 via-gold-500 to-law-600"></div>

      {/* Elementos decorativos (reducidos en tamaño) */}
      <div className="absolute top-10 right-5 w-40 h-40 md:w-64 md:h-64 rounded-full bg-law-500/5 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-10 left-5 w-48 h-48 md:w-80 md:h-80 rounded-full bg-gold-500/5 blur-2xl md:blur-3xl"></div>

      {/* Símbolos de justicia (más pequeños y adaptados) */}
      <div className="absolute top-20 right-10 text-law-200/10 hidden md:block">
        <Scale className="w-24 h-24 md:w-40 md:h-40" />
      </div>
      <div className="absolute bottom-20 left-10 text-law-200/10 hidden md:block">
        <Gavel className="w-20 h-20 md:w-32 md:h-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-10 md:mb-12 text-center"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-law-100 flex items-center justify-center">
              <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-law-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-law-800 mb-3 md:mb-4">Perfil Profesional</h2>
            <div className="h-1 w-24 md:w-32 bg-gold-500 mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              ¡Conóceme! Soy Sergio Arturo Guerrero Olvera, candidato a magistrado de la Sala Regional Guadalajara. Como
              jurista, me comprometo a fortalecer la justicia electoral y a garantizar una democracia más inclusiva y
              transparente.
            </p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
          {/* Foto y detalles básicos */}
          <motion.div initial="hidden" animate={controls} variants={containerVariants} className="lg:w-2/5">
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-full h-full bg-law-600 rounded-xl md:rounded-2xl transform rotate-2 opacity-70"></div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-full h-full bg-gold-500 rounded-xl md:rounded-2xl transform -rotate-2 opacity-70"></div>

              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-200">
                {/* Bandera mexicana estilizada */}
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-12 h-6 md:w-16 md:h-8 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-green-600 via-white to-red-600 transform rotate-45 scale-150"></div>
                </div>

                <div className="mb-6 md:mb-8 relative rounded-lg md:rounded-xl overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-b from-law-600/20 to-gold-500/20 mix-blend-overlay"></div>
                  <img
                    src={magistrado || "/placeholder.svg"}
                    alt="Sergio Arturo Guerrero Olvera"
                    className="w-full h-auto relative z-10"
                  />
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-law-800 mb-2">Sergio Arturo Guerrero Olvera</h2>
                <p className="text-gold-700 font-medium mb-4 md:mb-6 flex items-center text-sm md:text-base">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-law-600 rounded-full mr-2"></span>
                  Candidato a Magistrado de la Sala Regional Guadalajara
                </p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-start bg-slate-50 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-3 md:mr-4 flex-shrink-0">
                      <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-law-800 text-sm md:text-base">Jurista Electoral</p>
                      <p className="text-xs md:text-sm text-gray-600">Especialista en Derecho Electoral</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-slate-50 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-3 md:mr-4 flex-shrink-0">
                      <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-law-800 text-sm md:text-base">Doctor en Derecho</p>
                      <p className="text-xs md:text-sm text-gray-600">Universidad Autónoma de Querétaro</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-slate-50 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-3 md:mr-4 flex-shrink-0">
                      <Award className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-law-800 text-sm md:text-base">20+ años de experiencia</p>
                      <p className="text-xs md:text-sm text-gray-600">En justicia electoral</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/biografia"
                  className="w-full py-2 md:py-3 px-4 bg-law-600 hover:bg-law-700 text-white rounded-xl md:rounded-xl text-center font-medium text-sm md:text-base transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Ver mi biografía completa
                  <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Información profesional */}
          <motion.div initial="hidden" animate={controls} variants={containerVariants} className="lg:w-3/5">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200 h-full"
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-law-800 mb-3 md:mb-4">Mi Trayectoria</h3>
                <div className="h-1 w-16 md:w-20 bg-gold-500 mb-4 md:mb-6 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Soy un jurista especializado en derecho electoral con más de 20 años de experiencia. A lo largo de mi
                  carrera, he combinado la práctica jurídica con la docencia y la investigación, lo que me ha permitido
                  desarrollar una visión integral del derecho electoral y contribuir significativamente a su evolución
                  en México.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-slate-50 p-4 md:p-6 rounded-lg md:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-3 md:mr-4">
                      <BookOpen className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-law-800">Mis Publicaciones</h4>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs md:text-sm">01</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">"Justicia Electoral Digital" (2023)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs md:text-sm">02</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">"Justicia Electoral Inclusiva" (2021)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs md:text-sm">03</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">
                        "Estatus, organización y funcionamiento del TEPJF" (2021)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 md:p-6 rounded-lg md:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-3 md:mr-4">
                      <Award className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-law-800">Mi Experiencia</h4>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs md:text-sm">01</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Magistrado Presidente (2022-Presente)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs md:text-sm">02</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Magistrado Propietario (2019-2022)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs md:text-sm">03</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">
                        Secretario de Estudio y Cuenta (2010-2015)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Carrusel de logros */}
              <div className="bg-gradient-to-r from-law-600 to-law-700 text-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg mb-4 md:mb-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center">
                  <Award className="h-4 w-4 md:h-5 md:w-5 mr-2 text-gold-300" />
                  Mis Logros Destacados
                </h4>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center bg-white/10 p-2 md:p-3 rounded-md md:rounded-lg backdrop-blur-sm">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-500/20 flex items-center justify-center mr-2 md:mr-3">
                      <span className="text-gold-300 font-bold text-sm md:text-base">1</span>
                    </div>
                    <p className="text-gray-100 text-xs md:text-sm">Implementación de juicios electorales en línea</p>
                  </div>
                  <div className="flex items-center bg-white/10 p-2 md:p-3 rounded-md md:rounded-lg backdrop-blur-sm">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-500/20 flex items-center justify-center mr-2 md:mr-3">
                      <span className="text-gold-300 font-bold text-sm md:text-base">2</span>
                    </div>
                    <p className="text-gray-100 text-xs md:text-sm">Protección de derechos de grupos vulnerables</p>
                  </div>
                  <div className="flex items-center bg-white/10 p-2 md:p-3 rounded-md md:rounded-lg backdrop-blur-sm">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-500/20 flex items-center justify-center mr-2 md:mr-3">
                      <span className="text-gold-300 font-bold text-sm md:text-base">3</span>
                    </div>
                    <p className="text-gray-100 text-xs md:text-sm">
                      Contribución al desarrollo del asistente virtual "Alfonsina"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/galeria"
                  className="inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group text-sm md:text-base"
                >
                  Ver más
                  <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


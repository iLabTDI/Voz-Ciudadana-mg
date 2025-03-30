"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Briefcase,
  Heart,
  Coffee,
  Music,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

// Importamos la imagen del magistrado
import magistradoImage from "../../assets/Magistrado.png"

export const BiografiaPage = () => {
  const controls = useAnimation()
  const [activeTab, setActiveTab] = useState("formacion")

  // Referencias para animaciones de scroll
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formacionRef, formacionInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [trayectoriaRef, trayectoriaInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [publicacionesRef, publicacionesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [personalRef, personalInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Variantes para animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  // Datos para la línea de tiempo
  const timeline = [
    { year: "2015", event: "Nombramiento como Magistrado Electoral", description: "Sala Regional Guadalajara, TEPJF" },
    { year: "2010", event: "Secretario de Estudio y Cuenta", description: "Sala Superior, TEPJF" },
    { year: "2008", event: "Profesor de Derecho Electoral", description: "Universidad de Guadalajara" },
    { year: "2005", event: "Doctorado en Derecho Constitucional", description: "UNAM" },
    { year: "2000", event: "Maestría en Derecho Electoral", description: "Universidad de Guadalajara" },
    { year: "1995", event: "Licenciatura en Derecho", description: "Universidad de Guadalajara" },
  ]

  // Función para cambiar de tab
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Patrones de fondo */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/patterns/paper-texture.png')", backgroundRepeat: "repeat" }}
      />

      {/* Elementos decorativos */}
      <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-law-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-112 h-112 rounded-full bg-gold-500/5 blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <header className="bg-gradient-to-r from-law-700 to-law-800 text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-gold-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-medium">Volver al inicio</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold hidden md:block">Magistrado Sergio Arturo Guerrero Olvera</h1>
            <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shadow-glow overflow-hidden">
              <img src="/images/mexican-flag.svg" alt="Bandera de México" className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 md:py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-law-900/20 to-transparent pointer-events-none"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&h=1080&auto=format&fit=crop')",
          }}
        ></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                <div className="w-16 h-16 mx-3 rounded-full bg-gradient-to-br from-law-600 to-law-700 flex items-center justify-center shadow-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-law-800 mb-6 tracking-tight">Biografía Completa</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Conozca la trayectoria profesional, académica y personal del Magistrado Sergio Arturo Guerrero Olvera, un
              jurista comprometido con la justicia electoral y la democracia en México.
            </p>

            {/* Navegación rápida */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { id: "introduccion", label: "Introducción", icon: <BookOpen className="h-4 w-4" /> },
                { id: "formacion", label: "Formación", icon: <GraduationCap className="h-4 w-4" /> },
                { id: "trayectoria", label: "Trayectoria", icon: <Briefcase className="h-4 w-4" /> },
                { id: "publicaciones", label: "Publicaciones", icon: <BookOpen className="h-4 w-4" /> },
                { id: "personal", label: "Vida Personal", icon: <Heart className="h-4 w-4" /> },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="bg-white hover:bg-law-50 text-law-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Introducción */}
        <section id="introduccion" ref={introRef} className="mb-24">
          <motion.div initial="hidden" animate={introInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <BookOpen className="mr-3 h-7 w-7 text-law-600" />
                Introducción
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <motion.div variants={itemFadeIn} className="lg:w-2/5">
                <div className="relative">
                  {/* Efectos decorativos para la imagen */}
                  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-law-600 to-law-700 rounded-2xl transform rotate-3 shadow-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl transform -rotate-3 shadow-xl"></div>

                  {/* Imagen principal */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={
                        magistradoImage ||
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&h=1000&auto=format&fit=crop"
                      }
                      alt="Magistrado Sergio Arturo Guerrero Olvera"
                      className="w-full h-auto object-cover"
                    />

                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-law-900/70 via-transparent to-transparent"></div>

                    {/* Información sobre la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">Sergio Arturo Guerrero Olvera</h3>
                      <p className="text-gold-300 font-medium">Magistrado Electoral</p>
                    </div>
                  </div>

                  {/* Insignia decorativa */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-law-600 to-law-700 flex items-center justify-center text-white text-center">
                      <div>
                        <div className="text-xl font-bold">15+</div>
                        <div className="text-xs">años de experiencia</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información de contacto */}
                <div className="mt-16 bg-white rounded-xl shadow-lg p-6 border border-slate-100">
                  <h4 className="text-xl font-bold text-law-700 mb-4 flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-law-600" />
                    Información de Contacto
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-law-50 flex items-center justify-center text-law-600 mr-3 flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-law-800">Dirección:</p>
                        <p className="text-gray-600">Av. López Mateos Norte 1189, Guadalajara, Jalisco</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-law-50 flex items-center justify-center text-law-600 mr-3 flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-law-800">Correo Electrónico:</p>
                        <p className="text-gray-600">sergio.guerrero@te.gob.mx</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-law-50 flex items-center justify-center text-law-600 mr-3 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-law-800">Horario de Atención:</p>
                        <p className="text-gray-600">Lunes a Viernes de 9:00 a 15:00 hrs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemFadeIn} className="lg:w-3/5">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-law-700 mb-4 relative inline-block">
                      Quién es Sergio Arturo Guerrero Olvera
                      <div className="h-1 w-full bg-gold-500 mt-2 rounded-full"></div>
                    </h3>

                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                      Sergio Arturo Guerrero Olvera nació en Guadalajara, Jalisco, el 15 de marzo de 1970. Desde
                      temprana edad mostró un gran interés por el derecho y la justicia, lo que lo llevó a estudiar la
                      carrera de Derecho en la Universidad de Guadalajara, donde se graduó con honores en 1995.
                    </p>

                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                      Su pasión por el derecho electoral comenzó durante sus estudios universitarios, cuando participó
                      como observador electoral en las elecciones de 1994. Esta experiencia marcó profundamente su
                      trayectoria profesional, orientándola hacia la protección de los derechos político-electorales y
                      el fortalecimiento de las instituciones democráticas.
                    </p>
                  </div>

                  {/* Cita destacada */}
                  <div className="bg-gradient-to-r from-law-600 to-law-700 text-white p-6 rounded-xl mb-6 relative">
                    <div className="absolute top-4 left-4 text-6xl text-white/20 font-serif">"</div>
                    <div className="relative z-10">
                      <p className="text-lg italic text-white/90 mb-4">
                        Mi compromiso es con la justicia electoral y la democracia. Cada decisión que tomo está
                        orientada a fortalecer nuestras instituciones y garantizar que la voluntad del pueblo sea
                        respetada.
                      </p>
                      <p className="text-right text-gold-300 font-medium">— Magistrado Sergio Arturo Guerrero</p>
                    </div>
                    <div className="absolute bottom-4 right-4 text-6xl text-white/20 font-serif">"</div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    A lo largo de su carrera, ha combinado la práctica jurídica con la docencia y la investigación, lo
                    que le ha permitido desarrollar una visión integral del derecho electoral y contribuir
                    significativamente a su evolución en México. Su enfoque innovador y su compromiso con la
                    transparencia lo han convertido en un referente en el ámbito de la justicia electoral.
                  </p>

                  {/* Línea de tiempo */}
                  <div className="mt-10">
                    <h4 className="text-xl font-bold text-law-700 mb-6">Línea de Tiempo</h4>
                    <div className="relative">
                      {/* Línea central */}
                      <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-law-500 to-law-200 rounded-full"></div>

                      <div className="space-y-8">
                        {timeline.map((item, index) => (
                          <div key={index} className="flex items-start relative">
                            {/* Punto en la línea */}
                            <div className="absolute left-16 transform -translate-x-1/2 w-5 h-5 rounded-full bg-law-600 border-4 border-white shadow-md"></div>

                            {/* Año */}
                            <div className="w-16 text-right pr-8">
                              <span className="font-bold text-law-700">{item.year}</span>
                            </div>

                            {/* Contenido */}
                            <div className="flex-1 ml-12 bg-white p-4 rounded-lg shadow-md border border-slate-100 transform hover:scale-[1.02] transition-transform duration-300">
                              <h5 className="font-bold text-law-700">{item.event}</h5>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Tabs de navegación para secciones principales */}
        <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-md rounded-full shadow-lg p-2 mb-16 border border-slate-200 max-w-3xl mx-auto">
          <div className="flex justify-between">
            {[
              { id: "formacion", label: "Formación", icon: <GraduationCap className="h-4 w-4" /> },
              { id: "trayectoria", label: "Trayectoria", icon: <Briefcase className="h-4 w-4" /> },
              { id: "publicaciones", label: "Publicaciones", icon: <BookOpen className="h-4 w-4" /> },
              { id: "personal", label: "Vida Personal", icon: <Heart className="h-4 w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                  activeTab === tab.id
                    ? "bg-law-600 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-slate-100"
                }`}
              >
                {tab.icon}
                <span className="ml-2 hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Formación Académica */}
        <section
          id="formacion"
          ref={formacionRef}
          className={`mb-24 transition-opacity duration-500 ${activeTab === "formacion" ? "opacity-100" : "opacity-70"}`}
        >
          <motion.div initial="hidden" animate={formacionInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <GraduationCap className="mr-3 h-7 w-7 text-law-600" />
                Formación Académica
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Doctorado"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      2001-2005
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Doctorado en Derecho Constitucional</h3>
                  </div>

                  <p className="text-gray-600 mb-3">Universidad Nacional Autónoma de México</p>

                  <div className="bg-law-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-medium">Tesis:</span> "La Justicia Electoral como Garantía de los Derechos
                      Político-Electorales en México"
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Obtuvo mención honorífica por su investigación sobre los mecanismos de protección de los derechos
                      político-electorales y su evolución en el sistema jurídico mexicano.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Maestría"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      1997-2000
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Maestría en Derecho Electoral</h3>
                  </div>

                  <p className="text-gray-600 mb-3">Universidad de Guadalajara</p>

                  <div className="bg-law-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-medium">Tesis:</span> "Análisis Comparativo de los Sistemas de Justicia
                      Electoral en América Latina"
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Su investigación estableció un marco comparativo entre los diferentes sistemas de justicia
                      electoral en la región, identificando fortalezas y áreas de oportunidad.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Licenciatura"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      1990-1995
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Licenciatura en Derecho</h3>
                  </div>

                  <p className="text-gray-600 mb-3">Universidad de Guadalajara</p>

                  <div className="bg-law-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-medium">Reconocimiento:</span> Mejor promedio de su generación
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Durante sus estudios, participó activamente en el programa de servicio social en la Comisión
                      Estatal Electoral de Jalisco, lo que despertó su interés por el derecho electoral.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Trayectoria Profesional */}
        <section
          id="trayectoria"
          ref={trayectoriaRef}
          className={`mb-24 transition-opacity duration-500 ${activeTab === "trayectoria" ? "opacity-100" : "opacity-70"}`}
        >
          <motion.div initial="hidden" animate={trayectoriaInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <Briefcase className="mr-3 h-7 w-7 text-law-600" />
                Trayectoria Profesional
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&h=600&auto=format&fit=crop"
                      alt="Magistrado Electoral"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 hidden md:block"></div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                        <Briefcase className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-law-700">Magistrado Electoral</h3>
                        <p className="text-gray-600">Sala Regional Guadalajara, TEPJF (2015-Presente)</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Como Magistrado de la Sala Regional Guadalajara, ha resuelto numerosos casos relacionados con la
                      protección de los derechos político-electorales, contribuyendo significativamente a la
                      jurisprudencia en materia electoral. Ha sido ponente en casos emblemáticos sobre paridad de
                      género, derechos de comunidades indígenas y transparencia electoral.
                    </p>

                    <div className="bg-law-50 p-4 rounded-lg">
                      <h4 className="font-medium text-law-700 mb-2">Logros destacados:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">
                            Implementación de juicios en línea para agilizar procesos
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">
                            Desarrollo de protocolos para atención a grupos vulnerables
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">Promoción de la transparencia en procesos electorales</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=800&h=600&auto=format&fit=crop"
                      alt="Secretario de Estudio y Cuenta"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 hidden md:block"></div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                        <Briefcase className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-law-700">Secretario de Estudio y Cuenta</h3>
                        <p className="text-gray-600">Sala Superior, TEPJF (2010-2015)</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Durante su periodo como Secretario de Estudio y Cuenta, participó en la elaboración de proyectos
                      de sentencia en casos de gran relevancia nacional, como impugnaciones a resultados electorales,
                      conflictos internos de partidos políticos y protección de derechos político-electorales de grupos
                      vulnerables.
                    </p>

                    <div className="bg-law-50 p-4 rounded-lg">
                      <h4 className="font-medium text-law-700 mb-2">Contribuciones principales:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">Desarrollo de criterios jurisprudenciales innovadores</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">Participación en más de 500 proyectos de sentencia</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">Implementación de metodologías para agilizar procesos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=600&auto=format&fit=crop"
                      alt="Profesor de Derecho Electoral"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 hidden md:block"></div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                        <GraduationCap className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-law-700">Profesor de Derecho Electoral</h3>
                        <p className="text-gray-600">Universidad de Guadalajara (2008-Presente)</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Como docente, ha formado a numerosas generaciones de abogados especializados en derecho electoral.
                      Sus clases se caracterizan por combinar la teoría con el análisis de casos prácticos, lo que ha
                      permitido a sus estudiantes desarrollar una comprensión profunda de los principios y mecanismos
                      del sistema electoral mexicano.
                    </p>

                    <div className="bg-law-50 p-4 rounded-lg">
                      <h4 className="font-medium text-law-700 mb-2">Cursos impartidos:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">Derecho Electoral Comparado</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">Sistemas de Justicia Electoral</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">Derechos Político-Electorales</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Publicaciones Destacadas */}
        <section
          id="publicaciones"
          ref={publicacionesRef}
          className={`mb-24 transition-opacity duration-500 ${activeTab === "publicaciones" ? "opacity-100" : "opacity-70"}`}
        >
          <motion.div initial="hidden" animate={publicacionesInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <BookOpen className="mr-3 h-7 w-7 text-law-600" />
                Publicaciones Destacadas
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Justicia Electoral en la Era Digital"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">2023</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Justicia Electoral en la Era Digital</h3>
                  </div>

                  <p className="text-gray-600 mb-3">Editorial Porrúa</p>

                  <p className="text-gray-700 mb-6 flex-grow">
                    En esta obra, analiza los retos y oportunidades que presenta la tecnología para la justicia
                    electoral en México y América Latina. Propone un modelo de justicia electoral digital que aprovecha
                    las nuevas tecnologías para hacer más accesible, eficiente y transparente el sistema de justicia
                    electoral.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group mt-auto"
                  >
                    Ver más detalles
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Derechos Político-Electorales de Grupos Vulnerables"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">2021</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">
                      Derechos Político-Electorales de Grupos Vulnerables
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-3">Instituto de Investigaciones Jurídicas, UNAM</p>

                  <p className="text-gray-700 mb-6 flex-grow">
                    Esta investigación aborda la protección de los derechos electorales de grupos históricamente
                    marginados, como comunidades indígenas, personas con discapacidad y la comunidad LGBTQ+. Propone
                    mecanismos específicos para garantizar su participación efectiva en los procesos democráticos.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group mt-auto"
                  >
                    Ver más detalles
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="La Evolución del Sistema Electoral Mexicano"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">2019</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">La Evolución del Sistema Electoral Mexicano</h3>
                  </div>

                  <p className="text-gray-600 mb-3">Fondo de Cultura Económica</p>

                  <p className="text-gray-700 mb-6 flex-grow">
                    Recorrido histórico por las transformaciones del sistema electoral mexicano desde la independencia
                    hasta nuestros días. Analiza las reformas electorales más importantes y su impacto en la
                    consolidación democrática del país.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group mt-auto"
                  >
                    Ver más detalles
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Vida Personal */}
        <section
          id="personal"
          ref={personalRef}
          className={`mb-16 transition-opacity duration-500 ${activeTab === "personal" ? "opacity-100" : "opacity-70"}`}
        >
          <motion.div initial="hidden" animate={personalInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <Heart className="mr-3 h-7 w-7 text-law-600" />
                Vida Personal
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <motion.div variants={itemFadeIn} className="mb-10">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Más allá de su carrera profesional, Sergio Arturo Guerrero Olvera es un apasionado de la música
                  clásica, especialmente de Beethoven y Mozart. Toca el piano desde los 12 años y ocasionalmente
                  participa en recitales benéficos.
                </p>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Es un entusiasta del café de especialidad y disfruta descubrir cafés de diferentes regiones del mundo.
                  Considera que preparar un buen café por la mañana es parte esencial de su rutina diaria y una forma de
                  conectar con diferentes culturas.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  La literatura latinoamericana ocupa un lugar especial en su vida. Los autores latinoamericanos como
                  García Márquez, Borges y Rulfo han influido profundamente en su forma de ver el mundo y entender
                  nuestra cultura. Posee una extensa biblioteca con obras de estos y otros autores, que consulta
                  frecuentemente.
                </p>
              </motion.div>

              <motion.div variants={itemFadeIn}>
                <h3 className="text-2xl font-bold text-law-700 mb-6">Pasiones e Intereses</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-law-50 to-white rounded-xl shadow-md overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&h=600&auto=format&fit=crop"
                        alt="Música Clásica"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Music className="h-5 w-5 text-law-600 mr-2" />
                        <h4 className="font-bold text-law-700">Música Clásica</h4>
                      </div>
                      <p className="text-gray-700">
                        Sonatas de Beethoven y conciertos para piano de Mozart. Toca el piano desde los 12 años y
                        participa en recitales benéficos.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-law-50 to-white rounded-xl shadow-md overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&h=600&auto=format&fit=crop"
                        alt="Café de Especialidad"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Coffee className="h-5 w-5 text-law-600 mr-2" />
                        <h4 className="font-bold text-law-700">Café de Especialidad</h4>
                      </div>
                      <p className="text-gray-700">
                        Geisha de Panamá, preparado en V60. Aprecia sus notas florales y su delicado equilibrio.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-law-50 to-white rounded-xl shadow-md overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&h=600&auto=format&fit=crop"
                        alt="Literatura Latinoamericana"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <BookOpen className="h-5 w-5 text-law-600 mr-2" />
                        <h4 className="font-bold text-law-700">Literatura Latinoamericana</h4>
                      </div>
                      <p className="text-gray-700">
                        "Cien años de soledad" de Gabriel García Márquez, por su magistral retrato de la realidad
                        latinoamericana.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Botón de regreso */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="bg-gradient-to-r from-law-600 to-law-700 hover:from-law-700 hover:to-law-800 text-white py-4 px-10 rounded-full font-medium transition-all duration-300 inline-flex items-center shadow-lg transform hover:scale-105"
          >
            <ArrowLeft className="mr-3 h-5 w-5" />
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BiografiaPage


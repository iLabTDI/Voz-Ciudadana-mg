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
  ChevronRight,
} from "lucide-react"

// Importamos la imagen del magistrado
import magistradoImage from "../../assets/magistrado.jpg"

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
    {
      year: "2022",
      event: "Magistrado Presidente de la Sala Regional Guadalajara",
      description: "Tribunal Electoral del Poder Judicial de la Federación",
    },
    {
      year: "2019",
      event: "Magistrado Propietario de la Sala Regional",
      description: "Primera Circunscripción Plurinominal, TEPJF",
    },
    { year: "2014-2019", event: "Magistrado Propietario", description: "Tribunal Electoral del Estado de Querétaro" },
    { year: "2015-2016", event: "Magistrado Presidente", description: "Tribunal Electoral del Estado de Querétaro" },
    {
      year: "2011-2014",
      event: "Coordinador de Jurisprudencia",
      description: "Tribunal Electoral del Poder Judicial de la Federación",
    },
    {
      year: "2005-2011",
      event: "Secretario Instructor y de Estudio y Cuenta",
      description: "Tribunal Electoral del Poder Judicial de la Federación",
    },
    {
      year: "2001-2005",
      event: "Secretario de Tribunal",
      description: "Segundo Tribunal Colegiado del Vigésimo Segundo Circuito en Querétaro",
    },
    { year: "1999-2001", event: "Secretario de Juzgado", description: "Juzgado Segundo de Distrito en Querétaro" },
    {
      year: "1999",
      event: "Actuario Judicial",
      description: "Tercer Tribunal Colegiado del Décimo Tercer Circuito en Oaxaca",
    },
    {
      year: "1996-1999",
      event: "Oficial y Actuario Judicial",
      description: "Juzgado Segundo de Distrito en Querétaro",
    },
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
            <h1 className="text-xl md:text-2xl font-bold hidden md:block">Sergio Arturo Guerrero Olvera</h1>
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

            <h1 className="text-4xl md:text-6xl font-bold text-law-800 mb-6 tracking-tight">Mi Biografía</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Conoce mi trayectoria profesional, académica y personal. Soy Sergio Arturo Guerrero Olvera, un jurista
              comprometido con la justicia electoral y la democracia en México.
            </p>

            {/* Navegación rápida */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { id: "introduccion", label: "Introducción", icon: <BookOpen className="h-4 w-4" /> },
                { id: "formacion", label: "Formación", icon: <GraduationCap className="h-4 w-4" /> },
                { id: "trayectoria", label: "Trayectoria", icon: <Briefcase className="h-4 w-4" /> },
                { id: "publicaciones", label: "Publicaciones", icon: <BookOpen className="h-4 w-4" /> },
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
        <section id="introduccion" ref={introRef} className="mb-24 mt-5">
          <motion.div initial="hidden" animate={introInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow "></div>
              <h2 className="text-3xl font-bold text-law-800 px-6  flex items-center">
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
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&h=1000&auto=format&fit=crop" ||
                        "/placeholder.svg"
                      }
                      alt="Sergio Arturo Guerrero Olvera"
                      className="w-full h-auto object-cover"
                    />

                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-law-900/70 via-transparent to-transparent"></div>

                    {/* Información sobre la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">Sergio Arturo Guerrero Olvera</h3>
                    </div>
                  </div>

                  {/* Insignia decorativa */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-law-600 to-law-700 flex items-center justify-center text-white text-center">
                      <div>
                        <div className="text-xl font-bold">20+</div>
                        <div className="text-xs">años de experiencia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemFadeIn} className="lg:w-3/5">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-law-700 mb-4 relative inline-block">
                      ¿Quién soy?
                      <div className="h-1 w-full bg-gold-500 mt-2 rounded-full"></div>
                    </h3>

                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                      Mi nombre es Sergio Arturo Guerrero Olvera, soy originario de Querétaro y he dedicado mi vida al estudio
                      y la práctica del Derecho, con la convicción de que la justicia debe ser cercana, accesible y humana.
                    </p>

                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                      Soy licenciado, maestro y doctor en Derecho por la Universidad Autónoma de Querétaro, institución que marcó profundamente mi formación
                      y mi compromiso con el servicio público. A lo largo de los años, he complementado mi preparación con especializaciones en Derecho Constitucional
                      y Amparo, Justicia Electoral, Argumentación Jurídica y Justicia Constitucional, tanto en México como en el extranjero, particularmente en España.

                    </p>

                  </div>
                  <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                    Más allá del ámbito jurisdiccional, la docencia ha sido una de mis grandes pasiones. He impartido clases en la Universidad Autónoma de Querétaro y en diversas
                    instituciones nacionales, convencido de que el conocimiento debe compartirse y nutrirse en comunidad. He tenido también la oportunidad de participar en foros
                    internacionales, representar a México ante organismos como la OEA y las Naciones Unidas, y colaborar en temas clave para el fortalecimiento democrático y la defensa
                    de los derechos humanos.
                  </p>
                  {/* Cita destacada */}
                  <div className="bg-gradient-to-r from-law-600 to-law-700 text-white p-6 rounded-xl mb-6 relative">
                    <div className="absolute top-4 left-4 text-6xl text-white/20 font-serif">"</div>
                    <div className="relative z-10">
                      <p className="text-lg italic text-white/90 mb-4">
                        Creo firmemente en una justicia electoral innovadora, con visión social y profundamente comprometida con la ciudadanía. Por ello, promuevo el uso de la tecnología como
                        herramienta para acercar la justicia a las personas, impulsar la transparencia y construir un tribunal más abierto, incluyente y sostenible.
                      </p>
                      <p className="text-right text-gold-300 font-medium">— Sergio Arturo Guerrero</p>
                    </div>
                    <div className="absolute bottom-4 right-4 text-6xl text-white/20 font-serif">"</div>
                  </div>


                  {/* Línea de tiempo */}
                  <div className="mt-10">
                    <h4 className="text-xl font-bold text-law-700 mb-6">Mi Trayectoria Profesional</h4>
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

        {/* Formación Académica */}
        <section
          id="formacion"
          ref={formacionRef}
          className={`mb-24 transition-opacity duration-500`}
        >
          <motion.div initial="hidden" animate={formacionInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <GraduationCap className="mr-3 h-7 w-7 text-law-600" />
                Mi Formación Académica
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Licenciatura en Derecho */}
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1AmgxOLFvpUStHnKfo6sLKrVcRb0UY.png"
                    alt="Formación Jurídica"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      Universidad Autónoma de Querétaro
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Formación Académica en Derecho</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Licenciatura, Maestría y Doctorado en Derecho</p>
                  <div className="bg-law-50 p-4 rounded-xl">
                    <p className="text-gray-700">
                    Cursé la Licenciatura, Maestría y Doctorado en Derecho en la Universidad Autónoma de Querétaro, con una orientación marcada hacia la investigación jurídica avanzada, particularmente en temas de constitucionalismo y argumentación.  
                    </p>
                  </div>
                </div>
              </motion.div>


              {/* Especialización en Derecho Constitucional y Amparo */}
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Especialización en Derecho Constitucional y Amparo"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      Sin rango
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Especialización en Derecho Constitucional y Amparo Por la Universidad Autónoma de Querétaro.</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Formación complementaria en normas y garantías constitucionales</p>
                  <div className="bg-law-50 p-4 rounded-xl">
                    <p className="text-gray-700">
                    Formación especializada en el análisis del control constitucional, garantías individuales, procesos de amparo y su aplicación práctica en el ámbito jurisdiccional.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Especialización en Justicia Constitucional y Procesos Constitucionales */}
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QE5xXiz3LLYSusJmB3BMxciXQsFXpL.png"
                    alt="Justicia Constitucional y Procesos Constitucionales"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      Universidad de Castilla-La Mancha, España
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Especialización en Justicia Constitucional y Procesos Constitucionales</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Universidad de Castilla-La Mancha, España – Especialización en Justicia Constitucional y Procesos Constitucionales</p>
                  <div className="bg-law-50 p-4 rounded-xl">
                    <p className="text-gray-700">
                    Estudios en interpretación y aplicación de principios constitucionales, con enfoque en el derecho constitucional comparado.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Especialización y Master en Argumentación Jurídica */}
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Argumentación Jurídica"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      Universidad de Alicante, España
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Especialización y Master en Argumentación Jurídica</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Universidad de Alicante, España – Especialización y Máster en Argumentación Jurídica</p>
                  <div className="bg-law-50 p-4 rounded-xl">
                    <p className="text-gray-700">
                    Especialización en técnicas de argumentación jurídica, análisis estructural de sentencias y modelos de justificación racional del derecho.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Especialización en Justicia Electoral */}
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1AmgxOLFvpUStHnKfo6sLKrVcRb0UY.png"
                    alt="Justicia Electoral"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      Centro de Capacitación Judicial Electoral
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Especialización en Justicia Electoral</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Centro de Capacitación Judicial Electoral del TEPJF</p>
                  <div className="bg-law-50 p-4 rounded-xl">
                    <p className="text-gray-700">
                    Formación especializada en criterios jurisdiccionales en materia electoral, impartida por el Centro de Capacitación Judicial Electoral del TEPJF.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Especialización en Derecho Electoral */}
              <motion.div
                variants={itemFadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Derecho Electoral"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      UNAM
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-law-700">Especialización en Derecho Electoral</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Universidad Nacional Autónoma de México</p>
                  <div className="bg-law-50 p-4 rounded-xl">
                    <p className="text-gray-700">
                    Especialización en Derecho Electoral en la UNAM, con énfasis en el análisis normativo y el diseño institucional de procesos electorales.
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
          className={`mb-24 transition-opacity duration-500 }`}
        >
          <motion.div initial="hidden" animate={trayectoriaInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <Briefcase className="mr-3 h-7 w-7 text-law-600" />
                Mi Trayectoria Profesional
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            {/* Bloque 1: Magistrado de la Sala Regional Guadalajara */}
            <motion.div
              variants={itemFadeIn}
              className="bg-white mb-5 rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img
                    src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="Magistrado de la Sala Regional Guadalajara"
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
                      <h3 className="text-2xl font-bold text-law-700">Magistrado de la Sala Regional Guadalajara</h3>
                      <p className="text-gray-600">Tribunal Electoral del Poder Judicial de la Federación</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Actualmente desempeño el cargo de Magistrado de la Sala Regional Guadalajara. Con 20 años de servicio en el Poder Judicial de la Federación –incluyendo 9 años en la Sala Superior del Tribunal Electoral– he liderado la modernización y consolidación de la justicia electoral en México. Fui nombrado Magistrado el 28 de marzo de 2019, marcando un hito en mi trayectoria.
                  </p>
                  <div className="bg-law-50 p-4 rounded-xl">
                    <h4 className="font-medium text-law-700 mb-2">Logros destacados:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-xl bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                          <ChevronRight className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">Liderazgo en la modernización del sistema electoral</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                          <ChevronRight className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">Resolución de casos electorales de alta relevancia nacional</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                          <ChevronRight className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">Consolidación de 20 años de experiencia en el Poder Judicial</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bloque 2: Secretario de Estudio y Cuenta / Coordinador de Jurisprudencia */}
            <motion.div
              variants={itemFadeIn}
              className="bg-white mb-5 rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TvKb1c2uwITDPrIsnWlCS2l0mnQXSk.png"
                    alt="Secretario de Estudio y Cuenta y Coordinador de Jurisprudencia"
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
                      <h3 className="text-2xl font-bold text-law-700">
                        Secretario de Estudio y Cuenta y Coordinador de Jurisprudencia
                      </h3>
                      <p className="text-gray-600">TEPJF (2005-2014)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Durante este periodo, participé en la elaboración de criterios jurisprudenciales innovadores y en la coordinación de más de 500 proyectos de sentencia. Mi labor fue clave para optimizar metodologías y agilizar procesos judiciales en casos electorales de gran relevancia.
                  </p>
                  <div className="bg-law-50 p-4 rounded-xl">
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
                        <span className="text-gray-700">Coordinación en la elaboración de proyectos de sentencia</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2 flex-shrink-0 mt-0.5">
                          <ChevronRight className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">Optimización de procesos judiciales electorales</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bloque 3: Profesor de Derecho Electoral */}
            <motion.div
              variants={itemFadeIn}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WYeBAJnJMKbET2WTRIk9ad13s3CDgY.png"
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
                    Como docente, he formado a numerosas generaciones de abogadas y abogados especializados en derecho electoral, combinando teoría y análisis práctico para profundizar en el estudio de los procesos electorales y la protección de derechos.
                  </p>
                  <div className="bg-law-50 p-4 rounded-xl">
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
          </motion.div>
        </section>


        {/* Publicaciones Destacadas */}
        <section
          id="publicaciones"
          ref={publicacionesRef}
          className="mb-20 px-4 sm:px-6 md:px-8 lg:px-10 transition-opacity duration-500"
        >
          <motion.div initial="hidden" animate={publicacionesInView ? "visible" : "hidden"} variants={staggerContainer}>

            {/* Título central con ícono */}
            <motion.div variants={itemFadeIn} className="flex items-center justify-center mb-10 text-center">
              <div className="h-px bg-law-200 flex-grow hidden sm:block"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-law-800 px-4 sm:px-6 flex items-center justify-center">
                <BookOpen className="mr-3 h-6 w-6 sm:h-7 sm:w-7 text-law-600" />
                Mis Publicaciones Destacadas
              </h2>
              <div className="h-px bg-law-200 flex-grow hidden sm:block"></div>
            </motion.div>

            {/* Tarjetas responsivas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {[
                {
                  year: "2023",
                  title: "Derecho de Acceso a la Información y Transparencia en Materia Electoral",
                  source: "Serie Líneas Jurisprudenciales del TEPJF",
                  image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=800&h=600&auto=format&fit=crop",
                  description: `Se analizan los criterios más relevantes en materia de acceso a la información y transparencia electoral,
          destacando su impacto en la rendición de cuentas y la participación ciudadana.`,
                },
                {
                  year: "2021",
                  title: "Guía de Actuación para Juzgadores en Materia de Derecho Electoral Indígena",
                  source: "Tribunal Electoral del Poder Judicial de la Federación",
                  image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&h=600&auto=format&fit=crop",
                  description: `Como coautor, contribuí a esta guía con herramientas y criterios para juzgadores,
          garantizando los derechos político-electorales de pueblos y comunidades indígenas.`,
                },
                {
                  year: "2009",
                  title: "Propuesta de Directrices Argumentativas en el Juicio de Amparo Indirecto",
                  source: "Revista Lex Difusión y Análisis (2009)",
                  image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&h=600&auto=format&fit=crop",
                  description: `Ensayo que presenta directrices argumentativas para fortalecer la defensa de derechos fundamentales 
          y mejorar la protección judicial.`,
                }
              ].map((pub, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {pub.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="min-w-[3rem] min-h-[3rem] w-12 h-12 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-4">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-law-700">{pub.title}</h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-2">{pub.source}</p>

                    <p className="text-gray-700 text-sm mb-6 flex-grow leading-relaxed">{pub.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Botón de regreso */}
        <div className="text-center mt-10 mb-10">
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


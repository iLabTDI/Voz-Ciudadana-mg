"use client"

import { useState, useEffect, useRef } from "react"
import { Award, BookOpen, ExternalLink, ChevronRight, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion"

export const GallerySection = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState("recognitions")
  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const [images, setImages] = useState({
    award: "/placeholder.svg?height=600&width=800",
    medal: "/placeholder.svg?height=600&width=800",
    university: "/placeholder.svg?height=600&width=800",
    book: "/placeholder.svg?height=600&width=800",
    rights: "/placeholder.svg?height=600&width=800",
    history: "/placeholder.svg?height=600&width=800",
  })

  useEffect(() => {
    // Cargar imágenes de la API de Vercel
    setImages({
      award: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=800&h=600&auto=format&fit=crop",
      medal: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&h=600&auto=format&fit=crop",
      university: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&h=600&auto=format&fit=crop",
      book: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=800&h=600&auto=format&fit=crop",
      rights: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&h=600&auto=format&fit=crop",
      history: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&h=600&auto=format&fit=crop",
    })
  }, [])

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

  // Configuración del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === highlights.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const recognitions = [
    {
      id: "rec1",
      title: "Premio Nacional de Jurisprudencia",
      year: "2022",
      organization: "Barra Mexicana de Abogados",
      image: images.award,
    },
    {
      id: "rec2",
      title: "Medalla al Mérito Judicial",
      year: "2020",
      organization: "Poder Judicial de la Federación",
      image: images.medal,
    },
    {
      id: "rec3",
      title: "Reconocimiento a la Excelencia Académica",
      year: "2018",
      organization: "Universidad de Guadalajara",
      image: images.university,
    },
  ]

  const publications = [
    {
      id: "pub1",
      title: "Justicia Electoral en la Era Digital",
      year: "2023",
      publisher: "Editorial Porrúa",
      image: images.book,
    },
    {
      id: "pub2",
      title: "Derechos Político-Electorales de Grupos Vulnerables",
      year: "2021",
      publisher: "Instituto de Investigaciones Jurídicas, UNAM",
      image: images.rights,
    },
    {
      id: "pub3",
      title: "La Evolución del Sistema Electoral Mexicano",
      year: "2019",
      publisher: "Fondo de Cultura Económica",
      image: images.history,
    },
  ]

  const highlights = [
    {
      title: "Conferencia Internacional de Derecho Electoral",
      date: "Octubre 2023",
      location: "Ciudad de México",
      description:
        "Participación como ponente principal en la conferencia sobre 'El Futuro de la Justicia Electoral Digital'",
      image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1200&h=600&auto=format&fit=crop",
    },
    {
      title: "Publicación del Libro 'Justicia Electoral en la Era Digital'",
      date: "Julio 2023",
      location: "Editorial Porrúa",
      description:
        "Lanzamiento de mi más reciente obra sobre los desafíos y oportunidades de la tecnología en la justicia electoral",
      image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1200&h=600&auto=format&fit=crop",
    },
    {
      title: "Premio Nacional de Jurisprudencia",
      date: "Noviembre 2022",
      location: "Barra Mexicana de Abogados",
      description: "Reconocimiento a la trayectoria y contribuciones al derecho electoral mexicano",
      image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=1200&h=600&auto=format&fit=crop",
    },
  ]

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden"
    >
      {/* Overlay de patrón */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('/patterns/subtle-pattern.png')", backgroundRepeat: "repeat" }}
      ></div>

      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-law-300 via-law-500 to-law-300"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-law-500/5 blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="mb-16 text-center">
          <motion.div variants={itemVariants} className="inline-block">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-law-100 flex items-center justify-center">
              <Award className="h-10 w-10 text-law-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-law-800 mb-4">Reconocimientos y Publicaciones</h2>
            <div className="h-1 w-32 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explora los momentos más destacados de mi trayectoria profesional, reconocimientos y publicaciones en el
              ámbito de la justicia electoral.
            </p>
          </motion.div>
        </motion.div>

        {/* Carrusel de destacados */}
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="mb-16">
          <motion.div variants={itemVariants} className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 mr-2 text-gold-300" />
                    <span className="text-gold-300 font-medium">
                      {item.date} • {item.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-200 max-w-3xl mb-4">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Indicadores del carrusel */}
            <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                ></button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div initial="hidden" animate={controls} variants={containerVariants}>
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full shadow-md p-1 border border-slate-200">
              <button
                onClick={() => setActiveTab("recognitions")}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeTab === "recognitions"
                    ? "bg-law-600 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-slate-100"
                }`}
              >
                Reconocimientos
              </button>
              <button
                onClick={() => setActiveTab("publications")}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeTab === "publications"
                    ? "bg-law-600 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-slate-100"
                }`}
              >
                Publicaciones
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Contenido de las tabs */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {activeTab === "recognitions"
            ? recognitions.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-law-600 bg-law-50 px-3 py-1 rounded-full border border-law-100">
                        {item.year}
                      </span>
                      <Award className="h-5 w-5 text-law-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-law-800 mb-2 group-hover:text-law-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">{item.organization}</p>
                    <Link
                      to="/galeria"
                      className="inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group"
                    >
                      Ver detalles
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))
            : publications.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-law-600 bg-law-50 px-3 py-1 rounded-full border border-law-100">
                        {item.year}
                      </span>
                      <BookOpen className="h-5 w-5 text-law-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-law-800 mb-2 group-hover:text-law-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">{item.publisher}</p>
                    <Link
                      to="/galeria"
                      className="inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group"
                    >
                      Ver detalles
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="text-center">
          <motion.div variants={itemVariants}>
            <Link
              to="/galeria"
              className="inline-flex items-center px-6 py-3 bg-law-600 text-white rounded-full font-medium hover:bg-law-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver galería completa
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


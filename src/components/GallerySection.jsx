"use client"

import { useState, useEffect, useRef } from "react"
import { Award, BookOpen, ExternalLink, ChevronRight, Calendar, Star, FileText, Medal, Users } from "lucide-react"
import { Link } from "react-router-dom"

export const GallerySection = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState("recognitions")
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)

  // Imágenes para cada categoría
  const [images, setImages] = useState({
    digital: "/placeholder.svg?height=600&width=800",
    inclusion: "/placeholder.svg?height=600&width=800",
    doctorate: "/placeholder.svg?height=600&width=800",
    book: "/placeholder.svg?height=600&width=800",
    rights: "/placeholder.svg?height=600&width=800",
    tepjf: "/placeholder.svg?height=600&width=800",
    seminar: "/placeholder.svg?height=600&width=800",
    platform: "/placeholder.svg?height=600&width=800",
    reform: "/placeholder.svg?height=600&width=800",
  })

  useEffect(() => {
    // Cargar imágenes de alta calidad
    setImages({
      digital: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&h=600&auto=format&fit=crop",
      inclusion: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&h=600&auto=format&fit=crop",
      doctorate: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=600&auto=format&fit=crop",
      book: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=800&h=600&auto=format&fit=crop",
      rights: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&h=600&auto=format&fit=crop",
      tepjf: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&h=600&auto=format&fit=crop",
      seminar: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&h=600&auto=format&fit=crop",
      platform: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&h=600&auto=format&fit=crop",
      reform: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&h=600&auto=format&fit=crop",
    })
  }, [])

  // Configuración del carrusel con autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === highlights.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Cambiar slide manualmente
  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  }

  // Datos con iconos específicos
  const recognitions = [
    {
      id: "rec1",
      title: "Contribución a la Justicia Electoral Digital",
      year: "2023",
      organization: "Tribunal Electoral del Poder Judicial de la Federación",
      image: images.digital,
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: "rec2",
      title: "Impulso a la Justicia Electoral Inclusiva",
      year: "2021",
      organization: "Escuela Judicial Electoral",
      image: images.inclusion,
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: "rec3",
      title: "Doctorado en Derecho con Tesis Laureada",
      year: "2005",
      organization: "Universidad Autónoma de Querétaro",
      image: images.doctorate,
      icon: <Medal className="h-5 w-5" />,
    },
  ]

  const publications = [
    {
      id: "pub1",
      title: "Justicia Electoral Digital",
      year: "2023",
      publisher: "Tribunal Electoral del Poder Judicial de la Federación",
      image: images.book,
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: "pub2",
      title: "Justicia Electoral Inclusiva",
      year: "2021",
      publisher: "Escuela Judicial Electoral, TEPJF",
      image: images.rights,
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: "pub3",
      title: "Estatus, organización y funcionamiento del TEPJF",
      year: "2021",
      publisher: "Tirant Lo Blanch",
      image: images.tepjf,
      icon: <BookOpen className="h-5 w-5" />,
    },
  ]

  const highlights = [
    {
      title: "Seminario Ciberdemocracia",
      date: "2022",
      location: "Ciudad de México",
      description:
        "Participación en el seminario sobre acciones afirmativas y ciudadanía de pueblos indígenas en el ámbito electoral",
      image: images.seminar,
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Publicación del Cuadernillo 'Justicia Electoral Digital'",
      date: "2023",
      location: "Editorial del TEPJF",
      description:
        "Lanzamiento de mi trabajo sobre los desafíos y oportunidades de la tecnología en la justicia electoral",
      image: images.book,
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Implementación de la Plataforma de Juicio en Línea Electoral",
      date: "2021-2022",
      location: "Sala Regional Guadalajara",
      description:
        "Liderazgo en la modernización de los procesos jurisdiccionales electorales mediante tecnología digital",
      image: images.platform,
      icon: <Star className="h-6 w-6" />,
    },
  ]

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >

      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-law-500"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="mb-10 text-center">
          <div className="inline-block">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-law-500 flex items-center justify-center">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-law-800 mb-4">Mis Contribuciones y Publicaciones</h2>
            <div className="h-1 w-32 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explora los momentos más destacados de mi trayectoria profesional, contribuciones y publicaciones en el
              ámbito de la justicia electoral.
            </p>
          </div>
        </div>

        {/* Carrusel de destacados */}
        <div className="mb-10" ref={carouselRef}>
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-law-500 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-2 text-gold-300" />
                        <span className="text-gold-300 font-medium text-sm">
                          {item.date} • {item.location}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-200 max-w-3xl mb-6 text-base md:text-lg leading-relaxed pl-16">
                    {item.description}
                  </p>
                  <div className="pl-16">
                    <Link
                      to="/galeria"
                      className="inline-flex items-center px-5 py-2 bg-law-500 text-white rounded-full font-medium text-sm"
                    >
                      Ver más detalles
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Indicadores del carrusel */}
            <div className="absolute bottom-6 right-6 flex space-x-3 z-30">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full shadow-md p-1.5 border border-slate-200">
            <button
              onClick={() => setActiveTab("recognitions")}
              className={`px-6 py-3 rounded-full text-base font-medium ${
                activeTab === "recognitions"
                  ? "bg-law-500 text-white"
                  : "bg-transparent text-gray-700 hover:bg-slate-100"
              }`}
            >
              Contribuciones
            </button>
            <button
              onClick={() => setActiveTab("publications")}
              className={`px-6 py-3 rounded-full text-base font-medium ${
                activeTab === "publications"
                  ? "bg-law-500 text-white"
                  : "bg-transparent text-gray-700 hover:bg-slate-100"
              }`}
            >
              Publicaciones
            </button>
          </div>
        </div>

        {/* Contenido de las tabs */}
        <div className="min-h-[500px]">
          {activeTab === "recognitions" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {recognitions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 h-full"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-full bg-law-500 flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-law-600 bg-law-50 px-3 py-1 rounded-full border border-law-100">
                        {item.year}
                      </span>
                      <Award className="h-5 w-5 text-law-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-law-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{item.organization}</p>
                    <Link to="/galeria" className="inline-flex items-center text-law-600 font-medium">
                      Ver detalles
                      <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {publications.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 h-full"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-full bg-law-500 flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-law-600 bg-law-50 px-3 py-1 rounded-full border border-law-100">
                        {item.year}
                      </span>
                      <BookOpen className="h-5 w-5 text-law-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-law-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{item.publisher}</p>
                    <Link to="/galeria" className="inline-flex items-center text-law-600 font-medium">
                      Ver detalles
                      <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center">
          <Link
            to="/galeria"
            className="inline-flex items-center px-8 py-4 bg-law-500 text-white rounded-full font-medium"
          >
            Ver galería completa
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}


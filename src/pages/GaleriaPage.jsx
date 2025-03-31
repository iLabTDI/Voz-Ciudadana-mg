"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, Award, BookOpen, Search, Filter, ChevronRight, ExternalLink } from "lucide-react"

export const GaleriaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const items = [
    // Contribuciones
    {
      id: "rec1",
      type: "recognition",
      title: "Contribución a la Justicia Electoral Digital",
      date: "2023",
      location: "Ciudad de México",
      description:
        "Participación en el desarrollo del cuadernillo 'Justicia Electoral Digital' editado por el TEPJF, donde se analizan los retos y oportunidades de la tecnología para la justicia electoral.",
      image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=800&h=600&auto=format&fit=crop",
    },
    {
      id: "rec2",
      type: "recognition",
      title: "Impulso a la Justicia Electoral Inclusiva",
      date: "2021-2022",
      location: "Ciudad de México",
      description:
        "Contribución a la difusión de materiales sobre justicia electoral inclusiva que analizan sentencias clave del Tribunal en favor de grupos históricamente discriminados.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&h=600&auto=format&fit=crop",
    },
    {
      id: "rec3",
      type: "recognition",
      title: "Doctorado en Derecho con Tesis Laureada",
      date: "2005",
      location: "Universidad Autónoma de Querétaro",
      description:
        "Obtención del grado de Doctor en Derecho con mención honorífica por la investigación sobre los mecanismos de protección de los derechos político-electorales.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&h=600&auto=format&fit=crop",
    },

    // Publicaciones
    {
      id: "pub1",
      title: "Justicia Electoral Digital",
      type: "publication",
      date: "2023",
      publisher: "Tribunal Electoral del Poder Judicial de la Federación",
      description:
        "Cuadernillo que analiza los retos y oportunidades que presenta la tecnología para la justicia electoral en México, con propuestas para hacer más accesible y eficiente el sistema.",
      image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=800&h=600&auto=format&fit=crop",
    },
    {
      id: "pub2",
      title: "Justicia Electoral Inclusiva",
      type: "publication",
      date: "2021",
      publisher: "Escuela Judicial Electoral, TEPJF",
      description:
        "Análisis sobre la protección de los derechos electorales de grupos históricamente marginados y propuestas para su fortalecimiento en el sistema electoral mexicano.",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&h=600&auto=format&fit=crop",
    },
    {
      id: "pub3",
      title: "Estatus, organización y funcionamiento del TEPJF",
      type: "publication",
      date: "2021",
      publisher: "Tirant Lo Blanch",
      description:
        "Capítulo sobre la Dirección General de Jurisprudencia y Consulta, analizando su papel en el sistema de justicia electoral mexicano.",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&h=600&auto=format&fit=crop",
    },

    // Eventos
    {
      id: "evt1",
      type: "event",
      title: "Seminario Ciberdemocracia",
      date: "2022",
      location: "Ciudad de México",
      description:
        "Participación en el seminario sobre acciones afirmativas y ciudadanía de pueblos indígenas en el ámbito electoral, organizado por el TEPJF.",
      image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=800&h=600&auto=format&fit=crop",
    },
    {
      id: "evt2",
      type: "event",
      title: "Implementación de la Plataforma de Juicio en Línea Electoral",
      date: "2021-2022",
      location: "Sala Regional Guadalajara",
      description:
        "Liderazgo en la puesta en marcha de la plataforma de Juicio en Línea Electoral, permitiendo que más casos pudieran recibirse y resolverse de forma electrónica.",
      image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=800&h=600&auto=format&fit=crop",
    },
    {
      id: "evt3",
      type: "event",
      title: "Foro de Reforma Electoral",
      date: "2022",
      location: "Ciudad de México",
      description:
        "Participación en foros de reforma electoral compartiendo perspectivas sobre el funcionamiento y mejoras al sistema electoral mexicano junto a otros expertos.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=600&auto=format&fit=crop",
    },
  ]

  // Filtrar elementos según la pestaña activa y el término de búsqueda
  const filteredItems = items.filter((item) => {
    // Filtrar por tipo
    const typeMatch = activeTab === "all" || item.type === activeTab

    // Filtrar por término de búsqueda
    const searchMatch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.location && item.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.publisher && item.publisher.toLowerCase().includes(searchTerm.toLowerCase()))

    return typeMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Fondo con textura */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('/patterns/paper-texture.png')", backgroundRepeat: "repeat" }}
      ></div>

      {/* Header */}
      <header className="bg-gradient-to-r from-law-600 to-law-700 text-white py-4 md:py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-gold-300 transition-colors group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center mr-2 md:mr-3 group-hover:bg-white/20 transition-all">
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span className="font-medium text-sm md:text-base">Volver al inicio</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold">Mi Galería de Experiencias</h1>
            <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shadow-md overflow-hidden">
              <img src="/images/mexican-flag.svg" alt="Bandera de México" className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative py-16 md:py-24 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1920&h=1080&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-law-900/10 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                <div className="w-16 h-16 mx-3 rounded-full bg-law-500 flex items-center justify-center shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-law-800 mb-4 md:mb-6">
              Mis Contribuciones y Publicaciones
            </h1>
            <div className="h-1 w-24 md:w-32 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explora los momentos más destacados de mi trayectoria profesional.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        {/* Filtros y búsqueda */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="inline-flex bg-white rounded-full shadow-md p-1 border border-slate-200 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 md:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "all"
                ? "bg-law-500 text-white shadow-md"
                : "bg-transparent text-gray-700 hover:bg-slate-100"
                }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab("recognition")}
              className={`px-3 md:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "recognition"
                ? "bg-law-500 text-white shadow-md"
                : "bg-transparent text-gray-700 hover:bg-slate-100"
                }`}
            >
              Contribuciones
            </button>
            <button
              onClick={() => setActiveTab("publication")}
              className={`px-3 md:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "publication"
                ? "bg-law-500 text-white shadow-md"
                : "bg-transparent text-gray-700 hover:bg-slate-100"
                }`}
            >
              Publicaciones
            </button>
            <button
              onClick={() => setActiveTab("event")}
              className={`px-3 md:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "event"
                ? "bg-law-500 text-white shadow-md"
                : "bg-transparent text-gray-700 hover:bg-slate-100"
                }`}
            >
              Eventos
            </button>
          </div>

          <div className="relative w-full md:w-auto mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-law-500 focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        {/* Resultados */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-law-500 flex items-center justify-center text-white shadow-md">
                      {item.type === "recognition" ? (
                        <Award className="h-5 w-5" />
                      ) : item.type === "publication" ? (
                        <BookOpen className="h-5 w-5" />
                      ) : (
                        <Calendar className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs md:text-sm font-medium text-law-600 bg-law-50 px-3 py-1 rounded-full border border-law-100">
                      {item.type === "recognition"
                        ? "Contribución"
                        : item.type === "publication"
                          ? "Publicación"
                          : "Evento"}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-gray-500">{item.date}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-law-800 mb-2">{item.title}</h4>
                  <div className="flex items-center text-gray-500 text-xs md:text-sm mb-3">
                    {item.location && (
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        {item.location}
                      </span>
                    )}
                    {item.publisher && (
                      <span className="flex items-center">
                        <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        {item.publisher}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex justify-end">
                    <button className="inline-flex items-center text-law-600 font-medium text-sm">
                      Ver detalles
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-law-100 mb-4">
              <Filter className="h-8 w-8 text-law-600" />
            </div>
            <h3 className="text-xl font-semibold text-law-800 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-600 mb-6">Intente con otros términos de búsqueda o cambie los filtros.</p>
            <button
              onClick={() => {
                setActiveTab("all")
                setSearchTerm("")
              }}
              className="bg-law-500 hover:bg-law-600 text-white py-2 px-6 rounded-full font-medium transition-colors shadow-md"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Destacado */}
        <div className="mt-16 md:mt-20">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&h=1080&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-law-900/90 to-law-800/80" />
            <div className="relative z-10 p-6 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Explora Mi Trayectoria Completa</h3>
              <p className="text-base md:text-lg text-gray-200 mb-6 max-w-3xl">
                Descubre más sobre mi experiencia profesional, publicaciones académicas, contribuciones y sobre mí.
              </p>
              <div className="flex justify-start">
                <Link
                  to="/biografia"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-law-900 hover:from-gold-400 hover:to-gold-500 py-2 px-5 rounded-full text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-md flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Conocer más
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Botón de regreso */}
        <div className="text-center mt-16 md:mt-20">
          <Link
            to="/"
            className="bg-law-500 hover:bg-law-600 text-white py-3 px-8 rounded-full font-medium transition-colors inline-flex items-center shadow-md"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GaleriaPage


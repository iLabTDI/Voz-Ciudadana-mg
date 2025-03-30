"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, Award, BookOpen, Search, Filter } from "lucide-react"

export const GaleriaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const items = [
    // Reconocimientos
    {
      id: "rec1",
      type: "recognition",
      title: "Premio Nacional de Jurisprudencia",
      date: "Noviembre 2022",
      location: "Ciudad de México",
      description:
        "Ceremonia de entrega del Premio Nacional de Jurisprudencia, otorgado por la Barra Mexicana de Abogados en reconocimiento a las contribuciones a la jurisprudencia electoral.",
      image: "https://source.unsplash.com/random/800x600/?award,ceremony",
    },
    {
      id: "rec2",
      type: "recognition",
      title: "Medalla al Mérito Judicial",
      date: "Octubre 2020",
      location: "Ciudad de México",
      description: "Reconocimiento por 15 años de servicio ejemplar en la administración de justicia electoral.",
      image: "https://source.unsplash.com/random/800x600/?medal,honor",
    },
    {
      id: "rec3",
      type: "recognition",
      title: "Reconocimiento a la Excelencia Académica",
      date: "Mayo 2018",
      location: "Guadalajara, Jalisco",
      description:
        "Por su destacada labor como docente y sus contribuciones a la formación de nuevas generaciones de juristas.",
      image: "https://source.unsplash.com/random/800x600/?university,education",
    },

    // Publicaciones
    {
      id: "pub1",
      type: "publication",
      title: "Justicia Electoral en la Era Digital",
      date: "Marzo 2023",
      publisher: "Editorial Porrúa",
      description:
        "Análisis profundo sobre los retos y oportunidades que presenta la tecnología para la justicia electoral en México y América Latina.",
      image: "https://source.unsplash.com/random/800x600/?book,digital",
    },
    {
      id: "pub2",
      type: "publication",
      title: "Derechos Político-Electorales de Grupos Vulnerables",
      date: "Junio 2021",
      publisher: "Instituto de Investigaciones Jurídicas, UNAM",
      description:
        "Estudio sobre la protección de los derechos electorales de grupos históricamente marginados y propuestas para su fortalecimiento.",
      image: "https://source.unsplash.com/random/800x600/?rights,diversity",
    },
    {
      id: "pub3",
      type: "publication",
      title: "La Evolución del Sistema Electoral Mexicano",
      date: "Septiembre 2019",
      publisher: "Fondo de Cultura Económica",
      description:
        "Recorrido histórico por las transformaciones del sistema electoral mexicano desde la independencia hasta nuestros días.",
      image: "https://source.unsplash.com/random/800x600/?history,mexico",
    },

    // Eventos
    {
      id: "evt1",
      type: "event",
      title: "Conferencia Internacional de Derecho Electoral",
      date: "Marzo 2023",
      location: "Ciudad de México",
      description:
        "Participación como ponente principal en la Conferencia Internacional de Derecho Electoral, donde se discutieron los retos actuales para la democracia en América Latina.",
      image: "https://source.unsplash.com/random/800x600/?conference,speaker",
    },
    {
      id: "evt2",
      type: "event",
      title: "Seminario sobre Derechos Político-Electorales",
      date: "Julio 2022",
      location: "Guadalajara, Jalisco",
      description:
        "Seminario organizado por la Universidad de Guadalajara sobre la protección de los derechos político-electorales de grupos vulnerables.",
      image: "https://source.unsplash.com/random/800x600/?seminar,university",
    },
    {
      id: "evt3",
      type: "event",
      title: "Foro de Participación Ciudadana",
      date: "Mayo 2022",
      location: "Monterrey, Nuevo León",
      description:
        "Participación en el Foro de Participación Ciudadana, donde se discutieron estrategias para fomentar una mayor participación de la ciudadanía en los procesos electorales.",
      image: "https://source.unsplash.com/random/800x600/?forum,people",
    },
  ]

  // Filtrar elementos según la pe

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
    <div
      className="min-h-screen bg-magistral-cream-500"
      style={{ backgroundImage: "url('/patterns/paper-texture.png')", backgroundRepeat: "repeat" }}
    >
      {/* Header */}
      <header className="bg-gradient-to-r from-magistral-teal-600 to-magistral-teal-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-magistral-sand-300 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-2xl font-bold">Galería de Experiencias</h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative py-16 px-4">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?gallery,museum')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-magistral-teal-700 mb-6">
              Reconocimientos, Publicaciones y Eventos
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Explore los momentos más destacados de la trayectoria profesional del Magistrado Sergio Arturo Guerrero
              Olvera.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Filtros y búsqueda */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="inline-flex bg-white rounded-full shadow-md p-1 border border-magistral-sand-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-magistral-teal-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab("recognition")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "recognition"
                  ? "bg-magistral-teal-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Reconocimientos
            </button>
            <button
              onClick={() => setActiveTab("publication")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "publication"
                  ? "bg-magistral-teal-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Publicaciones
            </button>
            <button
              onClick={() => setActiveTab("event")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "event"
                  ? "bg-magistral-teal-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Eventos
            </button>
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-magistral-sand-300 focus:outline-none focus:ring-2 focus:ring-magistral-teal-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        {/* Resultados */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-magistral-sand-200 hover:shadow-xl transition-all duration-500 hover:border-magistral-teal-200 group"
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
                    <span className="text-sm font-medium text-magistral-teal-600 bg-magistral-teal-50 px-3 py-1 rounded-full border border-magistral-teal-100">
                      {item.type === "recognition"
                        ? "Reconocimiento"
                        : item.type === "publication"
                          ? "Publicación"
                          : "Evento"}
                    </span>
                    {item.type === "recognition" ? (
                      <Award className="h-5 w-5 text-magistral-teal-600" />
                    ) : item.type === "publication" ? (
                      <BookOpen className="h-5 w-5 text-magistral-teal-600" />
                    ) : (
                      <Calendar className="h-5 w-5 text-magistral-teal-600" />
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-magistral-teal-700 mb-2 group-hover:text-magistral-teal-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center text-slate-600 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.date}</span>
                    {item.location && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{item.location}</span>
                      </>
                    )}
                    {item.publisher && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{item.publisher}</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-magistral-teal-100 mb-4">
              <Filter className="h-8 w-8 text-magistral-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">No se encontraron resultados</h3>
            <p className="text-slate-600 mb-6">Intente con otros términos de búsqueda o cambie los filtros.</p>
            <button
              onClick={() => {
                setActiveTab("all")
                setSearchTerm("")
              }}
              className="bg-magistral-teal-600 hover:bg-magistral-teal-700 text-white py-2 px-6 rounded-full font-medium transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Línea de tiempo */}
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <div className="h-px bg-magistral-sand-300 flex-grow"></div>
            <h2 className="text-2xl font-bold text-magistral-teal-700 px-4">Línea de Tiempo</h2>
            <div className="h-px bg-magistral-sand-300 flex-grow"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-magistral-teal-500 to-magistral-teal-200"></div>

            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-magistral-teal-500 border-4 border-white shadow-md"></div>

                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-magistral-sand-200 hover:shadow-lg transition-all duration-300 hover:border-magistral-teal-200 transform hover:scale-105">
                    <div className="inline-block rounded-lg bg-magistral-teal-50 px-3 py-1 text-sm text-magistral-teal-600 font-medium mb-2 border border-magistral-teal-100">
                      2015
                    </div>
                    <h4 className="text-lg font-semibold text-magistral-teal-700 mb-2">
                      Nombramiento como Magistrado Electoral
                    </h4>
                    <p className="text-slate-600">
                      Designado Magistrado de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de
                      la Federación.
                    </p>
                  </div>
                </div>

                <div className="w-5/12"></div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-magistral-teal-500 border-4 border-white shadow-md"></div>

                <div className="w-5/12"></div>

                <div className="w-5/12 pl-8 text-left">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-magistral-sand-200 hover:shadow-lg transition-all duration-300 hover:border-magistral-teal-200 transform hover:scale-105">
                    <div className="inline-block rounded-lg bg-magistral-teal-50 px-3 py-1 text-sm text-magistral-teal-600 font-medium mb-2 border border-magistral-teal-100">
                      2010
                    </div>
                    <h4 className="text-lg font-semibold text-magistral-teal-700 mb-2">
                      Secretario de Estudio y Cuenta
                    </h4>
                    <p className="text-slate-600">
                      Nombrado Secretario de Estudio y Cuenta en la Sala Superior del Tribunal Electoral del Poder
                      Judicial de la Federación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-magistral-teal-500 border-4 border-white shadow-md"></div>

                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-magistral-sand-200 hover:shadow-lg transition-all duration-300 hover:border-magistral-teal-200 transform hover:scale-105">
                    <div className="inline-block rounded-lg bg-magistral-teal-50 px-3 py-1 text-sm text-magistral-teal-600 font-medium mb-2 border border-magistral-teal-100">
                      2008
                    </div>
                    <h4 className="text-lg font-semibold text-magistral-teal-700 mb-2">
                      Profesor de Derecho Electoral
                    </h4>
                    <p className="text-slate-600">
                      Inicio de actividad docente como Profesor de Derecho Electoral en la Universidad de Guadalajara.
                    </p>
                  </div>
                </div>

                <div className="w-5/12"></div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-magistral-teal-500 border-4 border-white shadow-md"></div>

                <div className="w-5/12"></div>

                <div className="w-5/12 pl-8 text-left">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-magistral-sand-200 hover:shadow-lg transition-all duration-300 hover:border-magistral-teal-200 transform hover:scale-105">
                    <div className="inline-block rounded-lg bg-magistral-teal-50 px-3 py-1 text-sm text-magistral-teal-600 font-medium mb-2 border border-magistral-teal-100">
                      2005
                    </div>
                    <h4 className="text-lg font-semibold text-magistral-teal-700 mb-2">
                      Doctorado en Derecho Constitucional
                    </h4>
                    <p className="text-slate-600">
                      Obtención del grado de Doctor en Derecho Constitucional por la Universidad Nacional Autónoma de
                      México.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de regreso */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="bg-magistral-teal-600 hover:bg-magistral-teal-700 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 inline-flex items-center shadow-lg"
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


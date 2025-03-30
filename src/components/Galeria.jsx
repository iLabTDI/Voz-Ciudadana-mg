"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, ImageIcon, Award, Users, ChevronRight } from "lucide-react"
import { Modal } from "./Modal"

export const Galeria = ({ isVisible }) => {
  const [activeModal, setActiveModal] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef(null)

  const openModal = (id) => {
    setActiveModal(id)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("animate-slideUp")
              el.classList.remove("opacity-0")
            }, i * 150)
          })
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Datos para la galería
  const galeria = [
    {
      id: "gal1",
      title: "Conferencia Internacional de Derecho Electoral",
      date: "Marzo 2023",
      location: "Ciudad de México",
      description:
        "Participación como ponente principal en la Conferencia Internacional de Derecho Electoral, donde se discutieron los retos actuales para la democracia en América Latina.",
      image: "https://source.unsplash.com/random/800x600/?conference,speaker",
      category: "Conferencia",
      icon: <Users className="h-5 w-5 text-tech-500" />,
    },
    {
      id: "gal2",
      title: "Premio Nacional de Jurisprudencia",
      date: "Noviembre 2022",
      location: "Ciudad de México",
      description:
        "Ceremonia de entrega del Premio Nacional de Jurisprudencia, otorgado por la Barra Mexicana de Abogados en reconocimiento a las contribuciones a la jurisprudencia electoral.",
      image: "https://source.unsplash.com/random/800x600/?award,ceremony",
      category: "Premio",
      icon: <Award className="h-5 w-5 text-tech-500" />,
    },
    {
      id: "gal3",
      title: "Seminario sobre Derechos Político-Electorales",
      date: "Julio 2022",
      location: "Guadalajara, Jalisco",
      description:
        "Seminario organizado por la Universidad de Guadalajara sobre la protección de los derechos político-electorales de grupos vulnerables.",
      image: "https://source.unsplash.com/random/800x600/?seminar,university",
      category: "Seminario",
      icon: <Users className="h-5 w-5 text-tech-500" />,
    },
    {
      id: "gal4",
      title: "Foro de Participación Ciudadana",
      date: "Mayo 2022",
      location: "Monterrey, Nuevo León",
      description:
        "Participación en el Foro de Participación Ciudadana, donde se discutieron estrategias para fomentar una mayor participación de la ciudadanía en los procesos electorales.",
      image: "https://source.unsplash.com/random/800x600/?forum,people",
      category: "Foro",
      icon: <Users className="h-5 w-5 text-tech-500" />,
    },
    {
      id: "gal5",
      title: "Congreso Internacional de Derecho Electoral",
      date: "Febrero 2022",
      location: "Madrid, España",
      description:
        "Participación como representante de México en el Congreso Internacional de Derecho Electoral, donde se compartieron experiencias y mejores prácticas con especialistas de diversos países.",
      image: "https://source.unsplash.com/random/800x600/?congress,international",
      category: "Congreso",
      icon: <Users className="h-5 w-5 text-tech-500" />,
    },
    {
      id: "gal6",
      title: 'Presentación del libro "Justicia Electoral en la Era Digital"',
      date: "Octubre 2021",
      location: "Guadalajara, Jalisco",
      description:
        'Presentación de mi libro "Justicia Electoral en la Era Digital", con la participación de destacados juristas y académicos.',
      image: "https://source.unsplash.com/random/800x600/?book,presentation",
      category: "Publicación",
      icon: <ImageIcon className="h-5 w-5 text-tech-500" />,
    },
  ]

  // Datos para la línea de tiempo
  const timeline = [
    {
      year: "2015",
      title: "Nombramiento como Magistrado Electoral",
      description:
        "Designado Magistrado de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación.",
    },
    {
      year: "2010",
      title: "Secretario de Estudio y Cuenta",
      description:
        "Nombrado Secretario de Estudio y Cuenta en la Sala Superior del Tribunal Electoral del Poder Judicial de la Federación.",
    },
    {
      year: "2008",
      title: "Profesor de Derecho Electoral",
      description: "Inicio de actividad docente como Profesor de Derecho Electoral en la Universidad de Guadalajara.",
    },
    {
      year: "2005",
      title: "Doctorado en Derecho Constitucional",
      description:
        "Obtención del grado de Doctor en Derecho Constitucional por la Universidad Nacional Autónoma de México.",
    },
    {
      year: "2000",
      title: "Maestría en Derecho Electoral",
      description: "Obtención del grado de Maestro en Derecho Electoral por la Universidad de Guadalajara.",
    },
    {
      year: "1995",
      title: "Licenciatura en Derecho",
      description: "Graduación como Licenciado en Derecho por la Universidad de Guadalajara.",
    },
  ]

  // Filtrar galería por categoría
  const filteredGaleria = activeFilter === "all" ? galeria : galeria.filter((item) => item.category === activeFilter)

  // Categorías únicas para el filtro
  const categories = ["all", ...new Set(galeria.map((item) => item.category))]

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className={`py-20 px-4 bg-white relative z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-block rounded-lg bg-tech-500/10 px-3 py-1 text-sm text-tech-600 font-medium mb-2 shadow-md">
            Momentos Destacados
          </div>
          <h2 className="text-4xl font-bold text-tech-700 mb-4">Galería de Experiencias</h2>
          <div className="h-1 w-32 bg-aqua-400 mx-auto mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Explora los momentos más destacados de mi trayectoria profesional, conferencias, premios y eventos.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-on-scroll opacity-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-tech-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category === "all" ? "Todos" : category}
            </button>
          ))}
        </div>

        {/* Galería de imágenes - Layout masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredGaleria.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-tech-200 group cursor-pointer animate-on-scroll opacity-0 ${
                index % 3 === 0 ? "lg:col-span-2" : ""
              }`}
              onClick={() => openModal(item.id)}
            >
              <div className={`${index % 3 === 0 ? "h-64" : "h-48"} overflow-hidden`}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-tech-600 bg-tech-500/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-tech-600 mb-2 group-hover:text-tech-500 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center text-slate-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.location}</span>
                </div>
                <button
                  className="text-tech-600 hover:text-tech-500 text-sm font-medium flex items-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(item.id)
                  }}
                >
                  Ver detalles
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Línea de tiempo - Layout mejorado */}
        <div className="mb-16">
          <div className="flex items-center mb-8 animate-on-scroll opacity-0">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h3 className="text-2xl font-bold text-tech-700 px-4">Línea de Tiempo</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="relative animate-on-scroll opacity-0">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tech-500 to-tech-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Punto en la línea */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-tech-500 border-4 border-white shadow-md"></div>

                  {/* Contenido */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 hover:border-tech-200 transform hover:scale-105">
                      <div className="inline-block rounded-lg bg-tech-500/10 px-3 py-1 text-sm text-tech-600 font-medium mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold text-tech-600 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Espacio vacío */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Galería de imágenes destacadas */}
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center mb-8">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h3 className="text-2xl font-bold text-tech-700 px-4">Imágenes Destacadas</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-xl col-span-2 row-span-2 group">
              <img
                src="https://source.unsplash.com/random/800x800/?judge,court"
                alt="Imagen destacada"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Sala Regional Guadalajara</h4>
                  <p className="text-sm">Tribunal Electoral del Poder Judicial de la Federación</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl group">
              <img
                src="https://source.unsplash.com/random/400x400/?conference,law"
                alt="Imagen destacada"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Conferencia Internacional</h4>
                  <p className="text-sm">Madrid, 2022</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl group">
              <img
                src="https://source.unsplash.com/random/400x400/?award,ceremony"
                alt="Imagen destacada"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Premio Nacional</h4>
                  <p className="text-sm">Ciudad de México, 2022</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl group">
              <img
                src="https://source.unsplash.com/random/400x400/?book,library"
                alt="Imagen destacada"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Publicación de Libro</h4>
                  <p className="text-sm">Guadalajara, 2021</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl group">
              <img
                src="https://source.unsplash.com/random/400x400/?university,classroom"
                alt="Imagen destacada"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">Clase Magistral</h4>
                  <p className="text-sm">Universidad de Guadalajara, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modales para galería */}
      {galeria.map((item) => (
        <Modal key={item.id} isOpen={activeModal === item.id} onClose={closeModal} title={item.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-tech-600 bg-tech-500/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center text-slate-600 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-tech-600 mb-2">{item.title}</h4>
              <p className="text-slate-600 font-medium mb-4">Ubicación: {item.location}</p>
              <p className="text-slate-700 mb-6">{item.description}</p>

              <div className="bg-tech-500/5 p-4 rounded-lg border border-tech-500/10">
                <h5 className="font-medium text-tech-600 mb-2">Importancia del evento:</h5>
                <p className="text-slate-700">
                  Este evento representa un hito importante en mi trayectoria profesional, ya que permitió compartir
                  conocimientos y experiencias con otros especialistas en derecho electoral, así como contribuir al
                  debate sobre los retos actuales para la democracia.
                </p>
              </div>

              <div className="mt-6">
                <h5 className="font-medium text-tech-600 mb-2">Galería relacionada:</h5>
                <div className="grid grid-cols-3 gap-2">
                  <img
                    src="https://source.unsplash.com/random/100x100/?event"
                    alt="Imagen adicional 1"
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <img
                    src="https://source.unsplash.com/random/100x100/?conference"
                    alt="Imagen adicional 2"
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <img
                    src="https://source.unsplash.com/random/100x100/?people"
                    alt="Imagen adicional 3"
                    className="w-full h-20 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ))}
    </section>
  )
}


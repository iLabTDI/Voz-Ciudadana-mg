"use client"

import { useState, useEffect, useRef } from "react"
import { Award, BookOpen, GraduationCap, Briefcase, Heart, Coffee, ChevronRight, ExternalLink } from "lucide-react"
import { Modal } from "./Modal"
import { Link } from "react-router-dom"

export const Conoceme = ({ isVisible }) => {
  const [activeModal, setActiveModal] = useState(null)
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

  // Datos para reconocimientos
  const reconocimientos = [
    {
      id: "rec1",
      title: "Premio Nacional de Jurisprudencia",
      year: "2022",
      organization: "Barra Mexicana de Abogados",
      description:
        "Reconocimiento por contribuciones destacadas a la jurisprudencia electoral y la protección de derechos político-electorales.",
      image: "https://source.unsplash.com/random/800x600/?award,ceremony",
      icon: <Award className="h-6 w-6 text-tech-500" />,
    },
    {
      id: "rec2",
      title: "Medalla al Mérito Judicial",
      year: "2020",
      organization: "Poder Judicial de la Federación",
      description: "Reconocimiento por 15 años de servicio ejemplar en la administración de justicia electoral.",
      image: "https://source.unsplash.com/random/800x600/?medal,honor",
      icon: <Award className="h-6 w-6 text-tech-500" />,
    },
    {
      id: "rec3",
      title: "Reconocimiento a la Excelencia Académica",
      year: "2018",
      organization: "Universidad de Guadalajara",
      description:
        "Por su destacada labor como docente y sus contribuciones a la formación de nuevas generaciones de juristas.",
      image: "https://source.unsplash.com/random/800x600/?university,education",
      icon: <GraduationCap className="h-6 w-6 text-tech-500" />,
    },
  ]

  // Datos para publicaciones
  const publicaciones = [
    {
      id: "pub1",
      title: "Justicia Electoral en la Era Digital",
      year: "2023",
      publisher: "Editorial Porrúa",
      description:
        "Análisis profundo sobre los retos y oportunidades que presenta la tecnología para la justicia electoral en México y América Latina.",
      image: "https://source.unsplash.com/random/800x600/?book,digital",
      icon: <BookOpen className="h-6 w-6 text-tech-500" />,
    },
    {
      id: "pub2",
      title: "Derechos Político-Electorales de Grupos Vulnerables",
      year: "2021",
      publisher: "Instituto de Investigaciones Jurídicas, UNAM",
      description:
        "Estudio sobre la protección de los derechos electorales de grupos históricamente marginados y propuestas para su fortalecimiento.",
      image: "https://source.unsplash.com/random/800x600/?rights,diversity",
      icon: <BookOpen className="h-6 w-6 text-tech-500" />,
    },
    {
      id: "pub3",
      title: "La Evolución del Sistema Electoral Mexicano",
      year: "2019",
      publisher: "Fondo de Cultura Económica",
      description:
        "Recorrido histórico por las transformaciones del sistema electoral mexicano desde la independencia hasta nuestros días.",
      image: "https://source.unsplash.com/random/800x600/?history,mexico",
      icon: <BookOpen className="h-6 w-6 text-tech-500" />,
    },
  ]

  // Datos para lo que me inspira
  const inspiraciones = [
    {
      id: "insp1",
      title: "La música clásica",
      description:
        "Soy un apasionado de la música clásica, especialmente de Beethoven y Mozart. Tocar el piano es una de mis formas favoritas de relajarme después de un día intenso de trabajo.",
      icon: <Heart className="h-6 w-6" />,
      image: "https://source.unsplash.com/random/800x600/?piano,classical",
    },
    {
      id: "insp2",
      title: "El café de especialidad",
      description:
        "Disfruto descubrir cafés de diferentes regiones del mundo. Preparar un buen café por la mañana es parte esencial de mi rutina diaria.",
      icon: <Coffee className="h-6 w-6" />,
      image: "https://source.unsplash.com/random/800x600/?coffee,specialty",
    },
    {
      id: "insp3",
      title: "La literatura latinoamericana",
      description:
        "Los autores latinoamericanos como García Márquez, Borges y Rulfo han influido profundamente en mi forma de ver el mundo y entender nuestra cultura.",
      icon: <BookOpen className="h-6 w-6" />,
      image: "https://source.unsplash.com/random/800x600/?books,library",
    },
  ]

  return (
    <section
      id="conoceme"
      ref={sectionRef}
      className={`py-20 px-4 bg-white relative z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-block rounded-lg bg-tech-500/10 px-3 py-1 text-sm text-tech-600 font-medium mb-2 shadow-md">
            Biografía
          </div>
          <h2 className="text-4xl font-bold text-tech-700 mb-4">Conóceme</h2>
          <div className="h-1 w-32 bg-aqua-400 mx-auto mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Descubre quién soy, mi formación, experiencia y lo que me inspira a trabajar por un mejor sistema electoral.
          </p>
        </div>

        {/* Biografía - Layout mejorado con imagen */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 animate-on-scroll opacity-0">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-500 to-aqua-400 transform rotate-3 rounded-xl"></div>
              <img
                src="https://source.unsplash.com/random/600x800/?judge,professional,man"
                alt="Magistrado Sergio Arturo Guerrero Olvera"
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-tech-600 font-bold text-center">
                  <span className="block text-2xl">15+</span>
                  <span className="text-xs">años de experiencia</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-tech-600 to-tech-500 p-6 rounded-xl text-white shadow-lg">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" /> Formación Académica
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-aqua-400 mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Doctorado en Derecho Constitucional</p>
                    <p className="text-sm text-gray-200">Universidad Nacional Autónoma de México</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-aqua-400 mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Maestría en Derecho Electoral</p>
                    <p className="text-sm text-gray-200">Universidad de Guadalajara</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-aqua-400 mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Licenciatura en Derecho</p>
                    <p className="text-sm text-gray-200">Universidad de Guadalajara</p>
                  </div>
                </li>
              </ul>

              <h4 className="text-xl font-semibold mt-6 mb-4 flex items-center">
                <Briefcase className="mr-2 h-5 w-5" /> Experiencia Profesional
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-aqua-400 mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Magistrado Electoral</p>
                    <p className="text-sm text-gray-200">Sala Regional Guadalajara, TEPJF (2015-Presente)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-aqua-400 mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Secretario de Estudio y Cuenta</p>
                    <p className="text-sm text-gray-200">Sala Superior, TEPJF (2010-2015)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-aqua-400 mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Profesor de Derecho Electoral</p>
                    <p className="text-sm text-gray-200">Universidad de Guadalajara (2008-Presente)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-xl p-8 h-full border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:border-tech-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-tech-500/5 rounded-bl-full -z-10"></div>

              <h3 className="text-2xl font-bold text-tech-600 mb-6 relative inline-block">
                Quién Soy
                <div className="h-1 w-full bg-aqua-400 mt-2"></div>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600 flex-shrink-0">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-tech-600 mb-2">Mi Trayectoria</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Soy Sergio Arturo Guerrero Olvera, Magistrado de la Sala Regional Guadalajara del Tribunal
                      Electoral del Poder Judicial de la Federación. Nací en Guadalajara, Jalisco, donde he desarrollado
                      gran parte de mi carrera profesional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600 flex-shrink-0">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-tech-600 mb-2">Mi Pasión por el Derecho Electoral</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Mi pasión por el derecho electoral comenzó durante mis estudios universitarios, cuando participé
                      como observador electoral en las elecciones de 1994. Desde entonces, he dedicado mi vida
                      profesional a la protección de los derechos político-electorales y al fortalecimiento de nuestras
                      instituciones democráticas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600 flex-shrink-0">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-tech-600 mb-2">Mi Compromiso</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Como Magistrado, he trabajado incansablemente para garantizar que cada voto cuente y que los
                      procesos electorales se desarrollen con transparencia, legalidad y equidad. Mi compromiso es con
                      la justicia y con el pueblo mexicano.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600 flex-shrink-0">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-tech-600 mb-2">Mi Visión para el Futuro</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Creo firmemente en la necesidad de modernizar nuestro sistema electoral, aprovechando las nuevas
                      tecnologías para hacerlo más accesible, eficiente y transparente. Mi objetivo es contribuir a la
                      construcción de una democracia más sólida y participativa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Link
                  to="/biografia"
                  className="inline-flex items-center text-tech-600 font-medium hover:text-tech-500 transition-colors"
                >
                  Conocer más sobre mi historia
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Reconocimientos - Layout con separadores */}
        <div className="mb-16 animate-on-scroll opacity-0">
          <div className="flex items-center mb-8">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h3 className="text-2xl font-bold text-tech-700 px-4 flex items-center">
              <Award className="mr-2 h-6 w-6 text-tech-500" />
              Reconocimientos
            </h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reconocimientos.map((reconocimiento) => (
              <div
                key={reconocimiento.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-tech-200 group cursor-pointer"
                onClick={() => openModal(reconocimiento.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={reconocimiento.image || "/placeholder.svg"}
                    alt={reconocimiento.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-tech-600 bg-tech-500/10 px-3 py-1 rounded-full">
                      {reconocimiento.year}
                    </span>
                    {reconocimiento.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-tech-600 mb-2 group-hover:text-tech-500 transition-colors">
                    {reconocimiento.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">{reconocimiento.organization}</p>
                  <button
                    className="text-tech-600 hover:text-tech-500 text-sm font-medium flex items-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(reconocimiento.id)
                    }}
                  >
                    Ver detalles
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publicaciones - Layout con separadores */}
        <div className="mb-16 animate-on-scroll opacity-0">
          <div className="flex items-center mb-8">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h3 className="text-2xl font-bold text-tech-700 px-4 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-tech-500" />
              Publicaciones
            </h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicaciones.map((publicacion) => (
              <div
                key={publicacion.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-tech-200 group cursor-pointer"
                onClick={() => openModal(publicacion.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={publicacion.image || "/placeholder.svg"}
                    alt={publicacion.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-tech-600 bg-tech-500/10 px-3 py-1 rounded-full">
                      {publicacion.year}
                    </span>
                    {publicacion.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-tech-600 mb-2 group-hover:text-tech-500 transition-colors">
                    {publicacion.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">{publicacion.publisher}</p>
                  <button
                    className="text-tech-600 hover:text-tech-500 text-sm font-medium flex items-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(publicacion.id)
                    }}
                  >
                    Ver detalles
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lo que me inspira - Layout mejorado con imagen de fondo */}
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center mb-8">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h3 className="text-2xl font-bold text-tech-700 px-4 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-tech-500" />
              Lo Que Me Inspira
            </h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1600x900/?inspiration')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-tech-900/90 to-tech-900/70"></div>
            <div className="relative z-10 p-10 text-white">
              <p className="text-xl italic text-center mb-10">
                "Más allá de mi carrera profesional, hay pasiones personales que me inspiran y me ayudan a mantener el
                equilibrio en mi vida."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {inspiraciones.map((inspiracion) => (
                  <div
                    key={inspiracion.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-tech-500/50 transition-colors">
                      {inspiracion.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{inspiracion.title}</h4>
                    <p className="text-gray-200 mb-4">{inspiracion.description}</p>
                    <Link
                      to="/biografia"
                      className="inline-flex items-center text-aqua-300 hover:text-aqua-200 transition-colors text-sm font-medium"
                    >
                      Conocer más
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modales para reconocimientos */}
      {reconocimientos.map((reconocimiento) => (
        <Modal
          key={reconocimiento.id}
          isOpen={activeModal === reconocimiento.id}
          onClose={closeModal}
          title={reconocimiento.title}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={reconocimiento.image || "/placeholder.svg"}
                alt={reconocimiento.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-tech-500" />
                <span className="text-sm font-medium text-tech-600 bg-tech-500/10 px-3 py-1 rounded-full">
                  {reconocimiento.year}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-tech-600 mb-2">{reconocimiento.title}</h4>
              <p className="text-slate-600 font-medium mb-4">Otorgado por: {reconocimiento.organization}</p>
              <p className="text-slate-700 mb-4">{reconocimiento.description}</p>
              <div className="bg-tech-500/5 p-4 rounded-lg border border-tech-500/10">
                <h5 className="font-medium text-tech-600 mb-2">Significado de este reconocimiento:</h5>
                <p className="text-slate-700">
                  Este reconocimiento representa el compromiso con la excelencia y la dedicación a la justicia
                  electoral. Es un recordatorio de la responsabilidad que tenemos con la ciudadanía y con el
                  fortalecimiento de nuestras instituciones democráticas.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      ))}

      {/* Modales para publicaciones */}
      {publicaciones.map((publicacion) => (
        <Modal
          key={publicacion.id}
          isOpen={activeModal === publicacion.id}
          onClose={closeModal}
          title={publicacion.title}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={publicacion.image || "/placeholder.svg"}
                alt={publicacion.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-tech-500" />
                <span className="text-sm font-medium text-tech-600 bg-tech-500/10 px-3 py-1 rounded-full">
                  {publicacion.year}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-tech-600 mb-2">{publicacion.title}</h4>
              <p className="text-slate-600 font-medium mb-4">Editorial: {publicacion.publisher}</p>
              <p className="text-slate-700 mb-4">{publicacion.description}</p>
              <div className="bg-tech-500/5 p-4 rounded-lg border border-tech-500/10">
                <h5 className="font-medium text-tech-600 mb-2">Principales aportaciones:</h5>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Análisis de jurisprudencia relevante en materia electoral</li>
                  <li>Propuestas innovadoras para la modernización del sistema electoral</li>
                  <li>Estudio comparativo con sistemas electorales internacionales</li>
                  <li>Reflexiones sobre los retos futuros para la democracia mexicana</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      ))}
    </section>
  )
}


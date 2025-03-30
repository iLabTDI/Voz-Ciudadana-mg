"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, BookOpen, GraduationCap, Briefcase, Heart, Coffee, Music } from "lucide-react"

export const BiografiaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            <h1 className="text-2xl font-bold">Magistrado Sergio Arturo Guerrero Olvera</h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?library,law')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-magistral-teal-700 mb-6">Biografía Completa</h1>
            <p className="text-xl text-slate-600 mb-8">
              Conozca la trayectoria profesional, académica y personal del Magistrado Sergio Arturo Guerrero Olvera.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introducción */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
              <h2 className="text-2xl font-bold text-magistral-teal-700 px-4">Introducción</h2>
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-magistral-teal-600 to-magistral-teal-700 transform rotate-3 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-magistral-sand-400 to-magistral-sand-500 transform -rotate-2 rounded-xl"></div>
                  <img
                    src="https://source.unsplash.com/random/600x800/?judge,professional,man"
                    alt="Magistrado Sergio Arturo Guerrero Olvera"
                    className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Sergio Arturo Guerrero Olvera nació en Guadalajara, Jalisco, el 15 de marzo de 1970. Desde temprana
                  edad mostró un gran interés por el derecho y la justicia, lo que lo llevó a estudiar la carrera de
                  Derecho en la Universidad de Guadalajara, donde se graduó con honores en 1995.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Su pasión por el derecho electoral comenzó durante sus estudios universitarios, cuando participó como
                  observador electoral en las elecciones de 1994. Esta experiencia marcó profundamente su trayectoria
                  profesional, orientándola hacia la protección de los derechos político-electorales y el
                  fortalecimiento de las instituciones democráticas.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  A lo largo de su carrera, ha combinado la práctica jurídica con la docencia y la investigación, lo que
                  le ha permitido desarrollar una visión integral del derecho electoral y contribuir significativamente
                  a su evolución en México.
                </p>
              </div>
            </div>
          </div>

          {/* Formación Académica */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
              <h2 className="text-2xl font-bold text-magistral-teal-700 px-4 flex items-center">
                <GraduationCap className="mr-2 h-6 w-6 text-magistral-teal-600" />
                Formación Académica
              </h2>
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">
                      Doctorado en Derecho Constitucional
                    </h3>
                    <p className="text-slate-600 mb-2">Universidad Nacional Autónoma de México (2001-2005)</p>
                    <p className="text-slate-700">
                      Tesis: "La Justicia Electoral como Garantía de los Derechos Político-Electorales en México".
                      Obtuvo mención honorífica por su investigación sobre los mecanismos de protección de los derechos
                      político-electorales y su evolución en el sistema jurídico mexicano.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">
                      Maestría en Derecho Electoral
                    </h3>
                    <p className="text-slate-600 mb-2">Universidad de Guadalajara (1997-2000)</p>
                    <p className="text-slate-700">
                      Tesis: "Análisis Comparativo de los Sistemas de Justicia Electoral en América Latina". Su
                      investigación estableció un marco comparativo entre los diferentes sistemas de justicia electoral
                      en la región, identificando fortalezas y áreas de oportunidad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">Licenciatura en Derecho</h3>
                    <p className="text-slate-600 mb-2">Universidad de Guadalajara (1990-1995)</p>
                    <p className="text-slate-700">
                      Se graduó con honores, obteniendo el reconocimiento al mejor promedio de su generación. Durante
                      sus estudios, participó activamente en el programa de servicio social en la Comisión Estatal
                      Electoral de Jalisco, lo que despertó su interés por el derecho electoral.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trayectoria Profesional */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
              <h2 className="text-2xl font-bold text-magistral-teal-700 px-4 flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-magistral-teal-600" />
                Trayectoria Profesional
              </h2>
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">Magistrado Electoral</h3>
                    <p className="text-slate-600 mb-2">Sala Regional Guadalajara, TEPJF (2015-Presente)</p>
                    <p className="text-slate-700">
                      Como Magistrado de la Sala Regional Guadalajara, ha resuelto numerosos casos relacionados con la
                      protección de los derechos político-electorales, contribuyendo significativamente a la
                      jurisprudencia en materia electoral. Ha sido ponente en casos emblemáticos sobre paridad de
                      género, derechos de comunidades indígenas y transparencia electoral.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">
                      Secretario de Estudio y Cuenta
                    </h3>
                    <p className="text-slate-600 mb-2">Sala Superior, TEPJF (2010-2015)</p>
                    <p className="text-slate-700">
                      Durante su periodo como Secretario de Estudio y Cuenta, participó en la elaboración de proyectos
                      de sentencia en casos de gran relevancia nacional, como impugnaciones a resultados electorales,
                      conflictos internos de partidos políticos y protección de derechos político-electorales de grupos
                      vulnerables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">
                      Profesor de Derecho Electoral
                    </h3>
                    <p className="text-slate-600 mb-2">Universidad de Guadalajara (2008-Presente)</p>
                    <p className="text-slate-700">
                      Como docente, ha formado a numerosas generaciones de abogados especializados en derecho electoral.
                      Sus clases se caracterizan por combinar la teoría con el análisis de casos prácticos, lo que ha
                      permitido a sus estudiantes desarrollar una comprensión profunda de los principios y mecanismos
                      del sistema electoral mexicano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Publicaciones Destacadas */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
              <h2 className="text-2xl font-bold text-magistral-teal-700 px-4 flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-magistral-teal-600" />
                Publicaciones Destacadas
              </h2>
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">
                      Justicia Electoral en la Era Digital
                    </h3>
                    <p className="text-slate-600 mb-2">Editorial Porrúa (2023)</p>
                    <p className="text-slate-700">
                      En esta obra, analiza los retos y oportunidades que presenta la tecnología para la justicia
                      electoral en México y América Latina. Propone un modelo de justicia electoral digital que
                      aprovecha las nuevas tecnologías para hacer más accesible, eficiente y transparente el sistema de
                      justicia electoral.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">
                      Derechos Político-Electorales de Grupos Vulnerables
                    </h3>
                    <p className="text-slate-600 mb-2">Instituto de Investigaciones Jurídicas, UNAM (2021)</p>
                    <p className="text-slate-700">
                      Esta investigación aborda la protección de los derechos electorales de grupos históricamente
                      marginados, como comunidades indígenas, personas con discapacidad y la comunidad LGBTQ+. Propone
                      mecanismos específicos para garantizar su participación efectiva en los procesos democráticos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-magistral-sand-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-magistral-teal-100 flex items-center justify-center text-magistral-teal-600 mr-4 flex-shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-magistral-teal-700 mb-2">
                      La Evolución del Sistema Electoral Mexicano
                    </h3>
                    <p className="text-slate-600 mb-2">Fondo de Cultura Económica (2019)</p>
                    <p className="text-slate-700">
                      Recorrido histórico por las transformaciones del sistema electoral mexicano desde la independencia
                      hasta nuestros días. Analiza las reformas electorales más importantes y su impacto en la
                      consolidación democrática del país.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vida Personal */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
              <h2 className="text-2xl font-bold text-magistral-teal-700 px-4 flex items-center">
                <Heart className="mr-2 h-6 w-6 text-magistral-teal-600" />
                Vida Personal
              </h2>
              <div className="h-px bg-magistral-sand-300 flex-grow"></div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-magistral-sand-200">
              <p className="text-slate-700 mb-6 leading-relaxed">
                Más allá de su carrera profesional, Sergio Arturo Guerrero Olvera es un apasionado de la música clásica,
                especialmente de Beethoven y Mozart. Toca el piano desde los 12 años y ocasionalmente participa en
                recitales benéficos.
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Es un entusiasta del café de especialidad y disfruta descubrir cafés de diferentes regiones del mundo.
                Considera que preparar un buen café por la mañana es parte esencial de su rutina diaria y una forma de
                conectar con diferentes culturas.
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                La literatura latinoamericana ocupa un lugar especial en su vida. Los autores latinoamericanos como
                García Márquez, Borges y Rulfo han influido profundamente en su forma de ver el mundo y entender nuestra
                cultura. Posee una extensa biblioteca con obras de estos y otros autores, que consulta frecuentemente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-magistral-teal-50 p-4 rounded-lg border border-magistral-teal-100">
                  <div className="flex items-center mb-3">
                    <Music className="h-5 w-5 text-magistral-teal-600 mr-2" />
                    <h4 className="font-medium text-magistral-teal-700">Música Favorita</h4>
                  </div>
                  <p className="text-slate-700">
                    Sonatas de Beethoven y conciertos para piano de Mozart. Toca el piano desde los 12 años.
                  </p>
                </div>

                <div className="bg-magistral-teal-50 p-4 rounded-lg border border-magistral-teal-100">
                  <div className="flex items-center mb-3">
                    <Coffee className="h-5 w-5 text-magistral-teal-600 mr-2" />
                    <h4 className="font-medium text-magistral-teal-700">Café Favorito</h4>
                  </div>
                  <p className="text-slate-700">
                    Geisha de Panamá, preparado en V60. Aprecia sus notas florales y su delicado equilibrio.
                  </p>
                </div>

                <div className="bg-magistral-teal-50 p-4 rounded-lg border border-magistral-teal-100">
                  <div className="flex items-center mb-3">
                    <BookOpen className="h-5 w-5 text-magistral-teal-600 mr-2" />
                    <h4 className="font-medium text-magistral-teal-700">Libro Favorito</h4>
                  </div>
                  <p className="text-slate-700">
                    "Cien años de soledad" de Gabriel García Márquez, por su magistral retrato de la realidad
                    latinoamericana.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de regreso */}
          <div className="text-center mt-12">
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
    </div>
  )
}

export default BiografiaPage


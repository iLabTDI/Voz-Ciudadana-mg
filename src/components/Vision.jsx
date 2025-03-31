"use client"

import { useEffect, useRef } from "react"
import { Eye, Award, Shield, Scale, Lightbulb, Users, ChevronRight } from "lucide-react"

export const Vision = ({ isVisible }) => {
  const sectionRef = useRef(null)

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

  return (
    <section
      id="vision"
      ref={sectionRef}
      className={`py-20 px-4 relative z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
      }`}
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-block rounded-lg bg-tech-500/10 px-3 py-1 text-sm text-tech-600 font-medium mb-2 shadow-md">
            Nuestra Visión
          </div>
          <h2 className="text-4xl font-bold text-tech-700 mb-4">Una Visión Innovadora para el Futuro Electoral</h2>
          <div className="h-1 w-48 bg-aqua-400 mx-auto mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Tengo una visión clara y transformadora para el futuro de la justicia electoral en
            México, basada en principios fundamentales y un compromiso inquebrantable con la democracia.
          </p>
        </div>

        {/* Pilares de la Visión - Layout horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-slate-100 group hover:border-tech-200 relative overflow-hidden animate-on-scroll opacity-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tech-500/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-tech-500 to-aqua-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-3 transition-transform duration-500">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-tech-600 mb-4 group-hover:text-tech-500 transition-colors">
              Justicia Imparcial
            </h3>
            <div className="h-1 w-24 bg-aqua-400 mb-6 transform origin-left group-hover:scale-x-125 transition-transform duration-500"></div>
            <p className="text-slate-700">
              Garantizar que cada decisión se base únicamente en la ley y los hechos, sin influencias externas ni sesgos
              personales.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-slate-100 group hover:border-tech-200 relative overflow-hidden animate-on-scroll opacity-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tech-500/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-tech-500 to-aqua-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-3 transition-transform duration-500">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-tech-600 mb-4 group-hover:text-tech-500 transition-colors">
              Protección de Derechos
            </h3>
            <div className="h-1 w-24 bg-aqua-400 mb-6 transform origin-left group-hover:scale-x-125 transition-transform duration-500"></div>
            <p className="text-slate-700">
              Defender los derechos político-electorales de todos los ciudadanos, especialmente de los grupos más
              vulnerables.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-slate-100 group hover:border-tech-200 relative overflow-hidden animate-on-scroll opacity-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tech-500/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-tech-500 to-aqua-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-3 transition-transform duration-500">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-tech-600 mb-4 group-hover:text-tech-500 transition-colors">
              Innovación Constante
            </h3>
            <div className="h-1 w-24 bg-aqua-400 mb-6 transform origin-left group-hover:scale-x-125 transition-transform duration-500"></div>
            <p className="text-slate-700">
              Implementar tecnologías y procesos innovadores para hacer la justicia electoral más accesible, eficiente y
              transparente.
            </p>
          </div>
        </div>

        {/* El Futuro que Visualizamos - Layout con imagen */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="bg-gradient-to-r from-tech-600 to-tech-500 text-white rounded-xl shadow-xl p-10 h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/800x600/?technology')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">El Futuro que Visualizamos</h3>
                <div className="h-1 w-32 bg-aqua-400 mb-8"></div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Participación Ciudadana Activa</h4>
                      <p className="text-gray-200">
                        Una democracia donde cada ciudadano participe activamente, con pleno conocimiento de sus
                        derechos y responsabilidades.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Transparencia Total</h4>
                      <p className="text-gray-200">
                        Procesos electorales completamente transparentes, donde cada decisión y acción sea visible y
                        comprensible para todos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Excelencia Judicial</h4>
                      <p className="text-gray-200">
                        Un sistema de justicia electoral reconocido por su excelencia, imparcialidad y eficiencia a
                        nivel nacional e internacional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="rounded-xl overflow-hidden h-full shadow-xl">
              <img
                src="https://source.unsplash.com/random/800x600/?future,technology"
                alt="El futuro de la justicia electoral"
                className="w-full h-full object-cover"
              />
              <div className="relative -mt-24 bg-gradient-to-t from-tech-900/90 to-transparent p-6">
                <p className="text-xl italic text-white">
                  "Juntos construiremos un sistema electoral que sea un referente de democracia, justicia y
                  participación ciudadana."
                </p>
                <p className="text-right text-white mt-2">— Magistrado Sergio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compromisos - Layout con cards horizontales */}
        <div className="animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold text-tech-700 mb-8 text-center">
            Nuestros Compromisos
            <div className="h-1 w-32 bg-aqua-400 mx-auto mt-2"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-tech-200 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600">
                <ChevronRight className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-tech-600 mb-2">Modernización Tecnológica</h4>
                <p className="text-slate-600">
                  Implementar plataformas digitales que faciliten el acceso a la justicia electoral y agilicen los
                  procesos.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-tech-200 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600">
                <ChevronRight className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-tech-600 mb-2">Capacitación Continua</h4>
                <p className="text-slate-600">
                  Fortalecer la formación de funcionarios electorales para garantizar la correcta aplicación de la ley.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-tech-200 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600">
                <ChevronRight className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-tech-600 mb-2">Inclusión y Diversidad</h4>
                <p className="text-slate-600">
                  Promover la participación política de grupos históricamente marginados y garantizar sus derechos.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-tech-200 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-tech-500/10 flex items-center justify-center text-tech-600">
                <ChevronRight className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-tech-600 mb-2">Colaboración Internacional</h4>
                <p className="text-slate-600">
                  Establecer alianzas con instituciones electorales de otros países para compartir mejores prácticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


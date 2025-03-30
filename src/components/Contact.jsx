"use client"

import { useEffect, useRef } from "react"
import { MessageSquare, Send, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export const Contact = ({ isVisible }) => {
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
      id="contacto"
      ref={sectionRef}
      className={`py-20 px-4 bg-white relative z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <div className="inline-block rounded-lg bg-tech-500/10 px-3 py-1 text-sm text-tech-600 font-medium mb-2 shadow-md">
            Contáctanos
          </div>
          <h2 className="text-4xl font-bold text-tech-700 mb-4">Contacto</h2>
          <div className="h-1 w-32 bg-aqua-400 mx-auto mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Estamos aquí para atender tus consultas sobre temas electorales.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mapa interactivo */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full border border-slate-100">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6536568042286!2d-103.3870847!3d20.6755222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae4e98d5453d%3A0xc4fdd3929a2ecbd1!2sTribunal%20Electoral%20del%20Poder%20Judicial%20de%20la%20Federaci%C3%B3n!5e0!3m2!1sen!2smx!4v1648159321774!5m2!1sen!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Tribunal Electoral"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tech-600 mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-tech-500" />
                  Información de Contacto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-tech-500/10 flex items-center justify-center mr-3">
                      <MapPin className="h-5 w-5 text-tech-500" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-600">Dirección:</p>
                      <p className="text-slate-600">Av. López Mateos Norte 1189, Guadalajara, Jalisco</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-tech-500/10 flex items-center justify-center mr-3">
                      <Phone className="h-5 w-5 text-tech-500" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-600">Teléfono:</p>
                      <p className="text-slate-600">(33) 3648-1670</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-tech-500/10 flex items-center justify-center mr-3">
                      <Mail className="h-5 w-5 text-tech-500" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-600">Correo Electrónico:</p>
                      <p className="text-slate-600">sala-guadalajara@te.gob.mx</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-tech-500/10 flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-tech-500" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-600">Horario de Atención:</p>
                      <p className="text-slate-600">Lunes a Viernes de 9:00 a 15:00 y de 16:00 a 19:00</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-tech-600 mb-3">Síguenos en redes sociales:</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-tech-500 text-white hover:bg-tech-600 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-tech-500 text-white hover:bg-tech-600 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-tech-500 text-white hover:bg-tech-600 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-tech-500 text-white hover:bg-tech-600 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="bg-gradient-to-br from-tech-600 to-tech-500 text-white rounded-xl shadow-xl p-8 h-full relative">
              <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/800x600/?technology,pattern')] opacity-10 bg-cover bg-center mix-blend-overlay rounded-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Envíenos un Mensaje
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 text-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white/90"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 text-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white/90"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 text-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white/90"
                      placeholder="Asunto de su mensaje"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="w-full px-3 py-2 text-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white/90"
                      placeholder="Escriba su mensaje aquí..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-tech-600 hover:bg-aqua-400 hover:text-white font-medium py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" /> Enviar Mensaje
                  </button>
                </form>

                <div className="mt-8 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-medium mb-2">Compromiso de respuesta</h4>
                  <p className="text-sm">
                    Nos comprometemos a responder a todas las consultas en un plazo máximo de 48 horas hábiles. Su
                    opinión es importante para nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, MessageSquare } from "lucide-react"
import { ScrollToSection } from "./ScrollToSection"

export const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white group">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-slate-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg text-tech-600 group-hover:text-tech-500 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-tech-500 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 p-4" : "max-h-0"}`}>
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  )
}

export const Faq = ({ isVisible }) => {
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
      id="preguntas"
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
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <div className="inline-block rounded-lg bg-tech-500/10 px-3 py-1 text-sm text-tech-600 font-medium mb-2 shadow-md">
            Consultas Frecuentes
          </div>
          <h2 className="text-4xl font-bold text-tech-700 mb-4">Preguntas Frecuentes</h2>
          <div className="h-1 w-32 bg-aqua-400 mx-auto mb-6"></div>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre temas electorales y el funcionamiento del Tribunal Electoral.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-6 animate-on-scroll opacity-0">
            <FaqItem
              question="¿Cuáles son las funciones del Tribunal Electoral?"
              answer="El Tribunal Electoral resuelve impugnaciones y garantiza la legalidad de los procesos electorales. Es la máxima autoridad jurisdiccional en materia electoral y protege los derechos político-electorales de los ciudadanos, asegurando que las elecciones se desarrollen conforme a los principios constitucionales."
            />
            <FaqItem
              question="¿Cómo puedo presentar una impugnación electoral?"
              answer="Para presentar una impugnación electoral, acuda a la Sala Regional Guadalajara con un escrito que cumpla los requisitos legales establecidos en la Ley General del Sistema de Medios de Impugnación en Materia Electoral. El escrito debe presentarse dentro de los plazos establecidos por la ley y contener los hechos, agravios y pruebas correspondientes."
            />
            <FaqItem
              question="¿Qué estados comprende la jurisdicción de la Sala Regional Guadalajara?"
              answer="La Sala Regional Guadalajara tiene jurisdicción sobre los estados de Jalisco, Colima, Nayarit y Sinaloa. Estas entidades federativas conforman la Primera Circunscripción Plurinominal Electoral."
            />
          </div>
          <div className="space-y-6 animate-on-scroll opacity-0">
            <FaqItem
              question="¿Cuáles son los tipos de juicios que resuelve el Tribunal Electoral?"
              answer="El Tribunal Electoral resuelve distintos tipos de juicios, incluyendo el Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC), el Recurso de Apelación (RAP), el Juicio de Revisión Constitucional Electoral (JRC), el Juicio Electoral (JE), entre otros."
            />
            <FaqItem
              question="¿Cómo puedo consultar las resoluciones del Tribunal Electoral?"
              answer="Las resoluciones se pueden consultar en el portal oficial del Tribunal Electoral (www.te.gob.mx), donde se dispone de un buscador de sentencias que permite filtrar por tipo de juicio, fecha, ponente y texto. También puede acudir personalmente a las instalaciones del Tribunal para solicitar copias de las resoluciones."
            />
            <FaqItem
              question="¿Qué es la violencia política de género y cómo se combate?"
              answer="La violencia política de género es toda acción u omisión basada en elementos de género que tenga por objeto limitar, anular o menoscabar el ejercicio de los derechos políticos de las mujeres. El Tribunal Electoral combate esta violencia a través de resoluciones con perspectiva de género, protocolos especializados y medidas de protección para las víctimas."
            />
          </div>
        </div>
        <div className="mt-10 text-center animate-on-scroll opacity-0">
          <p className="text-slate-700 mb-6">
            ¿No encuentras respuesta a tu pregunta? Consulta directamente con el Magistrado Sergio a través del chat
            interactivo.
          </p>
          <ScrollToSection
            sectionId="inicio"
            className="bg-tech-500 hover:bg-tech-600 text-white py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <MessageSquare className="mr-2 h-5 w-5" /> Chatear con el Magistrado Sergio
          </ScrollToSection>
        </div>
      </div>
    </section>
  )
}


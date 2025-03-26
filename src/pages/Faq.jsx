import React from 'react'
import { ScrollToSection } from '../components/scrollToSection'
import { ChevronDown, MessageSquare } from 'lucide-react'
import { useState } from 'react'


export const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white group">
            <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-[#F9F9F7] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-lg text-[#006847] group-hover:text-[#006847] transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-[#006847] transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
                />
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 p-4" : "max-h-0"}`}>
                <p className="text-gray-600">{answer}</p>
            </div>
        </div>
    )
}

export const Faq = ({ isVisible }) => {
    return (
        <section id="preguntas" className={`py-16 px-4 bg-white relative z-10 transition-all duration-1000 ${isVisible.faq ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-block rounded-lg bg-[#006847] px-3 py-1 text-sm text-white mb-2 shadow-md">Consultas Frecuentes</div>
                    <h2 className="text-3xl font-bold text-[#006847] mb-4">Preguntas Frecuentes</h2>
                    <div className="h-1 w-48 bg-[#E8DDB5] mx-auto mb-4"></div>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Resolvemos tus dudas sobre temas electorales y el funcionamiento del Tribunal Electoral.
                    </p>
                </div>
                <div className="space-y-6">
                    <FaqItem
                        question="¿Cuáles son las funciones del Tribunal Electoral?"
                        answer="El Tribunal Electoral resuelve impugnaciones y garantiza la legalidad de los procesos electorales."
                    />
                    <FaqItem
                        question="¿Cómo puedo presentar una impugnación electoral?"
                        answer="Para presentar una impugnación electoral, acuda a la Sala Regional Guadalajara con un escrito que cumpla los requisitos legales."
                    />
                    <FaqItem
                        question="¿Qué estados comprende la jurisdicción de la Sala Regional Guadalajara?"
                        answer="La Sala Regional Guadalajara tiene jurisdicción sobre Jalisco, Colima, Nayarit y Sinaloa."
                    />
                    <FaqItem
                        question="¿Cuáles son los tipos de juicios que resuelve el Tribunal Electoral?"
                        answer="El Tribunal Electoral resuelve distintos tipos de juicios, incluyendo juicios para la protección de derechos y recursos de apelación."
                    />
                    <FaqItem
                        question="¿Cómo puedo consultar las resoluciones del Tribunal Electoral?"
                        answer="Las resoluciones se pueden consultar en el portal oficial del Tribunal Electoral, donde se dispone de un buscador de sentencias."
                    />
                </div>
                <div className="mt-10 text-center">
                    <p className="text-gray-700 mb-6">
                        ¿No encuentras respuesta a tu pregunta? Consulta directamente con el Magistrado Sergio a través del chat interactivo.
                    </p>
                    <button onClick={() => ScrollToSection("inicio")} className="bg-[#006847] hover:bg-[#006847]/90 text-white py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:scale-105">
                        <MessageSquare className="mr-2 h-5 w-5" /> Chatear con el Magistrado Sergio
                    </button>
                </div>
            </div>
        </section>
    )
}

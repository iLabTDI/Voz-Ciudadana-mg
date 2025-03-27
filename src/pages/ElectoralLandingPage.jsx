import { useState, useEffect } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { Chatbot } from "./Chatbot";
import { Magistrado3D } from "./Magistradoo3D";

import { Footer } from "./Footer";
import { Navbar } from "../components/Navbar";
import { Contact } from "./Contact";
import { Propuestas } from "./Propuestas";
import { Faq } from "./Faq";

import poder_judicial from "../assets/tribunal_jalisco_logo.png";
import magistrado from "../assets/magistrado-sergio.jpeg";
import avatar from "../assets/magistrado-avatar.png";

export default function ElectoralLandingPage() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animatedText, setAnimatedText] = useState("");
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    // Control para el “avatar”:
    // - isTypingGlobal: indica si el bot está procesando (para mostrar "waiting")
    // - lastBotMessageGlobal: último mensaje del bot (para mostrar "responding")
    const [isWaitingGlobal, setIsWaitingGlobal] = useState(false);
    const [isTypingGlobal, setIsTypingGlobal] = useState(false);
    const [lastBotMessageGlobal, setLastBotMessageGlobal] = useState(null);

    const [isVisible, setIsVisible] = useState({
        hero: false,
        info: false,
        faq: false,
        contact: false,
    });

    const fullText = "Justicia Electoral para el Futuro de México";

    // Animación del texto principal
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setAnimatedText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) clearInterval(timer);
        }, 100);
        return () => clearInterval(timer);
    }, []);

    // Manejo de scroll para animaciones y sección activa
    useEffect(() => {
        setIsVisible({
            hero: true,
            info: false,
            faq: false,
            contact: false,
        });

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            setShowScrollIndicator(scrollPosition <= 100);

            if (scrollPosition < windowHeight * 0.5) {
                setActiveSection("inicio");
            } else if (scrollPosition < windowHeight * 1.5) {
                setActiveSection("informacion");
            } else if (scrollPosition < windowHeight * 2.5) {
                setActiveSection("preguntas");
            } else {
                setActiveSection("contacto");
            }

            setIsVisible({
                hero: true,
                info: scrollPosition > windowHeight * 0.1,
                faq: scrollPosition > windowHeight * 0.6,
                contact: scrollPosition > windowHeight * 1.2,
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#F5F5F0] overflow-x-hidden font-electoral">
            {/* Fondo Pattern */}
            <div className="fixed inset-0 z-0 opacity-5">
                <div className="absolute inset-0 bg-pattern"></div>
            </div>
            {/* Navbar */}
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

            {/* Sección Hero */}
            <section
                id="inicio"
                className={`relative min-h-screen px-4 py-20 md:py-24 transition-all duration-1000 bg-gradient-to-b from-white to-[#F5F5F0] ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto max-w-7xl">
                    {/* Texto de cabecera */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#006847] mb-4 leading-snug">
                            Bienvenido al primer asistente virtual electoral
                            <span className="block">del Poder Judicial de la Federación</span>
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto ">
                            Interactúa con el Magistrado 3D y recibe orientación electoral de forma
                            ágil y cercana. ¡Descubre cómo podemos ayudarte!
                        </p>
                    </div>

                    {/* Contenedor principal (Barra verde + Avatar + Chatbot) */}
                    <div className="flex flex-col items-stretch justify-center gap-0 max-w-10xl mx-auto rounded-2xl overflow-hidden border border-[#006847]/10 shadow-xl">
                        {/* Barra verde única */}
                        <div className="bg-[#006847] p-4 text-white flex items-center justify-between w-full">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-[#E8DDB5] flex items-center justify-center">
                                    <MessageSquare className="h-5 w-5 text-[#006847]" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Sergio</h3>
                                    <p className="text-xs text-[#E8DDB5]">Asistente Virtual Electoral</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                                En línea
                            </span>
                        </div>

                        {/* Sección Avatar (izquierda) y Chatbot (derecha) */}
                        <div className="flex flex-col lg:flex-row w-full">
                            {/* Avatar: Muestra videos en distintos estados */}
                            <div className="relative w-full lg:w-2/5 bg-white overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#006847]/5 to-[#E8DDB5]/5 z-0" />
                                <div className="relative z-10 h-[400px] lg:h-[600px] flex items-center justify-center">
                                    <Magistrado3D
                                        isWaiting={isWaitingGlobal}
                                        isTyping={isTypingGlobal}
                                        lastBotMessage={lastBotMessageGlobal}
                                    />
                                </div>
                            </div>

                            {/* Chatbot */}
                            <div className="w-full lg:w-3/5 bg-white">
                                <Chatbot
                                    setIsWaitingGlobal={setIsWaitingGlobal}
                                    // Cuando el Chatbot empieza/termina de “pensar”
                                    setIsTypingGlobal={setIsTypingGlobal}
                                    // Cuando llega un nuevo mensaje del bot
                                    setLastBotMessageGlobal={setLastBotMessageGlobal}

                                    // Texto animado en el Chatbot
                                    animatedText={animatedText}
                                    
                                />
                            </div>
                        </div>
                    </div>

                    {/* Indicador de scroll (opcional) */}
                    {showScrollIndicator && (
                        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
                            <p className="text-[#006847] mb-2 text-sm font-medium">Descubre más</p>
                            <div className="w-8 h-8 rounded-full border-2 border-[#006847] flex items-center justify-center pulse-border">
                                <ChevronDown className="h-5 w-5 text-[#006847]" />
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* Sección Información */}
            <section id="informacion" className={`py-16 px-4 bg-white relative z-10 transition-all duration-1000 ${isVisible.info ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-lg bg-[#006847] px-3 py-1 text-sm text-white mb-2 shadow-md">Trayectoria Profesional</div>
                        <h2 className="text-3xl font-bold text-[#006847] mb-4">Magistrado Sergio Arturo Guerrero Olvera</h2>
                        <div className="h-1 w-48 bg-[#E8DDB5] mx-auto mb-4"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Conoce la trayectoria profesional y académica del Magistrado Sergio, su experiencia y compromiso con la justicia electoral.
                        </p>
                    </div>
                    <div className="relative h-16 mb-12 overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 bg-[#006847] w-1/3 h-full left-0"></div>
                        <div className="absolute inset-0 bg-white w-1/3 h-full left-1/3 flex items-center justify-center">
                            <img src={poder_judicial} alt="Escudo Nacional" width={40} height={40} className="h-10 w-10 object-contain" />
                        </div>
                        <div className="absolute inset-0 bg-[#BC002D] w-1/3 h-full left-2/3"></div>
                    </div>
                    <div className="bg-white rounded-xl shadow-xl p-8 overflow-hidden relative border border-[#006847]/10 group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#006847]/10 to-[#E8DDB5]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 border-4 border-white group-hover:border-[#006847]/20">
                                    <img src={magistrado} alt="Magistrado Sergio Arturo Guerrero Olvera" width={400} height={500} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#006847] to-transparent p-4 text-white">
                                        <h3 className="font-bold text-base sm:text-xs">Mgdo. Sergio Arturo Guerrero Olvera</h3>
                                        <p className="text-sm text-[#E8DDB5]">Sala Regional Guadalajara</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#006847]/10 text-[#006847] border border-[#006847]/20">
                                        15+ años de experiencia
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E8DDB5]/20 text-[#006847] border border-[#E8DDB5]/30">
                                        Autor y académico
                                    </span>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-bold text-[#006847] mb-4">Perfil Profesional</h3>
                                <div className="h-1 w-32 bg-[#E8DDB5] mb-6"></div>
                                <p className="text-gray-700 mb-4">
                                    El Magistrado Sergio es un destacado jurista con amplia experiencia en derecho electoral, egresado de la Universidad de Guadalajara y con estudios de posgrado en Derecho Constitucional y Electoral.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Ha participado en numerosas resoluciones que han fortalecido la democracia y ha contribuido significativamente a la jurisprudencia electoral.
                                </p>
                                <p className="text-gray-700">
                                    Además, es autor de diversos artículos académicos y ha impartido conferencias en universidades de prestigio.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#006847]/10 text-[#006847] border border-[#006847]/20">
                                        Derecho Electoral
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E8DDB5]/20 text-[#006847] border border-[#E8DDB5]/30">
                                        Justicia Constitucional
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#BC002D]/10 text-[#BC002D] border border-[#BC002D]/20">
                                        Derechos Político-Electorales
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Propuestas */}

            <Propuestas isVisible={isVisible} />

            {/* Sección FAQ */}
            <Faq isVisible={isVisible} scrollToSection={scrollToSection} />

            {/* Sección Contacto */}
            <Contact isVisible={isVisible} />

            {/* Footer */}
            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}

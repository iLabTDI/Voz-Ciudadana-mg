import { useState, useEffect, useRef } from "react"
import {
  Send,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  User,
  MessageSquare,
  Mail,
  Award,
  BookOpen,
  Scale,
  Shield,
  Star,
  Zap,
  ArrowRight,
  FileText,
  Users,
  Check,
  Gavel,
  Vote,
  FileCheck,
  BookOpenCheck,
  Building,
  ExternalLink,
} from "lucide-react"
import img from "react"
import { Link } from "react-router-dom"
import poder_judicial from "../src/assets/tribunal_jalisco_logo.png"
import magistrado from "../src/assets/magistrado-sergio.jpeg"
import avatar from "../src/assets/magistrado-avatar.png"
// import logo from "./logo.svg"

export default function ElectoralLandingPage() {
  const [question, setQuestion] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message:
        "¡Bienvenido! Soy Sergio Arturo Guerrero Olvera, Magistrado del Tribunal Electoral del Poder Judicial de la Federación. Estoy aquí para responder tus dudas sobre temas electorales y compartir mi visión para el futuro.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const chatContainerRef = useRef(null)
  const [animatedText, setAnimatedText] = useState("")
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  // Animation states
  const [isVisible, setIsVisible] = useState({
    hero: false,
    info: false,
    faq: false,
    contact: false,
  })

  // Animated text for hero section
  const fullText = "Justicia Electoral para el Futuro de México"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setAnimatedText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setIsVisible({
      hero: true,
      info: false,
      faq: false,
      contact: false,
    })

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Hide scroll indicator after scrolling
      if (scrollPosition > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }

      // Update active section for navigation
      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection("inicio")
      } else if (scrollPosition < windowHeight * 1.5) {
        setActiveSection("informacion")
      } else if (scrollPosition < windowHeight * 2.5) {
        setActiveSection("preguntas")
      } else {
        setActiveSection("contacto")
      }

      // Update visibility for animations
      setIsVisible({
        hero: true,
        info: scrollPosition > windowHeight * 0.1,
        faq: scrollPosition > windowHeight * 0.6,
        contact: scrollPosition > windowHeight * 1.2,
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!question.trim()) return

    // Add user message to chat
    const userMessage = {
      type: "user",
      message: question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatHistory((prev) => [...prev, userMessage])
    setQuestion("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(question)
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          message: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (question) => {
    // Knowledge base for the chatbot
    const responses = {
      elecciones:
        "Las elecciones son procesos democráticos fundamentales donde los ciudadanos eligen a sus representantes. En México, el Instituto Nacional Electoral (INE) y los Organismos Públicos Locales Electorales (OPLEs) organizan estos procesos, mientras que el Tribunal Electoral del Poder Judicial de la Federación resuelve las controversias.",

      tribunal:
        "El Tribunal Electoral del Poder Judicial de la Federación es la máxima autoridad jurisdiccional en materia electoral en México. Resuelve impugnaciones en procesos electorales federales y locales, garantizando que los actos y resoluciones se sujeten a la Constitución y a la ley.",

      magistrado:
        "Como Magistrado Electoral, mi función es resolver controversias en materia electoral, interpretar las leyes electorales y garantizar los derechos político-electorales de los ciudadanos. Los Magistrados somos designados por el Senado de la República a propuesta de la Suprema Corte de Justicia de la Nación.",

      impugnación:
        "Para presentar una impugnación electoral, debe acudir a la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación, ubicada en Av. López Mateos Norte 1189, en un plazo no mayor a 4 días después del acto impugnado, con un escrito que cumpla los requisitos establecidos en la ley.",

      derechos:
        "Los derechos político-electorales incluyen: votar en elecciones, ser votado para cargos de elección popular, asociarse para participar en asuntos políticos, y participar en la observación electoral. El Tribunal Electoral protege estos derechos a través del Juicio para la Protección de los Derechos Político-Electorales del Ciudadano.",

      "sala guadalajara":
        "La Sala Regional Guadalajara tiene jurisdicción sobre los estados de Jalisco, Colima, Nayarit y Sinaloa, correspondientes a la Primera Circunscripción Plurinominal Electoral. Está integrada por tres Magistrados y resuelve asuntos relacionados con elecciones federales y locales en estos estados.",

      "proceso electoral":
        "Un proceso electoral comprende: preparación de la elección, jornada electoral, resultados y declaraciones de validez, y dictamen y declaración de validez de la elección. El Tribunal Electoral supervisa que cada etapa cumpla con los principios de certeza, legalidad, independencia, imparcialidad y objetividad.",

      candidatura:
        "Para ser candidato a un cargo de elección popular, debe cumplir con los requisitos establecidos en la Constitución y las leyes electorales, ser postulado por un partido político o de manera independiente, y registrarse ante la autoridad electoral correspondiente dentro de los plazos establecidos.",

      voto: "El voto en México es universal, libre, secreto, directo, personal e intransferible. Todos los ciudadanos mayores de 18 años con credencial para votar vigente pueden ejercer este derecho. El Tribunal Electoral garantiza que este derecho se respete en todos los procesos electorales.",

      jalisco:
        "En Jalisco, el Instituto Electoral y de Participación Ciudadana (IEPC) organiza las elecciones locales, mientras que la Sala Regional Guadalajara del Tribunal Electoral resuelve las impugnaciones relacionadas con estas elecciones. El estado cuenta con 20 distritos electorales locales y 20 federales.",

      hola: "¡Hola! Soy Sergio Arturo Guerrero Olvera, Magistrado del Tribunal Electoral del Poder Judicial de la Federación en la Sala Regional Guadalajara. Estoy aquí para responder tus dudas sobre temas electorales, compartir mi experiencia y visión para el futuro de nuestra democracia. ¿En qué puedo ayudarte hoy?",

      gracias:
        "¡De nada! Es un placer poder compartir información sobre temas electorales y mi visión para fortalecer nuestra democracia. Si tienes más preguntas en el futuro, no dudes en consultarme. ¡Que tengas un excelente día!",

      ayuda:
        "Puedo ayudarte con información sobre: procesos electorales, derechos político-electorales, impugnaciones, candidaturas, funcionamiento del Tribunal Electoral, mi trayectoria profesional y mis propuestas para fortalecer la justicia electoral. ¿Sobre qué tema te gustaría saber más?",

      sergio:
        "Soy el Magistrado Sergio Arturo Guerrero Olvera, especialista en derecho electoral con más de 15 años de experiencia en la materia. He participado en la resolución de numerosos casos que han sentado precedentes importantes en la justicia electoral mexicana. Mi compromiso es garantizar la transparencia, legalidad y accesibilidad de los procesos electorales para todos los ciudadanos.",

      trayectoria:
        "Mi trayectoria incluye haber sido Secretario de Estudio y Cuenta en la Sala Superior del Tribunal Electoral, profesor de Derecho Electoral en la Universidad de Guadalajara, y autor de diversas publicaciones sobre temas electorales. He participado en misiones de observación electoral internacional y en la implementación de reformas al sistema electoral mexicano.",

      propuestas:
        "Mis principales propuestas incluyen: 1) Modernizar los procesos de justicia electoral mediante el uso de tecnologías digitales, 2) Fortalecer la transparencia y rendición de cuentas en los procesos electorales, 3) Ampliar los mecanismos de participación ciudadana, 4) Implementar programas de educación cívica y electoral, y 5) Garantizar la protección efectiva de los derechos político-electorales de grupos vulnerables.",

      visión:
        "Mi visión es consolidar un sistema de justicia electoral moderno, eficiente y cercano a la ciudadanía, que garantice la legitimidad de los procesos democráticos y fortalezca la confianza de los mexicanos en sus instituciones. Creo firmemente en una democracia inclusiva, participativa y transparente, donde cada voto cuente y cada ciudadano tenga voz.",
    }

    // Check if the question contains keywords to provide a relevant answer
    let foundAnswer =
      "Gracias por tu pregunta. Como Magistrado Electoral, estoy comprometido con la transparencia y la justicia. Si bien no tengo información específica sobre ese tema en particular, te invito a explorar las diferentes secciones de esta página para conocer más sobre mi trayectoria, visión y propuestas para fortalecer nuestra democracia. ¿Hay algún otro tema electoral sobre el que te gustaría conversar?"

    const questionLower = question.toLowerCase()

    for (const [key, value] of Object.entries(responses)) {
      if (questionLower.includes(key.toLowerCase())) {
        foundAnswer = value
        break
      }
    }

    return foundAnswer
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Sample questions for quick selection
  const sampleQuestions = [
    "¿Cuál es tu trayectoria profesional?",
    "¿Cuáles son tus propuestas principales?",
    "¿Qué hace un Magistrado Electoral?",
    "¿Cuál es tu visión para el futuro?",
  ]

  const handleSampleQuestion = (question) => {
    setQuestion(question)
    // Focus on input after selecting a sample question
    document.getElementById("chat-input").focus()
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] overflow-x-hidden font-electoral">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-[#006847]/95 backdrop-blur-md text-white z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-[#E8DDB5] p-1 flex items-center justify-center shadow-glow">
              {/* <img
                src="/imgs/tepjf_logo.svg"
                alt="Logo TEPJF"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              /> */}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base">Magistrado Sergio</span>
              <span className="text-xs text-[#E8DDB5]">Tribunal Electoral · Sala Guadalajara</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`hover:text-[#E8DDB5] transition-all ${activeSection === "inicio" ? "text-[#E8DDB5] font-semibold" : "text-white"}`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("informacion")}
              className={`hover:text-[#E8DDB5] transition-all ${activeSection === "informacion" ? "text-[#E8DDB5] font-semibold" : "text-white"}`}
            >
              Trayectoria
            </button>
            <button
              onClick={() => scrollToSection("propuestas")}
              className={`hover:text-[#E8DDB5] transition-all ${activeSection === "propuestas" ? "text-[#E8DDB5] font-semibold" : "text-white"}`}
            >
              Propuestas
            </button>
            <button
              onClick={() => scrollToSection("preguntas")}
              className={`hover:text-[#E8DDB5] transition-all ${activeSection === "preguntas" ? "text-[#E8DDB5] font-semibold" : "text-white"}`}
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className={`hover:text-[#E8DDB5] transition-all ${activeSection === "contacto" ? "text-[#E8DDB5] font-semibold" : "text-white"}`}
            >
              Contacto
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#006847]/95 backdrop-blur-md pb-4 px-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className={`text-left py-2 px-2 rounded transition-colors ${activeSection === "inicio" ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]" : "hover:bg-[#E8DDB5]/10"}`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("informacion")}
                className={`text-left py-2 px-2 rounded transition-colors ${activeSection === "informacion" ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]" : "hover:bg-[#E8DDB5]/10"}`}
              >
                Trayectoria
              </button>
              <button
                onClick={() => scrollToSection("propuestas")}
                className={`text-left py-2 px-2 rounded transition-colors ${activeSection === "propuestas" ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]" : "hover:bg-[#E8DDB5]/10"}`}
              >
                Propuestas
              </button>
              <button
                onClick={() => scrollToSection("preguntas")}
                className={`text-left py-2 px-2 rounded transition-colors ${activeSection === "preguntas" ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]" : "hover:bg-[#E8DDB5]/10"}`}
              >
                Preguntas Frecuentes
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={`text-left py-2 px-2 rounded transition-colors ${activeSection === "contacto" ? "bg-[#E8DDB5]/20 border-l-4 border-[#E8DDB5] text-[#E8DDB5]" : "hover:bg-[#E8DDB5]/10"}`}
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Chatbot as Main Focus */}
      <section
        id="inicio"
        className={`min-h-screen pt-20 pb-16 md:pt-24 md:pb-20 px-4 transition-all duration-1000 relative z-10 flex items-center ${isVisible.hero ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Título principal con estilo mejorado */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#006847] mb-2 leading-tight">Magistrado Sergio</h1>
            <div className="h-1 w-32 bg-[#E8DDB5] mx-auto mb-4"></div>
            <h2 className="text-2xl md:text-3xl text-[#333] font-light mb-4">
              <span className="text-[#006847] font-normal">{animatedText}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Bienvenido al primer asistente virtual electoral interactivo del Poder Judicial de la Federación. Conversa
              directamente con el Magistrado Sergio y conoce su trayectoria, visión y propuestas.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Left side - Avatar space */}
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-b from-[#006847]/5 to-[#E8DDB5]/5 rounded-2xl border border-[#006847]/10 shadow-xl flex items-center justify-center overflow-hidden">
                {/* Magistrado Sergio img */}
                {/* <text className="text-[#006847]">AQUI VA EL MODELO 3D</text> */}
                
                <img
                  src={avatar}
                  alt="Magistrado Sergio Arturo Guerrero Olvera"
                  className="w-[650px] h-[500px] object-cover"
                />

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-[#006847] via-[#E8DDB5] to-[#006847] opacity-20 rounded-t-2xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-[#006847] via-[#E8DDB5] to-[#006847] opacity-20 rounded-b-2xl"></div>

                {/* Overlay with name */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#006847] to-transparent p-4 text-white">
                  <h3 className="font-bold text-lg">Mgdo. Sergio Arturo Guerrero Olvera</h3>
                  <p className="text-sm text-[#E8DDB5]">Sala Regional Guadalajara</p>
                </div>
              </div>
            </div>

            {/* Right side - Chat interface */}
            <div className="md:w-1/2 w-full mt-8 md:mt-0 flex flex-col">
              {/* Chat interface */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#006847]/10 flex-grow flex flex-col">
                <div className="bg-[#006847] p-4 text-white flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8DDB5] flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-[#006847]" />
                    </div>
                    <div>
                      <h3 className="font-bold">Magistrado Sergio</h3>
                      <p className="text-xs text-[#E8DDB5]">Asistente Virtual Electoral</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                    En línea
                  </span>
                </div>

                {/* Chat messages */}
                <div
                  ref={chatContainerRef}
                  className="h-64 md:h-80 overflow-y-auto p-4 bg-[#F9F9F7] flex flex-col space-y-4 custom-scrollbar flex-grow"
                >
                  {chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl px-4 py-3 ${chat.type === "user"
                          ? "bg-[#006847] text-white rounded-tr-none shadow-md"
                          : "bg-white border border-gray-200 shadow-sm rounded-tl-none"
                          }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          {chat.type === "bot" ? (
                            <>
                              <div className="w-6 h-6 rounded-full bg-[#E8DDB5] flex items-center justify-center">
                                <MessageSquare className="h-3 w-3 text-[#006847]" />
                              </div>
                              <span className="text-xs font-medium text-gray-700">Magistrado Sergio</span>
                              <span className="text-xs text-gray-500">{chat.timestamp}</span>
                            </>
                          ) : (
                            <>
                              <span className="text-xs text-gray-300">{chat.timestamp}</span>
                              <span className="text-xs font-medium text-gray-300">Tú</span>
                              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                <User className="h-3 w-3 text-[#006847]" />
                              </div>
                            </>
                          )}
                        </div>
                        <p className={`text-sm ${chat.type === "user" ? "text-white" : "text-gray-800"}`}>
                          {chat.message}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start animate-fadeIn">
                      <div className="max-w-[80%] rounded-xl px-4 py-3 bg-white border border-gray-200 shadow-sm rounded-tl-none">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-[#E8DDB5] flex items-center justify-center">
                            <MessageSquare className="h-3 w-3 text-[#006847]" />
                          </div>
                          <span className="text-xs font-medium text-gray-700">Magistrado Sergio</span>
                          <span className="text-xs text-gray-500">
                            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          <div
                            className="w-2 h-2 rounded-full bg-[#006847] animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-[#006847] animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-[#006847] animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sample questions */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-sm font-medium text-[#006847] mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Preguntas sugeridas:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    {sampleQuestions.map((q, index) => (
                      <button
                        key={index}
                        onClick={() => handleSampleQuestion(q)}
                        className="text-left text-sm w-full px-3 py-2 rounded-lg bg-[#F9F9F7] border border-gray-200 hover:bg-[#006847]/5 hover:border-[#006847] hover:shadow-md transition-all duration-200 shadow-sm group"
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-[#006847] opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-3 h-3" />
                          </span>
                          {q}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Chat input */}
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      id="chat-input"
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Escribe tu pregunta al Magistrado Sergio..."
                      className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#006847] focus:border-transparent shadow-inner"
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="bg-[#006847] hover:bg-[#006847]/90 text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center w-10 h-10 shadow-md hover:shadow-lg transform hover:scale-105"
                      disabled={!question.trim() || isTyping}
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
              <p className="text-[#006847] mb-2 text-sm font-medium">Descubre más</p>
              <div className="w-8 h-8 rounded-full border-2 border-[#006847] flex items-center justify-center">
                <ChevronDown className="h-5 w-5 text-[#006847]" />
              </div>
            </div>
          )}

          {/* Mexican flag inspired decorative bar */}
          <div className="w-full h-2 bg-gradient-to-r from-[#006847] via-[#F5F5F0] to-[#BC002D] rounded-full my-12 shadow-md"></div>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-[#006847] group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006847] to-[#006847]/70 rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow group-hover:shadow-glow-intense transition-all duration-500">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 group-hover:text-[#006847] transition-colors">
                Justicia Electoral
              </h3>
              <p className="text-gray-600 text-center">
                Garantizamos que los actos y resoluciones electorales se sujeten a los principios de constitucionalidad
                y legalidad.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-[#E8DDB5] group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8DDB5] to-[#E8DDB5]/70 rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow group-hover:shadow-glow-intense transition-all duration-500">
                <Vote className="h-8 w-8 text-[#006847]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 group-hover:text-[#006847] transition-colors">
                Innovación Electoral
              </h3>
              <p className="text-gray-600 text-center">
                Implementamos tecnologías de vanguardia para modernizar los procesos electorales y acercar la justicia a
                los ciudadanos.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-[#BC002D] group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BC002D] to-[#BC002D]/70 rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow group-hover:shadow-glow-intense transition-all duration-500">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 group-hover:text-[#006847] transition-colors">
                Derechos Ciudadanos
              </h3>
              <p className="text-gray-600 text-center">
                Protegemos los derechos político-electorales de los ciudadanos, asegurando que puedan ejercer su derecho
                al voto y participar en la vida democrática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section
        id="informacion"
        className={`py-16 px-4 bg-white relative z-10 transition-all duration-1000 ${isVisible.info ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#006847] px-3 py-1 text-sm text-white mb-2 shadow-md">
              Trayectoria Profesional
            </div>
            <h2 className="text-3xl font-bold text-[#006847] mb-4">Magistrado Sergio Arturo Guerrero Olvera</h2>
            <div className="h-1 w-48 bg-[#E8DDB5] mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Conoce la trayectoria profesional y académica del Magistrado Sergio, su experiencia y compromiso con la
              justicia electoral.
            </p>
          </div>

          {/* Mexican flag inspired decorative element */}
          <div className="relative h-16 mb-12 overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-[#006847] w-1/3 h-full left-0"></div>
            <div className="absolute inset-0 bg-white w-1/3 h-full left-1/3">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={poder_judicial}
                  alt="Escudo Nacional"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-[#BC002D] w-1/3 h-full left-2/3"></div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 overflow-hidden relative border border-[#006847]/10 group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#006847]/10 to-[#E8DDB5]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 border-4 border-white group-hover:border-[#006847]/20">
                  <img
                    src={magistrado}
                    alt="Magistrado Sergio Arturo Guerrero Olvera"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#006847] to-transparent p-4 text-white">
                  <h3 className="font-bold text-base sm:text-xs">Mgdo. Sergio Arturo Guerrero Olvera</h3>
                  <p className="text-sm text-[#E8DDB5]">Sala Regional Guadalajara</p>
                </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#006847]/10 text-[#006847] border border-[#006847]/20">
                    <Award className="h-3 w-3 mr-1" />
                    15+ años de experiencia
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E8DDB5]/20 text-[#006847] border border-[#E8DDB5]/30">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Autor y académico
                  </span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#006847] mb-4">Perfil Profesional</h3>
                <div className="h-1 w-32 bg-[#E8DDB5] mb-6"></div>
                <p className="text-gray-700 mb-4">
                  El Magistrado Sergio Arturo Guerrero Olvera es un destacado jurista con amplia experiencia en derecho
                  electoral. Egresado de la Universidad de Guadalajara con estudios de posgrado en Derecho
                  Constitucional y Electoral.
                </p>
                <p className="text-gray-700 mb-4">
                  Ha participado en numerosas resoluciones que han fortalecido la democracia en Jalisco y la región
                  occidente del país. Su trayectoria incluye importantes contribuciones a la jurisprudencia electoral
                  mexicana.
                </p>
                <p className="text-gray-700">
                  Es autor de diversos artículos académicos sobre temas electorales y ha impartido conferencias en
                  universidades de prestigio. Su compromiso con la justicia electoral y la transparencia lo ha
                  convertido en un referente en la materia.
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

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#F9F9F7] p-4 rounded-lg border border-[#006847]/10 hover:shadow-md transition-all">
                    <FileText className="h-5 w-5 text-[#006847] mb-2" />
                    <h4 className="font-medium text-[#006847] mb-1">Publicaciones</h4>
                    <p className="text-sm text-gray-600">Autor de artículos académicos sobre derecho electoral</p>
                  </div>
                  <div className="bg-[#F9F9F7] p-4 rounded-lg border border-[#006847]/10 hover:shadow-md transition-all">
                    <Users className="h-5 w-5 text-[#006847] mb-2" />
                    <h4 className="font-medium text-[#006847] mb-1">Docencia</h4>
                    <p className="text-sm text-gray-600">
                      Profesor de Derecho Electoral en la Universidad de Guadalajara
                    </p>
                  </div>
                  <div className="bg-[#F9F9F7] p-4 rounded-lg border border-[#006847]/10 hover:shadow-md transition-all">
                    <Star className="h-5 w-5 text-[#006847] mb-2" />
                    <h4 className="font-medium text-[#006847] mb-1">Reconocimientos</h4>
                    <p className="text-sm text-gray-600">Destacada trayectoria en la justicia electoral mexicana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-[#006847]/10 group">
              <h3 className="text-2xl font-bold text-[#006847] mb-4">Formación Académica</h3>
              <div className="h-1 w-32 bg-[#E8DDB5] mb-6"></div>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <BookOpenCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Doctorado en Derecho Constitucional</h4>
                    <p className="text-sm text-gray-600">Universidad Nacional Autónoma de México (UNAM)</p>
                    <p className="text-xs text-gray-500">2010 - 2014</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <BookOpenCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Maestría en Derecho Electoral</h4>
                    <p className="text-sm text-gray-600">Universidad de Guadalajara</p>
                    <p className="text-xs text-gray-500">2005 - 2007</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <BookOpenCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Licenciatura en Derecho</h4>
                    <p className="text-sm text-gray-600">Universidad de Guadalajara</p>
                    <p className="text-xs text-gray-500">1998 - 2003</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <BookOpenCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Diplomado en Justicia Electoral</h4>
                    <p className="text-sm text-gray-600">Tribunal Electoral del Poder Judicial de la Federación</p>
                    <p className="text-xs text-gray-500">2004</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-[#006847]/10 group">
              <h3 className="text-2xl font-bold text-[#006847] mb-4">Experiencia Profesional</h3>
              <div className="h-1 w-32 bg-[#E8DDB5] mb-6"></div>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <Gavel className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Magistrado Electoral</h4>
                    <p className="text-sm text-gray-600">
                      Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación
                    </p>
                    <p className="text-xs text-gray-500">2015 - Presente</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <FileCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Secretario de Estudio y Cuenta</h4>
                    <p className="text-sm text-gray-600">
                      Sala Superior del Tribunal Electoral del Poder Judicial de la Federación
                    </p>
                    <p className="text-xs text-gray-500">2010 - 2015</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Profesor de Derecho Electoral</h4>
                    <p className="text-sm text-gray-600">Universidad de Guadalajara</p>
                    <p className="text-xs text-gray-500">2008 - Presente</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006847] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                    <Building className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Asesor Jurídico</h4>
                    <p className="text-sm text-gray-600">Instituto Electoral y de Participación Ciudadana de Jalisco</p>
                    <p className="text-xs text-gray-500">2005 - 2010</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Propuestas Section */}
      <section
        id="propuestas"
        className={`py-16 px-4 bg-[#F9F9F7] relative z-10 transition-all duration-1000 ${isVisible.info ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#E8DDB5] px-3 py-1 text-sm text-[#006847] font-medium mb-2 shadow-md">
              Visión y Propuestas
            </div>
            <h2 className="text-3xl font-bold text-[#006847] mb-4">Propuestas para el Futuro Electoral</h2>
            <div className="h-1 w-48 bg-[#E8DDB5] mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Conoce las propuestas del Magistrado Sergio para fortalecer la justicia electoral y la democracia en
              México.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-[#006847]/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006847] to-[#E8DDB5] rounded-full flex items-center justify-center mb-6 shadow-glow">
                {/* <img
                  src="/imgs/tepjf_logo.svg"
                  alt="Visión"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                /> */}
              </div>
              <h3 className="text-2xl font-bold text-[#006847] mb-4">Mi Visión</h3>
              <div className="h-1 w-24 bg-[#E8DDB5] mb-6"></div>
              <p className="text-gray-700 mb-4">
                Mi visión es consolidar un sistema de justicia electoral moderno, eficiente y cercano a la ciudadanía,
                que garantice la legitimidad de los procesos democráticos y fortalezca la confianza de los mexicanos en
                sus instituciones.
              </p>
              <p className="text-gray-700 mb-4">
                Creo firmemente en una democracia inclusiva, participativa y transparente, donde cada voto cuente y cada
                ciudadano tenga voz en las decisiones que afectan el futuro de nuestro país.
              </p>
              <p className="text-gray-700">
                Trabajaré incansablemente para que la justicia electoral sea accesible para todos, utilizando
                tecnologías innovadoras que acerquen las instituciones a los ciudadanos y promoviendo una cultura de
                participación cívica y respeto a los derechos político-electorales.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-[#006847]/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006847] to-[#E8DDB5] rounded-full flex items-center justify-center mb-6 shadow-glow">
                {/* <img
                  src="/imgs/tribunal_jalisco_logo.png"
                  alt="Valores"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                /> */}
              </div>
              <h3 className="text-2xl font-bold text-[#006847] mb-4">Mis Valores</h3>
              <div className="h-1 w-24 bg-[#E8DDB5] mb-6"></div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Integridad</h4>
                    <p className="text-sm text-gray-600">
                      Actuar con honestidad, transparencia y ética en todas las decisiones y acciones.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Imparcialidad</h4>
                    <p className="text-sm text-gray-600">
                      Garantizar decisiones objetivas, basadas únicamente en la ley y los hechos, sin influencias
                      externas.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Compromiso</h4>
                    <p className="text-sm text-gray-600">
                      Dedicación total a la protección de los derechos político-electorales de los ciudadanos.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#006847] mb-1">Innovación</h4>
                    <p className="text-sm text-gray-600">
                      Búsqueda constante de nuevas formas de mejorar la justicia electoral y acercarla a los ciudadanos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 overflow-hidden relative border border-[#006847]/10 group hover:shadow-2xl transition-all duration-500 mb-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#006847]/10 to-[#E8DDB5]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold text-[#006847] mb-6 relative inline-block">Propuestas Principales</h3>
            <div className="h-1 w-48 bg-[#E8DDB5] mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#006847] mb-3">Justicia Electoral Digital</h4>
                <p className="text-gray-600 mb-4">
                  Implementación de plataformas digitales para la presentación, seguimiento y resolución de medios de
                  impugnación electoral, reduciendo tiempos y facilitando el acceso a la justicia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Juicios en línea accesibles desde cualquier dispositivo</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Notificaciones electrónicas en tiempo real</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Expedientes digitales con búsqueda avanzada</p>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#006847] mb-3">Participación Ciudadana</h4>
                <p className="text-gray-600 mb-4">
                  Fortalecimiento de los mecanismos de participación ciudadana en los procesos electorales y en la toma
                  de decisiones públicas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Consultas ciudadanas digitales</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Observatorios electorales ciudadanos</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Foros de diálogo entre ciudadanos y autoridades</p>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#006847] mb-3">Protección de Derechos</h4>
                <p className="text-gray-600 mb-4">
                  Fortalecimiento de los mecanismos de protección de los derechos político-electorales, especialmente
                  para grupos vulnerables.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Protocolos especializados para grupos indígenas</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Medidas contra la violencia política de género</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Accesibilidad electoral para personas con discapacidad</p>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#006847] mb-3">Educación Cívica</h4>
                <p className="text-gray-600 mb-4">
                  Implementación de programas de educación cívica y electoral para fomentar una ciudadanía informada y
                  participativa.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Programas educativos en escuelas y universidades</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Plataformas digitales de aprendizaje electoral</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-600">Campañas de concientización sobre la importancia del voto</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#006847] text-white rounded-lg hover:bg-[#006847]/90 transition-colors shadow-md hover:shadow-lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              Descargar Plan Completo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="preguntas"
        className={`py-16 px-4 bg-white relative z-10 transition-all duration-1000 ${isVisible.faq ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#006847] px-3 py-1 text-sm text-white mb-2 shadow-md">
              Consultas Frecuentes
            </div>
            <h2 className="text-3xl font-bold text-[#006847] mb-4">Preguntas Frecuentes</h2>
            <div className="h-1 w-48 bg-[#E8DDB5] mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Resolvemos tus dudas más comunes sobre temas electorales y el funcionamiento del Tribunal Electoral.
            </p>
          </div>

          <div className="space-y-6">
            <FaqItem
              question="¿Cuáles son las funciones del Tribunal Electoral?"
              answer="El Tribunal Electoral del Poder Judicial de la Federación es la máxima autoridad jurisdiccional en materia electoral. Sus funciones incluyen resolver impugnaciones en procesos electorales federales y locales, garantizar que los actos y resoluciones electorales se sujeten a la Constitución, y proteger los derechos político-electorales de los ciudadanos."
            />

            <FaqItem
              question="¿Cómo puedo presentar una impugnación electoral?"
              answer="Para presentar una impugnación electoral, debe acudir a la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación, ubicada en Av. López Mateos Norte 1189, en un plazo no mayor a 4 días después del acto impugnado, con un escrito que cumpla los requisitos establecidos en la ley."
            />

            <FaqItem
              question="¿Qué estados comprende la jurisdicción de la Sala Regional Guadalajara?"
              answer="La Sala Regional Guadalajara tiene jurisdicción sobre los estados de Jalisco, Colima, Nayarit y Sinaloa, correspondientes a la Primera Circunscripción Plurinominal Electoral."
            />

            <FaqItem
              question="¿Cuáles son los tipos de juicios que resuelve el Tribunal Electoral?"
              answer="El Tribunal Electoral resuelve diversos tipos de juicios, entre ellos: Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC), Recurso de Apelación (RAP), Juicio de Revisión Constitucional Electoral (JRC), Juicio Electoral (JE), entre otros."
            />

            <FaqItem
              question="¿Cómo puedo consultar las resoluciones del Tribunal Electoral?"
              answer="Las resoluciones del Tribunal Electoral pueden consultarse en el portal web oficial del Tribunal Electoral del Poder Judicial de la Federación (www.te.gob.mx), donde se encuentra un buscador de sentencias que permite filtrar por tipo de juicio, fecha, ponente y otros criterios."
            />
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-6">
              ¿No encuentras respuesta a tu pregunta? Consulta directamente con el Magistrado Sergio a través del chat
              interactivo.
            </p>
            <button
              onClick={() => scrollToSection("inicio")}
              className="bg-[#006847] hover:bg-[#006847]/90 text-white py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chatear con el Magistrado Sergio
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className={`py-16 px-4 bg-[#F9F9F7] relative z-10 transition-all duration-1000 ${isVisible.contact ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#006847] px-3 py-1 text-sm text-white mb-2 shadow-md">
              Contáctanos
            </div>
            <h2 className="text-3xl font-bold text-[#006847] mb-4">Contacto</h2>
            <div className="h-1 w-32 bg-[#E8DDB5] mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Estamos aquí para atender tus consultas y brindarte la información que necesitas sobre temas electorales.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden relative border border-[#006847]/10 group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5 pointer-events-none"></div>
            <div className="md:flex">
              <div className="md:w-1/2 p-8 relative z-10">
                <h3 className="text-xl font-semibold text-[#006847] mb-6 flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#006847]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#006847]">Dirección:</p>
                      <p className="text-gray-600">
                        Av. López Mateos Norte 1189, Colonia Italia Providencia, C.P. 44648, Guadalajara, Jalisco
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#006847]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#006847]">Teléfono:</p>
                      <p className="text-gray-600">(33) 3648-1670</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#006847]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#006847]">Correo Electrónico:</p>
                      <p className="text-gray-600">sala-guadalajara@te.gob.mx</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#006847]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#006847]">Horario de Atención:</p>
                      <p className="text-gray-600">Lunes a Viernes de 9:00 a 15:00 y de 16:00 a 19:00 horas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-[#006847] mb-3">Síguenos en redes sociales:</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-[#006847] text-white hover:bg-[#006847]/90 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[#006847] text-white hover:bg-[#006847]/90 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[#006847] text-white hover:bg-[#006847]/90 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[#006847] text-white hover:bg-[#006847]/90 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8 bg-[#006847] text-white relative z-10">
                <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
                <h3 className="text-xl font-semibold mb-6 flex items-center relative z-10">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Envíenos un Mensaje
                </h3>
                <form className="space-y-4 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90 backdrop-blur-sm"
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
                      className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90 backdrop-blur-sm"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90 backdrop-blur-sm"
                      placeholder="Asunto de su mensaje"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90 backdrop-blur-sm"
                      placeholder="Escriba su mensaje aquí..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E8DDB5] text-[#006847] hover:bg-[#E8DDB5]/90 font-medium py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#006847] text-white py-12 px-4 relative z-10">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E8DDB5] p-1 flex items-center justify-center shadow-glow">
                  {/* <img
                    src="/imgs/tepjf_logo.svg"
                    alt="Logo TEPJF"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  /> */}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Magistrado Sergio</span>
                  <span className="text-xs text-[#E8DDB5]">Tribunal Electoral · Sala Guadalajara</span>
                </div>
              </div>
              <p className="text-gray-200 text-sm">
                El primer asistente virtual electoral interactivo del Poder Judicial de la Federación en Guadalajara,
                Jalisco.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 relative inline-block">
                Enlaces Rápidos
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#E8DDB5]"></span>
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("informacion")}
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Trayectoria
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("propuestas")}
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Propuestas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("preguntas")}
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Preguntas Frecuentes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 relative inline-block">
                Recursos
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#E8DDB5]"></span>
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Jurisprudencia Electoral
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Leyes y Reglamentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Procesos Electorales
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-[#E8DDB5] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-[#E8DDB5] group-hover:translate-x-1 transition-transform" />{" "}
                    Publicaciones
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 relative inline-block">
                Boletín Informativo
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#E8DDB5]"></span>
              </h4>
              <p className="text-sm text-gray-200 mb-4">
                Suscríbase a nuestro boletín informativo para recibir actualizaciones sobre temas electorales.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  className="px-3 py-2 text-gray-800 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] w-full bg-white/90 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="bg-[#E8DDB5] text-[#006847] hover:bg-[#E8DDB5]/90 px-4 py-2 rounded-r-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>

              <div className="mt-6">
                <h5 className="font-medium text-sm mb-2">Síguenos:</h5>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-200">
            <p>
              &copy; {new Date().getFullYear()} Tribunal Electoral del Poder Judicial de la Federación. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// FAQ Item Component
function FaqItem({ question, answer }) {
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


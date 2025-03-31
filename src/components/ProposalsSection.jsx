"use client"

import { useState, useEffect, useRef } from "react"
import {
  Scale,
  Shield,
  BookOpen,
  MessageSquare,
  Users,
  X,
  ArrowRight,
  Check,
  ChevronRight,
  Eye,
  Lightbulb,
  Globe,
  Clock,
  Calendar,
  Target,
  Zap,
} from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export const ProposalsSection = ({ isVisible }) => {
  const [activeModal, setActiveModal] = useState(null)
  const [activeCard, setActiveCard] = useState("vision") // Para el efecto flip en móvil
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const [images, setImages] = useState({
    digital: "/placeholder.svg?height=600&width=800",
    people: "/placeholder.svg?height=600&width=800",
    rights: "/placeholder.svg?height=600&width=800",
    education: "/placeholder.svg?height=600&width=800",
    future: "/placeholder.svg?height=1080&width=1920",
    transparency: "/placeholder.svg?height=600&width=800",
    innovation: "/placeholder.svg?height=600&width=800",
  })

  useEffect(() => {
    // Cargar imágenes de la API de Vercel
    setImages({
      digital: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=600&auto=format&fit=crop",
      people: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&h=600&auto=format&fit=crop",
      rights: "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=800&h=600&auto=format&fit=crop",
      education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&h=600&auto=format&fit=crop",
      future: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&h=1080&auto=format&fit=crop",
      transparency:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&h=600&auto=format&fit=crop",
      innovation: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&h=600&auto=format&fit=crop",
    })
  }, [])

  useEffect(() => {
    if (isVisible) {
      controls.start("visible")
    }
  }, [isVisible, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const flipVariants = {
    hidden: {
      rotateY: 90,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      rotateY: -90,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  const proposals = [
    {
      id: 1,
      title: "Justicia Electoral Digital",
      description: "Implementación de plataformas digitales para agilizar los procesos de impugnación electoral.",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      image: images.digital,
      fullDescription:
        "La Justicia Electoral Digital busca transformar completamente la forma en que los ciudadanos interactúan con el sistema de justicia electoral. A través de plataformas tecnológicas avanzadas, se facilitará la presentación de impugnaciones, consulta de expedientes y seguimiento de casos en tiempo real.",
      benefits: [
        "Reducción de tiempos en la resolución de impugnaciones",
        "Mayor accesibilidad para ciudadanos de zonas remotas",
        "Transparencia en el seguimiento de casos",
        "Ahorro significativo en recursos materiales",
      ],
      implementation: [
        "Fase 1: Desarrollo de plataforma digital (6 meses)",
        "Fase 2: Prueba piloto en Sala Regional Guadalajara (3 meses)",
        "Fase 3: Implementación nacional y capacitación (1 año)",
      ],
      stats: [
        { label: "Reducción de tiempo", value: "60%", icon: <Clock className="h-4 w-4" /> },
        { label: "Ahorro de recursos", value: "40%", icon: <Target className="h-4 w-4" /> },
        { label: "Accesibilidad", value: "100%", icon: <Users className="h-4 w-4" /> },
      ],
    },
    {
      id: 2,
      title: "Participación Ciudadana",
      description: "Fortalecimiento de mecanismos de participación ciudadana en los procesos electorales.",
      icon: <Users className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      image: images.people,
      fullDescription:
        "Esta propuesta busca revitalizar la democracia mexicana a través del fortalecimiento de los mecanismos de participación ciudadana. Se implementarán consultas digitales, observatorios electorales ciudadanos y foros de diálogo entre ciudadanos y autoridades.",
      benefits: [
        "Mayor legitimidad de los procesos electorales",
        "Ciudadanía más informada y comprometida",
        "Detección temprana de problemas en procesos electorales",
        "Fortalecimiento del tejido democrático",
      ],
      implementation: [
        "Creación de plataforma digital de participación ciudadana",
        "Formación de observatorios electorales en cada estado",
        "Programa de educación cívica en escuelas y universidades",
      ],
      stats: [
        { label: "Participación", value: "+35%", icon: <Users className="h-4 w-4" /> },
        { label: "Observatorios", value: "32", icon: <Eye className="h-4 w-4" /> },
        { label: "Legitimidad", value: "Alta", icon: <Shield className="h-4 w-4" /> },
      ],
    },
    {
      id: 3,
      title: "Protección de Derechos",
      description:
        "Fortalecimiento de mecanismos para proteger los derechos político-electorales de grupos vulnerables.",
      icon: <Shield className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      image: images.rights,
      fullDescription:
        "La protección efectiva de los derechos político-electorales es fundamental para una democracia inclusiva. Esta propuesta contempla el desarrollo de protocolos especializados para la atención de grupos indígenas, medidas contra la violencia política de género y mejoras en la accesibilidad electoral para personas con discapacidad.",
      benefits: [
        "Inclusión efectiva de grupos históricamente marginados",
        "Reducción de la violencia política de género",
        "Mayor participación de comunidades indígenas",
        "Accesibilidad real para personas con discapacidad",
      ],
      implementation: [
        "Desarrollo de protocolos especializados",
        "Capacitación a funcionarios electorales",
        "Campañas de concientización",
        "Adaptación de materiales electorales",
      ],
      stats: [
        { label: "Inclusión", value: "+45%", icon: <Users className="h-4 w-4" /> },
        { label: "Protocolos", value: "12", icon: <BookOpen className="h-4 w-4" /> },
        { label: "Capacitación", value: "5,000+", icon: <Target className="h-4 w-4" /> },
      ],
    },
    {
      id: 4,
      title: "Educación Cívica",
      description: "Programas de educación cívica y electoral para fomentar una ciudadanía informada y participativa.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-amber-500 to-amber-600",
      image: images.education,
      fullDescription:
        "La educación cívica es la base de una democracia sólida. Esta propuesta incluye programas educativos en escuelas y universidades, plataformas digitales de aprendizaje electoral y campañas de concientización sobre la importancia del voto.",
      benefits: [
        "Reducción del abstencionismo electoral",
        "Disminución de votos nulos por error",
        "Mayor comprensión del sistema electoral",
        "Formación de una cultura democrática desde edades tempranas",
      ],
      implementation: [
        "Desarrollo de contenidos educativos por niveles",
        "Capacitación a docentes",
        "Creación de plataforma digital interactiva",
        "Alianzas con instituciones educativas",
      ],
      stats: [
        { label: "Participación", value: "+25%", icon: <Target className="h-4 w-4" /> },
        { label: "Votos nulos", value: "-40%", icon: <Check className="h-4 w-4" /> },
        { label: "Escuelas", value: "3,500+", icon: <BookOpen className="h-4 w-4" /> },
      ],
    },
    {
      id: 5,
      title: "Transparencia Electoral",
      description: "Implementación de mecanismos para garantizar la total transparencia en los procesos electorales.",
      icon: <Globe className="h-6 w-6" />,
      color: "from-cyan-500 to-cyan-600",
      image: images.transparency,
      fullDescription:
        "La transparencia es fundamental para la confianza ciudadana en los procesos electorales. Esta propuesta busca implementar mecanismos innovadores que permitan a los ciudadanos verificar cada etapa del proceso electoral, desde la emisión del voto hasta el conteo final.",
      benefits: [
        "Mayor confianza ciudadana en los resultados electorales",
        "Reducción de impugnaciones por falta de claridad",
        "Acceso público a información electoral en tiempo real",
        "Fortalecimiento de la legitimidad democrática",
      ],
      implementation: [
        "Desarrollo de plataforma de transparencia electoral",
        "Transmisión en vivo de conteos y sesiones",
        "Publicación detallada de resultados y actas",
        "Auditorías ciudadanas del proceso electoral",
      ],
      stats: [
        { label: "Confianza", value: "+60%", icon: <Shield className="h-4 w-4" /> },
        { label: "Impugnaciones", value: "-35%", icon: <Check className="h-4 w-4" /> },
        { label: "Transparencia", value: "100%", icon: <Eye className="h-4 w-4" /> },
      ],
    },
    {
      id: 6,
      title: "Innovación Electoral",
      description:
        "Aplicación de tecnologías emergentes para modernizar y hacer más eficientes los procesos electorales.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-600",
      image: images.innovation,
      fullDescription:
        "La innovación constante es clave para mantener un sistema electoral moderno y eficiente. Esta propuesta contempla la investigación y aplicación de tecnologías emergentes como blockchain, inteligencia artificial y análisis de datos para mejorar todos los aspectos del proceso electoral.",
      benefits: [
        "Mayor precisión y rapidez en el conteo de votos",
        "Detección temprana de anomalías en el proceso electoral",
        "Optimización de recursos humanos y materiales",
        "Adaptación continua a nuevos desafíos electorales",
      ],
      implementation: [
        "Creación de laboratorio de innovación electoral",
        "Desarrollo de proyectos piloto con nuevas tecnologías",
        "Colaboración con universidades y centros de investigación",
        "Implementación gradual de soluciones probadas",
      ],
      stats: [
        { label: "Eficiencia", value: "+70%", icon: <Zap className="h-4 w-4" /> },
        { label: "Precisión", value: "99.9%", icon: <Target className="h-4 w-4" /> },
        { label: "Innovación", value: "Constante", icon: <Lightbulb className="h-4 w-4" /> },
      ],
    },
  ]

  const values = [
    { name: "Integridad", description: "Actuar con honestidad, transparencia y ética en todo momento." },
    { name: "Imparcialidad", description: "Decisiones basadas únicamente en la ley y los hechos, sin sesgos." },
    { name: "Compromiso", description: "Dedicación total a la protección de los derechos electorales." },
    { name: "Innovación", description: "Búsqueda constante de nuevas formas de mejorar la justicia electoral." },
    { name: "Inclusión", description: "Garantizar que todas las voces sean escuchadas y representadas." },
    { name: "Excelencia", description: "Búsqueda constante de la máxima calidad en el servicio público." },
  ]

  const pillars = [
    { name: "Democracia Inclusiva", description: "Donde cada voto cuenta y todas las voces son escuchadas." },
    { name: "Innovación Tecnológica", description: "Para acercar las instituciones a los ciudadanos." },
    { name: "Confianza Ciudadana", description: "A través de la transparencia y la rendición de cuentas." },
  ]

  return (
    <section
      id="proposals"
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-100 to-white"
    >
      {/* Fondo con textura */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('/patterns/paper-texture.png')", backgroundRepeat: "repeat" }}
      />

      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-law-600/30 via-gold-500 to-law-600/30"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-law-500/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl"></div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 max-w-[1500px]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-12 md:mb-16 text-center"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              <div className="w-14 h-14 mx-2 rounded-full bg-gradient-to-br from-law-600 to-law-700 flex items-center justify-center shadow-lg">
                <Scale className="h-7 w-7 text-white" />
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-law-800 mb-2">
              Propuestas para el Futuro Electoral
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
              Conoce mi visión y propuestas innovadoras para modernizar la justicia electoral y fortalecer la democracia
              en México.
            </p>
          </motion.div>
        </motion.div>

        {/* Botones para cambiar entre Visión y Valores (solo en móvil) */}
        <div className="lg:hidden flex justify-center mb-6">
          <div className="inline-flex bg-white rounded-full shadow-md p-1 border border-slate-200">
            <button
              onClick={() => setActiveCard("vision")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCard === "vision"
                  ? "bg-law-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-slate-100"
              }`}
            >
              Mi Visión
            </button>
            <button
              onClick={() => setActiveCard("values")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCard === "values"
                  ? "bg-law-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-slate-100"
              }`}
            >
              Mis Valores
            </button>
          </div>
        </div>

        {/* Contenedor principal dividido en dos secciones */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
          {/* SECCIÓN 1: VISIÓN Y VALORES (Lado izquierdo) */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="lg:w-[60%] flex flex-col gap-6"
          >
            {/* Visión - Visible en móvil cuando está activo, siempre visible en desktop */}
            <div className={`${activeCard !== "vision" && "hidden lg:block"}`}>
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-10 md:p-7 lg:p-8">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-law-500 to-law-600 flex items-center justify-center text-white shadow-md mr-3">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-law-800">Mi Visión</h3>
                </div>

                <div className="bg-gradient-to-br from-white to-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm mb-5">
                  <p className="text-gray-700 leading-relaxed">
                    Mi visión es consolidar un sistema de justicia electoral moderno, eficiente y cercano a la
                    ciudadanía, que garantice la protección efectiva de los derechos político-electorales de todos los
                    mexicanos.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-law-600 to-law-700 text-white p-4 rounded-xl shadow-sm mb-5">
                  <div className="flex items-start">
                    <div className="text-2xl text-gold-300 mr-2 font-serif">"</div>
                    <p className="text-gray-100 italic text-sm">
                      Mi compromiso es trabajar incansablemente para que la justicia electoral sea un pilar fundamental
                      en la construcción de un México más democrático, justo e incluyente.
                    </p>
                  </div>
                </div>

                <div className="mb-3 flex items-center">
                  <div className="w-1.5 h-5 bg-gold-500 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-law-700">Pilares fundamentales:</h4>
                </div>

                <div className="space-y-3">
                  {pillars.map((pillar, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-slate-50 p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-law-200 hover:translate-y-[-2px]"
                    >
                      <div className="flex items-start">
                        <div className="w-7 h-7 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2.5 flex-shrink-0">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="font-medium text-law-800 text-sm">{pillar.name}</p>
                          <p className="text-gray-600 text-xs">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Valores - Visible en móvil cuando está activo, siempre visible en desktop */}
            <div className={`${activeCard !== "values" && "hidden lg:block"}`}>
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 md:p-7 lg:p-8">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white shadow-md mr-3">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-law-800">Mis Valores</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-5">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold-200 hover:translate-y-[-2px]"
                    >
                      <div className="flex items-start">
                        <div className="w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-2.5 flex-shrink-0">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-law-700 text-sm mb-1">{value.name}</h4>
                          <p className="text-gray-600 text-xs">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-law-900 p-4 rounded-xl shadow-sm">
                  <div className="flex items-start">
                    <div className="text-2xl text-white mr-2 font-serif">"</div>
                    <p className="italic text-sm">
                      Estos valores no son solo palabras, sino principios que guían cada una de mis decisiones y
                      acciones como servidor público y como Magistrado Electoral.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECCIÓN 2: PROPUESTAS (Lado derecho) */}
          <motion.div initial="hidden" animate={controls} variants={containerVariants} className="lg:w-[60%]">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-bold text-law-800 mb-6 flex items-center">
                <div className="w-1.5 h-6 bg-gold-500 rounded-full mr-2"></div>
                Propuestas Principales
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
                {proposals.map((proposal, index) => (
                  <div
                    key={proposal.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 hover:border-law-200 group cursor-pointer h-full"
                    onClick={() => setActiveModal(proposal.id)}
                  >
                    <div className="h-32 sm:h-36 md:h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                      <img
                        src={proposal.image || "/placeholder.svg"}
                        alt={proposal.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 z-20">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${proposal.color} flex items-center justify-center text-white shadow-md`}
                        >
                          {proposal.icon}
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 z-20">
                        <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs">
                          Propuesta {index + 1}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-base font-bold text-law-800 mb-1 group-hover:text-law-600 transition-colors line-clamp-1">
                        {proposal.title}
                      </h4>
                      <div className="h-0.5 w-12 bg-gold-500 mb-2 transform origin-left group-hover:scale-x-125 transition-transform duration-500 rounded-full"></div>
                      <p className="text-gray-600 text-xs md:text-sm mb-3 line-clamp-2">{proposal.description}</p>
                      <button
                        className="inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group text-xs md:text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveModal(proposal.id)
                        }}
                      >
                        Ver detalles
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Llamado a la acción */}
            <motion.div variants={itemVariants} className="mt-8 md:mt-10">
              <div className="relative rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${images.future})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-law-900/90 to-law-800/90" />
                <div className="relative z-10 p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Juntos Construyamos el Futuro Electoral</h3>
                  <p className="text-sm md:text-base text-gray-200 mb-5">
                    Estas propuestas son solo el comienzo. Necesitamos la participación de todos para construir un
                    sistema electoral más justo, transparente y eficiente.
                  </p>
                  <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-law-900 hover:from-gold-400 hover:to-gold-500 py-2 px-5 rounded-full text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-md flex items-center">
                    Súmate a esta visión
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modales para propuestas */}
      {proposals.map(
        (proposal) =>
          activeModal === proposal.id && (
            <div
              key={proposal.id}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
            >
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-slideUp">
                <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-law-600 to-law-700 text-white">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${proposal.color} flex items-center justify-center text-white shadow-md mr-3`}
                    >
                      {proposal.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{proposal.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Cerrar"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-5 overflow-y-auto max-h-[calc(90vh-64px)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <div className="rounded-xl overflow-hidden shadow-md mb-5">
                        <img
                          src={proposal.image || "/placeholder.svg"}
                          alt={proposal.title}
                          className="w-full h-auto"
                        />
                      </div>

                      {/* Estadísticas */}
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {proposal.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-slate-50 to-white p-3 rounded-xl border border-slate-100 shadow-sm text-center"
                          >
                            <div className="flex justify-center mb-1">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${proposal.color} flex items-center justify-center text-white`}
                              >
                                {stat.icon}
                              </div>
                            </div>
                            <p className="font-bold text-law-800 text-lg">{stat.value}</p>
                            <p className="text-gray-600 text-xs">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h5 className="font-semibold text-law-700 mb-3 flex items-center text-sm">
                          <Check className="h-4 w-4 mr-1.5 text-green-500" />
                          Beneficios:
                        </h5>
                        <ul className="space-y-2">
                          {proposal.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3" />
                              </div>
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gradient-to-br from-law-50 to-white p-4 rounded-xl border border-law-100 mb-5">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 text-law-600 mr-2" />
                          <p className="text-law-700 font-medium text-sm">Descripción detallada</p>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm">{proposal.fullDescription}</p>
                      </div>

                      <h5 className="font-semibold text-law-700 mb-3 text-sm flex items-center">
                        <div className="w-1 h-4 bg-gold-500 rounded-full mr-2"></div>
                        Plan de implementación:
                      </h5>
                      <div className="space-y-3 mb-5">
                        {proposal.implementation.map((step, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-law-600 text-white flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                              {index + 1}
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex-grow">
                              <p className="text-gray-700 text-sm">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gradient-to-r from-law-600 to-law-700 text-white p-4 rounded-xl">
                        <h5 className="font-semibold mb-2 text-sm flex items-center">
                          <Users className="h-4 w-4 mr-2 text-gold-300" />
                          ¿Cómo puedes participar?
                        </h5>
                        <p className="text-xs text-gray-100 mb-3">
                          Tu participación es fundamental para el éxito de esta propuesta. Puedes contribuir de las
                          siguientes maneras:
                        </p>
                        <ul className="space-y-1.5 text-xs">
                          <li className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-1.5 mt-0.5 text-gold-300" />
                            <span>Compartiendo esta propuesta en tus redes sociales</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-1.5 mt-0.5 text-gold-300" />
                            <span>Enviando tus comentarios y sugerencias</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-1.5 mt-0.5 text-gold-300" />
                            <span>Participando en los foros de discusión</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
      )}
    </section>
  )
}

export default ProposalsSection


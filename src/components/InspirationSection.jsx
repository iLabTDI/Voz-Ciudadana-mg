"use client"

import { useEffect, useRef } from "react"
import { Heart, BookOpen, Coffee, Lightbulb, Award, ArrowRight, Music, Landmark } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion"

export const InspirationSection = ({ isVisible }) => {
  const controls = useAnimation()
  const sectionRef = useRef(null)

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const personalInterests = [
    {
      id: 1,
      title: "Fresas",
      description:
        "Las fresas frescas de Irapuato son mi deleite personal. Su dulzura natural me conecta con los sabores auténticos de México.",
      icon: <span className="text-3xl">🍓</span>,
      color: "bg-law-100",
      textColor: "text-law-800",
    },
    {
      id: 2,
      title: "Literatura",
      description:
        "La literatura jurídica e histórica ocupa un lugar especial en mi vida. Mi colección de más de 500 libros es un reflejo de mi pasión por el conocimiento.",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-gold-100",
      textColor: "text-gold-800",
    },
    {
      id: 3,
      title: "Tecnología",
      description:
        "Explorar cómo la tecnología puede transformar la justicia electoral me inspira a buscar soluciones innovadoras para nuestra democracia.",
      icon: <span className="text-3xl">💻</span>,
      color: "bg-law-100",
      textColor: "text-law-800",
    },
    {
      id: 4,
      title: "Tradiciones",
      description:
        "Las tradiciones mexicanas me llenan de orgullo. Participar en festividades regionales me recuerda la riqueza cultural que debemos preservar.",
      icon: <span className="text-3xl">🇲🇽</span>,
      color: "bg-gold-100",
      textColor: "text-gold-800",
    },
    {
      id: 5,
      title: "Café",
      description:
        "El café mexicano de Chiapas o Veracruz, preparado con dedicación, es mi ritual matutino para empezar el día con energía y calma.",
      icon: <Coffee className="h-8 w-8" />,
      color: "bg-law-100",
      textColor: "text-law-800",
    },
  ]

  return (
    <section
      id="inspiration"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-law-900 to-law-800 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/patterns/elegant-pattern.png')] opacity-5 bg-repeat"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      <div className="absolute top-10 left-20 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/30 mb-8"
          >
            <Heart className="h-8 w-8 text-gold-400" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Inspiración Personal
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-40 h-1 bg-gold-500 mx-auto mb-8 rounded-full shadow-md"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-law-200 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Un vistazo a las pasiones y valores que me motivan cada día, complementando mi compromiso con la justicia y la democracia.
          </motion.p>
        </div>

        {/* Cita */}
        <motion.div
          variants={itemVariants}
          className="bg-law-700/50 backdrop-blur-md p-10 rounded-2xl border border-law-600/30 mb-20 max-w-4xl mx-auto shadow-xl"
        >
          <div className="flex items-start">
            <span className="text-6xl text-gold-400 font-serif leading-none mr-4">"</span>
            <div>
              <p className="text-white text-lg italic leading-relaxed">
                "Mis intereses personales no solo me definen como individuo, sino que enriquecen mi visión para servir con empatía y dedicación a la sociedad mexicana."
              </p>
              <p className="text-right text-gold-400 mt-6 font-medium text-lg">
                — Magistrado Sergio Arturo Guerrero Olvera
              </p>
            </div>
          </div>
        </motion.div>

        {/* Intereses */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {personalInterests.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-law-200 hover:shadow-xl transition-all duration-300 hover:border-gold-300 group flex flex-col"
            >
              <div className={`${item.color} p-6 flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-law-900/10 flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${item.textColor}`}>{item.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-law-700 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Valores */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-law-800 to-law-700 rounded-2xl p-10 border border-law-600/50 mb-20 shadow-xl"
        >
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center mr-4 shadow-md">
              <Lightbulb className="h-8 w-8 text-law-900" />
            </div>
            <h3 className="text-3xl font-bold text-white">Fuentes de Inspiración</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-law-900/20 backdrop-blur-sm p-6 rounded-xl border border-law-600/30">
              <div className="flex items-center mb-4">
                <Music className="h-6 w-6 text-gold-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Música Clásica</h4>
              </div>
              <p className="text-law-200 leading-relaxed">
                Las obras de Beethoven y Mozart me brindan paz y claridad, acompañándome en momentos de reflexión profunda.
              </p>
            </div>
            <div className="bg-law-900/20 backdrop-blur-sm p-6 rounded-xl border border-law-600/30">
              <div className="flex items-center mb-4">
                <Landmark className="h-6 w-6 text-gold-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Historia Constitucional</h4>
              </div>
              <p className="text-law-200 leading-relaxed">
                La evolución de nuestras instituciones me inspira a construir un futuro democrático más sólido y justo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Botón */}
        <motion.div variants={itemVariants} className="text-center">
          <Link
            to="/biografia"
            className="inline-flex items-center px-10 py-4 bg-gold-500 hover:bg-gold-600 text-law-900 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explora Mi Biografía
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default InspirationSection
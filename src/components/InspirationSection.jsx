"use client"

import { useState, useEffect, useRef } from "react"
import { Heart, Music, Coffee, BookOpen, ArrowRight, Camera, Award, Landmark } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion"

export const InspirationSection = ({ isVisible }) => {
  const [activeCard, setActiveCard] = useState(null)
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const [images, setImages] = useState({
    music: "/placeholder.svg?height=600&width=800",
    coffee: "/placeholder.svg?height=600&width=800",
    books: "/placeholder.svg?height=600&width=800",
    photography: "/placeholder.svg?height=600&width=800",
    history: "/placeholder.svg?height=600&width=800",
    community: "/placeholder.svg?height=600&width=800",
  })

  useEffect(() => {
    // Cargar imágenes de la API de Vercel
    setImages({
      music: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&h=600&auto=format&fit=crop",
      coffee: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&h=600&auto=format&fit=crop",
      books: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&h=600&auto=format&fit=crop",
      photography: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&h=600&auto=format&fit=crop",
      history: "https://images.unsplash.com/photo-1562673005-7693bd6d6e54?q=80&w=800&h=600&auto=format&fit=crop",
      community: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&h=600&auto=format&fit=crop",
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

  const inspirations = [
    {
      id: 1,
      title: "Música Clásica",
      description:
        "La música de Beethoven y Mozart me inspira y me ayuda a encontrar claridad en momentos de reflexión profunda sobre la justicia electoral.",
      icon: <Music className="h-6 w-6" />,
      image: images.music,
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "Fotografía",
      description:
        "Capturar momentos que reflejan la diversidad cultural de México me conecta con las realidades sociales que impactan nuestro sistema electoral.",
      icon: <Camera className="h-6 w-6" />,
      image: images.photography,
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 3,
      title: "Literatura Latinoamericana",
      description:
        "Los autores como García Márquez y Rulfo han influido profundamente en mi forma de entender nuestra identidad cultural y sus implicaciones en la democracia.",
      icon: <BookOpen className="h-6 w-6" />,
      image: images.books,
      color: "from-green-500 to-green-700",
    },
    {
      id: 4,
      title: "Café de Especialidad",
      description:
        "Descubrir cafés de diferentes regiones de México me conecta con nuestras tradiciones y me recuerda la importancia de valorar lo local.",
      icon: <Coffee className="h-6 w-6" />,
      image: images.coffee,
      color: "from-amber-600 to-amber-800",
    },
    {
      id: 5,
      title: "Historia Constitucional",
      description:
        "Estudiar la evolución de nuestras instituciones democráticas me proporciona perspectiva histórica para enfrentar los desafíos actuales.",
      icon: <Landmark className="h-6 w-6" />,
      image: images.history,
      color: "from-teal-600 to-teal-800",
    },
    {
      id: 6,
      title: "Servicio Comunitario",
      description:
        "Participar en proyectos que benefician a comunidades vulnerables me mantiene conectado con las necesidades reales de nuestra sociedad.",
      icon: <Award className="h-6 w-6" />,
      image: images.community,
      color: "from-red-500 to-red-700",
    },
  ]

  return (
    <section
      id="inspiration"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-law-700 to-law-900 relative overflow-hidden"
    >
      {/* Overlay de patrón */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('/patterns/subtle-pattern.png')", backgroundRepeat: "repeat" }}
      ></div>

      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold-500/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-gold-500/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.div variants={itemVariants} className="inline-block">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Heart className="h-10 w-10 text-gold-300" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Lo Que Me Inspira</h2>
            <div className="h-1 w-32 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-200 max-w-3xl mx-auto text-lg">
              Más allá de mi carrera profesional, hay pasiones personales que me inspiran y me ayudan a mantener el
              equilibrio en mi vida, enriqueciendo mi perspectiva sobre la justicia electoral.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {inspirations.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-2xl h-96 transform transition-transform duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90 z-10"></div>
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Contenido */}
              <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 transform transition-transform duration-500 ${activeCard === item.id ? "scale-110" : ""} shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p
                  className={`text-gray-200 transition-all duration-500 ${activeCard === item.id ? "opacity-100 max-h-40" : "opacity-70 max-h-20 overflow-hidden"}`}
                >
                  {item.description}
                </p>
              </div>

              {/* Overlay al hacer hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/biografia"
            className="inline-flex items-center px-8 py-4 bg-white text-law-700 rounded-full font-medium hover:bg-gold-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Conocer más sobre mi vida personal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


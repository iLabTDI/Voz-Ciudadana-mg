"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { ChevronRight, Award, Book, Heart, Briefcase } from "lucide-react"

const AboutSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="conoceme" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-bg opacity-5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image column */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/src/assets/magistrado-sergio.jpeg"
                alt="Magistrado Sergio Arturo Rivera Olvera"
                className="w-full h-auto object-cover"
              />

              {/* Mexican flag overlay */}
              <div className="absolute top-0 left-0 w-full h-3 flex">
                <div className="w-1/3 h-full bg-green-700"></div>
                <div className="w-1/3 h-full bg-white"></div>
                <div className="w-1/3 h-full bg-red-700"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 z-0"></div>
          </motion.div>

          {/* Content column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Quién Soy</h2>

            <div className="w-20 h-1 bg-secondary"></div>

            <p className="text-gray-700 leading-relaxed">
              Soy Sergio Arturo Rivera Olvera, Magistrado del Tribunal Electoral del Estado de Jalisco, comprometido con
              la justicia, la transparencia y el fortalecimiento de la democracia en México.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Con más de 15 años de experiencia en el ámbito electoral, he dedicado mi carrera a garantizar que los
              procesos democráticos sean justos, transparentes y apegados a derecho.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <Award className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Experiencia</h3>
                  <p className="text-sm text-gray-600">15+ años en justicia electoral</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Book className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Formación</h3>
                  <p className="text-sm text-gray-600">Doctor en Derecho Electoral</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Heart className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Valores</h3>
                  <p className="text-sm text-gray-600">Justicia, Transparencia, Equidad</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Briefcase className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Cargo Actual</h3>
                  <p className="text-sm text-gray-600">Magistrado Electoral</p>
                </div>
              </div>
            </div>

            <Link
              to="/biografia"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mt-6 group"
            >
              Conocer más sobre mi trayectoria
              <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection


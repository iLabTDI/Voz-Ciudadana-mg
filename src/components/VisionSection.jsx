"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Scale, Users, Globe, Shield } from "lucide-react"

const VisionSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const visionItems = [
    {
      icon: <Scale className="text-white" size={32} />,
      title: "Justicia Imparcial",
      description:
        "Garantizar que cada decisión judicial sea tomada con total imparcialidad, basada únicamente en los hechos y el derecho aplicable.",
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: "Inclusión Democrática",
      description:
        "Promover la participación de todos los sectores de la sociedad en los procesos democráticos, asegurando que todas las voces sean escuchadas.",
    },
    {
      icon: <Globe className="text-white" size={32} />,
      title: "Transparencia Total",
      description:
        "Implementar mecanismos que garanticen la total transparencia en los procesos electorales y en las decisiones del tribunal.",
    },
    {
      icon: <Shield className="text-white" size={32} />,
      title: "Protección de Derechos",
      description:
        "Defender incansablemente los derechos político-electorales de todos los ciudadanos, sin distinción alguna.",
    },
  ]

  return (
    <section
      id="vision"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 text-white"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-5 rounded-full translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
            Mi Visión para la Justicia Electoral
          </motion.h2>

          <motion.div variants={itemVariants} className="w-24 h-1 bg-secondary mx-auto my-6"></motion.div>

          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-white/90">
            Como Magistrado, mi compromiso es fortalecer la democracia mexicana a través de una justicia electoral
            transparente, eficiente y cercana a la ciudadanía.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors border border-white/20 hover:border-white/30 group"
            >
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>

              <p className="text-white/80 text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <blockquote className="quote max-w-2xl mx-auto text-lg italic text-white/90">
            "La justicia electoral es el pilar fundamental de nuestra democracia. Mi compromiso es fortalecerla día a
            día."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection


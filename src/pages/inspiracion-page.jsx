"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  ArrowLeft,
  BookOpen,
  Heart,
  Music,
  Film,
  Quote,
  Lightbulb,
  Bookmark,
  ChevronRight,
  Feather,
  Globe,
  Camera,
  Headphones,
  Star,
} from "lucide-react"

export const InspiracionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeCategory, setActiveCategory] = useState("libros")
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Referencias para animaciones de scroll
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [quoteRef, quoteInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [booksRef, booksInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [musicRef, musicInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [moviesRef, moviesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [placesRef, placesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Manejo de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para desplazarse hacia la parte superior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Variantes para animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  // Datos de libros favoritos
  const favoriteBooks = [
    {
      title: "Las niñas que sueñan consiguen lo que quieren",
      author: "Cristal Glangchai",
      cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oHganFe9cPF6mNNoWnaAk09jyx2Sqk.png",
      description:
        "Cómo ayudar a las niñas de primaria a desarrollar su interés en la ciencia, la tecnología y el emprendimiento para convertirse en las líderes del mañana.",
      year: "2018",
      quote: "Las niñas que sueñan en grande pueden cambiar el mundo.",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "El futuro borroso o el cielo en un chip",
      author: "Bart Kosko",
      cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YCHKSNNzzQMYaWe4MwmZJ9PQRIRPp9.png",
      description:
        "Una exploración fascinante de la lógica difusa y cómo esta nueva forma de pensar está revolucionando la tecnología y nuestra comprensión del mundo.",
      year: "1995",
      quote: "El mundo es gris, no blanco y negro.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "The Star Wars Archives",
      author: "Paul Duncan",
      cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DMyvtfAdH6fMnWAhyTvAWUxXAsQmJi.png",
      description:
        "Un recorrido exhaustivo por la creación de la trilogía original de Star Wars, con material inédito, entrevistas y fotografías del archivo personal de George Lucas.",
      year: "2018",
      quote: "Una galaxia muy, muy lejana...",
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "Diosas y Heroínas",
      author: "Jean Menzies",
      cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W3uWBVJyKHz2QEJXJInPWAb4SnbSg8.png",
      description:
        "Un fascinante recorrido por las grandes mujeres y personajes femeninos de la mitología, ilustrado maravillosamente por Katie Ponder.",
      year: "2022",
      quote: "Grandes mujeres y personajes femeninos de la mitología.",
      color: "from-red-500 to-orange-600",
    },
  ]

  // Datos de música favorita
  const favoriteMusic = [
    {
      title: "Corridos y música norteña",
      artist: "Los Cadetes de Linares",
      cover:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab67616d00001e02d9a21006feafbb1cc9a2e288-pRkp0TGUphUUkl30sfhvAsl5glGbYx.jpeg",
      description:
        "Grupo pionero de la música norteña mexicana, conocidos por sus corridos y canciones que narran historias de la vida cotidiana y la frontera.",
      year: "1960-presente",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Música norteña tradicional",
      artist: "Los Cardenales de Nuevo León",
      cover:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CardenalesdeNL2-XSNlA8VqU4JHSD8c0CJ6eHY0poauqT.webp",
      description:
        "Legendario grupo de música norteña reconocido por su estilo único y sus interpretaciones de corridos, rancheras y baladas románticas.",
      year: "1982-presente",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Rock alternativo",
      artist: "The Killers",
      cover:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20221128kill.jpg-A8L4yl5bIg5Qfw6oQSZT0bdKBvE7zY.jpeg",
      description:
        "Banda de rock alternativo de Las Vegas conocida por sus éxitos como 'Mr. Brightside' y 'Somebody Told Me', con un sonido que mezcla rock, new wave y synth-pop.",
      year: "2001-presente",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "Cantautor español",
      artist: "Joaquín Sabina",
      cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sabina.jpg-b4ZUjpsQ8ySSkEL3Ws5EyhkKbpC7x6.jpeg",
      description:
        "Reconocido cantautor español con una extensa carrera, famoso por sus letras poéticas y su capacidad para retratar la vida cotidiana con profundidad e ironía.",
      year: "1978-presente",
      color: "from-amber-700 to-yellow-800",
    },
  ]

  // Datos de películas favoritas
  const favoriteMovies = [
    {
      title: "Los siete samuráis",
      director: "Akira Kurosawa",
      cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&h=450&auto=format&fit=crop",
      description:
        "Una obra maestra del cine japonés que narra la historia de un pueblo que contrata a siete samuráis para protegerse de bandidos.",
      year: "1954",
      color: "from-gray-700 to-gray-900",
    },
    {
      title: "La dolce vita",
      director: "Federico Fellini",
      cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&h=450&auto=format&fit=crop",
      description:
        "Un retrato de la vida nocturna de la alta sociedad romana en los años 50, explorando temas como la decadencia y la búsqueda de sentido.",
      year: "1960",
      color: "from-gray-800 to-black",
    },
    {
      title: "El ciudadano Kane",
      director: "Orson Welles",
      cover: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&h=450&auto=format&fit=crop",
      description:
        "Considerada una de las mejores películas de todos los tiempos, narra la vida del magnate Charles Foster Kane a través de flashbacks.",
      year: "1941",
      color: "from-gray-700 to-gray-900",
    },
    {
      title: "El laberinto del fauno",
      director: "Guillermo del Toro",
      cover: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800&h=450&auto=format&fit=crop",
      description:
        "Una fábula oscura ambientada en la España de posguerra que mezcla fantasía y realidad a través de los ojos de una niña.",
      year: "2006",
      color: "from-indigo-800 to-purple-900",
    },
  ]

  // Datos de lugares favoritos
  const favoritePlaces = [
    {
      name: "Biblioteca Vasconcelos",
      location: "Ciudad de México",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&h=600&auto=format&fit=crop",
      description:
        "Un impresionante espacio arquitectónico que alberga más de 575,000 libros, con estanterías suspendidas que crean un efecto visual único.",
      color: "from-amber-500 to-yellow-600",
    },
    {
      name: "Teatro Degollado",
      location: "Guadalajara, Jalisco",
      image: "https://images.unsplash.com/photo-1503505129851-abaf7f6140b9?q=80&w=800&h=600&auto=format&fit=crop",
      description:
        "Un majestuoso teatro neoclásico inaugurado en 1866, donde he disfrutado de numerosos conciertos de música clásica.",
      color: "from-red-500 to-pink-600",
    },
    {
      name: "Bosque de Chapultepec",
      location: "Ciudad de México",
      image: "https://images.unsplash.com/photo-1564671546498-09a366692274?q=80&w=800&h=600&auto=format&fit=crop",
      description:
        "Un oasis en medio de la ciudad donde disfruto caminar y reflexionar, especialmente temprano por la mañana.",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Café La Habana",
      location: "Ciudad de México",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&h=600&auto=format&fit=crop",
      description:
        "Un café histórico donde escritores como Octavio Paz y Gabriel García Márquez solían reunirse. Disfruto de su ambiente y su café.",
      color: "from-amber-700 to-yellow-800",
    },
  ]

  // Citas inspiradoras
  const inspirationalQuotes = [
    {
      text: "La justicia no es solo aplicar la ley, sino entender el corazón humano detrás de cada caso.",
      author: "Sergio Arturo Guerrero Olvera",
    },
    {
      text: "Los libros son espejos: sólo ves en ellos lo que ya llevas dentro.",
      author: "Carlos Ruiz Zafón",
    },
    {
      text: "La empatía es el puente entre el juicio y la comprensión.",
      author: "Sergio Arturo Guerrero Olvera",
    },
    {
      text: "La música expresa lo que no puede ser dicho y aquello sobre lo que es imposible permanecer en silencio.",
      author: "Victor Hugo",
    },
    {
      text: "El arte de hacer justicia es el arte de humanizar la ley.",
      author: "Sergio Arturo Guerrero Olvera",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Patrones de fondo */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/patterns/paper-texture.png')", backgroundRepeat: "repeat" }}
      />

      {/* Elementos decorativos */}
      <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-law-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-112 h-112 rounded-full bg-gold-500/5 blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <header className="bg-gradient-to-r from-law-700 to-law-800 text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-gold-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-medium">Volver al inicio</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold hidden md:block">Mi Inspiración</h1>
            <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shadow-glow overflow-hidden">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Bandera de México"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 md:py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-law-900/20 to-transparent pointer-events-none"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        ></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                <div className="w-16 h-16 mx-3 rounded-full bg-gradient-to-br from-law-600 to-law-700 flex items-center justify-center shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-law-800 mb-6 tracking-tight">Mi Inspiración</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Descubre lo que me inspira más allá del ámbito jurídico: literatura, arte, música y reflexiones
              personales.
            </p>

            {/* Navegación rápida */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { id: "cita", label: "Mi Filosofía", icon: <Quote className="h-4 w-4" /> },
                { id: "libros", label: "Libros", icon: <BookOpen className="h-4 w-4" /> },
                { id: "musica", label: "Música", icon: <Music className="h-4 w-4" /> },
                { id: "peliculas", label: "Películas", icon: <Film className="h-4 w-4" /> },
                { id: "lugares", label: "Lugares", icon: <Globe className="h-4 w-4" /> },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="bg-white hover:bg-law-50 text-law-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Cita personal */}
        <section id="cita" ref={quoteRef} className="mb-24">
          <motion.div initial="hidden" animate={quoteInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <Quote className="mr-3 h-7 w-7 text-law-600" />
                Mi Filosofía Personal
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <motion.div
              variants={itemFadeIn}
              className="bg-gradient-to-r from-law-600 to-law-700 text-white p-10 rounded-2xl shadow-xl relative"
            >
              <div className="absolute top-6 left-6 text-8xl text-white/10 font-serif">"</div>
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <p className="text-2xl md:text-3xl italic text-white/90 mb-8 leading-relaxed">
                  Este espacio no es jurídico. Es personal. Es íntimo. Es una ventana para que me conozcas más allá de
                  la sentencia y el cargo. Porque creo que la justicia también se enriquece con la imaginación, la
                  empatía, la ciencia, la ficción, la memoria… con todo eso que también nos hace humanos. Porque lo que
                  uno lee, también dice mucho de lo que uno cree.
                </p>
                <p className="text-xl text-gold-300 font-medium">— Sergio Arturo Guerrero Olvera</p>
              </div>
              <div className="absolute bottom-6 right-6 text-8xl text-white/10 font-serif">"</div>
            </motion.div>

            <motion.div variants={itemFadeIn} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: "Empatía",
                  text: "Creo firmemente que la empatía es fundamental para comprender verdaderamente los casos que llegan a mi escritorio. Cada expediente representa la vida y las esperanzas de personas reales.",
                },
                {
                  icon: <Feather className="h-6 w-6" />,
                  title: "Creatividad",
                  text: "La creatividad no está reñida con la justicia. Al contrario, encontrar soluciones innovadoras a problemas complejos es parte esencial de mi enfoque como jurista.",
                },
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: "Conocimiento",
                  text: "La lectura constante, tanto de textos jurídicos como de literatura, filosofía y ciencia, me permite ampliar mi perspectiva y enriquecer mi visión del mundo y la justicia.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-law-100 flex items-center justify-center text-law-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-law-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Libros favoritos */}
        <section id="libros" ref={booksRef} className="mb-24">
          <motion.div initial="hidden" animate={booksInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <BookOpen className="mr-3 h-7 w-7 text-law-600" />
                Mis Libros Favoritos
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <motion.div variants={itemFadeIn} className="mb-10">
              <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
                La literatura ha sido siempre una fuente inagotable de inspiración para mí. Estos son algunos de los
                libros que han marcado mi vida y mi forma de pensar.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {favoriteBooks.map((book, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group h-full flex flex-col"
                >
                  <div className="relative">
                    <div className="aspect-[2/3] overflow-hidden">
                      <img
                        src={book.cover || "/placeholder.svg?height=600&width=400"}
                        alt={book.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br ${book.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Bookmark className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-law-800 mb-1">{book.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {book.author}, {book.year}
                    </p>

                    <div className="bg-law-50 p-4 rounded-lg mb-4">
                      <p className="text-gray-700 italic">"{book.quote}"</p>
                    </div>

                    <p className="text-gray-700 mb-4 flex-grow">{book.description}</p>

                    <button className="mt-auto inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group">
                      Leer más sobre este libro
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Música favorita */}
        <section id="musica" ref={musicRef} className="mb-24">
          <motion.div initial="hidden" animate={musicInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <Music className="mr-3 h-7 w-7 text-law-600" />
                Mi Música Favorita
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <motion.div variants={itemFadeIn} className="mb-10">
              <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
                La música es una parte fundamental de mi vida. Estos son algunos de los artistas que me acompañan en
                momentos de reflexión y descanso.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {favoriteMusic.map((music, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group h-full flex flex-col"
                >
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={music.cover || "/placeholder.svg?height=400&width=400"}
                        alt={music.artist}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br ${music.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Headphones className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-law-800 mb-1">{music.artist}</h3>
                    <p className="text-gray-600 mb-4">
                      {music.title}, {music.year}
                    </p>
                    <p className="text-gray-700 flex-grow">{music.description}</p>

                    <button className="mt-4 inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group">
                      Más sobre este artista
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Películas favoritas */}
        <section id="peliculas" ref={moviesRef} className="mb-24">
          <motion.div initial="hidden" animate={moviesInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <Film className="mr-3 h-7 w-7 text-law-600" />
                Mis Películas Favoritas
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <motion.div variants={itemFadeIn} className="mb-10">
              <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
                El cine es otra de mis grandes pasiones. Estas películas me han inspirado por su profundidad narrativa y
                su visión artística.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {favoriteMovies.map((movie, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={movie.cover || "/placeholder.svg"}
                        alt={movie.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{movie.title}</h3>
                      <p className="text-white/80">
                        {movie.director}, {movie.year}
                      </p>
                    </div>
                    <div
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br ${movie.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Camera className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700">{movie.description}</p>

                    <button className="mt-4 inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group">
                      Más sobre esta película
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Lugares favoritos */}
        <section id="lugares" ref={placesRef} className="mb-16">
          <motion.div initial="hidden" animate={placesInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.div variants={itemFadeIn} className="flex items-center mb-12">
              <div className="h-px bg-law-200 flex-grow"></div>
              <h2 className="text-3xl font-bold text-law-800 px-6 flex items-center">
                <Globe className="mr-3 h-7 w-7 text-law-600" />
                Mis Lugares Favoritos
              </h2>
              <div className="h-px bg-law-200 flex-grow"></div>
            </motion.div>

            <motion.div variants={itemFadeIn} className="mb-10">
              <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
                Estos son algunos de los espacios donde encuentro inspiración, tranquilidad y conexión con la cultura y
                la naturaleza.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {favoritePlaces.map((place, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 hover:border-law-200 group"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={place.image || "/placeholder.svg"}
                        alt={place.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{place.name}</h3>
                      <p className="text-white/80">{place.location}</p>
                    </div>
                    <div
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br ${place.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Star className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700">{place.description}</p>

                    <button className="mt-4 inline-flex items-center text-law-600 font-medium hover:text-law-700 transition-colors group">
                      Más sobre este lugar
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Citas inspiradoras */}
        {/* <section className="mb-16">
          <div className="bg-gradient-to-r from-law-600 to-law-700 rounded-2xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Pensamientos que me inspiran</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inspirationalQuotes.map((quote, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                  <p className="text-white/90 italic mb-3">"{quote.text}"</p>
                  <p className="text-gold-300 font-medium text-right">— {quote.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Botón de regreso */}
        <div className="text-center mt-16 mb-10">
          <Link
            to="/"
            className="bg-gradient-to-r from-law-600 to-law-700 hover:from-law-700 hover:to-law-800 text-white py-4 px-10 rounded-full font-medium transition-all duration-300 inline-flex items-center shadow-lg transform hover:scale-105"
          >
            <ArrowLeft className="mr-3 h-5 w-5" />
            Volver a la página principal
          </Link>
        </div>
      </div>

      {/* Botón de Scroll hacia arriba */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gold-500 text-law-900 shadow-lg flex items-center justify-center z-40"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="rotate-90 h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InspiracionPage


"use client"

import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  MessageSquare,
  Calendar,
  Send,
  Search,
  Filter,
  X,
  Heart,
  Share2,
  ChevronDown,
  Bell,
  BookOpen,
} from "lucide-react"

export const ForoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [comments, setComments] = useState({})
  const [newComment, setNewComment] = useState("")
  const [commenterName, setCommenterName] = useState("")
  const [expandedPost, setExpandedPost] = useState(null)
  const [likedPosts, setLikedPosts] = useState({})
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const searchInputRef = useRef(null)
  const commentInputRefs = useRef({})

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    const storedComments = JSON.parse(localStorage.getItem("foroComments")) || {}
    setComments(storedComments)

    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const posts = [
    {
      id: 1,
      author: "Magistrado Sergio Arturo Guerrero Olvera",
      isOfficial: true,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Magistrado.png-xMRhFVdFSa29mRbXuEhHI2J4yyfrRX.jpeg",
      date: "15 de marzo, 2025",
      category: "propuesta",
      title: "Propuesta para la Modernización de la Justicia Electoral",
      content:
        "Estimados ciudadanos, hoy quiero compartir con ustedes una propuesta para modernizar nuestro sistema de justicia electoral mediante el uso de tecnologías digitales. La implementación de plataformas en línea para la presentación y seguimiento de impugnaciones electorales permitiría agilizar los procesos, reducir costos y aumentar la transparencia. ¿Qué opinan sobre esta iniciativa?",
      likes: 45,
    },
    {
      id: 2,
      author: "Magistrado Sergio Arturo Guerrero Olvera",
      isOfficial: true,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Magistrado.png-xMRhFVdFSa29mRbXuEhHI2J4yyfrRX.jpeg",
      date: "10 de febrero, 2025",
      category: "informacion",
      title: "Derechos Político-Electorales de Comunidades Indígenas",
      content:
        "Quiero compartir información importante sobre los derechos político-electorales de las comunidades indígenas en México. Es fundamental garantizar su participación efectiva en los procesos democráticos, respetando sus sistemas normativos internos y asegurando su representación en los órganos de gobierno. El Tribunal Electoral ha emitido diversas sentencias que fortalecen estos derechos. Los invito a conocer más sobre este tema y a compartir sus opiniones.",
      likes: 38,
    },
    {
      id: 4,
      author: "Magistrado Sergio Arturo Guerrero Olvera",
      isOfficial: true,
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Magistrado.png-xMRhFVdFSa29mRbXuEhHI2J4yyfrRX.jpeg",
      date: "20 de enero, 2025",
      category: "evento",
      title: "Invitación a Seminario sobre Participación Ciudadana",
      content:
        "Me complace invitarlos al Seminario sobre Participación Ciudadana y Democracia que se llevará a cabo el próximo 15 de febrero en la Universidad de Guadalajara. En este evento, discutiremos la importancia de la participación ciudadana en los procesos democráticos y las herramientas disponibles para fortalecer esta participación. La entrada es libre y se otorgarán constancias de asistencia. ¡Los esperamos!",
      likes: 32,
    },
  ]

  const filteredPosts = posts.filter((post) => {
    const categoryMatch = activeTab === "all" || post.category === activeTab
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  const handleCommentSubmit = (postId) => {
    if (!newComment.trim() || !commenterName.trim()) {
      const notification = document.createElement("div")
      notification.className =
        "fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn"
      notification.textContent = "Por favor, ingresa tu nombre y comentario."
      document.body.appendChild(notification)
      setTimeout(() => {
        notification.className += " animate-fadeOut"
        setTimeout(() => document.body.removeChild(notification), 500)
      }, 3000)
      return
    }

    const newCommentObj = {
      id: Date.now(),
      author: commenterName.trim(),
      avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      date: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
      content: newComment.trim(),
      likes: 0,
    }

    const updatedComments = {
      ...comments,
      [postId]: [...(comments[postId] || []), newCommentObj],
    }

    setComments(updatedComments)
    localStorage.setItem("foroComments", JSON.stringify(updatedComments))
    setNewComment("")
    setCommenterName("")

    const notification = document.createElement("div")
    notification.className =
      "fixed bottom-4 right-4 bg-gold-500 text-law-900 px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn"
    notification.textContent = "Comentario agregado con éxito"
    document.body.appendChild(notification)
    setTimeout(() => {
      notification.className += " animate-fadeOut"
      setTimeout(() => document.body.removeChild(notification), 500)
    }, 3000)
  }

  const handlePostLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content,
        url: window.location.href,
      }).catch((err) => console.log("Error al compartir:", err))
    } else {
      alert("Copie este enlace para compartir: " + window.location.href)
    }
  }

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded)
    if (!isSearchExpanded) setTimeout(() => searchInputRef.current?.focus(), 100)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
  const fadeInVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }

  const categories = [
    { id: "all", label: "Todos", icon: <Filter className="h-4 w-4" /> },
    { id: "propuesta", label: "Propuestas", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "informacion", label: "Información", icon: <BookOpen className="h-4 w-4" /> },
    { id: "evento", label: "Eventos", icon: <Calendar className="h-4 w-4" /> },
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case "propuesta": return "bg-gold-100 text-gold-700 border-gold-200"
      case "informacion": return "bg-law-100 text-law-700 border-law-200"
      case "evento": return "bg-gray-100 text-gray-700 border-gray-200"
      default: return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  // if (isLoading) {
  //   return (
  //     <div className="fixed inset-0 bg-law-900 flex flex-col items-center justify-center z-50">
  //       <div className="w-16 h-16 border-4 border-gold-200 border-t-gold-500 rounded-full animate-spin mb-6"></div>
  //       <p className="text-gold-500 font-medium text-lg">Cargando foro...</p>
  //     </div>
  //   )
  // }

  return (
    <div className="min-h-screen bg-law-50 overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-law-800 to-law-900 text-white py-6 fixed w-full z-50 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center text-white hover:text-gold-300 transition-colors"
                aria-label="Volver al inicio"
              >
                <div className="w-10 h-10 rounded-full bg-law-700 flex items-center justify-center shadow-md">
                  <ArrowLeft className="h-5 w-5" />
                </div>
              </Link>
              <h1 className="text-2xl font-bold">Foro Electoral</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Buscar en el foro..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-72 rounded-full border border-law-600 bg-law-700 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-law-600 text-white placeholder-gray-400 shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <button
                onClick={toggleSearch}
                className="md:hidden w-10 h-10 rounded-full bg-law-700 flex items-center justify-center hover:bg-law-600 transition-colors shadow-md"
                aria-label="Buscar"
              >
                {isSearchExpanded ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>
              <button
                className="w-10 h-10 rounded-full bg-law-700 flex items-center justify-center hover:bg-law-600 transition-colors shadow-md"
                aria-label="Notificaciones"
              >
                <Bell className="h-5 w-5" />
              </button>
              <div className="w-10 h-10 rounded-full bg-law-700 flex items-center justify-center overflow-hidden border border-law-600 shadow-md">
                <img
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  alt="Usuario"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isSearchExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden md:hidden"
              >
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Buscar en el foro..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full rounded-full border border-law-600 bg-law-700 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-law-600 text-white placeholder-gray-400 shadow-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero */}
      <div className="relative pt-24 pb-5 px-6">
        <div className="container mx-auto relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-law-800 mb-6 mt-10">Foro de Diálogo Electoral</h1>
            <div className="w-32 h-1 bg-gold-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-law-600 leading-relaxed">
              Un espacio para conocer las propuestas y mensajes del Magistrado Sergio, participar con comentarios y fortalecer nuestra democracia.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filtros */}
      <div className="sticky top-20 z-30 bg-law-50 shadow-md py-4 border-b border-law-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center overflow-x-auto hide-scrollbar">
            <div className="inline-flex bg-law-100 rounded-full p-1.5 border border-law-200 shadow-sm">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center whitespace-nowrap ${
                    activeTab === category.id
                      ? "bg-gold-500 text-law-900 shadow-md"
                      : "bg-transparent text-law-700 hover:bg-law-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 py-10 mt-10">
        {filteredPosts.length > 0 ? (
          <motion.div className="space-y-8 mb-10" variants={containerVariants} initial="hidden" animate="visible">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-law-200 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold-200 shadow-md"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-3">
                        <h4 className="font-semibold text-law-800 text-lg">{post.author}</h4>
                        <span className="px-3 py-1 text-xs bg-gold-100 text-gold-700 rounded-full border border-gold-200 font-medium shadow-sm">
                          Oficial
                        </span>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border shadow-sm ${getCategoryColor(post.category)}`}>
                          {post.category === "propuesta" ? "Propuesta" : post.category === "informacion" ? "Información" : "Evento"}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 mt-2">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-law-800 mb-4 leading-tight">{post.title}</h3>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className={post.content.length > 500 ? "line-clamp-6" : ""}>{post.content}</p>
                    {post.content.length > 500 && (
                      <button
                        onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                        className="text-gold-500 hover:text-gold-700 font-medium mt-3 text-sm flex items-center focus:outline-none"
                      >
                        {expandedPost === post.id ? "Leer menos" : "Leer más"}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${expandedPost === post.id ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-law-100">
                    <div className="flex items-center gap-6">
                      <motion.button
                        className={`flex items-center ${likedPosts[post.id] ? "text-red-500" : "text-gray-500"} hover:text-red-500 transition-colors`}
                        onClick={() => handlePostLike(post.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className={`h-6 w-6 mr-2 ${likedPosts[post.id] ? "fill-red-500" : ""}`} />
                        <span className="text-sm font-medium">{likedPosts[post.id] ? post.likes + 1 : post.likes}</span>
                      </motion.button>
                      <motion.button
                        onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                        className="flex items-center text-gray-500 hover:text-gold-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageSquare className="h-6 w-6 mr-2" />
                        <span className="text-sm font-medium">{(comments[post.id] || []).length}</span>
                      </motion.button>
                      <motion.button
                        onClick={() => handleShare(post)}
                        className="flex items-center text-gray-500 hover:text-gold-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="h-6 w-6 mr-2" />
                        <span className="text-sm font-medium hidden md:inline">Compartir</span>
                      </motion.button>
                    </div>
                    <motion.button
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="text-gold-600 hover:text-gold-700 text-sm font-medium flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      {expandedPost === post.id ? "Ocultar comentarios" : "Ver comentarios"}
                      <ChevronDown
                        className={`ml-1 h-5 w-5 transition-transform duration-300 ${expandedPost === post.id ? "rotate-180" : ""}`}
                      />
                    </motion.button>
                  </div>
                </div>
                <AnimatePresence>
                  {expandedPost === post.id && (
                    <motion.div
                      className="bg-law-50 p-6 md:p-8 border-t border-law-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold text-law-700 mb-6 flex items-center">
                        <MessageSquare className="h-6 w-6 mr-2" />
                        Comentarios ({(comments[post.id] || []).length})
                      </h4>
                      {(comments[post.id] || []).length > 0 ? (
                        <motion.div className="space-y-6 mb-8" variants={containerVariants} initial="hidden" animate="visible">
                          {(comments[post.id] || []).map((comment) => (
                            <motion.div
                              key={comment.id}
                              className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm border border-law-200"
                              variants={itemVariants}
                              whileHover={{ y: -2 }}
                            >
                              <img
                                src={comment.avatar}
                                alt={comment.author}
                                className="w-10 h-10 rounded-full object-cover border border-law-200 shadow-sm"
                              />
                              <div className="flex-1">
                                <div className="flex items-center flex-wrap gap-2">
                                  <span className="text-base font-medium text-gray-800">{comment.author}</span>
                                  <span className="text-sm text-gray-500">{comment.date}</span>
                                </div>
                                <p className="text-gray-700 mt-2 leading-relaxed">{comment.content}</p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <div className="text-center py-10 bg-white rounded-lg border border-law-200">
                          <MessageSquare className="h-12 w-12 mx-auto text-law-300 mb-4" />
                          <p className="text-gray-500 text-lg">Aún no hay comentarios. ¡Sé el primero en participar!</p>
                        </div>
                      )}
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-law-200 mt-8">
                        <h5 className="text-lg font-medium text-gray-700 mb-4">Añadir un comentario</h5>
                        <div className="flex items-start space-x-4">
                          <img
                            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                            alt="Usuario"
                            className="w-10 h-10 rounded-full object-cover border border-law-200 shadow-sm"
                          />
                          <div className="flex-1 space-y-4">
                            <input
                              type="text"
                              placeholder="Tu nombre"
                              value={commenterName}
                              onChange={(e) => setCommenterName(e.target.value)}
                              className="w-full rounded-lg border border-law-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-law-50 shadow-sm"
                            />
                            <textarea
                              ref={(el) => (commentInputRefs.current[post.id] = el)}
                              placeholder="Escribe tu comentario..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              className="w-full rounded-lg border border-law-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent min-h-[100px] resize-none bg-law-50 shadow-sm"
                            />
                            <div className="flex justify-end">
                              <motion.button
                                onClick={() => handleCommentSubmit(post.id)}
                                disabled={!newComment.trim() || !commenterName.trim()}
                                className={`bg-gold-500 text-law-900 rounded-lg px-6 py-3 text-sm font-medium transition-colors flex items-center shadow-md ${
                                  !newComment.trim() || !commenterName.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-gold-600 hover:shadow-lg"
                                }`}
                                whileHover={newComment.trim() && commenterName.trim() ? { scale: 1.05 } : {}}
                                whileTap={newComment.trim() && commenterName.trim() ? { scale: 0.95 } : {}}
                              >
                                <Send className="h-5 w-5 mr-2" />
                                Enviar comentario
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20 bg-white rounded-xl shadow-lg border border-law-200"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <Search className="mx-auto h-16 w-16 text-law-300 mb-6" />
            <h3 className="text-2xl font-semibold text-law-700 mb-4">No se encontraron publicaciones</h3>
            <p className="text-gray-500 max-w-md mx-auto text-lg">
              No hay publicaciones que coincidan con tu búsqueda. Intenta con otros términos o cambia los filtros.
            </p>
            <button
              onClick={() => { setActiveTab("all"); setSearchTerm("") }}
              className="mt-8 bg-gold-500 hover:bg-gold-600 text-law-900 py-3 px-8 rounded-lg font-medium transition-colors inline-flex items-center shadow-md"
            >
              <Filter className="mr-2 h-5 w-5" />
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>

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

export default ForoPage
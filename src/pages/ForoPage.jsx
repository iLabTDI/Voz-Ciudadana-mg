"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, MessageSquare, Calendar, ThumbsUp, Send, Search } from "lucide-react"

export const ForoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [newComment, setNewComment] = useState("")
  const [expandedPost, setExpandedPost] = useState(null)
  const [avatars, setAvatars] = useState({})

  useEffect(() => {
    // Cargar avatares aleatorios
    const loadAvatars = async () => {
      const newAvatars = {
        magistrado:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Magistrado.png-xMRhFVdFSa29mRbXuEhHI2J4yyfrRX.jpeg",
        maria: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
        juan: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
        laura: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&h=100&auto=format&fit=crop",
        carlos: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
        ana: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
      }
      setAvatars(newAvatars)
    }

    loadAvatars()
  }, [])

  // Datos de ejemplo para el foro
  const posts = [
    {
      id: 1,
      author: "Magistrado Sergio Arturo Guerrero Olvera",
      isOfficial: true,
      avatar: avatars.magistrado,
      date: "15 de marzo, 2023",
      category: "propuesta",
      title: "Propuesta para la Modernización de la Justicia Electoral",
      content:
        "Estimados ciudadanos, hoy quiero compartir con ustedes una propuesta para modernizar nuestro sistema de justicia electoral mediante el uso de tecnologías digitales. La implementación de plataformas en línea para la presentación y seguimiento de impugnaciones electorales permitiría agilizar los procesos, reducir costos y aumentar la transparencia. ¿Qué opinan sobre esta iniciativa?",
      likes: 45,
      comments: [
        {
          id: 101,
          author: "María Rodríguez",
          avatar: avatars.maria,
          date: "15 de marzo, 2023",
          content:
            "Me parece una excelente propuesta, Magistrado. Especialmente beneficiaría a quienes vivimos en zonas alejadas de las oficinas del Tribunal.",
          likes: 12,
        },
        {
          id: 102,
          author: "Juan Pérez",
          avatar: avatars.juan,
          date: "16 de marzo, 2023",
          content: "¿Cómo se garantizaría la seguridad de la información en estas plataformas digitales?",
          likes: 8,
        },
      ],
    },
    {
      id: 2,
      author: "Magistrado Sergio Arturo Guerrero Olvera",
      isOfficial: true,
      avatar: avatars.magistrado,
      date: "10 de febrero, 2023",
      category: "informacion",
      title: "Derechos Político-Electorales de Comunidades Indígenas",
      content:
        "Quiero compartir información importante sobre los derechos político-electorales de las comunidades indígenas en México. Es fundamental garantizar su participación efectiva en los procesos democráticos, respetando sus sistemas normativos internos y asegurando su representación en los órganos de gobierno. El Tribunal Electoral ha emitido diversas sentencias que fortalecen estos derechos. Los invito a conocer más sobre este tema y a compartir sus opiniones.",
      likes: 38,
      comments: [
        {
          id: 201,
          author: "Laura Sánchez",
          avatar: avatars.laura,
          date: "11 de febrero, 2023",
          content:
            "Gracias por esta información, Magistrado. ¿Existe algún material educativo sobre este tema que podamos consultar?",
          likes: 15,
        },
      ],
    },
    {
      id: 3,
      author: "Carlos Mendoza",
      isOfficial: false,
      avatar: avatars.carlos,
      date: "5 de marzo, 2023",
      category: "pregunta",
      title: "Consulta sobre Impugnación de Resultados Electorales",
      content:
        "Buenas tardes. Tengo una duda sobre el proceso de impugnación de resultados electorales. ¿Cuáles son los plazos establecidos para presentar una impugnación después de la jornada electoral? Agradezco de antemano su orientación.",
      likes: 12,
      comments: [
        {
          id: 301,
          author: "Magistrado Sergio Arturo Guerrero Olvera",
          isOfficial: true,
          avatar: avatars.magistrado,
          date: "6 de marzo, 2023",
          content:
            "Estimado Carlos, los plazos para impugnar resultados electorales varían según el tipo de elección. En general, para elecciones federales, el plazo es de 4 días contados a partir del día siguiente a la conclusión de la sesión de cómputo correspondiente. Para mayor información, le recomiendo consultar la Ley General del Sistema de Medios de Impugnación en Materia Electoral o acercarse a las oficinas del Tribunal Electoral.",
          likes: 20,
        },
      ],
    },
    {
      id: 4,
      author: "Magistrado Sergio Arturo Guerrero Olvera",
      isOfficial: true,
      avatar: avatars.magistrado,
      date: "20 de enero, 2023",
      category: "evento",
      title: "Invitación a Seminario sobre Participación Ciudadana",
      content:
        "Me complace invitarlos al Seminario sobre Participación Ciudadana y Democracia que se llevará a cabo el próximo 15 de febrero en la Universidad de Guadalajara. En este evento, discutiremos la importancia de la participación ciudadana en los procesos democráticos y las herramientas disponibles para fortalecer esta participación. La entrada es libre y se otorgarán constancias de asistencia. ¡Los esperamos!",
      likes: 32,
      comments: [
        {
          id: 401,
          author: "Ana Torres",
          avatar: avatars.ana,
          date: "21 de enero, 2023",
          content: "¿El seminario será transmitido en línea para quienes no podamos asistir presencialmente?",
          likes: 7,
        },
        {
          id: 402,
          author: "Magistrado Sergio Arturo Guerrero Olvera",
          isOfficial: true,
          avatar: avatars.magistrado,
          date: "22 de enero, 2023",
          content:
            "Sí, Ana. El seminario será transmitido en vivo a través de nuestras redes sociales. Publicaremos los enlaces correspondientes unos días antes del evento.",
          likes: 10,
        },
      ],
    },
  ]

  // Filtrar publicaciones según la pestaña activa y el término de búsqueda
  const filteredPosts = posts.filter((post) => {
    // Filtrar por categoría
    const categoryMatch = activeTab === "all" || post.category === activeTab

    // Filtrar por término de búsqueda
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())

    return categoryMatch && searchMatch
  })

  const handleCommentSubmit = (postId) => {
    if (!newComment.trim()) return

    // Aquí iría la lógica para enviar el comentario al servidor
    alert(`Comentario enviado: "${newComment}" para la publicación ${postId}`)

    setNewComment("")
    setExpandedPost(null)
  }

  return (
    <div
      className="min-h-screen bg-magistral-cream-500"
      style={{ backgroundImage: "url('/patterns/paper-texture.png')", backgroundRepeat: "repeat" }}
    >
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-magistral-sand-300 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-2xl font-bold">Foro Electoral</h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative py-16 px-4 mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1920&h=1080&auto=format&fit=crop')",
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Foro de Diálogo Electoral</h1>
            <p className="text-xl text-slate-600 mb-8">
              Un espacio para el intercambio de ideas, consultas y propuestas sobre temas electorales. Participe en la
              conversación y contribuya al fortalecimiento de nuestra democracia.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Filtros y búsqueda */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="inline-flex bg-white rounded-full shadow-md p-1 border border-magistral-sand-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab("propuesta")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "propuesta"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Propuestas
            </button>
            <button
              onClick={() => setActiveTab("informacion")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "informacion"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Información
            </button>
            <button
              onClick={() => setActiveTab("pregunta")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "pregunta"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Preguntas
            </button>
            <button
              onClick={() => setActiveTab("evento")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "evento"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-magistral-sand-200"
              }`}
            >
              Eventos
            </button>
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar en el foro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-magistral-sand-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        {/* Publicaciones */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-magistral-sand-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={post.avatar || "/placeholder.svg?height=100&width=100"}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-blue-700">{post.author}</h4>
                        {post.isOfficial && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
                            Oficial
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        post.category === "propuesta"
                          ? "bg-blue-100 text-blue-700"
                          : post.category === "informacion"
                            ? "bg-green-100 text-green-700"
                            : post.category === "pregunta"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {post.category === "propuesta"
                        ? "Propuesta"
                        : post.category === "informacion"
                          ? "Información"
                          : post.category === "pregunta"
                            ? "Pregunta"
                            : "Evento"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    {post.content.length > 200 && expandedPost !== post.id
                      ? `${post.content.substring(0, 200)}...`
                      : post.content}
                  </p>
                  {post.content.length > 200 && (
                    <button
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="text-blue-500 hover:text-blue-700 font-medium mt-2 focus:outline-none"
                    >
                      {expandedPost === post.id ? "Leer menos" : "Leer más"}
                    </button>
                  )}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="h-5 w-5 mr-2" />
                        <span>{post.likes} Me gusta</span>
                      </button>
                      <button
                        onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <MessageSquare className="h-5 w-5 mr-2" />
                        <span>{post.comments.length} Comentarios</span>
                      </button>
                    </div>
                  </div>
                </div>
                {expandedPost === post.id && (
                  <div className="bg-magistral-sand-50 p-6">
                    <h4 className="text-lg font-semibold text-blue-700 mb-4">Comentarios</h4>
                    {post.comments.length > 0 ? (
                      <div className="space-y-4">
                        {post.comments.map((comment) => (
                          <div key={comment.id} className="flex items-start space-x-3">
                            <img
                              src={comment.avatar || "/placeholder.svg?height=100&width=100"}
                              alt={comment.author}
                              className="w-8 h-8 rounded-full object-cover border border-white shadow-sm"
                            />
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-800">{comment.author}</span>
                                <span className="text-xs text-gray-500">{comment.date}</span>
                              </div>
                              <p className="text-sm text-gray-700">{comment.content}</p>
                              <div className="flex items-center mt-1">
                                <ThumbsUp className="h-4 w-4 mr-1 text-gray-500" />
                                <span className="text-xs text-gray-500">{comment.likes}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">Aún no hay comentarios. ¡Sé el primero en comentar!</p>
                    )}
                    <div className="mt-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src="/placeholder.svg?height=100&width=100"
                          alt="Tu avatar"
                          className="w-8 h-8 rounded-full object-cover border border-white shadow-sm"
                        />
                        <input
                          type="text"
                          placeholder="Añade un comentario..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                          onClick={() => handleCommentSubmit(post.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm font-medium transition-colors"
                        >
                          <Send className="h-4 w-4 inline-block mr-1" />
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10">
            <Search className="mx-auto h-12 w-12 mb-4" />
            <p>No se encontraron publicaciones que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ForoPage


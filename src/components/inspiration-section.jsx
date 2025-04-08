"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { BookOpen, Quote, ArrowRight, Heart, Music, Film, Lightbulb, Bookmark, Globe } from "lucide-react"

export const InspirationSection = ({ isVisible }) => {
  const [activeQuote, setActiveQuote] = useState(0)
  const sectionRef = useRef(null)
  const quoteTimerRef = useRef(null)

  // Citas inspiradoras
  const quotes = [
    {
      text: "“Que se oiga mi voz. Aunque sea una voz entre otras muchas. Aunque sea una voz pequeña.”",
      author: "Rosario Castellanos",
    },
    {
      text: "“La esencia de los derechos humanos no es la igualdad, sino el derecho a la diferencia.”",
      author: "Hannah Arendt (filósofa y pensadora política)",
    },
    {
      text: "“Imponte a ti mismo tu noble desorden.”",
      author: "René Char (poeta y resistente francés)",
    },
    {
      text: "“Quien tiene un porqué para vivir, puede soportar casi cualquier cómo.”",
      author: "Friedrich Nietzsche",
    },
    {
      text: "“Más importante que tu obligación de seguir tu conciencia, o al menos antes de ella, está tu obligación de formar correctamente tu conciencia.”",
      author: "Juez Antonin Scalia",
    },
    {
      text: "“Nos sobran los motivos.”",
      author: "Joaquín Sabina",
    },
    {
      text: "“Hay quienes cruzan el bosque y solo ven leña para el fuego.”",
      author: "Tolstoi",
    },
    {
      text: "“La esencia de la vida es servir a otros y hacer el bien.”",
      author: "Aristóteles",
    },
  ]

  // Libros favoritos con las imágenes proporcionadas
  const favoriteBooks = [
    {
      title: "Las niñas que sueñan consiguen lo que quieren",
      author: "Cristal Glangchai",
      cover:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Las%20nin%CC%83as%20que%20suen%CC%83an%20consiguen%20lo%20que%20quiere.png-dA57NVUJq5oWiRtUqwXYe4w7uTE5yi.jpeg",
      description:
        "Cómo ayudar a las niñas de primaria a desarrollar su interés en la ciencia, la tecnología y el emprendimiento para convertirse en las líderes del mañana.",
      year: "2018",
      quote: "Las niñas que sueñan en grande pueden cambiar el mundo.",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "El futuro borroso o el cielo en un chip",
      author: "Bart Kosko",
      cover:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/El%20futuro%20borroso%20o%20el%20cielo%20en%20un%20chip.png-gBXHSoYgGCMVJkECeghSsbhmPWR2c0.jpeg",
      description:
        "Una exploración fascinante de la lógica difusa y cómo esta nueva forma de pensar está revolucionando la tecnología y nuestra comprensión del mundo.",
      year: "1995",
      quote: "El mundo es gris, no blanco y negro.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Los diez mejores jueces de la historia norteamericana",
      author: "Bernard Schwartz",
      cover:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Los%20diez%20mejores%20jueces%20de%20la%20historia%20norteamericana.png-BxnFznJX9NuE6PGxySnxcaCoSZu3Rm.jpeg",
      description:
        "Un análisis de las contribuciones de los jueces más influyentes en la historia judicial de Estados Unidos y su impacto en el desarrollo del derecho constitucional.",
      year: "1980",
      quote: "La justicia es el fin del gobierno. Es el fin de la sociedad civil.",
      color: "from-amber-500 to-yellow-600",
    },
  ]

  useEffect(() => {
    if (isVisible) {
      startQuoteRotation()
    } else {
      stopQuoteRotation()
    }

    return () => stopQuoteRotation()
  }, [isVisible])

  const startQuoteRotation = () => {
    quoteTimerRef.current = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length)
    }, 8000)
  }

  const stopQuoteRotation = () => {
    if (quoteTimerRef.current) {
      clearInterval(quoteTimerRef.current)
    }
  }

  return (
    <section
      id="inspiration"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-law-600/30 via-gold-500 to-law-600/30"></div>
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-law-500/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl"></div>

      {/* Elementos flotantes decorativos */}
      <div className="absolute top-1/4 left-[15%] text-law-200/10 hidden lg:block">
        <BookOpen className="w-24 h-24" />
      </div>
      <div className="absolute bottom-1/4 right-[15%] text-gold-200/10 hidden lg:block">
        <Quote className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-2 rounded-full bg-gradient-to-br from-law-600 to-law-700 flex items-center justify-center shadow-lg">
                <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-2xl font-bold text-law-800 mb-2">Mi Inspiración</h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto">
              Conoce lo que me inspira más allá del ámbito jurídico: literatura, arte, música y reflexiones personales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Columna izquierda: Texto personal y citas */}
          <div className="flex flex-col gap-6">
            {/* Texto personal */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-8 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-law-50 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-50 rounded-full translate-x-16 translate-y-16"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-law-500 to-law-600 flex items-center justify-center text-white shadow-md mr-3 sm:mr-4">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-law-800">Mi Lado Personal</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  Este espacio no es jurídico. Es personal. Es íntimo. Es una ventana para que me conozcas más allá de
                  la sentencia y el cargo. Porque creo que la justicia también se enriquece con la imaginación, la
                  empatía, la ciencia, la ficción, la memoria… con todo eso que también nos hace humanos.
                </p>
                <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                  Porque lo que uno lee, también dice mucho de lo que uno cree.
                </p>
              </div>
            </div>

            {/* Citas rotativas */}
            <div className="bg-gradient-to-br from-law-600 to-law-700 text-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8 h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl sm:text-6xl text-white/10 font-serif">"</div>
              <div className="absolute bottom-4 right-4 text-4xl sm:text-6xl text-white/10 font-serif">"</div>

              <div className="relative z-10 text-center max-w-lg mx-auto">
                {quotes.map((quote, index) => (
                  <div key={index} className={`${activeQuote === index ? "block" : "hidden"}`}>
                    <p className="text-base sm:text-lg md:text-xl italic text-white/90 mb-3 sm:mb-4">{quote.text}</p>
                    <p className="text-gold-300 font-medium text-sm sm:text-base">— {quote.author}</p>
                  </div>
                ))}
              </div>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveQuote(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeQuote === index ? "bg-gold-400 w-4" : "bg-white/30"
                    }`}
                    aria-label={`Ver cita ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha: Libros favoritos */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-8 border border-slate-200">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white shadow-md mr-3 sm:mr-4">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-law-800">Mis Lecturas Favoritas</h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mb-5 sm:mb-6">
              {favoriteBooks.map((book, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-md relative max-w-[120px] mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 z-20">
                      <h4 className="text-white font-bold text-xs leading-tight mb-0.5">{book.title}</h4>
                      <p className="text-white/80 text-[10px]">{book.author}</p>
                    </div>
                    <div
                      className={`absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-to-br ${book.color} flex items-center justify-center text-white shadow-sm z-20`}
                    >
                      <Bookmark className="h-2.5 w-2.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Music className="h-4 w-4 sm:h-5 sm:w-5" />,
                  title: "Música",
                  text: "Los Cadetes de Linares, Pink Floyd, Elvis Presley",
                },
                {
                  icon: <Film className="h-4 w-4 sm:h-5 sm:w-5" />,
                  title: "Cine",
                  text: "Forrest Gump, Mad Max, La vida es bella",
                },
                {
                  icon: <Globe className="h-4 w-4 sm:h-5 sm:w-5" />,
                  title: "Lugares",
                  text: "Biblioteca Vasconcelos, Teatro Degollado",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-law-50 p-3 rounded-lg border border-law-100 hover:shadow-md transition-all duration-300 hover:border-law-200"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-law-100 flex items-center justify-center text-law-600 mr-2">
                      {item.icon}
                    </div>
                    <h4 className="font-medium text-law-700 text-xs sm:text-sm">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-xs">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón para ver más */}
        <div className="text-center">
          <Link
            to="/inspiracion"
            className="inline-flex items-center bg-gradient-to-r from-law-600 to-law-700 hover:from-law-700 hover:to-law-800 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Descubre más sobre mi inspiración
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InspirationSection


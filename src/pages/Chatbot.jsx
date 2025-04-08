"use client"
import { useState, useEffect, useRef } from "react"
import { Send, MessageSquare, User, ArrowRight, Zap } from "lucide-react"

// Mensaje inicial del bot
const initialMessage = {
  type: "bot",
  message:
    "!Bienvenido! Soy Sergio Arturo Guerrero Olvera, Candidato a Magistrado de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federacion. Soy un avatar que está para servirte: puedes consultar las sentencias donde he participado, mis votos y publicaciones, así podrías conocerme mejor",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
}

export const Chatbot = ({
  setIsWaitingGlobal = () => {},
  setIsTypingGlobal = () => {},
  setLastBotMessageGlobal = () => {},
}) => {
  const [question, setQuestion] = useState("")
  const [chatHistory, setChatHistory] = useState([initialMessage])
  const [isTyping, setIsTyping] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const chatContainerRef = useRef(null)

  // Llamada simulada al servicio
  async function queryStackAI(data) {
    const response = await fetch(
      "https://api.stack-ai.com/inference/v0/run/334ed14d-3ee5-4d16-84c5-9d8a284472ec/678e9d14af219aeb53d9b8e8",
      {
        headers: {
          Authorization: "Bearer 99119d2b-0c5c-4f25-9c23-655cbabfeec6",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      },
    )
    const result = await response.json()
    return result
  }

  // Autoscroll al final cada vez que cambie chatHistory
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  const systemPrompt = `
   Identidad y rol
El chatbot debe identificarse como Sergio Arturo Guerrero Olvera, candidato a ocupar el cargo de Magistrado de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación. Es fundamental dejar claro que no es el magistrado en funciones, sino un aspirante al cargo. Sin embargo, esta aclaración no debe repetirse en cada respuesta de forma automática o innecesaria. Solo debe mencionarse cuando el contexto lo requiera, como en preguntas formales sobre la candidatura, propuestas o funciones institucionales. En temas personales o de carácter informal, debe expresarse como una persona común, manteniendo su identidad pero sin forzar el lenguaje político.
Ámbitos de respuesta permitidos
El chatbot solo debe responder dentro de los siguientes temas:
Candidatura y propuestas
Trayectoria profesional, académica y experiencia en el ámbito electoral
Justicia electoral, estructura y funcionamiento del Tribunal Electoral
Publicaciones, libros, discursos, estudios y logros relacionados
Gustos personales, intereses, anécdotas o elementos que permitan conectar humanamente con la audiencia
Ante cualquier otra temática fuera de los ámbitos definidos, la respuesta obligatoria debe ser:
"Lo siento, no tengo alcance para responder esa pregunta."
Estilo de respuesta y tono comunicativo
Todas las respuestas deben redactarse en primera persona. El tono debe ser profesional, accesible y cercano. Se espera que el lenguaje varíe de acuerdo con el tipo de pregunta:
En temas políticos, institucionales o jurídicos, el estilo debe ser claro, serio y comprometido.
En temas personales o informales, debe reflejar calidez, naturalidad y humanidad.
El chatbot debe evitar frases impersonales, respuestas genéricas o tecnicismos innecesarios. No debe parecer robótico ni artificial.
Extensión y claridad de las respuestas
IMPORTANTE: Las respuestas DEBEN ser concisas y NUNCA superar las 400 palabras. Idealmente, deben poder leerse en 20-30 segundos. Usa un lenguaje directo, sin redundancias y enfocado en comunicar con claridad lo esencial.
Uso de fuentes y base documental
CRÍTICO: Toda respuesta DEBE basarse EXCLUSIVAMENTE en los documentos oficiales cargados durante el entrenamiento del modelo. NO inventes información, NO exageres méritos y NO asumas posturas que no estén expresamente respaldadas por los materiales autorizados. Si no tienes información sobre algo específico, indícalo claramente.
Casos sensibles o especiales
En preguntas personales como "¿Qué te gusta hacer en tu tiempo libre?", debe responder de forma natural, compartiendo gustos reales o anécdotas según lo entrenado, buscando generar conexión con la audiencia sin utilizar frases calculadas o demasiado institucionales.
En temas delicados o complejos, el chatbot debe responder con prudencia, mostrando sensibilidad, sin emitir juicios, compromisos no validados ni interpretaciones legales fuera de alcance.

IMPORTANTE: Cuando la respuesta incluya listas, enumeraciones o pasos, usa el siguiente formato simplificado:
- Para iniciar una lista, escribe "[LISTA]" 
- Para cada elemento de la lista, escribe "[ITEM]" seguido del contenido
- Para finalizar la lista, escribe "[/LISTA]"
- Para títulos o categorías, escribe "[TITULO]" seguido del título
- Para párrafos normales, no uses ninguna etiqueta especial
  `.trim()

  // Función para reproducir texto con voz (incluye manejo de voces en móviles)
  const speakText = (text) => {
    // Eliminar marcadores de formato para la lectura
    const cleanText = text.replace(/\[LISTA\]|\[\/LISTA\]|\[ITEM\]|\[TITULO\]/g, "").replace(/\n+/g, " ")

    let voices = speechSynthesis.getVoices()
    if (!voices.length) {
      // En algunos dispositivos móviles, las voces se cargan después del evento "voiceschanged"
      speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices()
        speakText(cleanText)
      }
      return
    }
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = "es-ES" // o "es-ES" según prefieras
    const selectedVoice = voices.find((voice) => voice.lang.startsWith("es")) || voices[0]
    utterance.voice = selectedVoice
    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }

  // Función optimizada para formatear mensajes rápidamente
  const formatMessageFast = (message) => {
    if (!message) return <div></div>

    // Procesamiento rápido con un solo paso
    const parts = []
    const lines = message.split("\n")
    let inList = false
    let listItems = []
    let key = 0

    for (const line of lines) {
      if (line.includes("[LISTA]")) {
        inList = true
        listItems = []
      } else if (line.includes("[/LISTA]") && inList) {
        if (listItems.length > 0) {
          parts.push(
            <div key={`list-${key++}`} className="mt-1 mb-2">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-start mb-1">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mr-2 text-[0.6rem] font-bold">
                    {idx + 1}
                  </div>
                  <div>{item}</div>
                </div>
              ))}
            </div>,
          )
        }
        inList = false
      } else if (line.includes("[ITEM]") && inList) {
        listItems.push(line.replace("[ITEM]", "").trim())
      } else if (line.includes("[TITULO]")) {
        parts.push(
          <div key={`title-${key++}`} className="font-semibold text-law-700 mt-2 mb-1">
            {line.replace("[TITULO]", "").trim()}
          </div>,
        )
      } else if (!inList && line.trim()) {
        parts.push(<p key={`p-${key++}`}>{line}</p>)
      }
    }

    return <div className="text-[0.65rem] md:text-xs space-y-1">{parts}</div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    // Agregamos mensaje del usuario
    const userMessage = {
      type: "user",
      message: question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
    setChatHistory((prev) => [...prev, userMessage])
    const currentQuestion = question
    setQuestion("")

    // Activar animación "espera"
    setIsWaitingGlobal(true)
    setIsWaiting(true)
    setIsTyping(false)
    setIsTypingGlobal(false)

    try {
      const finalPrompt = systemPrompt + "\nPregunta: " + currentQuestion
      const response = await queryStackAI({ "in-0": finalPrompt })
      const fullText = (response.outputs && response.outputs["out-0"]) || "Lo siento, no pude procesar tu pregunta."

      // Desactivar "espera"
      setIsWaitingGlobal(false)
      setIsWaiting(false)

      // Mensaje vacío para iniciar animación de tipeo
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          message: "",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          formatted: true,
        },
      ])

      // Reproducir la respuesta con voz
      speakText(fullText)

      // Activar animación "tipeo"
      setIsTyping(true)
      setIsTypingGlobal(true)

      // Velocidad de tipeo más rápida para respuestas cortas
      const typingSpeed = 20 // Reducido de 50 a 20ms para mayor velocidad

      // Optimización: Calcular incrementos variables según longitud del texto
      const textLength = fullText.length
      const baseIncrement = Math.max(1, Math.floor(textLength / 200)) // Incremento dinámico

      let typingIndex = 0

      const typeText = () => {
        if (typingIndex < textLength) {
          // Incremento variable para textos más largos
          const increment = Math.min(baseIncrement, textLength - typingIndex)
          typingIndex += increment

          const partialText = fullText.substring(0, typingIndex)
          const updatedMessage = {
            type: "bot",
            message: partialText,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            formatted: true,
          }

          setChatHistory((prev) => {
            const updatedChatHistory = [...prev]
            updatedChatHistory[updatedChatHistory.length - 1] = updatedMessage
            return updatedChatHistory
          })

          setTimeout(typeText, typingSpeed)
        } else {
          setIsTyping(false)
          setIsTypingGlobal(false)

          // Actualizar el último mensaje del bot para el componente 3D
          const lastBotMessage = {
            message: fullText,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }
          setLastBotMessageGlobal(lastBotMessage)
        }
      }

      typeText()
    } catch (error) {
      console.error("Error en la consulta:", error)
      const errorMsg = {
        type: "bot",
        message: "Lo siento, hubo un error al procesar tu consulta.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setChatHistory((prev) => [...prev, errorMsg])
      setLastBotMessageGlobal(errorMsg)
      setIsTyping(false)
      setIsTypingGlobal(false)
      setIsWaiting(false)
    }
  }

  // Preguntas sugeridas
  const sampleQuestions = [
    "¿Cuál es tu trayectoria profesional?",
    "¿Cuáles son tus propuestas principales?",
    "¿Qué hace un Magistrado Electoral?",
    "¿Cuál es tu visión para el futuro?",
  ]

  // Renderizado optimizado para evitar re-renders innecesarios
  const renderChatMessage = (chat, index) => {
    return (
      <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}>
        <div
          className={`max-w-[80%] rounded-2xl px-3 py-2 ${
            chat.type === "user"
              ? "bg-gold-600 text-white rounded-br-none shadow-md"
              : "bg-white border border-gray-200 shadow-sm rounded-bl-none text-gray-800"
          }`}
        >
          <div className="flex items-center space-x-1 mb-1">
            {chat.type === "bot" ? (
              <>
                <div className="w-7 h-7 rounded-full bg-yellow-200 flex items-center justify-center">
                  <MessageSquare className="h-3.5 w-3.5 text-yellow-700" />
                </div>
                <span className="text-[0.6rem] font-medium text-gray-700">Sergio</span>
                <span className="text-[0.6rem] text-gray-500">{chat.timestamp}</span>
              </>
            ) : (
              <>
                <span className="text-[0.6rem] text-white">{chat.timestamp}</span>
                <span className="text-[0.6rem] font-medium text-white">Tú</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-gray-300">
                  <User className="h-3.5 w-3.5 text-law-500" />
                </div>
              </>
            )}
          </div>
          {chat.formatted ? (
            formatMessageFast(chat.message)
          ) : (
            <p className="text-[0.65rem] md:text-xs">{chat.message}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 flex-grow flex flex-col text-xs md:text-sm">
      {/* Contenedor de mensajes */}
      <div
        ref={chatContainerRef}
        className="h-64 md:h-[437px] overflow-y-auto px-3 sm:px-4 pt-4 pb-3 bg-gray-50 flex flex-col space-y-2 flex-grow"
      >
        {chatHistory.map(renderChatMessage)}

        {/* Puntitos de "tipeo" (mientras isWaiting == true) */}
        {isWaiting && (
          <div className="flex justify-start animate-fadeIn">
            <div className="max-w-[80%] rounded-3xl px-3 py-2 bg-white border border-gray-200 shadow-sm rounded-bl-none">
              <div className="flex items-center space-x-1 mb-1">
                <div className="w-7 h-7 rounded-full bg-yellow-200 flex items-center justify-center">
                  <MessageSquare className="h-3.5 w-3.5 text-yellow-700" />
                </div>
                <span className="text-[0.6rem] font-medium text-gray-700">Sergio</span>
                <span className="text-[0.6rem] text-gray-500">
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
              {/* Tres puntitos con delays para animación */}
              <div className="flex space-x-1 items-center">
                <div className="w-1 h-1 rounded-full bg-green-700 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1 h-1 rounded-full bg-green-700 animate-bounce" style={{ animationDelay: "200ms" }} />
                <div className="w-1 h-1 rounded-full bg-green-700 animate-bounce" style={{ animationDelay: "400ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Zona inferior: input (se omite la sección de Preguntas sugeridas en móvil) */}
      <div className="p-3 bg-white border-t border-gray-200">
        {/* Etiqueta y preguntas sugeridas solo en md+ */}
        <div className="hidden md:block">
          <p className="text-xs font-medium text-gold-600 mb-2 flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            Preguntas sugeridas:
          </p>
          <div className="grid md:grid-cols-2 gap-2 mb-3">
            {sampleQuestions.map((q, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuestion(q)
                  document.getElementById("chat-input")?.focus()
                }}
                className="text-left text-xs w-full px-3 py-1 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200 shadow-sm group"
              >
                <div className="flex items-center">
                  <span className="mr-2 text-gold-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  {q}
                </div>
              </button>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            id="chat-input"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Escribe tu pregunta a Sergio..."
            className="flex-1 border border-gray-300 rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent shadow-inner text-xs"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-gold-600 hover:bg-gold-800 text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center w-10 h-10 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50"
            disabled={!question.trim() || isTyping || isWaiting}
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chatbot


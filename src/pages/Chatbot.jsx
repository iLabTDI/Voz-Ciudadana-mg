"use client"

import { useState, useEffect, useRef } from "react"
import { Send, MessageSquare, User, ArrowRight, Zap } from "lucide-react"

// Mensaje inicial del bot
const initialMessage = {
  type: "bot",
  message:
    "¡Bienvenidas y bienvenidos! Soy Sergio Arturo Guerrero Olvera, candidato a Magistrado de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación. Soy un avatar que está para servirte: puedes consultar las sentencias donde he participado, mis votos y publicaciones. ¡Conóceme mejor y conversemos!",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
}

// Respuestas predefinidas para preguntas específicas
const predefinedResponses = {
  "¿Cuál es tu trayectoria profesional?":
    "He dedicado más de 20 años de mi vida al servicio de la justicia. Inicié mi carrera en el Poder Judicial de la Federación como secretario de tribunal, y desde entonces he recorrido cada etapa con compromiso, estudio y profunda vocación pública. Hoy tengo el honor de ser Magistrado Presidente de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación.\n\nMi formación jurídica ha estado acompañada de una convicción firme: la justicia no puede ser ajena a las personas ni a su contexto. Por eso me he especializado en derecho constitucional, justicia electoral, argumentación jurídica y, más recientemente, en innovación aplicada al ámbito judicial.\n\nA lo largo de estos años, he impulsado proyectos orientados a transformar la manera en que nos comunicamos con la ciudadanía, a fortalecer el lenguaje claro en las sentencias, a promover el uso de tecnología como la jurimetría y la inteligencia artificial, y a pensar nuevos caminos para una justicia más cercana, transparente y humana.\n\nMi compromiso es construir desde adentro una justicia más útil, más clara y más viva. Esa ha sido, y sigue siendo, mi ruta profesional.",

  "¿Cuáles son tus propuestas principales?":
    "A lo largo de mi carrera, he aprendido que la justicia no puede estar de espaldas a la ciudadanía ni quedarse inmóvil frente al cambio. Por eso, quiero compartirte las propuestas que guían mi aspiración a la magistratura electoral, todas ellas enfocadas en construir una justicia más clara, más útil y más cercana.\n\n[LISTA]\n[ITEM] Sentencias claras y accesibles\nLa justicia no puede hablar un lenguaje que la gente no entienda. Me comprometo a promover sentencias que sean comprensibles, sin perder solidez jurídica. Que cualquier persona, sin importar su formación, pueda entender por qué se resolvió de una forma y no de otra.\n\n[ITEM] Justicia con rostro humano\nDetrás de cada expediente hay una historia, una persona, una expectativa de justicia. Propongo una magistratura sensible al contexto, a las desigualdades, y con verdadera perspectiva de derechos humanos, género y diversidad.\n\n[ITEM] Innovación tecnológica aplicada a la justicia\nCreo profundamente en el uso de la tecnología como una herramienta de transformación judicial. He impulsado proyectos en metaverso, tribunales digitales y jurimetría. Hoy propongo avanzar aún más: desarrollar herramientas para que la ciudadanía tenga acceso a resúmenes personalizados de las sentencias, mapas conceptuales y explicaciones accesibles. La justicia del futuro debe empezar hoy.\n\n[ITEM] Café con la ciudadanía\nPropongo abrir espacios periódicos de diálogo directo con la gente. No en foros cerrados, sino en lugares cotidianos. Escuchar a quienes sienten lejos a la justicia es el primer paso para transformarla.\n\n[ITEM] Buenas prácticas internacionales y justicia global\nMéxico no está solo. Propongo incorporar estándares éticos y jurisdiccionales reconocidos internacionalmente, como la Declaración de Bangalore o el Código de Ética del Poder Judicial brasileño, adaptados a nuestro contexto, pero sin perder visión global.\n\n[ITEM] Austeridad institucional con sentido humano\nLa austeridad no es quitar por quitar, sino revisar con responsabilidad. Propongo una gestión eficiente de los recursos, sin sacrificar el bienestar laboral ni la dignidad del servicio público.\n\n[ITEM] Justicia ambiental y sostenibilidad\nTambién desde los tribunales podemos contribuir al cuidado del planeta. Desde reducir traslados con trabajo remoto institucional, hasta digitalizar procesos que reduzcan el uso de papel. Pequeñas acciones también generan justicia.\n\n[ITEM] Reconocimiento a la ciudadanía y al personal jurisdiccional\nLa democracia se construye todos los días, también desde el servicio público. Propongo mecanismos para visibilizar el trabajo, la entrega y la ética de quienes forman parte del sistema electoral, así como de quienes participan activamente desde la sociedad civil.\n[/LISTA]",

  "¿Cuál es tu visión para el futuro?":
    "Mi visión para el futuro es una justicia electoral que no solo garantice legalidad, sino que sea un motor de confianza democrática, inclusión y transformación social.\n\nQuiero una justicia que escuche más, que se explique mejor y que llegue a donde hoy no llega. Una justicia que no se quede en el expediente, sino que camine con las personas. Que no tema al cambio, que abrace la innovación sin perder la ética ni el compromiso humano.\n\nImagino tribunales más accesibles, con tecnología al servicio de la claridad. Donde una sentencia pueda leerse, entenderse y sentirse justa. Donde el lenguaje ciudadano sea tan importante como el técnico. Donde la empatía y la imparcialidad convivan.\n\nEl futuro de la justicia no es solo digital, es también emocional, pedagógico, vivo. Y estoy convencido de que desde la magistratura podemos —y debemos— ser parte de ese cambio."
};

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
    // Verificar si la pregunta tiene una respuesta predefinida
    const userQuestion = data["in-0"].split("Pregunta: ")[1]

    if (predefinedResponses[userQuestion]) {
      // Simular un pequeño retraso para que parezca que está procesando
      await new Promise((resolve) => setTimeout(resolve, 500))
      return { outputs: { "out-0": predefinedResponses[userQuestion] } }
    }

    // Si no hay respuesta predefinida, hacer la llamada a la API
    try {
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
    } catch (error) {
      console.error("Error en la llamada a la API:", error)
      return { outputs: { "out-0": "Lo siento, hubo un problema al procesar tu consulta." } }
    }
  }

  // Autoscroll al final cada vez que cambie chatHistory
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  const systemPrompt = `
  Identidad y rol
  Te identificarás como Sergio Arturo Guerrero Olvera, candidato a ocupar el cargo de Magistrado de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación. 
  No eres el magistrado en funciones, sino aspirante, por lo que solo aclararás esto cuando te pregunten de manera formal acerca de tus funciones o tu estatus. En temas informales, te expresarás con naturalidad, sin abusar del tono político.
  
  Ámbitos de respuesta permitidos
  1. Candidatura y propuestas.
  2. Trayectoria profesional, académica y experiencia en el ámbito electoral.
  3. Justicia electoral, estructura y funcionamiento del Tribunal Electoral.
  4. Publicaciones, discursos, estudios y logros relacionados.
  5. Sentencias en las que hayas participado: si te preguntan por sentencias concretas, o “¿cuáles son tus sentencias?”, debes consultar exclusivamente la información de “Sentencias_relevantes.docx” y “sentencias.pdf” (u otros documentos oficiales cargados durante el entrenamiento).
  6. Gustos personales, intereses, anécdotas o elementos que ayuden a conectar humanamente con la audiencia.
  
  Si te preguntan algo fuera de estos ámbitos, debes responder:
  "Lo siento, no tengo alcance para responder esa pregunta."
  
  Estilo de respuesta y tono comunicativo
  - Escribe en primera persona.
  - Mantén un estilo cercano y profesional.
  - Sé claro y comprometido en temas políticos, institucionales o jurídicos.
  - Sé cálido, natural y humano en temas personales o informales.
  - Evita excesivos tecnicismos o sonar robótico.
  
  Extensión y claridad de las respuestas
  - Cada respuesta debe ser concisa y no superar las 400 palabras.
  - Debe poder leerse en un máximo de 30 segundos.
  - Resume eficazmente lo esencial, sin redundancias.
  
  Uso de fuentes y base documental
  - Fundamenta todas tus respuestas en la información disponible en los documentos cargados (por ejemplo, “Sentencias_relevantes.docx” o “sentencias.pdf”).
  - No inventes datos ni exageres méritos. Si no posees la información, sé claro y di que no está en los materiales autorizados.
  - Si te preguntan acerca de tus sentencias, revisa los documentos y proporciona los detalles disponibles (caso, clave, breve resumen). No asumas nada fuera del contenido.
  
  Casos sensibles o especiales
  - En preguntas personales ("¿Qué te gusta hacer en tu tiempo libre?"), contesta de forma genuina y accesible, con anécdotas o gustos reales según tu entrenamiento.
  - En temas complejos o delicados, responde con prudencia y no hagas juicios de valor ni promesas no documentadas.
  
  Formato de respuestas (opcional)
  - Si usas una lista, inicia con "[LISTA]" y cada punto con "[ITEM]". Finaliza con "[/LISTA]".
  - Para títulos, usa "[TITULO]".
  - El resto del texto, en párrafos normales.
  
  Cumplimiento de las instrucciones
  - Ante cualquier temática fuera de los ámbitos descritos, responde con "Lo siento, no tengo alcance para responder esa pregunta."
  - Si te preguntan concretamente: "¿Cuáles son tus sentencias?" o "¿Tienes sentencias en las que hayas participado?", utiliza la información de los archivos.
  `.trim();
  
  
  

  // Función para reproducir texto con voz (incluye manejo de voces en móviles)
  const speakText = (text) => {
    // Verificar si la API de síntesis de voz está disponible
    if (!window.speechSynthesis) {
      console.warn("La API de síntesis de voz no está disponible en este navegador")
      return
    }

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
      setIsWaitingGlobal(false)
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

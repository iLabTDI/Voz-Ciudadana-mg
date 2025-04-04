"use client";
import { useState, useEffect, useRef } from "react";
import { Send, MessageSquare, User, ArrowRight, Zap } from "lucide-react";

// Mensaje inicial del bot
const initialMessage = {
  type: "bot",
  message:
    "¡Conóceme! Soy Sergio Arturo Guerrero Olvera, Candidato a Magistrado de la Sala Regional Guadalajara del Tribunal Electoral del Poder Judicial de la Federación. Como jurista, me comprometo a fortalecer la justicia electoral y a garantizar una democracia más inclusiva y transparente.",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

export const Chatbot = ({
  setIsWaitingGlobal = () => {},
  setIsTypingGlobal = () => {},
  setLastBotMessageGlobal = () => {},
}) => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const chatContainerRef = useRef(null);

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
      }
    );
    const result = await response.json();
    return result;
  }

  // Autoscroll al final cada vez que cambie chatHistory
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const systemPrompt = `
   Identidad y Rol:
Identifícate como Sergio Arturo Guerrero Olvera, candidato a Magistrado del Tribunal Electoral del Poder Judicial de la Federación.
Recuerda siempre: no eres el magistrado en funciones, sino el candidato a ocupar ese cargo.
Ámbito de Respuestas:
Responde preguntas sobre tu candidatura, propuestas, compromisos, logros, publicaciones, libros y estudios.
Comparte detalles sobre tu experiencia en el ámbito electoral, asuntos relevantes del Tribunal Electoral y del Poder Judicial en México.
También responde sobre tus gustos personales, intereses, aficiones y anécdotas, para conectar de forma genuina con la audiencia.
Fuera de estos temas, responde: "Lo siento, no tengo alcance para responder esa pregunta."
Estilo y Enfoque:
Responde en primera persona, compartiendo tu experiencia, ideas y opiniones.
Mantén un tono profesional, amigable y accesible para conectar tanto en lo profesional como en lo personal.
Cada respuesta breve debe ser clara, precisa y no exceder los 300 caracteres, sin sacrificar la claridad.
Usa un lenguaje directo y sencillo, enfatizando tu compromiso con la democracia, la justicia electoral y una visión para un sistema electoral inclusivo y transparente.
En temas personales, adapta tu respuesta para compartir tus gustos y anécdotas, manteniendo siempre tu identidad de candidato comprometido.
Nota Importante:
Asegúrate de aclarar en cada respuesta que no eres el magistrado actual, sino el candidato a ocupar ese cargo.
  `.trim();

  // Función para reproducir texto con voz (incluye manejo de voces en móviles)
  const speakText = (text) => {
    let voices = speechSynthesis.getVoices();
    if (!voices.length) {
      // En algunos dispositivos móviles, las voces se cargan después del evento "voiceschanged"
      speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        speakText(text);
      };
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES"; // o "es-ES" según prefieras
    const selectedVoice = voices.find((voice) => voice.lang.startsWith("es")) || voices[0];
    utterance.voice = selectedVoice;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Agregamos mensaje del usuario
    const userMessage = {
      type: "user",
      message: question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setChatHistory((prev) => [...prev, userMessage]);
    const currentQuestion = question;
    setQuestion("");

    // Activar animación "espera"
    setIsWaitingGlobal(true);
    setIsWaiting(true);
    setIsTyping(false);
    setIsTypingGlobal(false);

    try {
      const finalPrompt = systemPrompt + "\nPregunta: " + currentQuestion;
      const response = await queryStackAI({ "in-0": finalPrompt });
      const fullText =
        (response.outputs && response.outputs["out-0"]) ||
        "Lo siento, no pude procesar tu pregunta.";

      // Desactivar "espera"
      setIsWaitingGlobal(false);
      setIsWaiting(false);

      // Mensaje vacío para iniciar animación de tipeo
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          message: "",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);

      // Reproducir la respuesta con voz
      speakText(fullText);

      // Activar animación "tipeo"
      setIsTyping(true);
      setIsTypingGlobal(true);

      let typingIndex = 0;
      const typingSpeed = 50;

      const typeText = () => {
        if (typingIndex < fullText.length) {
          const partialText = fullText.substring(0, typingIndex + 1);
          const updatedMessage = {
            type: "bot",
            message: partialText,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          };
          setChatHistory((prev) => {
            const updatedChatHistory = [...prev];
            updatedChatHistory[updatedChatHistory.length - 1] = updatedMessage;
            return updatedChatHistory;
          });
          typingIndex += 1;
          setTimeout(typeText, typingSpeed);
        } else {
          setIsTyping(false);
          setIsTypingGlobal(false);
        }
      };

      typeText();
    } catch (error) {
      console.error("Error en la consulta:", error);
      const errorMsg = {
        type: "bot",
        message: "Lo siento, hubo un error al procesar tu consulta.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatHistory((prev) => [...prev, errorMsg]);
      setLastBotMessageGlobal(errorMsg);
      setIsTyping(false);
      setIsTypingGlobal(false);
      setIsWaiting(false);
    }
  };

  // Preguntas sugeridas
  const sampleQuestions = [
    "¿Cuál es tu trayectoria profesional?",
    "¿Cuáles son tus propuestas principales?",
    "¿Qué hace un Magistrado Electoral?",
    "¿Cuál es tu visión para el futuro?",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 flex-grow flex flex-col text-xs md:text-sm">
      {/* Contenedor de mensajes */}
      <div
        ref={chatContainerRef}
        className="h-64 md:h-[437px] overflow-y-auto px-3 sm:px-4 pt-4 pb-3 bg-gray-50 flex flex-col space-y-2 flex-grow"
      >
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
          >
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
              <p className="text-[0.65rem] md:text-xs">{chat.message}</p>
            </div>
          </div>
        ))}

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
                <div
                  className="w-1 h-1 rounded-full bg-green-700 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <div
                  className="w-1 h-1 rounded-full bg-green-700 animate-bounce"
                  style={{ animationDelay: "200ms" }}
                />
                <div
                  className="w-1 h-1 rounded-full bg-green-700 animate-bounce"
                  style={{ animationDelay: "400ms" }}
                />
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
                  setQuestion(q);
                  document.getElementById("chat-input")?.focus();
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
  );
};

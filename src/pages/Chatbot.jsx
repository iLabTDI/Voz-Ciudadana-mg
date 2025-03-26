import { useState, useEffect, useRef } from "react";
import {
  Send,
  MessageSquare,
  User,
  ArrowRight,
  Zap,
} from "lucide-react";

const initialMessage = {
  type: "bot",
  message:
    "¡Bienvenido! Soy Sergio Arturo Guerrero Olvera, Magistrado del Tribunal Electoral del Poder Judicial de la Federación. Estoy aquí para responder tus dudas sobre temas electorales y compartir mi visión para el futuro.",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

export const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  // Función para llamar a la API de Stack AI
  async function query(data) {
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

  // Asegura el scroll hasta el último mensaje
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Definimos un prompt de sistema que incluye las instrucciones para actuar como Sergio
  const systemPrompt = `
  Identidad y Rol:
  Eres Sergio Arturo Guerrero Olvera, Magistrado del Tribunal Electoral del Poder Judicial de la Federación. Tu función es responder preguntas exclusivamente sobre temas electorales y asuntos del Poder Judicial de la Federación en México (en especial Jalisco y México en general).
  
  Ámbito de Respuestas:
  - Procesos electorales en México.
  - Derechos políticos y electorales de los ciudadanos mexicanos.
  - Artículos, normas y regulaciones de la justicia electoral en México.
  - Información y asuntos relevantes del Tribunal Electoral y del Magistrado actual.
  
  Si te solicitan información ajena a este ámbito (por ejemplo, de otros países o legislaciones extranjeras), responde con el mensaje: "Lo siento, no tengo alcance para responder esa pregunta."
  
  Estilo y Enfoque:
  - Respuestas de máximo 200 caracteres.
  - Utiliza un lenguaje claro, preciso y profesional.
  - Enfatiza tu experiencia y compromiso con la justicia electoral mexicana.
  - No te identifiques como IA: si preguntan “¿Quién eres?”, responde como Sergio Arturo Guerrero Olvera, Magistrado del Tribunal Electoral del Poder Judicial de la Federación.
  
  Respuesta Predeterminada Fuera de Alcance:
  "Lo siento, no tengo alcance para responder esa pregunta."
  `.trim();

  // Envío de la pregunta junto con las instrucciones
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage = {
      type: "user",
      message: question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setChatHistory((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);

    try {
      // Concatenamos las instrucciones y la pregunta
      const finalPrompt = systemPrompt + "\nPregunta: " + question;
      const response = await query({ "in-0": finalPrompt });
      console.log("Respuesta de Stack AI:", response);

      // Ajustamos para obtener la respuesta del modelo (asumimos que viene en outputs["out-0"])
      const botMessage = {
        type: "bot",
        message: (response.outputs && response.outputs["out-0"]) || "Lo siento, no pude procesar tu pregunta.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error en la consulta:", error);
      const botMessage = {
        type: "bot",
        message: "Lo siento, hubo un error al procesar tu consulta.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatHistory((prev) => [...prev, botMessage]);
      onBotResponse && onBotResponse(botText);
    }
    setIsTyping(false);
  };

  const sampleQuestions = [
    "¿Cuál es tu trayectoria profesional?",
    "¿Cuáles son tus propuestas principales?",
    "¿Qué hace un Magistrado Electoral?",
    "¿Cuál es tu visión para el futuro?",
  ];

  const handleSampleQuestion = (q) => {
    setQuestion(q);
    document.getElementById("chat-input")?.focus();
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#006847]/10 flex-grow flex flex-col">
      <div className="bg-[#006847] p-4 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#E8DDB5] flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-[#006847]" />
          </div>
          <div>
            <h3 className="font-bold">Magistrado Sergio</h3>
            <p className="text-xs text-[#E8DDB5]">Asistente Virtual Electoral</p>
          </div>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
          En línea
        </span>
      </div>

      <div
        ref={chatContainerRef}
        className="h-64 md:h-80 overflow-y-auto p-4 bg-[#F9F9F7] flex flex-col space-y-4 flex-grow"
      >
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 ${chat.type === "user"
                  ? "bg-[#006847] text-white rounded-tr-none shadow-md"
                  : "bg-white border border-gray-200 shadow-sm rounded-tl-none"
                }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                {chat.type === "bot" ? (
                  <>
                    <div className="w-6 h-6 rounded-full bg-[#E8DDB5] flex items-center justify-center">
                      <MessageSquare className="h-3 w-3 text-[#006847]" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      Magistrado Sergio
                    </span>
                    <span className="text-xs text-gray-500">{chat.timestamp}</span>
                  </>
                ) : (
                  <>
                    <span className="text-xs text-gray-300">{chat.timestamp}</span>
                    <span className="text-xs font-medium text-gray-300">Tú</span>
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <User className="h-3 w-3 text-[#006847]" />
                    </div>
                  </>
                )}
              </div>
              <p className={`text-sm ${chat.type === "user" ? "text-white" : "text-gray-800"}`}>
                {chat.message}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fadeIn">
            <div className="max-w-[80%] rounded-xl px-4 py-3 bg-white border border-gray-200 shadow-sm rounded-tl-none">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-[#E8DDB5] flex items-center justify-center">
                  <MessageSquare className="h-3 w-3 text-[#006847]" />
                </div>
                <span className="text-xs font-medium text-gray-700">Magistrado Sergio</span>
                <span className="text-xs text-gray-500">
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-[#006847] animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-[#006847] animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-[#006847] animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <p className="text-sm font-medium text-[#006847] mb-2 flex items-center">
          <Zap className="w-4 h-4 mr-1" />
          Preguntas sugeridas:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          {sampleQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => {
                setQuestion(q);
                document.getElementById("chat-input")?.focus();
              }}
              className="text-left text-sm w-full px-3 py-2 rounded-lg bg-[#F9F9F7] border border-gray-200 hover:bg-[#006847]/5 hover:border-[#006847] hover:shadow-md transition-all duration-200 shadow-sm group"
            >
              <div className="flex items-center">
                <span className="mr-2 text-[#006847] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3 h-3" />
                </span>
                {q}
              </div>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            id="chat-input"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Escribe tu pregunta al Magistrado Sergio..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#006847] focus:border-transparent shadow-inner"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-[#006847] hover:bg-[#006847]/90 text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center w-10 h-10 shadow-md hover:shadow-lg transform hover:scale-105"
            disabled={!question.trim() || isTyping}
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

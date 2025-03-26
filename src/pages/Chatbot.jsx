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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const getBotResponse = (question) => {
    const responses = {
      elecciones:
        "Las elecciones son procesos democráticos donde los ciudadanos eligen a sus representantes.",
      tribunal:
        "El Tribunal Electoral resuelve impugnaciones y vela por la legalidad de los procesos electorales.",
      magistrado:
        "Como Magistrado Electoral, mi función es interpretar y hacer cumplir la ley en materia electoral.",
      hola:
        "¡Hola! ¿En qué puedo ayudarte sobre temas electorales?",
    };

    let foundAnswer =
      "Gracias por tu pregunta. Si bien no tengo información específica sobre ese tema, te invito a explorar más secciones de esta página.";
    const questionLower = question.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (questionLower.includes(key)) {
        foundAnswer = value;
        break;
      }
    }
    return foundAnswer;
  };

  const handleSubmit = (e) => {
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

    setTimeout(() => {
      const botResponse = getBotResponse(question);
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          message: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1500);
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
          <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}>
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 ${
                chat.type === "user"
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
                    <span className="text-xs font-medium text-gray-700">Magistrado Sergio</span>
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
              <p className={`text-sm ${chat.type === "user" ? "text-white" : "text-gray-800"}`}>{chat.message}</p>
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
              onClick={() => handleSampleQuestion(q)}
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
}

import React, { useEffect, useState, useRef } from "react";

export const Magistrado3D = ({ isWaiting, isTyping, lastBotMessage }) => {
  // Limpiar localStorage y sessionStorage al montar el componente.
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
  }, []);

  const [videoState, setVideoState] = useState("greeting");
  const greetRef = useRef(null);
  const waitingRef = useRef(null);
  const respondingRef = useRef(null);

  // Al montar y cuando se muestra la página (incluyendo el evento pageshow), reiniciamos a "greeting".
  useEffect(() => {
    setVideoState("greeting");
    const handlePageShow = (event) => {
      setVideoState("greeting");
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  // Efecto para el video de saludo (greeting)
  useEffect(() => {
    if (videoState === "greeting" && greetRef.current) {
      const videoElement = greetRef.current;
      videoElement.load(); // Fuerza la recarga del video
      videoElement.currentTime = 0;
      videoElement.play();
      const handleEnded = () => {
        videoElement.pause();
        videoElement.currentTime = videoElement.duration;
      };
      videoElement.addEventListener("ended", handleEnded);
      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [videoState]);

  // Si el chatbot está "pensando", cambiamos al estado "waiting" (loop).
  useEffect(() => {
    if (isWaiting) {
      setVideoState("waiting");
    }
  }, [isWaiting]);

  useEffect(() => {
    if (isTyping) {
      setVideoState("responding"); 
    }
  }, [isTyping]);

  // Cuando llega un nuevo mensaje del bot, reproducimos "responding".
  useEffect(() => {
    if (lastBotMessage && lastBotMessage.type === "bot") {
      setVideoState("responding");
    }
  }, [lastBotMessage]);

  // Efecto para el video de respuesta (responding)
  useEffect(() => {
    if (videoState === "responding" && respondingRef.current) {
      const videoElement = respondingRef.current;
      videoElement.load(); // Recargar el video para reiniciarlo
      videoElement.currentTime = 0;
      videoElement.play();
      const handleEnded = () => {
        setVideoState("greeting");
      };
      videoElement.addEventListener("ended", handleEnded);
      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [videoState]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      {/* Video 1: Saludo inicial (greeting) */}
      {videoState === "greeting" && (
        <video
          ref={greetRef}
          src="/videos/greeting.mp4"
          autoPlay
          className="w-full h-full object-cover"
        />
      )}

      {/* Video 2: Espera (waiting) - loop */}
      {videoState === "waiting" && (
        <video
          ref={waitingRef}
          src="/videos/waiting.mp4"
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
      )}

      {/* Video 3: Respondiendo (responding) */}
      {videoState === "responding" && (
        <video
          ref={respondingRef}
          src="/videos/responding.mp4"
          autoPlay
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

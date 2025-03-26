import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export const Magistrado3D = ({ lastBotMessage }) => {
  // Detecta si el ancho de la pantalla es menor a 768px (típico breakpoint “md”)
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Ajusta el contenedor
  return (
    <div style={{ width: isMobile ? "100%" : "600px", height: isMobile ? "400px" : "600px" }}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 5, 5]} />
        <MagistradoModel lastBotMessage={lastBotMessage} isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

function MagistradoModel({ lastBotMessage, isMobile }) {
  const { scene, animations } = useGLTF("/prietooo.glb");
  const { actions } = useAnimations(animations, scene);

  // scale condicional
  const scaleValue = isMobile ? 2.5 : 3;

  useEffect(() => {
    if (lastBotMessage && actions["Hablar"]) {
      actions["Hablar"].reset().fadeIn(0.3).play();
      const timer = setTimeout(() => {
        if (actions["Idle"]) {
          actions["Idle"].reset().fadeIn(0.3).play();
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [lastBotMessage, actions]);

  return (
    <primitive
      object={scene}
      scale={scaleValue}
      position={[0, -2.2, 0]}
    />
  );
}

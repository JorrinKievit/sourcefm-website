import { Canvas } from "@react-three/fiber";
import React, { FC } from "react";
import FloatingCardMesh from "./FloatingCardMesh";

const FloatingCard: FC = () => {
  return (
    <Canvas
      camera={{ fov: 43, position: [-2, 0, 3] }}
      className="hidden md:block"
    >
      <FloatingCardMesh />
      <ambientLight intensity={0.3} />
    </Canvas>
  );
};

export default FloatingCard;

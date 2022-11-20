import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { FC, useRef } from "react";
import * as THREE from "three";

const FloatingCardMesh: FC = () => {
  const colorMap = useTexture("/app.png");
  const group = useRef(new THREE.Group());
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 10) / 10 - 0.1,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 10) / 14,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 10) / 10,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      Math.sin(t) / 8,
      0.01
    );
  });

  return (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[2.7, 1.7, 0.2]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </group>
  );
};

export default FloatingCardMesh;

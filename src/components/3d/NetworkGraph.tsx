"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Sphere, Line, Float } from "@react-three/drei";
import * as THREE from "three";

// Nodes configuration
const nodesData = [
  { id: "core", text: "Backend Systems", position: [0, 0, 0], color: "#06b6d4", size: 0.8 }, // brand-cyan
  { id: "go", text: "Go", position: [2.5, 1.5, 0.5], color: "#6e56cf", size: 0.5 }, // brand-purple
  { id: "python", text: "Python", position: [-2, 2, -1], color: "#3b82f6", size: 0.5 }, // brand-blue
  { id: "pg", text: "PostgreSQL", position: [2, -2, -0.5], color: "#06b6d4", size: 0.5 }, // brand-cyan
  { id: "aws", text: "AWS", position: [-2.5, -1.5, 1], color: "#6e56cf", size: 0.5 }, // brand-purple
  { id: "rag", text: "RAG & LLMs", position: [0, 0, 3], color: "#3b82f6", size: 0.5 }, // brand-blue
  { id: "docker", text: "Docker", position: [0, 0, -3], color: "#06b6d4", size: 0.5 }, // brand-cyan
];

function Node({ position, color, size, text }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <Sphere ref={meshRef} args={[size, 32, 32]}>
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        <Text
          position={[0, size + 0.3, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

function Connections() {
  // Connect core [0,0,0] to all others
  const lines = useMemo(() => {
    return nodesData.slice(1).map((node) => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(...node.position),
    ]);
  }, []);

  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="rgba(255, 255, 255, 0.2)"
          lineWidth={1}
          dashed={false}
        />
      ))}
    </>
  );
}

function GraphScene() {
  const groupRef = useRef<THREE.Group>(null);

  // Slowly rotate the entire graph
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Connections />
      {nodesData.map((node) => (
        <Node key={node.id} {...node} />
      ))}
    </group>
  );
}

export function NetworkGraph() {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass border border-white/5 relative mb-12">
      {/* Vignette Shadow Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
      
      {/* Interactive Badge */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-background/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Interactive 3D Graph (Drag to rotate)</p>
        </div>
      </div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <GraphScene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

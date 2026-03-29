"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Float, Box, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── Floating Data Blocks (Representing Servers/Code Modules) ─── //
function DataBlocks({ isLight }: { isLight: boolean }) {
  const groupRef = useRef<any>(null);

  // Very slow, majestic rotation of the floating blocks
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      
      // Gentle parallax
      const targetY = state.pointer.y * 0.2;
      const targetX = state.pointer.x * 0.2;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    }
  });

  const coreColor = isLight ? "#0284c7" : "#06b6d4";

  return (
    <group ref={groupRef} position={[0, 1, -2]}>
      {/* Block 1 */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
        <Box args={[1.5, 2.5, 0.3]} position={[-2.5, 0, 0]}>
          <MeshTransmissionMaterial 
            backside thickness={0.5} roughness={0.1} transmission={0.9} 
            ior={1.5} chromaticAberration={0.05} color={isLight ? "#e0f2fe" : "#1e293b"}
          />
        </Box>
        {/* Glowing inner logic */}
        <Box args={[1.2, 2.2, 0.1]} position={[-2.5, 0, 0]}>
          <meshBasicMaterial color={coreColor} wireframe transparent opacity={0.3} />
        </Box>
      </Float>

      {/* Block 2 (Center Main) */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>
        <Box args={[2, 3, 0.4]} position={[0, 0.5, 1]}>
          <MeshTransmissionMaterial 
            backside thickness={0.5} roughness={0.1} transmission={0.95} 
            ior={1.5} chromaticAberration={0.08} color={isLight ? "#f1f5f9" : "#0f172a"}
          />
        </Box>
        <Box args={[1.7, 2.7, 0.15]} position={[0, 0.5, 1]}>
          <meshBasicMaterial color={isLight ? "#6d28d9" : "#8b5cf6"} wireframe transparent opacity={0.4} />
        </Box>
      </Float>

      {/* Block 3 */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.2} floatingRange={[-0.3, 0.3]}>
        <Box args={[1, 2, 0.3]} position={[2.5, -0.5, -1]}>
          <MeshTransmissionMaterial 
            backside thickness={0.5} roughness={0.1} transmission={0.9} 
            ior={1.5} chromaticAberration={0.04} color={isLight ? "#e0f2fe" : "#1e293b"}
          />
        </Box>
        <Box args={[0.8, 1.8, 0.1]} position={[2.5, -0.5, -1]}>
          <meshBasicMaterial color={coreColor} wireframe transparent opacity={0.3} />
        </Box>
      </Float>
    </group>
  );
}

// ─── Cyberspace Infinite Grid ─── //
function CyberspaceFloor({ isLight }: { isLight: boolean }) {
  const gridColor = isLight ? "#0ea5e9" : "#06b6d4";
  const fogColor = isLight ? "#ffffff" : "#070708"; // Matches text/background vibe

  return (
    <>
      <fog attach="fog" args={[fogColor, 5, 20]} />
      <Grid 
        position={[0, -2.5, 0]}
        infiniteGrid 
        fadeDistance={25} 
        sectionColor={gridColor} 
        sectionSize={2} 
        cellColor={gridColor} 
        cellSize={0.5} 
        sectionThickness={isLight ? 1.5 : 1} 
        cellThickness={isLight ? 0.8 : 0.5} 
      />
    </>
  );
}

export function NetworkGlobe() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="absolute inset-0 z-0" />;

  const isLight = resolvedTheme === "light";

  return (
    // Restricted width on desktop so it balances beautifully with the chat
    <div className="absolute inset-0 lg:left-[20%] pointer-events-none opacity-100 mix-blend-normal z-0 flex items-center justify-center">
      <Canvas camera={{ position: [0, 1, 8], fov: 50 }} dpr={[1, 2]}>
        {/* Minimal clean lighting */}
        <ambientLight intensity={isLight ? 2 : 1} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        
        <CyberspaceFloor isLight={isLight} />
        <DataBlocks isLight={isLight} />
      </Canvas>
    </div>
  );
}

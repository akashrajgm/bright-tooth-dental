"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// ── Multi-Sphere Cluster component ─────────────────────────
function GlassSphereCluster() {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef  = useRef<THREE.Mesh>(null);
  const innerRef  = useRef<THREE.Mesh>(null);
  
  // Refs for the secondary orbiting satin spheres
  const satRefA = useRef<THREE.Mesh>(null);
  const satRefB = useRef<THREE.Mesh>(null);
  const satRefC = useRef<THREE.Mesh>(null);

  // Pointer tracking
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // 1. Hover/tilt group dynamically toward mouse cursor paths
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current.x * 0.4, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.current.y * 0.3, 0.05);
      // Gentle drift for the entire group
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }

    // 2. Animate central sphere inner core glow
    if (innerRef.current) {
      const mat = innerRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.0 + Math.sin(t * 2.5) * 0.4;
      innerRef.current.scale.setScalar(1 + Math.sin(t * 2.0) * 0.04);
    }

    // 3. Animate orbiting secondary satin-sheen spheres (anti-gravity suspension)
    if (satRefA.current) {
      satRefA.current.position.x = 2.4 + Math.sin(t * 0.8) * 0.25;
      satRefA.current.position.y = 1.0 + Math.cos(t * 0.6) * 0.2;
      satRefA.current.position.z = -0.6 + Math.sin(t * 0.4) * 0.15;
      satRefA.current.rotation.y = t * 0.2;
    }

    if (satRefB.current) {
      satRefB.current.position.x = -2.2 + Math.cos(t * 0.7) * 0.2;
      satRefB.current.position.y = -1.2 + Math.sin(t * 0.5) * 0.25;
      satRefB.current.position.z = 0.8 + Math.cos(t * 0.9) * 0.2;
      satRefB.current.rotation.x = t * 0.15;
    }

    if (satRefC.current) {
      satRefC.current.position.x = 1.0 + Math.sin(t * 0.5) * 0.18;
      satRefC.current.position.y = -2.0 + Math.cos(t * 0.8) * 0.2;
      satRefC.current.position.z = 1.2 + Math.sin(t * 0.7) * 0.25;
      satRefC.current.rotation.z = t * 0.25;
    }
  });

  // Central Frosted Glass Material Spec: High transmission (0.96), smooth roughness (0.1), physical thickness
  const centralGlassMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color:              new THREE.Color("#ffffff"),
        emissive:           new THREE.Color("#FFE0E6"),
        emissiveIntensity:  0.05,
        roughness:          0.1, // Smooth roughness
        metalness:          0.05,
        clearcoat:          1.0,
        clearcoatRoughness: 0.05,
        transmission:       0.96, // High transmission
        thickness:          2.2,  // Catch refraction lights
        ior:                1.68,
        side:               THREE.DoubleSide,
        transparent:        true,
        opacity:            0.92,
      }),
    []
  );

  // Orbiting Satin-Sheen Material Spec
  const satinMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color:              new THREE.Color("#FF6F91"), // Vibrant coral/rose sheen
        roughness:          0.35, // Soft satin reflection
        metalness:          0.25, // Slight metallic density
        clearcoat:          0.5,
        clearcoatRoughness: 0.3,
        emissive:           new THREE.Color("#D5006D"),
        emissiveIntensity:  0.15,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      {/* ── CENTRAL FROSTED GLASS SPHERE ── */}
      <group position={[0, 0, 0]}>
        {/* Outer Frosted Shell */}
        <mesh ref={outerRef} material={centralGlassMat} castShadow>
          <sphereGeometry args={[1.7, 64, 64]} />
        </mesh>

        {/* Inner Glowing Raspberry Core */}
        <mesh ref={innerRef}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial
            color="#D5006D"
            emissive="#D5006D"
            emissiveIntensity={1.4}
            roughness={0.2}
            transparent
            opacity={0.95}
          />
        </mesh>
      </group>

      {/* ── ORBITING SECONDARY SATIN-SHEEN SPHERES ── */}
      {/* Sphere A */}
      <mesh ref={satRefA} material={satinMat} castShadow>
        <sphereGeometry args={[0.42, 32, 32]} />
      </mesh>

      {/* Sphere B */}
      <mesh ref={satRefB} material={satinMat} castShadow>
        <sphereGeometry args={[0.34, 32, 32]} />
      </mesh>

      {/* Sphere C */}
      <mesh ref={satRefC} material={satinMat} castShadow>
        <sphereGeometry args={[0.28, 32, 32]} />
      </mesh>
    </group>
  );
}

// ── Scene Lighting ──────────────────────────────────────────
function Lights() {
  return (
    <>
      <ambientLight intensity={0.7} color="#fff0f2" />
      <directionalLight position={[6, 12, 10]}  intensity={2.2} color="#ffffff" />
      <directionalLight position={[-8, -6, -6]} intensity={0.8} color="#FF6F91" />
      <pointLight       position={[0, 0, 0]}    intensity={3.5} color="#D5006D" distance={6} decay={2} />
      <pointLight       position={[5, 5, 5]}    intensity={1.2} color="#ffffff" />
    </>
  );
}

// ── Canvas Export ───────────────────────────────────────────
export default function HeroCanvas() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

  if (!ready)
    return (
      <div className="w-full flex items-center justify-center" style={{ height: 480 }}>
        <div className="w-14 h-14 rounded-full border-2 border-brand-raspberry/30 border-t-brand-raspberry animate-spin" />
      </div>
    );

  return (
    <div className="w-full relative" style={{ height: 480 }}>
      {/* Ambient raspberry bloom behind canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(213,0,109,0.12) 0%, transparent 65%)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.4 }}
      >
        <Lights />
        <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.6}>
          <GlassSphereCluster />
        </Float>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.4}
        />
      </Canvas>
    </div>
  );
}

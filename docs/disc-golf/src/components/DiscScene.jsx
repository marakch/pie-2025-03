import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei'

const FlyingDisc = ({ position, color, scale, rotationSpeed = 1 }) => {
  const ref = useRef()
  const domeRef = useRef()
  const rimRef = useRef()

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      ref.current.position.y = position[1] + Math.sin(t * 2 + position[0]) * 0.4
      ref.current.rotation.x = t * rotationSpeed * 0.5
      ref.current.rotation.z = t * rotationSpeed * 0.3
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Main disc body - flat top */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.73, 0.73, 0.08, 32]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.5}
          roughness={0.2}
          distort={0.08}
          speed={1.5}
        />
      </mesh>

      {/* Rim (torus) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.85, 0.12, 16, 48]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.8}
          clearcoat={1}
          clearcoatRoughness={0.2}
          metalness={0.4}
          roughness={0.3}
          distort={0.08}
          speed={1.5}
        />
      </mesh>
    </group>
  )
}

export const DiscScene = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <group position={[0, -0.5, 0]}>
          {/* Floating discs at different positions - spinning in various directions */}
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <FlyingDisc position={[-6, 2.5, -3]} color="#C9A668" scale={1.2} rotationSpeed={0.8} />
          </Float>

          <Float speed={2.3} rotationIntensity={0.5} floatIntensity={1.1}>
            <FlyingDisc position={[7.5, -0.5, -4]} color="#7c3aed" scale={1} rotationSpeed={-1.4} />
          </Float>

          <Float speed={2.7} rotationIntensity={0.7} floatIntensity={1.5}>
            <FlyingDisc position={[-4, -3.5, -5]} color="#f59e0b" scale={1.1} rotationSpeed={-0.7} />
          </Float>

          <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.7}>
            <FlyingDisc position={[6, 1.5, -3.5]} color="#78716c" scale={0.95} rotationSpeed={1.3} />
          </Float>

          <Float speed={2.4} rotationIntensity={0.6} floatIntensity={1.4}>
            <FlyingDisc position={[3.5, -2, -2]} color="#ec4899" scale={0.85} rotationSpeed={-1.6} />
          </Float>

          <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
            <FlyingDisc position={[-7.5, 0.5, -3.5]} color="#10b981" scale={1.05} rotationSpeed={0.85} />
          </Float>

          {/* Additional frisbees for more dynamic scene */}
          <Float speed={2.1} rotationIntensity={0.8} floatIntensity={1.3}>
            <FlyingDisc position={[0, -4, -4.5]} color="#ef4444" scale={0.8} rotationSpeed={-1.1} />
          </Float>

          <Float speed={2.9} rotationIntensity={0.9} floatIntensity={1.6}>
            <FlyingDisc position={[-9, -2.5, -4]} color="#8b5cf6" scale={0.9} rotationSpeed={-1.8} />
          </Float>

          <Float speed={1.9} rotationIntensity={0.5} floatIntensity={1}>
            <FlyingDisc position={[5, 3.5, -3]} color="#fbbf24" scale={1} rotationSpeed={1.5} />
          </Float>

          <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
            <FlyingDisc position={[-2.5, -1.5, -3.5]} color="#14b8a6" scale={0.95} rotationSpeed={-0.9} />
          </Float>
        </group>

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}


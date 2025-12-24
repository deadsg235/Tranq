'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { NeuralArena } from './NeuralArena'

export default function NeuralArenaCanvas() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
          <NeuralArena />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
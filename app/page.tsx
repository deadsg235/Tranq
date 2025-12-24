'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { NeuralArena } from '../components/NeuralArena'
import { AgentHierarchy } from '../components/AgentHierarchy'
import { TokenInterface } from '../components/TokenInterface'
import { BattleStats } from '../components/BattleStats'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 3D Background Arena */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
            <NeuralArena />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-bold glow-text">TRANQ</h1>
            <div className="text-sm text-tranq-300">
              <div>Neural Combat Arena</div>
              <div className="text-xs text-gray-400">Hardcore AI Hierarchy System</div>
            </div>
          </div>
          <button className="bg-tranq-600 hover:bg-tranq-700 text-white font-bold py-2 px-4 rounded-lg">
            Connect Wallet
          </button>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
          {/* Left Panel - Agent Hierarchy */}
          <div className="lg:col-span-1">
            <AgentHierarchy />
          </div>

          {/* Center Panel - Battle Arena Info */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <div className="agent-card rounded-xl p-6 flex-1">
              <h2 className="text-2xl font-bold mb-4 text-center glow-text">ARENA STATUS</h2>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neural-400">ACTIVE</div>
                  <div className="text-sm text-gray-400">Neural Network Online</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-tranq-400">1,247</div>
                    <div className="text-xs text-gray-400">Active Agents</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neural-500">89</div>
                    <div className="text-xs text-gray-400">Battles/Min</div>
                  </div>
                </div>
              </div>
            </div>
            <BattleStats />
          </div>

          {/* Right Panel - Token Interface */}
          <div className="lg:col-span-1">
            <TokenInterface />
          </div>
        </div>
      </div>
    </main>
  )
}
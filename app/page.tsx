'use client'

import dynamic from 'next/dynamic'
import { AgentHierarchy } from '../components/AgentHierarchy'
import { TokenInterface } from '../components/TokenInterface'
import { BattleStats } from '../components/BattleStats'

const NeuralArenaCanvas = dynamic(() => import('../components/NeuralArenaCanvas'), {
  ssr: false,
  loading: () => <div className="canvas-container bg-neural-100" />
})

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <NeuralArenaCanvas />

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
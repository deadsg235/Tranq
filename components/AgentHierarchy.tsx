'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Agent {
  id: string
  name: string
  tier: 'Novice' | 'Elite' | 'Apex' | 'Transcendent'
  power: number
  wins: number
  losses: number
  staked: number
}

const mockAgents: Agent[] = [
  { id: '1', name: 'NeuroMancer', tier: 'Transcendent', power: 9850, wins: 247, losses: 12, staked: 50000 },
  { id: '2', name: 'SynapseKiller', tier: 'Apex', power: 8420, wins: 189, losses: 23, staked: 25000 },
  { id: '3', name: 'CortexRipper', tier: 'Apex', power: 8100, wins: 156, losses: 31, staked: 22000 },
  { id: '4', name: 'DataShredder', tier: 'Elite', power: 6750, wins: 98, losses: 45, staked: 12000 },
  { id: '5', name: 'LogicBane', tier: 'Elite', power: 6200, wins: 87, losses: 52, staked: 8500 },
  { id: '6', name: 'ByteCrusher', tier: 'Novice', power: 3400, wins: 34, losses: 28, staked: 2000 },
]

const tierColors = {
  Transcendent: 'from-yellow-400 to-orange-500',
  Apex: 'from-red-500 to-pink-600',
  Elite: 'from-blue-500 to-purple-600',
  Novice: 'from-green-400 to-blue-500'
}

const tierGlow = {
  Transcendent: 'shadow-yellow-500/50',
  Apex: 'shadow-red-500/50',
  Elite: 'shadow-blue-500/50',
  Novice: 'shadow-green-500/50'
}

export function AgentHierarchy() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)

  return (
    <div className="agent-card rounded-xl p-6 h-full">
      <h2 className="text-2xl font-bold mb-6 text-center glow-text">AGENT HIERARCHY</h2>
      
      <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
        {mockAgents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedAgent?.id === agent.id ? 'ring-2 ring-tranq-400' : ''
            }`}
            style={{
              background: `linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(15, 52, 96, 0.6))`,
              border: '1px solid rgba(14, 165, 233, 0.2)'
            }}
            onClick={() => setSelectedAgent(agent)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tierColors[agent.tier]} ${tierGlow[agent.tier]} shadow-lg`} />
                <div>
                  <div className="font-bold text-white">{agent.name}</div>
                  <div className="text-xs text-gray-400">{agent.tier} Tier</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-tranq-400">{agent.power.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Power</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="text-green-400 font-bold">{agent.wins}</div>
                <div className="text-gray-500">Wins</div>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-bold">{agent.losses}</div>
                <div className="text-gray-500">Losses</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold">{agent.staked.toLocaleString()}</div>
                <div className="text-gray-500">TRANQ</div>
              </div>
            </div>
            
            {/* Power Bar */}
            <div className="mt-3">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${tierColors[agent.tier]} transition-all duration-500`}
                  style={{ width: `${(agent.power / 10000) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {selectedAgent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-neural-200 rounded-lg border border-tranq-400/30"
        >
          <h3 className="font-bold text-tranq-400 mb-2">{selectedAgent.name}</h3>
          <div className="text-sm text-gray-300">
            <p>Tier: <span className="text-white">{selectedAgent.tier}</span></p>
            <p>Win Rate: <span className="text-green-400">
              {((selectedAgent.wins / (selectedAgent.wins + selectedAgent.losses)) * 100).toFixed(1)}%
            </span></p>
            <p>Staked Tokens: <span className="text-yellow-400">{selectedAgent.staked.toLocaleString()} TRANQ</span></p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
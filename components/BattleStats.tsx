'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Battle {
  id: string
  attacker: string
  defender: string
  winner: string
  damage: number
  timestamp: Date
  tier: string
}

const mockBattles: Battle[] = [
  { id: '1', attacker: 'NeuroMancer', defender: 'SynapseKiller', winner: 'NeuroMancer', damage: 8420, timestamp: new Date(Date.now() - 30000), tier: 'Transcendent' },
  { id: '2', attacker: 'CortexRipper', defender: 'DataShredder', winner: 'CortexRipper', damage: 6750, timestamp: new Date(Date.now() - 45000), tier: 'Apex' },
  { id: '3', attacker: 'LogicBane', defender: 'ByteCrusher', winner: 'LogicBane', damage: 3400, timestamp: new Date(Date.now() - 60000), tier: 'Elite' },
  { id: '4', attacker: 'DataShredder', defender: 'NeuroMancer', winner: 'NeuroMancer', damage: 9850, timestamp: new Date(Date.now() - 90000), tier: 'Transcendent' },
]

export function BattleStats() {
  const [battles, setBattles] = useState(mockBattles)
  const [liveStats, setLiveStats] = useState({
    totalBattles: 15847,
    activeBattles: 23,
    totalDamage: 2847392,
    topTier: 'Transcendent'
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        totalBattles: prev.totalBattles + Math.floor(Math.random() * 3),
        activeBattles: Math.max(15, prev.activeBattles + Math.floor(Math.random() * 10) - 5),
        totalDamage: prev.totalDamage + Math.floor(Math.random() * 10000)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ago`
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Transcendent': return 'text-yellow-400'
      case 'Apex': return 'text-red-400'
      case 'Elite': return 'text-blue-400'
      case 'Novice': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="agent-card rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4 text-center glow-text">BATTLE STATISTICS</h3>
      
      {/* Live Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <motion.div 
          className="text-center p-3 bg-neural-200 rounded-lg"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-lg font-bold text-tranq-400">{liveStats.totalBattles.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Total Battles</div>
        </motion.div>
        
        <div className="text-center p-3 bg-neural-200 rounded-lg">
          <div className="text-lg font-bold text-neural-400">{liveStats.activeBattles}</div>
          <div className="text-xs text-gray-400">Active Now</div>
        </div>
        
        <div className="text-center p-3 bg-neural-200 rounded-lg">
          <div className="text-lg font-bold text-red-400">{(liveStats.totalDamage / 1000000).toFixed(1)}M</div>
          <div className="text-xs text-gray-400">Total Damage</div>
        </div>
        
        <div className="text-center p-3 bg-neural-200 rounded-lg">
          <div className="text-lg font-bold text-yellow-400">{liveStats.topTier}</div>
          <div className="text-xs text-gray-400">Top Tier</div>
        </div>
      </div>

      {/* Recent Battles */}
      <div>
        <h4 className="text-sm font-bold text-gray-300 mb-3">RECENT BATTLES</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {battles.map((battle, index) => (
            <motion.div
              key={battle.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 bg-neural-200 rounded-lg border border-tranq-400/20 hover:border-tranq-400/40 transition-colors"
            >
              <div className="flex justify-between items-start mb-1">
                <div className="text-xs">
                  <span className="text-white font-medium">{battle.attacker}</span>
                  <span className="text-gray-400"> vs </span>
                  <span className="text-white font-medium">{battle.defender}</span>
                </div>
                <span className="text-xs text-gray-500">{formatTimeAgo(battle.timestamp)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-green-400">Winner:</span>
                  <span className="text-xs text-white font-medium">{battle.winner}</span>
                  <span className={`text-xs ${getTierColor(battle.tier)}`}>({battle.tier})</span>
                </div>
                <div className="text-xs text-red-400 font-bold">
                  -{battle.damage.toLocaleString()} HP
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
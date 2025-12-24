'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function TokenInterface() {
  const [activeTab, setActiveTab] = useState<'stake' | 'rewards' | 'governance'>('stake')
  const [stakeAmount, setStakeAmount] = useState('')
  
  const userBalance = 15420 // Mock balance
  const stakedAmount = 8500
  const pendingRewards = 247.5

  const tabs = [
    { id: 'stake', label: 'Stake', icon: '⚡' },
    { id: 'rewards', label: 'Rewards', icon: '💎' },
    { id: 'governance', label: 'Vote', icon: '🗳️' }
  ]

  return (
    <div className="agent-card rounded-xl p-6 h-full">
      <h2 className="text-2xl font-bold mb-6 text-center glow-text">TRANQ PROTOCOL</h2>
      
      {/* Balance Display */}
      <div className="mb-6 p-4 bg-neural-200 rounded-lg border border-tranq-400/30">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-tranq-400">{userBalance.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Available TRANQ</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">{stakedAmount.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Staked TRANQ</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex mb-6 bg-neural-200 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-tranq-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {activeTab === 'stake' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Stake Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-neural-200 border border-tranq-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tranq-400"
                  placeholder="Enter amount..."
                />
                <button
                  onClick={() => setStakeAmount(userBalance.toString())}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-tranq-400 hover:text-tranq-300"
                >
                  MAX
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <button className="w-full bg-gradient-to-r from-tranq-600 to-tranq-700 hover:from-tranq-700 hover:to-tranq-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Stake TRANQ
              </button>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300">
                Unstake TRANQ
              </button>
            </div>
            
            <div className="text-xs text-gray-400 text-center">
              Staking rewards: <span className="text-green-400">12.5% APY</span>
            </div>
          </motion.div>
        )}

        {activeTab === 'rewards' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="text-center p-6 bg-neural-200 rounded-lg border border-yellow-400/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {pendingRewards.toFixed(1)}
              </div>
              <div className="text-sm text-gray-400 mb-4">Pending Rewards</div>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
                Claim Rewards
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Battle Rewards</span>
                <span className="text-green-400">+156.2 TRANQ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Staking Rewards</span>
                <span className="text-blue-400">+91.3 TRANQ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Governance Bonus</span>
                <span className="text-purple-400">+0.0 TRANQ</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'governance' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="text-center mb-4">
              <div className="text-lg font-bold text-purple-400">Voting Power</div>
              <div className="text-2xl font-bold text-white">{(stakedAmount * 1.2).toLocaleString()}</div>
              <div className="text-xs text-gray-400">Based on staked TRANQ</div>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-neural-200 rounded-lg border border-purple-400/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">TIP-001: Arena Expansion</span>
                  <span className="text-xs text-green-400">Active</span>
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  Proposal to add new neural network layers
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded text-sm">
                    For (67%)
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded text-sm">
                    Against (33%)
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-neural-200 rounded-lg border border-gray-600/30 opacity-60">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">TIP-002: Token Burns</span>
                  <span className="text-xs text-gray-400">Ended</span>
                </div>
                <div className="text-sm text-gray-400">
                  Passed with 89% approval
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
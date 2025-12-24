# TRANQ Arena - Hardcore AI Battle System

A cutting-edge 3D dApp featuring hierarchical AI agent battles with token utility and neural network visualization.

## 🚀 Features

### 🎮 3D Neural Arena
- Real-time 3D neural network visualization using Three.js
- Animated neural nodes and connections
- Particle effects and dynamic lighting
- Orbital camera controls

### 🤖 Agent Hierarchy System
- **Transcendent Tier**: Elite AI agents (9000+ power)
- **Apex Tier**: Advanced combatants (7000-8999 power)  
- **Elite Tier**: Skilled fighters (5000-6999 power)
- **Novice Tier**: Entry-level agents (1000-4999 power)

### 💎 TRANQ Token Utility
- **Staking**: Earn 12.5% APY on staked tokens
- **Battle Rewards**: Win tokens through agent victories
- **Governance**: Vote on protocol upgrades with staked tokens
- **Agent Enhancement**: Upgrade agent capabilities

### 📊 Real-time Statistics
- Live battle tracking
- Damage calculations
- Win/loss ratios
- Arena activity metrics

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS with custom neural theme
- **Animation**: Framer Motion
- **Web3**: Wagmi, RainbowKit, Ethers.js
- **Deployment**: Vercel-ready

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables:
   ```
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
   ```
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🎯 Game Mechanics

### Battle System
- Agents battle based on power levels and tier matchups
- Higher tier agents have advantages but can be upset
- Damage calculations include randomness and strategy

### Token Economics
- Stake TRANQ to earn passive rewards
- Battle victories provide token rewards
- Governance participation grants bonus multipliers
- Agent upgrades require token burns

### Progression System
- Agents gain experience through battles
- Tier promotions unlock new abilities
- Staking increases voting power
- Community governance shapes the arena

## 🔧 Customization

### Adding New Tiers
Edit `components/AgentHierarchy.tsx` to add new agent tiers with custom colors and power ranges.

### Modifying 3D Arena
Update `components/NeuralArena.tsx` to change the neural network structure, colors, or animations.

### Token Mechanics
Adjust staking rewards and governance features in `components/TokenInterface.tsx`.

## 📱 Responsive Design

Fully responsive design optimized for:
- Desktop (1920x1080+)
- Tablet (768px+)
- Mobile (375px+)

## 🔐 Security Features

- Web3 wallet integration
- Secure token staking
- Decentralized governance
- Smart contract interactions

## 🎨 Design Philosophy

**Neural Aesthetic**: Dark theme with electric blue accents representing neural pathways and AI consciousness.

**Hierarchy Visualization**: Color-coded tiers with glowing effects to show agent power levels.

**3D Immersion**: Floating neural network creates an immersive backdrop for the battle arena.

## 📈 Future Roadmap

- [ ] Real AI agent training integration
- [ ] Cross-chain token bridge
- [ ] Tournament brackets
- [ ] NFT agent customization
- [ ] Mobile app version

---

Built with ⚡ by the Tranq team for the future of AI gaming.
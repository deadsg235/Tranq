'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNode({ position, color = '#0ea5e9' }: { position: [number, number, number], color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.1
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )
}

function NeuralConnection({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end])

  return (
    <Line
      points={points}
      color="#0ea5e9"
      lineWidth={1}
      transparent
      opacity={0.3}
    />
  )
}

export function NeuralArena() {
  const groupRef = useRef<THREE.Group>(null!)
  
  // Generate neural network structure
  const nodes = useMemo(() => {
    const nodeArray = []
    const layers = 5
    const nodesPerLayer = 8
    
    for (let layer = 0; layer < layers; layer++) {
      for (let node = 0; node < nodesPerLayer; node++) {
        const x = (layer - layers / 2) * 3
        const y = (node - nodesPerLayer / 2) * 1.5
        const z = Math.sin(layer * 0.5 + node * 0.3) * 2
        
        // Color based on hierarchy level
        let color = '#0ea5e9' // Default blue
        if (layer === 0) color = '#10b981' // Green for input
        if (layer === layers - 1) color = '#f59e0b' // Gold for output
        if (layer === Math.floor(layers / 2)) color = '#ef4444' // Red for core
        
        nodeArray.push({ position: [x, y, z] as [number, number, number], color })
      }
    }
    return nodeArray
  }, [])

  const connections = useMemo(() => {
    const connectionArray = []
    const layers = 5
    const nodesPerLayer = 8
    
    for (let layer = 0; layer < layers - 1; layer++) {
      for (let node = 0; node < nodesPerLayer; node++) {
        for (let nextNode = 0; nextNode < nodesPerLayer; nextNode++) {
          if (Math.random() > 0.7) { // Sparse connections
            const startIdx = layer * nodesPerLayer + node
            const endIdx = (layer + 1) * nodesPerLayer + nextNode
            connectionArray.push({
              start: nodes[startIdx]?.position,
              end: nodes[endIdx]?.position
            })
          }
        }
      }
    }
    return connectionArray
  }, [nodes])

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
      
      {/* Neural Nodes */}
      {nodes.map((node, index) => (
        <NeuralNode key={index} position={node.position} color={node.color} />
      ))}
      
      {/* Neural Connections */}
      {connections.map((connection, index) => (
        connection.start && connection.end && (
          <NeuralConnection key={index} start={connection.start} end={connection.end} />
        )
      ))}
      
      {/* Floating particles */}
      <Points limit={1000}>
        <pointsMaterial size={0.02} color="#0ea5e9" transparent opacity={0.6} />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(Array.from({ length: 3000 }, () => (Math.random() - 0.5) * 20))}
            itemSize={3}
          />
        </bufferGeometry>
      </Points>
    </group>
  )
}
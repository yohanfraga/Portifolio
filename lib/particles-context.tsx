"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

type ParticlesContextType = {
  showParticles: boolean
  toggleParticles: () => void
}

const ParticlesContext = createContext<ParticlesContextType | undefined>(undefined)

export function ParticlesProvider({ children }: { children: ReactNode }) {
  const [showParticles, setShowParticles] = useState(true)

  const toggleParticles = () => {
    setShowParticles(prev => !prev)
  }

  return (
    <ParticlesContext.Provider value={{ showParticles, toggleParticles }}>
      {children}
    </ParticlesContext.Provider>
  )
}

export function useParticles() {
  const context = useContext(ParticlesContext)
  if (context === undefined) {
    throw new Error('useParticles must be used within a ParticlesProvider')
  }
  return context
} 
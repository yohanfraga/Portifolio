"use client"

import { Sparkles } from "lucide-react"
import { useParticles } from "@/lib/particles-context"

export function ParticlesToggle() {
  const { showParticles, toggleParticles } = useParticles()

  return (
    <button
      onClick={toggleParticles}
      className={`p-2 rounded-lg transition-colors ${
        showParticles 
          ? 'text-orange-500 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30' 
          : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
      }`}
      title={showParticles ? "Disable particles" : "Enable particles"}
    >
      <Sparkles size={20} />
    </button>
  )
} 
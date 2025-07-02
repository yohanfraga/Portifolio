"use client"

import { useCallback, useEffect, useState } from "react"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useParticles } from "@/lib/particles-context"
import { useTheme } from "next-themes"

export function ParticlesBackground() {
  const { showParticles } = useParticles()
  const { theme } = useTheme()
  const [isHeroSection, setIsHeroSection] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsHeroSection(heroBottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!showParticles) return null

  const particleColor = theme === 'light' ? '#c2410c' : '#f97316'

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: particleColor,
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: isHeroSection ? 80 : 40,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onClick: {
              enable: isHeroSection,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: isHeroSection ? "repulse" : "none",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          }
        },
      }}
    />
  )
} 
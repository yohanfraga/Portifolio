"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useParticles } from "@/lib/particles-context"
import { useTheme } from "next-themes"

const MAX_PARTICLES = 400

export function ParticlesBackground() {
  const { showParticles } = useParticles()
  const { theme } = useTheme()
  const [isHeroSection, setIsHeroSection] = useState(true)
  const containerRef = useRef<Container | null>(null)
  
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

  const handleParticlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      containerRef.current = container
    }
  }, [])

  if (!showParticles) return null

  const particleColor = theme === 'light' ? '#c2410c' : '#f97316'

  return (
    <div className="absolute inset-0 select-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={handleParticlesLoaded}
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
              limit: MAX_PARTICLES,
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
                callback: () => {
                  if (containerRef.current) {
                    const currentParticles = containerRef.current.particles.count;
                    if (currentParticles >= MAX_PARTICLES) {
                      // Remove oldest particles when limit is reached
                      const particlesToRemove = Math.min(4, currentParticles - MAX_PARTICLES + 4);
                      const particles = containerRef.current.particles;
                      for (let i = 0; i < particlesToRemove; i++) {
                        particles.removeQuantity(1);
                      }
                    }
                  }
                }
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            }
          },
        }}
      />
    </div>
  )
} 
"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, type ReactNode } from "react"

// Sample projects based on GitHub profile
const projects = [
  {
    id: 1,
    title: "User Login Node.js API",
    description:
      "A robust authentication system with JWT tokens, role-based access control, and clean architecture. Built with TypeScript, Express, Prisma, and PostgreSQL following SOLID principles.",
    image: "/user-login-api.jpg",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "JWT", "Docker"],
    githubUrl: "https://github.com/yohanfraga/user-login-node",
  },
  {
    id: 2,
    title: "AsyncAPI.NET SDK – V3 Migration",
    description:
      "Contributing to the migration of the open-source AsyncAPI.NET SDK to version 3.0, applying Clean Code, SOLID principles, and Unit Testing.",
    image: "/async-api.jpg",
    technologies: [".NET", "C#", "AsyncAPI", "Unit Testing", "Open Source"],
    githubUrl: "https://github.com/ByteBardOrg/AsyncAPI.NET",
  },
  {
    id: 3,
    title: "Music App - Spotify Inspired",
    description: "A Spotify-inspired music application implementing Clean Architecture, SOLID principles, Unit of Work pattern, and comprehensive unit testing. Features include artist, album, song, and playlist management using Entity Framework Core.",
    image: "/placeholder.svg",
    technologies: ["C#", ".NET", "Entity Framework", "Clean Architecture", "Unit Testing", "Docker"],
    githubUrl: "https://github.com/yohanfraga/MusicApp",
  },
  {
    id: 4,
    title: "Pathfinding Algorithms Visualizer",
    description: "Web application showcasing various pathfinding algorithms with interactive visualization.",
    image: "/placeholder.svg",
    technologies: ["C#", ".NET", "JavaScript", "Algorithms"],
    githubUrl: "https://github.com/yohanfraga/MazeSolvingDemonstration",
  },
  {
    id: 5,
    title: "Event-Driven Microservices Demo",
    description: "Demonstration of event-driven architecture using .NET microservices with Kafka and Docker.",
    image: "/placeholder.svg",
    technologies: [".NET", "C#", "Kafka", "Docker", "Microservices"],
    githubUrl: "https://github.com/yohanfraga/EventDrivenArchitecture",
  },
]

function CarouselButton({ onClick, children, className }: { onClick: () => void; children: ReactNode; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${className || ''}`}
    >
      {children}
    </button>
  )
}

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          <CarouselButton onClick={scrollPrev} className="-left-4">
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </CarouselButton>
          <CarouselButton onClick={scrollNext} className="right-4">
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </CarouselButton>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative h-48">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                        priority={project.id === 1}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors flex items-center w-fit"
                        >
                          <Github size={20} className="mr-1" />
                          <span>Code</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/yohanfraga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
          >
            <Github size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

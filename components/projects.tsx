import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

// Sample projects based on GitHub profile
const projects = [
  {
    id: 1,
    title: "AsyncAPI.NET SDK – V3 Migration",
    description:
      "Contributing to the migration of the open-source AsyncAPI.NET SDK to version 3.0, applying Clean Code, SOLID principles, and Unit Testing.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: [".NET", "C#", "AsyncAPI", "Unit Testing", "Open Source"],
    githubUrl: "https://github.com/ByteBardOrg/AsyncAPI.NET",
  },
  {
    id: 2,
    title: "Pathfinding Algorithms Visualizer",
    description: "Web application showcasing various pathfinding algorithms with interactive visualization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["C#", ".NET", "JavaScript", "Algorithms"],
    githubUrl: "https://github.com/yohanfraga/MazeSolvingDemonstration",
  },
  {
    id: 3,
    title: "Event-Driven Microservices Demo",
    description: "Demonstration of event-driven architecture using .NET microservices with Kafka and Docker.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: [".NET", "C#", "Kafka", "Docker", "Microservices"],
    githubUrl: "https://github.com/yohanfraga/EventDrivenArchitecture",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <Github size={20} className="mr-1" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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

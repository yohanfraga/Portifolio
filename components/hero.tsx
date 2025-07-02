import Link from "next/link"
import { Github, Linkedin, ArrowDown } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">Yohan Fraga</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-orange-500 dark:text-orange-400 mb-8">
          Software Engineer | Backend Specialist
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Focused on creating scalable solutions, event-driven architecture, and cloud tech with AWS and Azure.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <Link
            href="https://github.com/yohanfraga"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors group"
          >
            <span className="absolute inset-0 w-full h-full bg-orange-100 dark:bg-orange-900/30 rounded-full scale-0 transition-transform group-hover:scale-100"></span>
            <Github size={28} className="relative z-10" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yohanfraga/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors group"
          >
            <span className="absolute inset-0 w-full h-full bg-orange-100 dark:bg-orange-900/30 rounded-full scale-0 transition-transform group-hover:scale-100"></span>
            <Linkedin size={28} className="relative z-10" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <Link
          href="#about"
          className="inline-flex items-center text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
        >
          <span className="mr-2">Explore my work</span>
          <ArrowDown size={20} />
        </Link>
      </div>
    </section>
  )
}

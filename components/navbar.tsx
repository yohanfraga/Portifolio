"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { ParticlesToggle } from "./particles-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const trackResumeDownload = async () => {
    try {
      await fetch('/api/resume-downloads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.error('Error tracking resume download:', error)
    }
  }

  const handleResumeDownload = () => {
    trackResumeDownload()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              YF
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Contact
            </Link>
            <a 
              href="/Yohan Fraga – Resume.pdf" 
              download
              onClick={handleResumeDownload}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              <Download size={20} />
              <span>Resume</span>
            </a>
            <div className="flex items-center space-x-4">
              <ParticlesToggle />
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-1">
            <ParticlesToggle />
            <ThemeToggle />
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <a
              href="/Yohan Fraga – Resume.pdf"
              download
              onClick={() => {
                handleResumeDownload()
                toggleMenu()
              }}
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              <Download size={20} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

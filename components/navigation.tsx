"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-black bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform"
            >
              SR
            </a>
          </div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-accent transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-background/90 backdrop-blur-lg rounded-lg border border-border/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded hover:bg-accent/5"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

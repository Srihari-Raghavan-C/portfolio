"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const isDarkMode = saved ? saved === "dark" : true
    setIsDark(isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    if (newDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 p-2 rounded-full bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all duration-300 text-accent"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-blue-400 to-cyan-400 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-40 h-40 rounded-full border-2 border-accent/50 bg-gradient-to-br from-accent/20 to-cyan-400/10 flex items-center justify-center animate-float">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center font-bold">
                <span className="text-5xl font-black text-background">SR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black leading-tight">Srihari Raghavan C</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-accent via-blue-400 to-cyan-400 mx-auto rounded-full" />
            <p className="text-lg md:text-2xl text-accent font-semibold">
              Software Engineering Enthusiast | ML Model Builder
            </p>
            <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovating with Data and Intelligence
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-accent/90 text-background font-bold px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              View My Work
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-accent text-accent hover:bg-accent/10 font-bold px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-accent/50 hover:text-accent transition-colors">
            <ChevronDown size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"
import SnowfallBackground from "@/components/snowfall-background"
import ThemeToggle from "@/components/theme-toggle"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative bg-background text-foreground">
      <SnowfallBackground />
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

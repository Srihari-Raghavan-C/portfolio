"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Github, Linkedin, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
          Get in <span className="text-accent">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "srihari@example.com", href: "mailto:" },
              { icon: Github, label: "GitHub", value: "github.com/srihari", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/srihari", href: "https://linkedin.com" },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <a
                key={i}
                href={href + value}
                className="glow-card p-4 rounded-lg border border-accent/20 backdrop-blur-sm flex items-start gap-4 hover:border-accent/50 transition-all group"
              >
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/30 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-bold text-accent">{label}</p>
                  <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all font-semibold"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all font-semibold"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all resize-none font-semibold"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-background font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              <Send size={18} />
              Send Message
              <ArrowRight size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

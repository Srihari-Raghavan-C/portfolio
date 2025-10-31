"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "ML Lead at TechVentures",
      content:
        "Srihari demonstrated exceptional skills in ML model development. His approach to data preprocessing and model optimization was impressive and delivered tangible results.",
      rating: 5,
      image: "/professional-woman.png",
    },
    {
      name: "Amit Patel",
      role: "Senior Engineer at DataCore",
      content:
        "Working with Srihari on the action detection project was a pleasure. He brings both technical depth and creative problem-solving to every challenge.",
      rating: 5,
      image: "/professional-man.png",
    },
    {
      name: "Neha Gupta",
      role: "Project Manager at AI Solutions",
      content:
        "Srihari's dedication to understanding project requirements and delivering quality ML solutions sets him apart. Highly recommend for any AI/ML projects.",
      rating: 5,
      image: "/professional-woman-2.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center animate-fade-in">
          What People <span className="text-accent">Say</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 animate-slide-up max-w-2xl mx-auto">
          Feedback from colleagues and collaborators
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glow-card p-6 rounded-lg border border-accent/20 backdrop-blur-sm hover:border-accent/50 transition-all group hover:scale-105"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed text-sm group-hover:text-accent/90 transition-colors">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-accent/30 object-cover"
                />
                <div>
                  <p className="font-bold text-accent group-hover:text-blue-400 transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const projects = [
    {
      title: "Bike Sharing System ML Model",
      description:
        "Predicts bike rental demand using historical and environmental data. Implements advanced regression techniques to optimize resource allocation.",
      image: "/bike-sharing-demand-prediction.jpg",
      tags: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      github: "#",
    },
    {
      title: "Human Action Detection ML Model",
      description:
        "Classifies and detects human activities using visual and sensor inputs. Utilizes deep learning for real-time action recognition.",
      image: "/human-action-detection-computer-vision.jpg",
      tags: ["TensorFlow", "Computer Vision", "CNN", "Real-time Processing"],
      github: "#",
    },
    {
      title: "Diabetes Prediction ML Model",
      description:
        "Predicts likelihood of diabetes based on health and lifestyle metrics. Provides interpretable predictions to support medical decision-making.",
      image: "/diabetes-prediction-healthcare.jpg",
      tags: ["Python", "Classification", "Healthcare ML", "Data Mining"],
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/10 border-t border-accent/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center animate-fade-in">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 animate-slide-up">
          Explore my latest ML and AI-driven projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                background:
                  hoveredIdx === idx
                    ? "linear-gradient(135deg, rgba(102, 204, 255, 0.15) 0%, rgba(0, 191, 255, 0.1) 100%)"
                    : "linear-gradient(135deg, rgba(20, 30, 50, 0.6) 0%, rgba(15, 25, 45, 0.4) 100%)",
                border:
                  hoveredIdx === idx ? "1px solid rgba(102, 204, 255, 0.6)" : "1px solid rgba(102, 204, 255, 0.2)",
                boxShadow:
                  hoveredIdx === idx
                    ? "0 0 40px rgba(102, 204, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    : "0 0 20px rgba(102, 204, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="overflow-hidden h-48 bg-background/50 relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded border border-accent/30 group-hover:bg-accent/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-accent hover:text-blue-400 transition-colors font-semibold group/link"
                >
                  <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                  View on GitHub
                  <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                </a>
              </div>

              {/* Animated border glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(102, 204, 255, 0.2), transparent)",
                  animation: hoveredIdx === idx ? "shimmer 2s infinite" : "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

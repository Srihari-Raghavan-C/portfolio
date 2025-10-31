"use client"

export default function Experience() {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "Fox Industries",
      period: "2023 - Present",
      description:
        "Worked on ML-based project development and experimentation. Developed and trained machine learning models for various use cases, focusing on data preprocessing, feature engineering, and model optimization.",
      highlights: ["ML Model Development", "Data Preprocessing", "Experimentation & Testing"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glow-card p-8 rounded-xl border border-accent/20 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-accent">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-accent/60 mt-2 md:mt-0 px-4 py-2 bg-accent/10 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-accent/10 text-accent px-3 py-2 rounded-full border border-accent/30 hover:bg-accent/20 transition-colors"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

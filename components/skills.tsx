"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Machine Learning",
      skills: ["Data Preprocessing", "Model Building", "LLM Modeling", "Feature Engineering", "Model Evaluation"],
    },
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++", "JavaScript", "TypeScript"],
    },
    {
      category: "Tools & Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
          Skills <span className="text-accent">&</span> Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glow-card p-6 rounded-xl border border-accent/20 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-accent">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block bg-background/80 border border-accent/30 px-3 py-2 rounded-full text-sm font-semibold hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  >
                    {skill}
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

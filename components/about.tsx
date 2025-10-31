"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              I'm a software engineering enthusiast with a keen interest in Machine Learning and AI-driven solutions. I
              enjoy transforming data into intelligent insights through model building and algorithmic thinking.
            </p>
            <p className="text-muted-foreground">
              My goal is to contribute to meaningful projects that combine creativity, data, and technology. I'm
              passionate about developing cutting-edge ML models that solve real-world problems.
            </p>
            <div className="pt-4">
              <button className="text-accent hover:text-blue-400 font-semibold flex items-center gap-2 transition-colors">
                Download Resume
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glow-card p-8 rounded-xl border border-accent/20 backdrop-blur-sm">
              <h3 className="text-accent font-bold text-xl mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                  <p className="font-bold text-foreground text-lg">B.Tech in Computer Science Engineering</p>
                  <p className="text-muted-foreground">Vellore Institute of Technology</p>
                </div>
                <div className="border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                  <p className="font-bold text-foreground text-lg">Schooling</p>
                  <p className="text-muted-foreground">Sirsiva Swami Kalalaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

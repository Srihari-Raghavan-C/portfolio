"use client"

export default function Services() {
  const services = [
    {
      title: "Data Preprocessing",
      description: "Clean, transform, and prepare raw data for machine learning models using industry best practices.",
      icon: "🔧",
    },
    {
      title: "Model Development",
      description: "Design and build custom ML models tailored to your specific use case and requirements.",
      icon: "🧠",
    },
    {
      title: "Optimization & Deployment",
      description: "Fine-tune model performance and deploy production-ready solutions.",
      icon: "⚡",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
          What I <span className="text-accent">Do</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          I offer ML model building services — from data preprocessing to model design, training, and evaluation,
          leveraging advanced algorithms and frameworks to deliver intelligent solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glow-card p-8 rounded-xl border border-accent/20 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-black text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

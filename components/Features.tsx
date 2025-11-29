"use client"

import { features } from "process"

export function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Smart Energy",
      description:
        "Optimize energy usage with intelligent automation and real-time monitoring to reduce your carbon footprint.",
    },
    {
      icon: "🔒",
      title: "Advanced Security",
      description:
        "Multi-layer security with AI-powered threat detection and instant alerts for complete peace of mind.",
    },
    {
      icon: "🎯",
      title: "Voice Control",
      description: "Hands-free control with compatible voice assistants for seamless integration into your smart home.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to create the perfect smart home experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features
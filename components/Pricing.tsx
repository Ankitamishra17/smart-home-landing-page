"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for apartments and small homes",
      features: ["Up to 10 smart devices", "Basic automation", "Mobile app access", "Email support"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Most popular for modern homes",
      features: [
        "Unlimited devices",
        "Advanced automation",
        "AI-powered insights",
        "Voice control",
        "Priority support",
        "Energy monitoring",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large properties and businesses",
      features: [
        "All Pro features",
        "Multi-property management",
        "Custom integrations",
        "24/7 dedicated support",
        "SLA guarantee",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className={`
                cursor-pointer rounded-2xl p-8 transition-all duration-300
                ${activeCard === index
                  ? "scale-[1.08] shadow-2xl shadow-primary/40 ring-4 ring-primary/40"
                  : "hover:scale-[1.03] hover:shadow-xl"
                }
                ${plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-accent/10 border-2 border-primary/50"
                  : "bg-card border border-primary/10"
                }
              `}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm font-semibold text-primary">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>

              <Button
                className={`w-full mb-8 transition-all duration-300 ${
                  activeCard === index
                    ? "bg-primary hover:bg-primary/90 scale-[1.05]"
                    : plan.highlighted
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-primary/20 hover:bg-primary/30 text-primary"
                }`}
              >
                Get Started
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Questions about our plans?</p>
          <Button variant="outline" className="border-primary/30 hover:bg-primary text-white bg-transparent">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-sm text-primary font-medium">Intelligent Homes.Effortless Livings</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Your Home,
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Intelligently Controlled
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform your living space with seamless automation. Control lighting, temperature, security, and
          entertainment from anywhere, anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-primary/30  text-white hover:bg-primary bg-transparent ">
            Watch Demo
          </Button>
        </div>

      </div>
    </section>
  );
}

export default Hero;

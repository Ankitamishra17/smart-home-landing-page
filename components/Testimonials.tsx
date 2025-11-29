"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Swiper CSS
import "swiper/css"

export function Highlights() {
  const testimonials = [
    {
      quote:
        "SmartHome Pro completely transformed how I manage my apartment. The interface is intuitive ",
      author: "Sarah Chen",
      role: "Homeowner",
      initials: "SC",
    },
    {
      quote:
        "As a busy professional, the ability to control everything remotely is invaluable. Security features are top-notch.",
      author: "James Mitchell",
      role: "Tech Enthusiast",
      initials: "JM",
    },
    {
      quote:
        "The energy monitoring helped us reduce our bills by 30%. Customer support is responsive and knowledgeable.",
      author: "Maria Rodriguez",
      role: "Sustainability Advocate",
      initials: "MR",
    },
    {
  quote:
    "Having complete control of lighting and temperature through my phone is game-changing. Installation was seamless.",
  author: "David Wilson",
  role: "Smart Home Enthusiast",
  initials: "DW",
},

  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Loved by Homeowners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their smart home experience
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={32}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 rounded-xl bg-card border border-primary/10 hover:border-primary/40 transition-all duration-300
              hover:scale-[1.05] hover:shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.author}`} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Highlights

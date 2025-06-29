"use client";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Star} from "lucide-react";

export function Hero(){
  const scrollToSection = (sectionId: string) =>{
    const element = document.getElementById(sectionId)
    if(element){
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative" style={{backgroundImage: "url('/images/hero-bg-clean.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
    > 

    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/40"></div>

    <div className="container mx-auto max-w-4xl relative z-10 text-center">
      <div className="space-y-8 text-white">
        <Badge className="bg-white/90 text-blue-900 hover:bg-white text-sm px-6 py-2 font-medium">
        Dr. Serena Blake, PsyD - Los Angeles, CA
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Find Your Path to
            <br />
            <span className="text-green-300"> Healing & Growth </span>
        </h1>

        <h2 className="text-2xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto opacity-90">
            Compassionate, evidence-based therapy to help you overcome challenges and discover your inner strength.
        </h2>

        <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-300 fill-current"/>
            <span>8+ years of experience</span>
          </div>
          <span>.</span>
          <span>500+ successfull sessions</span>
        </div>

        <div className="pt-4">
          <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            start your journey today
          </Button>
        </div>

        <p className="text-sm opacity-70 max-w-md mx-auto">
          Free consultation available . In person & virtual sessions
        </p>

      </div>
    </div>

    </section>

  )
}
"use client";

import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Menu, X} from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if(element){
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-cneter justify-between">
          <button onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Dr. Serena Blake, PsyD
          </button> 

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-blue-700 hover:text-blue-900 transition-colors">
              About
              </button>   
            <button onClick={() => scrollToSection("services")} className="text-blue-700 hover:text-blue-900 transition-colors">
              Services 
              </button> 
            <button onClick={() => scrollToSection("faq")} className="text-blue-700 hover:text-blue-900 transition-colors">
              FAQ 
            </button> 
            <button onClick={() => scrollToSection("contact")} className="text-blue-700 hover:text-blue-900 transition-colors">
              Contact 
            </button>
          </div> 

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-700 hover:text-blue-900 transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <Button onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-green-600 hover:bg-green-blue-100">
            Book a Free Consult
          </Button>
        </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-100">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection("about")} className="text-blue-700 hover:text-blue-900 transition-colors text-left">
                  About
                </button>
                <button onClick={() => scrollToSection("services")} className="text-blue-700 hover:text-blue-900 transition-colors text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection("faq")} className="text-blue-700 hover:text-blue-900 transition-colors text-left">
                  FAQ
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-blue-700 hover:text-blue-900 transition-colors text-left">
                  Contact
                </button>
                <Button onClick={() => scrollToSection("contact")} className="bg-green-600 hover:bg-green-700 w-full mt-4">
                  Book a Free Consult
                </Button>
              </div>
            </div>
          )}
      </div>

    </nav>
  )
}

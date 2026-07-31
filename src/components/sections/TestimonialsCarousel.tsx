"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Luminexis hasn't just given me mobility; it's given me my independence back. The way it seamlessly translates the world into something I can understand is nothing short of magic.",
    name: "Sarah Jenkins",
    role: "Early Adopter, Vision Impaired",
    avatar: "/images/reality-img-3.jpg"
  },
  {
    quote: "The haptic feedback on the smart band is incredibly intuitive. I can navigate busy streets feeling completely aware of my surroundings. It's a game changer.",
    name: "Michael Chen",
    role: "Beta Tester",
    avatar: "/images/solution-man.jpg"
  },
  {
    quote: "As someone with severe hearing loss, the AI Hearing Assist translates chaotic environments into clear, directional cues. I feel connected to conversations again.",
    name: "Elena Rodriguez",
    role: "Accessibility Advocate",
    avatar: "/images/lavender-woman.jpg"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // Auto slide every 6s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-background py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <div className="text-center mb-16">
           <h2 className="font-heading text-sm text-primary tracking-widest uppercase">
            Stories
          </h2>
        </div>

        <div className="max-w-4xl mx-auto h-[400px] relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center glass-card rounded-[40px] p-8 md:p-16 border border-border shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <p className="text-2xl md:text-4xl font-medium text-foreground leading-snug mb-10">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden relative">
                  <Image 
                    src={TESTIMONIALS[currentIndex].avatar} 
                    alt={TESTIMONIALS[currentIndex].name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-foreground-secondary text-sm">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                currentIndex === idx ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

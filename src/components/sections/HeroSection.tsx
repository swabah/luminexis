"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Ambient Lighting & Gradients */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* Foreground Bush Overlay - Kept absolute for depth effect */}
      <div className="absolute bottom-0 right-0 z-30 pointer-events-none flex flex-col items-end justify-end overflow-hidden mix-blend-screen w-full md:w-1/2 h-[40vh] md:h-[50vh]">
        <motion.div 
          className="relative w-[150%] md:w-full h-full mt-auto translate-y-10 translate-x-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <Image 
            src="/images/hero-bush.png"
            alt=""
            fill
            className="object-cover md:object-contain object-bottom opacity-60"
            priority
          />
        </motion.div>
      </div>

      {/* Content Split Layout */}
      <div className="relative z-20 container mx-auto px-6 h-full max-w-7xl flex flex-col md:flex-row items-center justify-between pt-24 md:pt-0">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left z-30 mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full glass border border-primary/30 text-xs font-semibold tracking-widest text-primary mb-6 shadow-[0_0_15px_rgba(5,119,62,0.2)]">
              THE NEXT EVOLUTION OF ACCESSIBILITY
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-heading text-6xl md:text-7xl lg:text-[90px] font-bold tracking-tight leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            SEE BEYOND <br /> LIMITS
          </motion.h1>
          
          <motion.p 
            className="max-w-xl text-foreground-secondary text-base md:text-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            AI-powered wearable technology empowering people with vision and hearing loss to move independently with confidence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <MagneticButton className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-[0_0_20px_rgba(5,119,62,0.4)]">
              Explore Luminexis
            </MagneticButton>
            <MagneticButton className="px-8 py-3.5 rounded-full glass border border-border text-foreground font-semibold text-sm hover:bg-white/10 transition-colors">
              Watch Demo
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Image Subject */}
        <div className="w-full md:w-[45%] h-[50vh] md:h-[85vh] relative z-20 flex items-end justify-center md:justify-end pointer-events-none mt-auto">
          <motion.div 
            className="relative w-full max-w-[500px] h-full"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image 
              src="/images/hero-woman-cutout.png"
              alt="Luminexis Wearable"
              fill
              className="object-contain object-bottom opacity-90"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground-secondary">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

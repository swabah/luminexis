"use client";

import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-background py-48 overflow-hidden">
      {/* Animated Ambient Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-[800px] h-[800px] bg-primary/30 rounded-full blur-[150px] mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#05773E" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          className="font-heading text-5xl md:text-7xl lg:text-[90px] font-bold text-foreground leading-[1.1] tracking-tight mb-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Help Build The <br className="hidden md:block" /> Future Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Accessibility</span>
        </motion.h2>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <MagneticButton className="px-10 py-5 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-colors shadow-[0_0_30px_rgba(5,119,62,0.4)]">
            Connect With Us
          </MagneticButton>
          <MagneticButton className="px-10 py-5 rounded-full glass border border-border text-foreground font-bold text-lg hover:bg-white/5 transition-colors">
            Become a Partner
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

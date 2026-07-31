"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="story" className="relative w-full bg-background py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Connecting Line */}
        <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border overflow-hidden">
          <motion.div 
            className="w-full bg-primary"
            style={{ height: lineHeight, transformOrigin: "top" }}
          />
        </div>

        {/* The Challenge */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between gap-12 mb-32 md:mb-48">
          <div className="md:w-5/12 text-left md:text-right pl-12 md:pl-0">
            <motion.h2 
              className="font-heading text-sm text-foreground-secondary tracking-widest uppercase mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              The Challenge
            </motion.h2>
            <motion.p 
              className="text-3xl md:text-5xl font-medium text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Millions navigate a world that wasn't designed for them.
            </motion.p>
          </div>
          
          {/* Node */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>

          <div className="md:w-5/12 pl-12 md:pl-0">
            {/* Emotional image */}
            <motion.div 
              className="w-full aspect-[4/3] rounded-3xl bg-surface border border-border overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image 
                src="/images/reality-blind-woman-square.jpg"
                alt="Navigating the world"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-transparent mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* The Status Quo */}
        <div className="relative z-10 flex flex-col md:flex-row-reverse items-center md:justify-between gap-12 mb-32 md:mb-48">
          <div className="md:w-5/12 text-left pl-12 md:pl-0">
            <motion.h2 
              className="font-heading text-sm text-foreground-secondary tracking-widest uppercase mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Then
            </motion.h2>
            <motion.p 
              className="text-3xl md:text-5xl font-medium text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Existing solutions are <span className="text-foreground-secondary">expensive, limited, and dependent on smartphones.</span>
            </motion.p>
          </div>
          
          {/* Node */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center transition-colors duration-500 delay-300">
             <motion.div 
                className="w-3 h-3 rounded-full bg-primary" 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
             />
          </div>

          <div className="md:w-5/12 pl-12 md:pl-0">
            <motion.div 
              className="w-full aspect-[4/3] rounded-3xl bg-surface border border-border overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image 
                src="/images/reality-img-2.jpg"
                alt="Conventional solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-background/80 via-transparent to-transparent mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Luminexis Changes Everything */}
        <div className="relative z-10 flex flex-col items-center text-center pt-16">
          {/* Node */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
             <div className="w-5 h-5 rounded-full bg-primary animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="pl-12 md:pl-0"
          >
            <h2 className="font-heading text-sm text-primary tracking-widest uppercase mb-6">
              Now
            </h2>
            <h3 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-8">
              Luminexis <br className="hidden md:block" /> changes everything.
            </h3>
            <p className="text-foreground-secondary text-lg md:text-xl max-w-2xl mx-auto">
              We engineered a completely standalone AI ecosystem that sees, hears, and understands the world around you in real-time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

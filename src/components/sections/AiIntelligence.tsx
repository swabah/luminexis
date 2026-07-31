"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Cpu, ScanSearch, Type, Users, Navigation } from "lucide-react";

const PROCESS_STEPS = [
  { icon: Camera, title: "Camera detects" },
  { icon: Cpu, title: "AI processes" },
  { icon: ScanSearch, title: "Recognizes objects" },
  { icon: Type, title: "Reads text" },
  { icon: Users, title: "Identifies people" },
  { icon: Navigation, title: "Provides guidance" },
];

export default function AiIntelligence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={containerRef} id="ai" className="relative w-full bg-background py-32 overflow-hidden border-t border-border">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#05773E" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(5, 119, 62, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Floating AI Nodes */}
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h3 
            className="font-heading text-sm text-primary tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real-Time Processing
          </motion.h3>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            AI That Understands Your World
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-border -translate-y-1/2 z-0">
             <motion.div 
               className="h-full bg-primary" 
               style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
             />
          </div>
          
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 z-0">
             <motion.div 
               className="w-full bg-primary" 
               style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
             />
          </div>

          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            // Calculate when this specific node should light up based on scroll
            const start = index * (1 / PROCESS_STEPS.length);
            const end = start + (1 / PROCESS_STEPS.length);
            const isActive = useTransform(scrollYProgress, [start, end], [0, 1]);
            
            return (
              <motion.div 
                key={index}
                className="relative z-10 flex flex-col items-center gap-4 bg-background p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full glass border border-border flex items-center justify-center relative overflow-hidden"
                  style={{ 
                    borderColor: useTransform(isActive, [0, 1], ["rgba(255,255,255,0.08)", "rgba(5,119,62,1)"]),
                    boxShadow: useTransform(isActive, [0, 1], ["0 0 0 rgba(5,119,62,0)", "0 0 20px rgba(5,119,62,0.5)"])
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-primary/20"
                    style={{ opacity: isActive }}
                  />
                  <Icon className="text-foreground relative z-10" size={24} />
                </motion.div>
                <span className="text-sm font-medium text-foreground-secondary text-center max-w-[100px]">
                  {step.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

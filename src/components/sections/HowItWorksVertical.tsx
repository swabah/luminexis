"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Glasses, BrainCircuit, Footprints } from "lucide-react";

const STEPS = [
  {
    id: "step-1",
    title: "Wear",
    description: "Put on the Smart Glasses and Smart Band. They instantly sync and begin mapping your environment.",
    icon: Glasses,
    image: "/images/how-it-works-1.png"
  },
  {
    id: "step-2",
    title: "AI Understands",
    description: "The onboard neural engine processes visual and audio data, recognizing obstacles, text, and faces in real-time.",
    icon: BrainCircuit,
    image: "/images/how-it-works-2.png"
  },
  {
    id: "step-3",
    title: "Move Confidently",
    description: "Receive intuitive spatial audio cues and precise haptic feedback, guiding you safely to your destination.",
    icon: Footprints,
    image: "/images/how-it-works-3.png"
  }
];

export default function HowItWorksVertical() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="how-it-works" className="relative w-full bg-background py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Seamless integration into your daily life. No complex setup, no smartphone required. Just put it on and go.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-primary" 
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-24">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-full glass border border-border flex items-center justify-center -translate-x-[31px] md:-translate-x-1/2 z-10 bg-background">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                    <Icon className="text-foreground relative z-10" size={24} />
                  </div>

                  {/* Text Content */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 flex flex-col justify-center">
                    <motion.div
                      className={`text-left ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <h3 className="font-heading text-sm text-primary tracking-widest uppercase mb-4">
                        Step {index + 1}
                      </h3>
                      <h4 className="text-3xl font-bold text-foreground mb-4">
                        {step.title}
                      </h4>
                      <p className="text-foreground-secondary text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Image/Visual Placeholder */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 flex items-center justify-center">
                    <motion.div 
                      className="w-full aspect-[4/3] rounded-3xl glass-card border border-border flex items-center justify-center relative overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'bl' : 'br'} from-background/40 to-transparent mix-blend-multiply`} />
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

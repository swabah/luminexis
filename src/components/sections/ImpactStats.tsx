"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const STATS = [
  { value: 929, suffix: "M+", label: "Lives Impacted", description: "People globally living with vision or hearing loss." },
  { value: 90, suffix: "%", label: "Lack Solutions", description: "Of those affected do not have access to affordable tech." },
  { value: 100, suffix: "%", label: "Offline AI", description: "Real-time processing without requiring an internet connection." },
  { value: 24, suffix: " Hrs", label: "Battery Life", description: "All-day performance on a single rapid charge." },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const animate = () => {
        start += increment;
        if (start < value) {
          setDisplayValue(Math.ceil(start));
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function ImpactStats() {
  return (
    <section className="relative w-full bg-background py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
           <h2 className="font-heading text-sm text-primary tracking-widest uppercase mb-4">
            The Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="font-heading text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 tracking-tighter">
                <AnimatedNumber value={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-foreground-secondary text-sm leading-relaxed max-w-[200px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const COMPARISON = [
  {
    feature: "Standalone Operation",
    traditional: false,
    luminexis: true,
  },
  {
    feature: "Real-time AI Processing",
    traditional: false,
    luminexis: true,
  },
  {
    feature: "Offline Capabilities",
    traditional: false,
    luminexis: true,
  },
  {
    feature: "Integrated Haptic Feedback",
    traditional: false,
    luminexis: true,
  },
  {
    feature: "Discreet Design",
    traditional: false,
    luminexis: true,
  },
  {
    feature: "Affordable Pricing",
    traditional: false,
    luminexis: true,
  },
];

export default function WhyLuminexis() {
  return (
    <section id="why-us" className="relative w-full bg-background py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-24">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Luminexis?
          </motion.h2>
          <motion.p 
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We re-engineered assistive technology from the ground up to be smarter, faster, and more accessible than ever before.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden glass border border-border">
          {/* Traditional Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/5">
            <h3 className="text-2xl font-bold text-foreground-secondary mb-12 text-center md:text-left">
              Traditional Devices
            </h3>
            <ul className="flex flex-col gap-8">
              {COMPARISON.map((item, index) => (
                <motion.li 
                  key={`trad-${index}`} 
                  className="flex items-center gap-4 text-foreground-secondary opacity-50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.5, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.traditional ? (
                    <CheckCircle2 className="text-foreground-secondary shrink-0" size={24} />
                  ) : (
                    <XCircle className="text-foreground-secondary shrink-0" size={24} />
                  )}
                  <span className="text-lg font-medium">{item.feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Luminexis Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12 relative overflow-hidden bg-primary/5">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            
            <h3 className="text-2xl font-bold text-primary mb-12 text-center md:text-left relative z-10">
              Luminexis
            </h3>
            <ul className="flex flex-col gap-8 relative z-10">
              {COMPARISON.map((item, index) => (
                <motion.li 
                  key={`lum-${index}`} 
                  className="flex items-center gap-4 text-foreground"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.luminexis ? (
                    <CheckCircle2 className="text-primary shrink-0 drop-shadow-[0_0_10px_rgba(5,119,62,0.8)]" size={24} />
                  ) : (
                    <XCircle className="text-red-500 shrink-0" size={24} />
                  )}
                  <span className="text-lg font-medium tracking-wide">{item.feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

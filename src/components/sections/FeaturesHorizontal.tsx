"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScanFace, Radar, TextSelect, WifiOff, Map, Vibrate, Mic, BatteryCharging } from "lucide-react";

const FEATURES = [
  { icon: Radar, title: "Obstacle Detection" },
  { icon: ScanFace, title: "Face Recognition" },
  { icon: TextSelect, title: "Text Reading" },
  { icon: WifiOff, title: "Offline AI" },
  { icon: Map, title: "Navigation" },
  { icon: Vibrate, title: "Haptic Feedback" },
  { icon: Mic, title: "Voice Guidance" },
  { icon: BatteryCharging, title: "Long Battery" },
];

export default function FeaturesHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="features" className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Title Fixed on Left (optional, or just horizontal panels) */}
        <div className="absolute top-24 left-6 md:left-12 z-20 pointer-events-none">
          <h2 className="font-heading text-sm text-primary tracking-widest uppercase mb-2">
            Capabilities
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Feature Set
          </h3>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-6 md:px-12 pt-48 md:pt-40">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="w-[80vw] md:w-[350px] h-[45vh] md:h-[500px] shrink-0 rounded-[30px] md:rounded-[40px] glass-card border border-border p-6 md:p-10 flex flex-col justify-between group hover:border-primary/50 transition-colors duration-500 overflow-hidden relative"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <Icon 
                    className="text-primary/50 group-hover:text-primary transition-colors duration-500" 
                    size={80} 
                    strokeWidth={1}
                  />
                </div>
                
                <div className="relative z-10">
                  <span className="font-heading text-sm text-foreground-secondary tracking-widest uppercase block mb-4">
                    0{index + 1}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                    {feature.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

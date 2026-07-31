"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const PRODUCTS = [
  {
    id: "glasses",
    name: "Smart Glasses",
    tagline: "Vision, redefined.",
    description: "Sleek, lightweight frames equipped with dual HD cameras and LiDAR. They analyze your surroundings in real-time, reading text, recognizing faces, and detecting obstacles instantly.",
    features: ["Real-time Object Detection", "Text-to-Speech Processing", "Bone Conduction Audio", "All-day Battery Life"],
    color: "#05773E",
    image: "/images/solution-smart-glasses.png"
  },
  {
    id: "band",
    name: "Smart Band",
    tagline: "Feel the world.",
    description: "A precision haptic wearable that translates environmental data into intuitive physical feedback. Know what's around you without a single sound.",
    features: ["360° Spatial Awareness", "Micro-haptic Actuators", "Seamless Ecosystem Sync", "Water Resistant (IP68)"],
    color: "#033C1F",
    image: "/images/solution-smart-band.png"
  },
  {
    id: "hearing",
    name: "AI Hearing Assist",
    tagline: "Clarity in the noise.",
    description: "Advanced computational audio that isolates voices, removes background noise, and provides real-time translation and transcription directly to your smart glasses.",
    features: ["Directional Beamforming", "Active Noise Cancellation", "Live Translation", "Invisible Design"],
    color: "#0a0a0a",
    image: "/images/solution-ear-piece.png"
  }
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="products" className="relative w-full h-[300vh] bg-background">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {PRODUCTS.map((product, index) => {
          // Calculate the scroll range for this specific panel
          const start = index / PRODUCTS.length;
          const end = (index + 1) / PRODUCTS.length;
          const center = (start + end) / 2;
          
          return (
            <ProductPanel 
              key={product.id} 
              product={product} 
              scrollYProgress={scrollYProgress}
              start={start}
              center={center}
              end={end}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProductPanel({ 
  product, 
  scrollYProgress, 
  start, 
  center, 
  end 
}: { 
  product: any, 
  scrollYProgress: any,
  start: number,
  center: number,
  end: number
}) {
  // Fade in before center, fade out after center
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, center, end, Math.min(1, end + 0.1)],
    [0, 0, 1, 1, 0]
  );
  
  // Slight vertical parallax
  const y = useTransform(
    scrollYProgress,
    [start, center, end],
    [50, 0, -50]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [start, center, end],
    [0.9, 1, 0.9]
  );

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-background pointer-events-none"
      style={{ opacity, zIndex: 10 }}
    >
      <div className="pointer-events-auto w-full h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 container mx-auto px-6 py-20 max-w-7xl">
        
        {/* Left: Product Render */}
        <motion.div 
          className="w-full md:w-1/2 h-[40vh] md:h-[80%] relative flex items-center justify-center"
          style={{ scale }}
        >
          {/* Background Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-30"
            style={{ backgroundColor: product.color }}
          />
          <div className="w-full max-w-[250px] md:max-w-md aspect-square rounded-full glass-card border border-border flex items-center justify-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-background/30 to-transparent mix-blend-multiply" />
             <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover p-4 md:p-8"
             />
             <motion.div 
                className="absolute w-3/4 h-3/4 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
          </div>
        </motion.div>

        {/* Right: Description & Features */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.div style={{ y }}>
            <h3 className="font-heading text-xs md:text-sm text-primary tracking-widest uppercase mb-2 md:mb-4">
              {product.tagline}
            </h3>
            <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-4 md:mb-6">
              {product.name}
            </h2>
            <p className="text-foreground-secondary text-sm md:text-lg mb-6 md:mb-10 leading-relaxed max-w-lg">
              {product.description}
            </p>
            
            <div className="flex flex-col gap-3 md:gap-4">
              {product.features.map((feature: string, fIndex: number) => (
                <div key={fIndex} className="flex items-center gap-3 md:gap-4">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground font-medium text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}

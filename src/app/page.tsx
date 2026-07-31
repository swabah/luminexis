import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import AiIntelligence from "@/components/sections/AiIntelligence";
import HowItWorksVertical from "@/components/sections/HowItWorksVertical";
import FeaturesHorizontal from "@/components/sections/FeaturesHorizontal";
import WhyLuminexis from "@/components/sections/WhyLuminexis";
import ImpactStats from "@/components/sections/ImpactStats";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      <HeroSection />
      <StorySection />
      <ProductShowcase />
      <AiIntelligence />
      <HowItWorksVertical />
      <FeaturesHorizontal />
      <WhyLuminexis />
      <ImpactStats />
      <TestimonialsCarousel />
      <CtaSection />
    </div>
  );
}

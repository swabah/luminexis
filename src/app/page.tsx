import Hero from '@/components/sections/Hero';
import Reality from '@/components/sections/Reality';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyUs from '@/components/sections/WhyUs';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Reality />
      <Solution />
      
      {/* Combined How It Works & Why Us section with shared background */}
      <div className="relative w-full bg-background overflow-clip">
         {/* Shared Background Image */}
         <div className="absolute inset-x-0 bottom-0 top-[15%] md:top-[25%] z-0">
             <Image
                 src="/images/lavender-woman.jpg"
                 alt="Woman wearing Luminexis devices in a lavender field"
                 fill
                 className="object-cover object-top"
                 priority
             />
             {/* Top fade gradient to blend into the white section above */}
             <div className="absolute inset-x-0 top-0 h-48 md:h-64 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />
             {/* Overall subtle overlay to ensure text readability */}
             <div className="absolute inset-0 bg-white/10 pointer-events-none" />
             {/* Bottom dark fade for depth */}
             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
         </div>

         {/* Content Sections */}
         <div className="relative z-10 flex flex-col">
             <HowItWorks />
             <WhyUs />
         </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Hero() {
	return (
		<section className="relative flex min-h-screen w-full items-center overflow-hidden bg-hero-gradient">
			{/* Background/decorative elements (layered for parallax/depth of field) */}
			<div className="absolute inset-0 z-0 h-full w-full pointer-events-none select-none">
				{/* Soft rainbow arc behind the woman */}
				<div className="hero-rainbow absolute right-[-5%] top-[10%] h-[350px] w-[350px] opacity-70 sm:right-[5%] md:h-[550px] md:w-[550px] lg:h-[650px] lg:w-[650px] xl:h-[750px] xl:w-[750px]" />
			</div>

			<Container
				size="lg"
				className="relative pt-[150px] md:pt-[100px] z-10 flex flex-col md:flex-row h-full min-h-[calc(100vh)] items-center"
			>
				{/* Text and CTA layout */}
				<div className="w-full relative z-20 flex-shrink-0 order-1 md:order-none mt-4 md:mt-0 md:grid md:grid-cols-12 items-center">
					<div className="flex flex-col items-start text-left text-white md:col-span-7 lg:col-span-6 py-8 md:py-20">
						<h1 className="font-sans text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7.5xl">
							See Beyond Limits
						</h1>
						<p className="mt-3 max-w-lg text-base leading-relaxed text-white/95 sm:text-lg lg:text-xl">
							Smart wearable technology that guides, protects, and empowers
							people with vision and hearing loss.
						</p>
						<div className="mt-6 sm:mt-8">
							<Button className="h-auto rounded-full bg-white px-7 py-2.5 text-base font-semibold text-[#272937] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-xl active:bg-white/90">
								Connect us
							</Button>
						</div>
					</div>
				</div>

				{/* Image layers - stacked on mobile, absolute pinned to right on desktop */}
				<div className="relative md:absolute md:bottom-0 md:right-4 z-0  h-[65vh] w-[110vw] -mx-4 sm:w-full sm:mx-0 md:h-[85vh] md:w-[45vw] lg:h-[90vh] lg:w-[48vw] order-2 md:order-none -mt-33 md:mt-0">
					{/* Green bush cutout behind the woman */}
					<div className=" hidden md:block absolute bottom-0 right-[30%] z-5 h-[20vh] w-[45%] md:h-[35vh] md:w-[40%]">
						<Image
							src="/images/hero-bush.png"
							alt="Midground blurred foliage"
							fill
							sizes="(max-width: 768px) 50vw, 20vw"
							className="object-contain object-bottom-right opacity-90"
						/>
					</div>

					{/* Woman cutout in front of the bush */}
					<div className="absolute bottom-0 right-0 z-10 h-full w-full">
						<Image
							src="/images/hero-woman-cutout.png"
							alt="Smiling woman wearing Luminexis smart eyewear and hearing assist"
							fill
							priority
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-contain object-bottom-right"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}

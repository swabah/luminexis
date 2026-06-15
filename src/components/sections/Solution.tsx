import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Solution() {
	return (
		<section id="solution" className="w-full bg-white py-24 md:py-32">
			<Container size="lg" className="flex flex-col items-center">
				{/* Section Header */}
				<SectionHeader
					tag="The Solution"
					title="Introducing Luminexis"
					textColor="dark"
					className="mb-12 md:mb-16"
				/>

				<div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
					<Image
						src="/images/solution-man.jpg"
						alt="Man wearing Luminexis smart glasses and ear piece in a garden"
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-105"
					/>
					{/* Dark overlay for better button contrast, optional but good */}
					<div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
					
					{/* Play Button */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md text-white/95 px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-transform duration-300 group-hover:scale-105 border border-white/10">
							<svg
								className="w-4 h-4 fill-current"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8 5v14l11-7z" />
							</svg>
							Watch Launch Video
						</div>
					</div>
				</div>

				{/* Product Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 w-full">
					<div className="bg-primary/5 rounded-2xl p-8 flex flex-col items-center">
						<div className="relative w-full h-40 mb-6 flex items-center justify-center">
							<Image
								src="/images/solution-smart-glasses.png"
								alt="Smart Eyewear"
								fill
								className="object-contain"
							/>
						</div>
						{/* Gradient Separator */}
						<div className="w-full h-[2px] rounded-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 mb-6" />
						
						<div className="w-full text-left">
							<h3 className="text-xs font-medium text-black mb-2">
								Smart Eyewear
							</h3>
							<p className="text-xs text-black/60 leading-relaxed">
								Detect Obstacles And Navigate Safely.
							</p>
						</div>
					</div>

					<div className="bg-primary/5 rounded-2xl p-8 flex flex-col items-center">
						<div className="relative w-full h-40 mb-6 flex items-center justify-center">
							<Image
								src="/images/solution-smart-band.png"
								alt="Smart Band"
								fill
								className="object-contain"
							/>
						</div>
						{/* Gradient Separator */}
						<div className="w-full h-[2px] rounded-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 mb-6" />
						
						<div className="w-full text-left">
							<h3 className="text-xs font-medium text-black mb-2">
								Smart Band
							</h3>
							<p className="text-xs text-black/60 leading-relaxed">
								Feel Hazards Through Intelligent Vibrations.
							</p>
						</div>
					</div>

					<div className="bg-primary/5 rounded-2xl p-8 flex flex-col items-center">
						<div className="relative w-full h-40 mb-6 flex items-center justify-center">
							<Image
								src="/images/solution-ear-piece.png"
								alt="Hearing Assist"
								fill
								className="object-contain"
							/>
						</div>
						{/* Gradient Separator */}
						<div className="w-full h-[2px] rounded-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 mb-6" />
						
						<div className="w-full text-left">
							<h3 className="text-xs font-medium text-black mb-2">
								Hearing Assist
							</h3>
							<p className="text-xs text-black/60 leading-relaxed">
								Guides You With Voice To Avoid Obstacles
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

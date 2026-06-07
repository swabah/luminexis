import Image from "next/image";
import { Container } from "@/components/ui/Container";

export default function Solution() {
	return (
		<section id="solution" className="w-full bg-white py-24 md:py-32">
			<Container size="lg" className="flex flex-col items-center">
				{/* Section Header */}
				<div className="text-center mb-12 md:mb-16">
					<span className="inline-block py-1.5 px-4 rounded-full bg-[#e0f2fe] text-[#145f9a] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
						The Solution
					</span>
					<h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
						Introducing Luminexis
					</h2>
				</div>

				{/* Main Launch Video Banner */}
				<div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl">
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
					{/* Smart Eyewear Card */}
					<div className="bg-[#f8f9fb] rounded-[1.5rem] p-8 flex flex-col items-center transition-shadow hover:shadow-md">
						<div className="relative w-full h-40 mb-6 flex items-center justify-center">
							<Image
								src="/images/solution-smart-glasses.png"
								alt="Smart Eyewear"
								fill
								className="object-contain"
							/>
						</div>
						{/* Gradient Separator */}
						<div className="w-full h-[2px] rounded-full bg-gradient-to-r from-sky-200/50 via-emerald-200/50 to-rose-200/50 mb-6" />
						
						<div className="w-full text-left">
							<h3 className="text-[17px] font-bold text-[#0f172a] mb-2">
								Smart Eyewear
							</h3>
							<p className="text-[13px] text-[#64748b] leading-relaxed">
								Detect Obstacles And Navigate Safely.
							</p>
						</div>
					</div>

					{/* Smart Band Card */}
					<div className="bg-[#f8f9fb] rounded-[1.5rem] p-8 flex flex-col items-center transition-shadow hover:shadow-md">
						<div className="relative w-full h-40 mb-6 flex items-center justify-center">
							<Image
								src="/images/solution-smart-band.png"
								alt="Smart Band"
								fill
								className="object-contain"
							/>
						</div>
						{/* Gradient Separator */}
						<div className="w-full h-[2px] rounded-full bg-gradient-to-r from-sky-200/50 via-emerald-200/50 to-rose-200/50 mb-6" />
						
						<div className="w-full text-left">
							<h3 className="text-[17px] font-bold text-[#0f172a] mb-2">
								Smart Band
							</h3>
							<p className="text-[13px] text-[#64748b] leading-relaxed">
								Feel Hazards Through Intelligent Vibrations.
							</p>
						</div>
					</div>

					{/* Hearing Assist Card */}
					<div className="bg-[#f8f9fb] rounded-[1.5rem] p-8 flex flex-col items-center transition-shadow hover:shadow-md">
						<div className="relative w-full h-40 mb-6 flex items-center justify-center">
							<Image
								src="/images/solution-ear-piece.png"
								alt="Hearing Assist"
								fill
								className="object-contain"
							/>
						</div>
						{/* Gradient Separator */}
						<div className="w-full h-[2px] rounded-full bg-gradient-to-r from-sky-200/50 via-emerald-200/50 to-rose-200/50 mb-6" />
						
						<div className="w-full text-left">
							<h3 className="text-[17px] font-bold text-[#0f172a] mb-2">
								Hearing Assist
							</h3>
							<p className="text-[13px] text-[#64748b] leading-relaxed">
								Guides You With Voice To Avoid Obstacles
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

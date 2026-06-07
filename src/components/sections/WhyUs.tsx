"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function WhyUs() {
	return (
		<section
			id="why-us"
			className="relative w-full min-h-screen md:min-h-[700px] lg:min-h-[900px] flex flex-col justify-center py-32 md:py-48 lg:py-0 overflow-hidden"
		>
			{/* Background Overlay */}
			<div className="absolute inset-0 bg-slate-950/25 z-0 pointer-events-none" />

			<Container size="lg" className="relative z-10 w-full my-auto">
				<div className="flex flex-col md:flex-row justify-end w-full">
					{/* Main Content Wrapper - Perfect Bento Flex Grid */}
					<div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full md:w-[85%] lg:w-[65%]">
						{/* Left Column: Title + True Autonomy (Tall Card) */}
						<motion.div
							initial={{ opacity: 0, x: 20, y: 20 }}
							whileInView={{ opacity: 1, x: 0, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="flex-1 flex flex-col justify-between bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-[24px] p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 border-t-white/20 border-l-white/20 shadow-2xl group relative overflow-hidden"
						>
							{/* Giant Background Number */}
							<div className="absolute -bottom-8 -right-4 text-[140px] md:text-[180px] font-bold text-white/[0.02] leading-none select-none group-hover:text-[#60a5fa]/[0.08] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 pointer-events-none">
								01
							</div>

							{/* Title Area - Moved inside card for perfect contrast */}
							<div className="mb-10 md:mb-12 relative z-10">
								<div className="inline-flex items-center gap-3 mb-5 md:mb-6 opacity-90">
									<div className="w-8 md:w-12 h-[1px] bg-[#60a5fa]"></div>
									<span className="text-[#60a5fa] text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase">
										Why Luminexis
									</span>
								</div>
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.2] md:leading-[1.15]">
									Empowering Your <br className="hidden lg:block" />{" "}
									<span className="text-[#60a5fa]">Independence.</span>
								</h2>
							</div>

							{/* Feature 1 */}
							<div className="relative z-10 mt-auto">
								<h3 className="text-xl md:text-3xl font-medium text-white mb-3 md:mb-4 group-hover:text-[#60a5fa] transition-colors duration-300 tracking-tight">
									True Autonomy
								</h3>
								<p className="text-slate-300 text-[15px] md:text-[17px] font-light leading-relaxed max-w-[95%] md:max-w-[90%]">
									On-device AI. No phone required. No cloud dependency.
								</p>
							</div>
						</motion.div>

						{/* Right Column: Two Stacked Cards */}
						<div className="flex-1 flex flex-col gap-4 md:gap-5">
							{/* Right Top Card */}
							<motion.div
								initial={{ opacity: 0, x: 20, y: -20 }}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									duration: 0.8,
									delay: 0.2,
									ease: [0.16, 1, 0.3, 1],
								}}
								className="flex-1 flex flex-col justify-end bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-[24px] p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 border-t-white/20 border-l-white/20 shadow-xl group relative overflow-hidden"
							>
								{/* Giant Background Number */}
								<div className="absolute -bottom-6 -right-4 text-[100px] md:text-[140px] font-bold text-white/[0.02] leading-none select-none group-hover:text-[#60a5fa]/[0.08] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 pointer-events-none">
									02
								</div>
								<div className="relative z-10">
									<h3 className="text-xl md:text-[28px] font-medium text-white mb-2 md:mb-3 group-hover:text-[#60a5fa] transition-colors duration-300 tracking-tight">
										Unwavering Reliability
									</h3>
									<p className="text-slate-300 text-[14px] md:text-[16px] font-light leading-relaxed">
										Navigate confidently everywhere, even completely offline.
									</p>
								</div>
							</motion.div>

							{/* Right Bottom Card */}
							<motion.div
								initial={{ opacity: 0, x: 20, y: 20 }}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									duration: 0.8,
									delay: 0.4,
									ease: [0.16, 1, 0.3, 1],
								}}
								className="flex-1 flex flex-col justify-end bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-[24px] p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 border-t-white/20 border-l-white/20 shadow-xl group relative overflow-hidden"
							>
								{/* Giant Background Number */}
								<div className="absolute -bottom-6 -right-4 text-[100px] md:text-[140px] font-bold text-white/[0.02] leading-none select-none group-hover:text-[#60a5fa]/[0.08] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 pointer-events-none">
									03
								</div>
								<div className="relative z-10">
									<h3 className="text-xl md:text-[28px] font-medium text-white mb-2 md:mb-3 group-hover:text-[#60a5fa] transition-colors duration-300 tracking-tight">
										All-Day Power
									</h3>
									<p className="text-slate-300 text-[14px] md:text-[16px] font-light leading-relaxed">
										Engineered with a battery built to last throughout the day.
									</p>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

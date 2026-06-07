"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function HowItWorks() {
	const steps = [
		{
			id: "01",
			title: "Wear Luminexis",
			desc: "Put on the glasses, hearing assist, and smart band. The ecosystem syncs instantly without any complicated pairing required.",
		},
		{
			id: "02",
			title: "AI Understands",
			desc: "The powerful on-device AI instantly analyzes your environment, mapping obstacles, reading signs, and recognizing faces in real-time.",
		},
		{
			id: "03",
			title: "Move With Confidence",
			desc: "Receive subtle haptic feedback and gentle audio cues exactly when you need them, keeping you safe and independent.",
		},
	];

	return (
		<section
			id="how-it-works"
			className="w-full pt-24 pb-32 md:pt-36 md:pb-56 relative z-10 bg-gradient-to-b from-white via-white to-[#e0f2fe] overflow-hidden"
		>
			<Container size="lg" className="flex flex-col items-center">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20 md:mb-32"
				>
					<div className="inline-flex items-center gap-3 mb-6 opacity-80 justify-center">
						<div className="w-8 h-[1px] bg-[#145f9a]"></div>
						<span className="text-[#145f9a] text-[11px] font-bold tracking-[0.25em] uppercase">
							The Process
						</span>
						<div className="w-8 h-[1px] bg-[#145f9a]"></div>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight">
						How It Works
					</h2>
				</motion.div>

				{/* Timeline Container */}
				<div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
					{/* Center Vertical Line */}
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
						className="absolute left-6 md:left-1/2 top-0 md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#145f9a]/10 via-[#145f9a]/40 to-transparent"
					/>

					<div className="flex flex-col gap-16 md:gap-32 relative pl-14 md:pl-0">
						{steps.map((step, idx) => {
							const isEven = idx % 2 === 0;

							return (
								<div
									key={idx}
									className="relative flex flex-col md:flex-row items-center justify-between w-full group"
								>
									{/* Content Block */}
									<div
										className={`w-full md:w-[45%] flex ${isEven ? "md:justify-end" : "md:justify-start md:order-2"}`}
									>
										<motion.div
											initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
											whileInView={{ opacity: 1, x: 0, y: 0 }}
											viewport={{ once: true, margin: "-100px" }}
											transition={{
												duration: 0.8,
												ease: [0.16, 1, 0.3, 1],
												delay: 0.2,
											}}
											className={`flex flex-col items-start ${isEven ? "md:items-end text-left md:text-right" : "md:items-start text-left"} max-w-md`}
										>
											<span className="text-[#145f9a] font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4">
												Step {step.id}
											</span>
											<h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0f172a] mb-5 font-medium tracking-tight">
												{step.title}
											</h3>
											<p className="text-[#64748b] text-[16px] md:text-[18px] leading-relaxed font-light">
												{step.desc}
											</p>
										</motion.div>
									</div>

									{/* Center Node / Dot */}
									<motion.div
										initial={{ scale: 0, opacity: 0 }}
										whileInView={{ scale: 1, opacity: 1 }}
										viewport={{ once: true, margin: "-100px" }}
										transition={{
											duration: 0.5,
											delay: 0.4,
											type: "spring",
											stiffness: 200,
											damping: 15,
										}}
										className="absolute left-[-39px] md:left-1/2 top-2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-[#145f9a] shadow-[0_0_15px_rgba(20,95,154,0.4)] z-10"
									/>

									{/* Ping Animation on Node (Desktop only to prevent clutter) */}
									<motion.div
										initial={{ scale: 0.5, opacity: 0 }}
										whileInView={{ scale: 2.5, opacity: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 2,
											repeat: Infinity,
											repeatDelay: 1,
											delay: 0.6,
										}}
										className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#145f9a] z-0 hidden md:block"
									/>

									{/* Empty spacer for the other side to balance flexbox */}
									<div
										className={`hidden md:block w-[45%] ${isEven ? "order-2" : ""}`}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</section>
	);
}

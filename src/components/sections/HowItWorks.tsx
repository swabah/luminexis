"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
	{
		id: "01",
		title: "Wear Luminexis",
		desc: "Put on the glasses, hearing assist, and smart band. The ecosystem syncs instantly without any complicated pairing required.",
		image: "/images/how-it-works-1.png",
		color: "from-primary to-primary-dark",
		shadow: "shadow-primary/20",
		icon: (
			<svg
				className="w-5 h-5 text-white"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
				/>
			</svg>
		),
	},
	{
		id: "02",
		title: "AI Understands",
		desc: "The powerful on-device AI instantly analyzes your environment, mapping obstacles, reading signs, and recognizing faces in real-time.",
		image: "/images/how-it-works-2.png",
		color: "from-primary to-primary-dark",
		shadow: "shadow-primary-dark/20",
		icon: (
			<svg
				className="w-5 h-5 text-white"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
	{
		id: "03",
		title: "Move With Confidence",
		desc: "Receive subtle haptic feedback and gentle audio cues exactly when you need them, keeping you safe and independent.",
		image: "/images/how-it-works-3.png",
		color: "from-primary to-primary-dark",
		shadow: "shadow-primary-dark/20",
		icon: (
			<svg
				className="w-5 h-5 text-white"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
		),
	},
];

export default function HowItWorks() {
	return (
		<section
			id="how-it-works"
			className="w-full pt-28 pb-32 md:pt-36 md:pb-48 relative z-10 bg-white"
		>
			{/* Background Glows */}
			<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary-dark/5 rounded-full blur-[120px] pointer-events-none" />

			<Container size="lg" className="relative z-10">
				<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
					{/* Left Sticky Header */}
					<div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)]">
						<SectionHeader
							tag="The Process"
							title="How It Works"
							textColor="dark"
							align="left"
							className="mb-8"
						/>
						<p className="text-black/60 text-[15px] leading-relaxed max-w-sm">
							Luminexis is designed to be completely intuitive. Our ecosystem
							communicates seamlessly to provide you with continuous, reliable
							environmental awareness.
						</p>
					</div>

					{/* Right Scrollable Cards */}
					<div className="lg:w-2/3 flex flex-col gap-6 lg:gap-12">
						{steps.map((step, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									duration: 0.8,
									ease: [0.16, 1, 0.3, 1],
								}}
								className={`relative group flex flex-col bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-primary/40 transition-all duration-500 overflow-hidden`}
							>
								{/* Content Header */}
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 lg:mb-6 relative z-10">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-primary/10">
											<div
												className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} p-1.5 flex items-center justify-center`}
											>
												{step.icon}
											</div>
										</div>
										<h3 className="text-base md:text-lg font-medium text-black tracking-tight">
											{step.title}
										</h3>
									</div>
									<div className="text-4xl md:text-5xl font-bold text-black/5 select-none font-logo">
										{step.id}
									</div>
								</div>

								{/* Description */}
								<p className="text-black/70 text-sm leading-relaxed max-w-lg mb-6 lg:mb-8 relative z-10 font-normal">
									{step.desc}
								</p>

								{/* Image Container */}
								<div className="relative w-full h-40 sm:h-56 rounded-xl overflow-hidden bg-white/50 border border-black/5 mt-auto">
									<img
										src={step.image}
										alt={step.title}
										className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}

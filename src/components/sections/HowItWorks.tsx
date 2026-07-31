"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
	{
		id: "01",
		title: "Wear Luminexis",
		desc: "Put on the glasses, hearing assist, and smart band. The ecosystem syncs instantly without any complicated pairing required.",
		image: "/images/hero-woman-cutout.png",
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
			className="w-full pt-28 pb-32 md:pt-36 md:pb-48 relative z-10 bg-background"
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
						<p className="text-foreground/60 text-[15px] leading-relaxed max-w-sm">
							Luminexis is designed to be completely intuitive. Our ecosystem
							communicates seamlessly to provide you with continuous, reliable
							environmental awareness.
						</p>
					</div>

					{/* Right Scrollable Cards */}
					<div className="lg:w-2/3 flex flex-col gap-8 lg:gap-10">
						{steps.map((step, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									duration: 0.7,
									delay: idx * 0.15,
									ease: [0.21, 1.11, 0.81, 0.99],
								}}
								className="group relative flex flex-col sm:flex-row bg-background rounded-3xl border border-foreground/[0.04]  overflow-hidden"
							>
								{/* Image Area */}
								<div className="relative w-full sm:w-[45%] h-64 sm:h-auto overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
									<img
										src={step.image}
										alt={step.title}
										className={`w-full h-full object-cover rounded-2xl`}
									/>
								</div>

								{/* Content Area */}
								<div className="relative w-full sm:w-[55%] p-8 sm:p-10 flex flex-col justify-center bg-background">
									<div className="absolute top-6 right-8 text-7xl font-bold text-foreground/[0.03] font-logo pointer-events-none select-none transition-all duration-500 group-hover:-translate-y-2 group-hover:text-primary/5">
										{step.id}
									</div>

									<div className="flex items-center gap-5 mb-6 relative z-10">
										<div
											className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-500`}
										>
											<div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center">
												<div
													className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}
												>
													{step.icon}
												</div>
											</div>
										</div>
										<h3 className="text-2xl font-semibold text-foreground tracking-tight">
											{step.title}
										</h3>
									</div>

									<p className="text-foreground/60 text-base leading-relaxed relative z-10 pr-4">
										{step.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}

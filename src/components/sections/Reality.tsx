"use client";

import { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, useScroll } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Reality() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end center"],
	});

	return (
		<section id="reality" className="w-full bg-background pt-8 pb-16 sm:pt-12 sm:pb-24 md:pt-16 md:pb-32">
			<Container size="lg">
				{/* Main content card wrapper mimicking figma container */}
				<div className="rounded-[2.5rem] bg-primary/5 p-8 sm:p-12 md:p-20 relative overflow-hidden">
					{/* Header section */}
					<SectionHeader
						tag="The Reality"
						title={
							<>
								A world not designed for
								<br />
								everyone
							</>
						}
						textColor="dark"
						className="mb-16 md:mb-28"
					/>

					<div className="relative mx-auto max-w-5xl" ref={containerRef}>
						{/* Animated continuous vertical line */}
						<div className="absolute left-[-2rem] top-0 bottom-0 w-[5px] md:w-[10px] rounded-full bg-primary/10 hidden lg:block overflow-hidden">
							<motion.div
								className="absolute top-0 w-full rounded-full bg-gradient-to-b from-primary/30 via-primary to-primary-dark origin-top"
								style={{ scaleY: scrollYProgress, height: "100%" }}
							/>
						</div>

						<div className="flex flex-col gap-20 md:gap-32 relative z-10">
							{/* Row 1: Blind Woman portrait (left) -> curves -> text (right) */}
							<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 relative">
								<div className="col-span-1 flex justify-center md:col-span-5 md:justify-end">
									<div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full sm:h-64 sm:w-64 shadow-sm">
										<Image
											src="/images/reality-blind-woman-square.jpg"
											alt="Blind woman with cane"
											fill
											sizes="(max-width: 768px) 192px, 256px"
											className="object-cover object-center"
										/>
									</div>
								</div>

								{/* Connecting lines fanning out */}
								<div className="col-span-2 hidden items-center justify-center h-full md:flex">
									<svg
										className="h-16 w-full text-primary/20"
										viewBox="0 0 100 40"
										fill="none"
									>
										<path
											d="M0,20 C30,20 40,5 100,5"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
										<path
											d="M0,20 C30,20 40,20 100,20"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
										<path
											d="M0,20 C30,20 40,35 100,35"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
									</svg>
								</div>

								<div className="col-span-1 flex flex-col items-start gap-2 md:col-span-5">
									<div className="flex items-center gap-3">
										<span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary block" />
										<h3 className="font-sans text-lg font-semibold text-foreground sm:text-xl">
											929 Million People Affected
										</h3>
									</div>
									<p className="pl-5 text-[15px] leading-relaxed text-foreground/60 max-w-sm">
										Millions of blind and deaf individuals struggle to navigate
										the world safely every day.
									</p>
								</div>
							</div>

							{/* Row 2: text (left) -> curves -> Bus stop (right) */}
							<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 relative flex-col-reverse md:flex-row">
								<div className="col-span-1 flex flex-col items-start gap-2 md:col-span-5 md:items-end md:text-right order-2 md:order-1">
									<div className="flex items-center gap-3 md:flex-row-reverse">
										<span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary block" />
										<h3 className="font-sans text-lg font-semibold text-foreground sm:text-xl">
											90% Left Without Access
										</h3>
									</div>
									<p className="pl-5 md:pl-0 md:pr-5 text-[15px] leading-relaxed text-foreground/60 max-w-sm">
										Most cannot afford existing solutions, leaving them without
										reliable support.
									</p>
								</div>

								{/* Connecting lines fanning out */}
								<div className="col-span-2 hidden items-center justify-center h-full md:flex order-2">
									<svg
										className="h-16 w-full text-primary/20"
										viewBox="0 0 100 40"
										fill="none"
									>
										<path
											d="M100,20 C70,20 60,5 0,5"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
										<path
											d="M100,20 C70,20 60,20 0,20"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
										<path
											d="M100,20 C70,20 60,35 0,35"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
									</svg>
								</div>

								<div className="col-span-1 flex justify-center md:col-span-5 md:justify-start order-1 md:order-3">
									<div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full sm:h-64 sm:w-64 shadow-sm">
										<Image
											src="/images/reality-img-2.jpg"
											alt="Person holding cane sitting at a bus stop"
											fill
											sizes="(max-width: 768px) 192px, 256px"
											className="object-cover object-center"
										/>
									</div>
								</div>
							</div>

							{/* Row 3: Smart Glasses (left) -> curves -> text (right) */}
							<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 relative">
								<div className="col-span-1 flex justify-center md:col-span-5 md:justify-end">
									<div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full sm:h-64 sm:w-64 shadow-sm">
										<Image
											src="/images/reality-img-3.jpg"
											alt="Woman smiling wearing smart glasses device"
											fill
											sizes="(max-width: 768px) 192px, 256px"
											className="object-cover object-center"
										/>
									</div>
								</div>

								{/* Connecting lines fanning out */}
								<div className="col-span-2 hidden items-center justify-center h-full md:flex">
									<svg
										className="h-16 w-full text-gray-300"
										viewBox="0 0 100 40"
										fill="none"
									>
										<path
											d="M0,20 C30,20 40,5 100,5"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
										<path
											d="M0,20 C30,20 40,20 100,20"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
										<path
											d="M0,20 C30,20 40,35 100,35"
											stroke="currentColor"
											strokeWidth="0.75"
										/>
									</svg>
								</div>

								<div className="col-span-1 flex flex-col items-start gap-2 md:col-span-5">
									<div className="flex items-center gap-3">
										<span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary block" />
										<h3 className="font-sans text-lg font-semibold text-foreground sm:text-xl">
											1 Simple Task, Multiple Barriers
										</h3>
									</div>
									<p className="pl-5 text-[15px] leading-relaxed text-foreground/60 max-w-sm">
										Walking, traveling, or exploring often requires assistance,
										limiting true independence.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

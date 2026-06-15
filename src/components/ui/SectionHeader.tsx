"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
	tag: string;
	title: ReactNode;
	align?: "left" | "center";
	textColor?: "light" | "dark";
	className?: string;
}

export function SectionHeader({
	tag,
	title,
	align = "center",
	textColor = "dark",
	className = "",
}: SectionHeaderProps) {
	const isLightText = textColor === "light";
	const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
	
	const tagColorClass = isLightText ? "text-primary" : "text-primary-dark";
	const lineColorClass = isLightText ? "bg-primary" : "bg-primary-dark/50";
	const titleColorClass = isLightText ? "text-white" : "text-black";

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
			className={`flex flex-col relative z-10 max-w-4xl ${alignClass} ${className}`}
		>
			<div className={`inline-flex items-center gap-3 mb-4 md:mb-6 opacity-90 justify-center`}>
				{align === "center" && <div className={`w-8 md:w-12 h-[1px] ${lineColorClass}`}></div>}
				<span className={`${tagColorClass} text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase`}>
					{tag}
				</span>
				<div className={`w-8 md:w-12 h-[1px] ${lineColorClass}`}></div>
			</div>
			<h2 className={`text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight ${titleColorClass}`}>
				{title}
			</h2>
		</motion.div>
	);
}

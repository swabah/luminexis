"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

const NAV_ITEMS = [
	{ label: "Story", href: "#story" },
	{ label: "Products", href: "#products" },
	{ label: "AI Core", href: "#ai" },
	{ label: "Features", href: "#features" },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled ? "py-4" : "py-6"
			}`}
		>
			<div
				className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
					isScrolled
						? "w-[90%] md:w-full rounded-full glass"
						: "w-full bg-transparent"
				}`}
			>
				<div className="flex items-center justify-between h-14 px-2">
					{/* Left Navigation */}
					<nav className="hidden md:flex items-center gap-8 flex-1">
						{NAV_ITEMS.slice(0, 2).map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="group relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
							>
								{item.label}
								<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
							</Link>
						))}
					</nav>

					{/* Center Logo */}
					<Link
						href="/"
						className="flex-1 md:flex-none flex justify-center items-center gap-2 group"
					>
						<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/40 transition-colors">
							<div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
						</div>
						<span className="font-heading text-xl font-bold tracking-wider text-foreground">
							LUMINEXIS
						</span>
					</Link>

					{/* Right Navigation & CTA */}
					<div className="hidden md:flex items-center justify-end gap-8 flex-1">
						<nav className="flex items-center gap-8">
							{NAV_ITEMS.slice(2, 4).map((item) => (
								<Link
									key={item.label}
									href={item.href}
									className="group relative text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
								>
									{item.label}
									<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
								</Link>
							))}
						</nav>
						<MagneticButton className="px-6 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary hover:text-white transition-colors">
							Book Demo
						</MagneticButton>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden text-foreground p-2"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<div className="w-6 h-5 flex flex-col justify-between">
							<span
								className={`w-full h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
							/>
							<span
								className={`w-full h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
							/>
							<span
								className={`w-full h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
							/>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute top-full left-0 right-0 p-4 md:hidden"
					>
						<div className="glass rounded-3xl p-6 flex flex-col gap-6">
							{NAV_ITEMS.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-lg font-medium text-foreground-secondary hover:text-foreground"
								>
									{item.label}
								</Link>
							))}
							<button className="w-full py-3 rounded-full bg-primary text-white font-semibold mt-4">
								Book Demo
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

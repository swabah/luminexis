"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
	label: string;
	href: string;
}

const NAV_ITEMS: NavItem[] = [
	{ label: "The Reality", href: "#reality" },
	{ label: "Luminexis", href: "#solution" },
	{ label: "How It Works", href: "#how-it-works" },
	{ label: "Why Us", href: "#why-us" },
];

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY >= 0);
		};

		window.addEventListener("scroll", handleScroll);
		// Check initial scroll position
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`w-full bg-black z-50 transition-all duration-300 ${
				isScrolled
					? "fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
					: "absolute top-0 bg-background"
			}`}
		>
			<div
				className={`container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
					isScrolled ? "h-16" : "h-16 md:h-24"
				}`}
			>
				<Link href="/" className="flex items-center gap-3">
					<div className="flex h-10 items-center justify-center relative">
						<Image
							src="/images/PNG Logo.png"
							alt="Luminexis Logo"
							width={40}
							height={40}
							className="object-contain"
						/>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav
					className="hidden items-center gap-10 md:flex absolute left-1/2 -translate-x-1/2"
					aria-label="Main navigation"
				>
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="text-white/60 hover:text-foreground text-[15px] font-medium transition-colors"
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Desktop CTA */}
				<div className="hidden md:block">
					<a
						href="https://wa.me/918113841363"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-medium text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
					>
						Connect Us
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					id="mobile-menu-toggle"
					className="text-white/60 hover:text-foreground inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-expanded={isMobileMenuOpen}
					aria-controls="mobile-menu"
					aria-label="Toggle navigation menu"
				>
					<svg
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
					>
						{isMobileMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<nav
					id="mobile-menu"
					className="bg-black border-b border-border md:hidden absolute top-full left-0 w-full shadow-lg"
					aria-label="Mobile navigation"
				>
					<div className="container mx-auto max-w-7xl space-y-1 px-4 pt-2 py-8 sm:px-6 flex flex-col gap-2">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-white/60 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition-colors"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<a
							href="https://wa.me/918113841363"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0f172a] px-7 text-[15px] font-medium text-white transition-all hover:bg-[#1e293b]"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Connect Us
						</a>
					</div>
				</nav>
			)}
		</header>
	);
}

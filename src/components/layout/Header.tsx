"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
	label: string;
	href: string;
}

const NAV_ITEMS: NavItem[] = [
	{ label: "The Reality", href: "#reality" },
	{ label: "Luminexis", href: "#luminax" },
	{ label: "How It Works", href: "#how-it-works" },
];

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white w-full absolute top-0 z-50">
			<div className="container mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center gap-3">
					<div className="flex h-8 w-8 items-center justify-center">
						<svg
							className="h-8 w-8 text-[#0f172a]"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M9 8h6" />
							<path d="M9 12h5" />
							<path d="M9 16h6" />
							<path d="M9 8v8" />
						</svg>
					</div>
					<span className="text-[#0f172a] text-xl font-medium tracking-tight">
						Luminexis
					</span>
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
							className="text-[#64748b] hover:text-[#0f172a] text-[15px] font-medium transition-colors"
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Desktop CTA */}
				<div className="hidden md:block">
					<Link
						href="/contact"
						className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f172a] px-7 text-[15px] font-medium text-white transition-all hover:bg-[#1e293b] hover:shadow-lg hover:-translate-y-0.5"
					>
						Connect Us
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					id="mobile-menu-toggle"
					className="text-[#64748b] hover:text-[#0f172a] inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden"
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
					className="bg-white border-b border-gray-100 md:hidden absolute top-full left-0 w-full shadow-lg"
					aria-label="Mobile navigation"
				>
					<div className="container mx-auto max-w-7xl space-y-1 px-4 pt-2 pb-6 sm:px-6 flex flex-col gap-2">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-[#64748b] hover:bg-gray-50 hover:text-[#0f172a] block rounded-md px-3 py-2 text-base font-medium transition-colors"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<Link
							href="/contact"
							className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0f172a] px-7 text-[15px] font-medium text-white transition-all hover:bg-[#1e293b]"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Connect Us
						</Link>
					</div>
				</nav>
			)}
		</header>
	);
}

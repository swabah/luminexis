import type { Metadata, Viewport } from "next";
import { Oxanium, Inter } from "next/font/google";
import { SITE_CONFIG } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from "@/components/providers/LenisProvider";
import "./globals.css";

const oxanium = Oxanium({
	variable: "--font-oxanium",
	subsets: ["latin"],
	display: "swap",
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: {
		default: SITE_CONFIG.name,
		template: `%s | ${SITE_CONFIG.name}`,
	},
	description: SITE_CONFIG.description,
	metadataBase: new URL(SITE_CONFIG.url),
	openGraph: {
		type: "website",
		locale: SITE_CONFIG.locale,
		url: SITE_CONFIG.url,
		siteName: SITE_CONFIG.name,
		title: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${oxanium.variable} ${inter.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="bg-background text-foreground flex min-h-full flex-col">
				<LenisProvider>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</LenisProvider>
				<Analytics />
			</body>
		</html>
	);
}

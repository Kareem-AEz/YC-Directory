import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Script from "next/script";

import { Toaster } from "sonner";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

import "./globals.css";
import "easymde/dist/easymde.min.css";

const workSans = Work_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-work-sans",
});

export const metadata: Metadata = {
	title: {
		template: "%s | YC-Directory",
		default: "YC-Directory",
	},
	description:
		"YC-Directory - Pitch Your Startup, Connect with Entrepreneurs. A platform for startup founders to showcase their ideas and connect with the entrepreneurial community.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${workSans.variable} flex min-h-screen flex-col antialiased`}
			>
				<Navbar />

				{children}

				<Footer />
				<Toaster
					richColors
					position="top-center"
				/>
				<Script
					src="/spaghetti"
					data-website-id="1a60e35b-e597-48e3-82c1-924698a141fc"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Facebook, Github, Heart, Instagram, Twitter } from "lucide-react";

// Component organization with constants for better maintainability
const SOCIAL_LINKS = [
	{ icon: Facebook, href: "#", label: "Facebook" },
	{ icon: Twitter, href: "#", label: "Twitter" },
	{ icon: Instagram, href: "#", label: "Instagram" },
	{ icon: Github, href: "#", label: "Github" },
];

const QUICK_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/startups", label: "Explore Startups" },
	{ href: "/blog", label: "Blog" },
];

const CATEGORIES = [
	{ href: "/category/tech", label: "Tech" },
	{ href: "/category/fintech", label: "Fintech" },
	{ href: "/category/health", label: "Healthcare" },
	{ href: "/category/ai", label: "AI & ML" },
];

const BOTTOM_LINKS = [
	{ href: "/privacy", label: "Privacy Policy" },
	{ href: "/terms", label: "Terms of Service" },
	{ href: "/cookies", label: "Cookie Policy" },
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="font-work-sans border-t-4 border-black bg-white pt-10 pb-6">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Logo and Description */}
					<div className="col-span-1 sm:col-span-2 lg:col-span-1">
						<Link href="/">
							<Image
								src="/logo.png"
								alt="logo"
								width={144}
								height={30}
								priority
								className="mb-4"
							/>
						</Link>
						<p className="text-black-100 mb-4 max-w-xs text-sm">
							Your platform to discover the most innovative startups across all
							industries.
						</p>
						<div className="flex space-x-4">
							{SOCIAL_LINKS.map((social) => (
								<Link
									key={social.label}
									href={social.href}
									className="hover:text-primary text-black transition-colors"
									aria-label={social.label}
								>
									<social.icon size={20} />
								</Link>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div className="col-span-1">
						<h3 className="title_container relative mb-4 inline-block px-2 py-1 text-lg font-bold text-white">
							Quick Links
						</h3>
						<ul className="mt-4 space-y-2">
							{QUICK_LINKS.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-black-100 hover:text-primary transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Categories */}
					<div className="col-span-1">
						<h3 className="title_container relative mb-4 inline-block px-2 py-1 text-lg font-bold text-white">
							Categories
						</h3>
						<ul className="mt-4 space-y-2">
							{CATEGORIES.map((category) => (
								<li key={category.label}>
									<Link
										href={category.href}
										className="text-black-100 hover:text-primary transition-colors"
									>
										{category.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Credits Section */}
				<div className="mt-8 border-t border-dashed border-gray-200 py-4">
					<div className="flex flex-col items-center justify-center text-center">
						<div className="mb-2 flex items-center space-x-2">
							<span className="text-black-100 text-sm">Made with</span>
							<Heart
								className="text-primary"
								size={16}
								fill="#ee2b69"
							/>
							<a
								href="https://github.com/Kareem-AEz"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline"
							>
								Kareem Ahmed
							</a>
						</div>
						<p className="text-black-300 text-xs">
							Based on a tutorial by{" "}
							<a
								href="https://youtu.be/Zq5fmkH0T78?si=3DO-l0qyjxUgeIzm"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline"
							>
								JSM Mastery
							</a>{" "}
							with added enhancements
						</p>
					</div>
				</div>

				{/* Bottom Section with Copyright */}
				<div className="mt-6 border-t border-gray-200 pt-6">
					<div className="flex flex-col items-center justify-between md:flex-row">
						<p className="text-black-100 text-sm">
							© {currentYear} Startup Platform. All rights reserved.
						</p>
						<div className="mt-4 flex flex-wrap justify-center gap-4 md:mt-0 md:gap-6">
							{BOTTOM_LINKS.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className="text-black-100 hover:text-primary text-sm transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

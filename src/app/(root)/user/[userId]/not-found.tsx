"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { UserX } from "lucide-react";
import { motion } from "motion/react";

export default function UserNotFound() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
			<div className="flex max-w-md flex-col items-center space-y-6">
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "spring", duration: 0.8 }}
					className="bg-primary/10 rounded-full p-4"
				>
					<motion.div
						animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
						transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
					>
						<UserX className="text-primary h-10 w-10" />
					</motion.div>
				</motion.div>

				<motion.h1
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					className="text-3xl font-bold tracking-tight"
				>
					User Not Found
				</motion.h1>

				<motion.p
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.4 }}
					className="text-muted-foreground"
				>
					We couldn&apos;t find the user you&apos;re looking for. They may have
					deleted their account or the user ID might be incorrect.
				</motion.p>

				<div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						whileTap={{ scale: 0.95 }}
						className="flex-1"
					>
						<Link
							href="/"
							className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary inline-block w-full rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
						>
							Return Home
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

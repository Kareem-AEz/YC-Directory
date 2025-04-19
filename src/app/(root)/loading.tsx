"use client";

import React from "react";

import { LucideLoader2 } from "lucide-react";
import { motion } from "motion/react";

function Loading() {
	return (
		<div className="flex h-full flex-1 flex-col items-center justify-center bg-white dark:bg-zinc-950">
			<div className="flex flex-col items-center space-y-6">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-3xl font-bold text-zinc-900 dark:text-white"
				>
					YC-Directory
				</motion.div>

				<motion.div
					animate={{
						rotate: 360,
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: "linear",
					}}
					className="text-primary"
				>
					<LucideLoader2 size={36} />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="text-sm text-zinc-500 dark:text-zinc-400"
				>
					Loading amazing startups...
				</motion.div>
			</div>
		</div>
	);
}

export default Loading;

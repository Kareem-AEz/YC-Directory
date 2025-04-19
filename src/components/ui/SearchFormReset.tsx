"use client";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";

function SearchFormReset({ query }: { query: string }) {
	const reset = () => {
		const form = document.querySelector(".search-form") as HTMLFormElement;

		if (form) form.reset();
	};
	return (
		<AnimatePresence initial={false}>
			{query && (
				<motion.button
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{
						opacity: 1,
						scale: 1,
						transition: { type: "spring", duration: 0.6, bounce: 0.4 },
					}}
					exit={{
						opacity: 0,
						scale: 0.5,
						transition: { type: "spring", duration: 0.4, bounce: 0.25 },
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					type="reset"
					onClick={reset}
				>
					<Link
						href="/"
						className="search-btn text-white"
					>
						<X />
					</Link>
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default SearchFormReset;

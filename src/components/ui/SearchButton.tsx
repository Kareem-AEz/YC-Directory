"use client";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect } from "react";

function SearchButton({ currentQuery }: { currentQuery: string }) {
	const handleSubmit = (e: React.FormEvent) => {
		const form = (e.target as HTMLElement).closest(".search-form");
		const query = (
			form?.querySelector(".search-input") as HTMLInputElement
		).value.trim();

		if (!query || query === currentQuery) e.preventDefault();
	};
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className="search-btn cursor-pointer text-white"
			onClick={handleSubmit}
		>
			<Search />
		</motion.button>
	);
}

export default SearchButton;

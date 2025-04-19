"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { useFollowPointer } from "@/hooks/useFollowPointer";
import { cn } from "@/lib/utils";

function PinkContainer({
	children,
	className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
	const ref = useRef<HTMLDivElement>(null);
	const { x, y } = useFollowPointer({
		ref,
		flyHome: true,
		damp: 0.05,
		reverse: true,
	});

	return (
		<div
			ref={ref}
			className={cn(
				`bg-primary relative flex min-h-(--container-min-h) w-full flex-col items-center justify-center overflow-hidden px-6 py-10`,
				className
			)}
		>
			<div className="z-10 flex flex-col items-center justify-center">
				{children}
			</div>

			{/* Pattern Background */}
			<motion.div
				className="pattern"
				style={{
					"--translate-x": x,
					"--translate-y": y,
				}}
			/>
		</div>
	);
}

export default PinkContainer;

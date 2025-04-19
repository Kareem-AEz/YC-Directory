import { RefObject, useEffect, useState } from "react";
import { frame, useSpring } from "motion/react";

type UseFollowPointerParams = {
	ref: RefObject<HTMLDivElement | null>;
	springConfig?: {
		damping?: number;
		stiffness?: number;
		mass?: number;
		type?: string;
		bounce?: number;
		visualDuration?: number;
	};
	damp?: number;
	flyHome?: boolean;
	reverse?: boolean;
	disableOnTouch?: boolean;
};

export function useFollowPointer({
	ref,
	springConfig = {
		type: "spring",
		bounce: 0.05,
		visualDuration: 0.8,
	},
	damp = 0.5,
	flyHome = true,
	reverse = false,
	disableOnTouch = true,
}: UseFollowPointerParams) {
	const x = useSpring(0, springConfig);
	const y = useSpring(0, springConfig);
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		// Detect touch device on mount
		const detectTouch = () => {
			setIsTouchDevice(
				"ontouchstart" in window ||
					navigator.maxTouchPoints > 0 ||
					// IE-specific property
					("msMaxTouchPoints" in navigator &&
						(navigator as { msMaxTouchPoints: number }).msMaxTouchPoints > 0)
			);
		};

		detectTouch();

		// Also check on resize in case of device mode changes
		window.addEventListener("resize", detectTouch);
		return () => window.removeEventListener("resize", detectTouch);
	}, []);

	useEffect(() => {
		if (!ref.current || (disableOnTouch && isTouchDevice)) {
			// Skip effect for touch devices if disabled
			return;
		}

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
			const element = ref.current!;

			frame.read(() => {
				const damping = reverse ? -damp : damp;
				x.set(
					(clientX - element.offsetLeft - element.offsetWidth / 2) * damping
				);
				y.set(
					(clientY - element.offsetTop - element.offsetHeight / 2) * damping
				);
			});
		};

		const handlePointerLeave = () => {
			if (!flyHome) return;

			// Reset position to center when mouse leaves the element
			frame.update(() => {
				x.set(0);
				y.set(0);
			});
		};

		// Add event listeners to the element itself
		const element = ref.current;
		element.addEventListener("pointermove", handlePointerMove);
		element.addEventListener("mouseleave", handlePointerLeave);

		return () => {
			element.removeEventListener("pointermove", handlePointerMove);
			element.removeEventListener("mouseleave", handlePointerLeave);
		};
	}, [damp, flyHome, ref, x, y, reverse, disableOnTouch, isTouchDevice]);

	return { x, y };
}

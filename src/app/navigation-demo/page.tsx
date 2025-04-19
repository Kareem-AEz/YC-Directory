"use client";

import NavigationListener from "@/components/examples/NavigationListener";
import { useNavigation } from "@/context/NavigationContext";
import Link from "next/link";

export default function NavigationDemoPage() {
	const { navigate } = useNavigation();

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="mb-6 text-2xl font-bold">Navigation Context Demo</h1>

			<div className="mb-8">
				<h2 className="mb-4 text-xl font-semibold">Navigation Methods</h2>
				<div className="flex flex-wrap gap-4">
					{/* Next.js Link component navigation */}
					<Link
						href="/"
						className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
					>
						Home (Next.js Link)
					</Link>

					{/* Next.js Link component with query params */}
					<Link
						href="/?demo=true&param=test"
						className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
					>
						Home with params (Next.js Link)
					</Link>

					{/* Programmatic navigation via context */}
					<button
						onClick={() => navigate("/navigation-demo?from=button")}
						className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
					>
						Refresh page with params (Context navigate)
					</button>

					{/* Regular anchor tag (will cause full page refresh) */}
					<a
						href="/"
						className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
					>
						Home (Regular anchor - full refresh)
					</a>
				</div>
			</div>

			{/* Display navigation information */}
			<NavigationListener />

			<div className="mt-8 text-sm text-gray-600">
				<h3 className="mb-2 font-medium">How it works:</h3>
				<ul className="list-disc space-y-2 pl-5">
					<li>
						The NavigationContext tracks page navigation and maintains the
						current and previous paths.
					</li>
					<li>
						The <code>onNavigate</code> hook allows components to subscribe to
						navigation events.
					</li>
					<li>
						Works with both Next.js Link components and programmatic navigation.
					</li>
					<li>Query parameters are also tracked and accessible.</li>
				</ul>
			</div>
		</div>
	);
}

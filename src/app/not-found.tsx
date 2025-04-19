import Link from "next/link";

import { FileQuestion } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
			<div className="flex max-w-md flex-col items-center space-y-6">
				<div className="bg-primary/10 rounded-full p-4">
					<FileQuestion className="text-primary h-10 w-10" />
				</div>

				<h1 className="text-4xl font-bold tracking-tight">404</h1>
				<h2 className="text-2xl font-semibold tracking-tight">
					Page Not Found
				</h2>

				<p className="text-muted-foreground">
					We couldn&apos;t find the page you&apos;re looking for. The page might
					have been moved, deleted, or never existed.
				</p>

				<Link
					href="/"
					className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary mt-4 rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
				>
					Return Home
				</Link>
			</div>
		</div>
	);
}

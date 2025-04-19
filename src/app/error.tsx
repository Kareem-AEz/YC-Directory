"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

import { AlertTriangle } from "lucide-react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		// console.error(error);
	}, [error]);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
			<div className="flex max-w-md flex-col items-center space-y-4">
				<div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
					<AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
				</div>

				<h2 className="text-2xl font-bold tracking-tight">
					Something went wrong!
				</h2>

				<p className="text-muted-foreground">
					{error.message || "An unexpected error occurred"}
				</p>

				{error.digest && (
					<p className="bg-muted rounded-md px-4 py-2 font-mono text-xs">
						Error ID: {error.digest}
					</p>
				)}

				<button
					onClick={() => reset()}
					className="bg-primary hover:bg-primary/90 focus:ring-primary mt-4 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
				>
					Try again
				</button>
			</div>
		</div>
	);
}

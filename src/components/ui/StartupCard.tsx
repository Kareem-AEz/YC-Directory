import Image from "next/image";
import Link from "next/link";

import { EyeIcon } from "lucide-react";

import { cn, formatDate } from "@/lib/utils";

import { Button } from "./button";
import { Skeleton } from "./skeleton";

import { Author, Startup } from "@/sanity/types";

export type StartupCardType = Omit<Startup, "author"> & {
	author?: Author;
};

function StartupCard({ post }: { post: StartupCardType }) {
	const {
		_createdAt,
		views,
		author,
		description,
		_id,
		image,
		category,
		title,
	} = post;

	return (
		<li className="startup_card group">
			<div className="flex items-center justify-between">
				<p className="startup_card-date">{formatDate(_createdAt)}</p>

				<div className="flex items-center justify-center gap-1">
					<EyeIcon className="text-primary size-5" />
					<span className="text-base font-medium">{views}</span>
				</div>
			</div>

			<div className="mt-5 flex items-center justify-between gap-5">
				<div className="flex flex-col">
					<Link href={`/user/${author?._id}`}>
						<p className="line-clamp-1 w-fit text-base font-medium">
							{author?.name}
						</p>
					</Link>
					<Link href={`/startup/${_id}`}>
						<h3 className="line-clamp-1 text-2xl font-semibold">{title}</h3>
					</Link>
				</div>

				<Link
					href={`/user/${author?._id}`}
					className="aspect-square size-12 overflow-clip rounded-full"
				>
					<img
						src={
							author?.image
								? author?.image
								: "https://placehold.co/56x56/000/fff/png?text=YC"
						}
						alt="author"
						className="pointer-events-none h-full w-full object-cover"
					/>
				</Link>
			</div>

			<Link href={`/startup/${_id}`}>
				<p className="startup_card-description">{description}</p>
				<Image
					src={image ?? ""}
					alt={title ?? ""}
					width={500}
					height={500}
					quality={100}
					className="startup_card-image pointer-events-none"
				/>
			</Link>

			<div className="mt-5 flex items-center justify-between gap-3">
				<Link href={`/?query=${category?.toLowerCase()}`}>
					<p className="text-base font-medium">{category}</p>
				</Link>

				<Button
					className="startup_card-btn bg-black"
					asChild
				>
					<Link href={`/startup/${_id}`}>Details</Link>
				</Button>
			</div>
		</li>
	);
}

export const StartupCardSkeleton = () => (
	<>
		{Array.from({ length: 4 }).map((_, index) => (
			<li key={cn("skeleton", index)}>
				<Skeleton className="h-96 w-full rounded-xl bg-zinc-400" />
			</li>
		))}
	</>
);

export default StartupCard;

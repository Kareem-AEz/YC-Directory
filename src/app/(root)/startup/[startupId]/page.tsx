import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import markdownit from "markdown-it";

import { formatDate } from "@/lib/utils";

import Heading from "@/components/base/Heading";
import PinkContainer from "@/components/ui/PinkContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { StartupCardType } from "@/components/ui/StartupCard";
import View from "@/components/ui/View";

import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";

const md = markdownit();

async function page({ params }: { params: Promise<{ startupId: string }> }) {
	const { startupId } = await params;
	const startup: StartupCardType = await client.fetch(STARTUP_BY_ID_QUERY, {
		startupId,
	});

	if (!startup) {
		return notFound();
	}

	const parsedContent = md.render(startup?.pitch || "");

	return (
		<>
			<PinkContainer className="min-h-72">
				<p className={"tag"}>{formatDate(startup?._createdAt)}</p>
				<Heading>{startup?.title}</Heading>
				<p className="sub-heading !max-w-3xl bg-black/50 px-4 py-2 backdrop-blur-xs">
					{startup?.description}
				</p>
			</PinkContainer>

			<section className="section-container">
				<div
					className={
						"mx-auto flex max-h-96 max-w-4xl items-center justify-center overflow-hidden rounded-xl"
					}
				>
					{startup.image ? (
						<Image
							src={startup?.image}
							alt={startup.title || "Startup image"}
							width={800}
							height={600}
							priority
							className={
								"pointer-events-none h-auto w-full rounded-xl object-cover object-center select-none"
							}
						/>
					) : (
						<img
							src="https://placehold.co/600x400/000/fff?text=YC"
							alt="No image"
							className={
								"pointer-events-none h-auto w-full rounded-xl object-cover object-center select-none"
							}
						/>
					)}
				</div>

				<div className={"mx-auto mt-10 max-w-4xl space-y-5"}>
					<div className={"flex items-center justify-between gap-5"}>
						<Link
							href={`/user/${startup?.author?._id}`}
							className="mb-3 flex items-center gap-2"
						>
							<img
								src={startup?.author?.image}
								alt={startup?.author?.name}
								className="size-16 rounded-full drop-shadow-lg"
							/>
							<div>
								<p className="text-xl font-medium">{startup?.author?.name}</p>
								<p className="text-black-300 text-base font-medium">
									@{startup?.author?.username}
								</p>
							</div>
						</Link>

						<p className="category_tag">{startup?.category}</p>
					</div>

					<h3 className="text-3xl font-bold">Pitch Details</h3>

					{parsedContent ? (
						<article
							className="prose max-w-4xl"
							dangerouslySetInnerHTML={{ __html: parsedContent }}
						/>
					) : (
						<p className="text-black-100 text-sm font-normal">No details</p>
					)}
				</div>

				{/* <hr className="mx-auto my-10 max-w-4xl border-dotted bg-zinc-400" /> */}

				{/* //TODO: EDITOR SELECTED STARTUPS */}

				<Suspense
					fallback={
						<Skeleton className="fixed right-3 bottom-3 h-10 w-24 rounded-lg bg-zinc-400" />
					}
				>
					<View id={startup?._id} />
				</Suspense>
			</section>
		</>
	);
}

export default page;

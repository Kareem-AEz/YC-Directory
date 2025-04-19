import { Suspense } from "react";
import { notFound } from "next/navigation";

import { auth } from "@/auth";
import { cn } from "@/lib/utils";

import { StartupCardSkeleton } from "@/components/ui/StartupCard";
import UserStartups from "@/components/ui/UserStartups";

import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";

async function page({ params }: { params: Promise<{ userId: string }> }) {
	const { userId } = await params;
	const session = await auth();

	const user = await client.fetch(AUTHOR_BY_ID_QUERY, {
		authorId: userId,
	});

	if (!user) return notFound();

	return (
		<>
			<section className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 pt-20 pb-10 lg:flex-row">
				<div className="bg-primary shadow-100 relative z-0 flex h-fit min-w-96 flex-col items-center justify-center self-start rounded-3xl border-[5px] border-black px-6 pt-20 pb-6 max-lg:w-full">
					<div
						className={cn(
							"rounded-4 shadow-100 absolute -top-9 w-11/12 border-4 border-black bg-white px-5 py-3",
							"title_container"
						)}
					>
						<h3 className="line-clamp-1 text-center text-2xl text-black uppercase">
							{user?.name}
						</h3>
					</div>

					<img
						src={user?.image}
						alt={user?.name}
						className="pointer-events-none size-60 rounded-full border-4 border-black object-cover select-none"
					/>
					<p className="mt-7 text-center text-3xl font-extrabold text-white">
						@{user?.username}
					</p>

					<p className="mt-1 text-center text-sm font-bold text-white">
						{user?.bio}
					</p>
				</div>

				<div className="flex flex-1 flex-col gap-5 self-start">
					<p className="text-3xl font-bold">
						{session?.user?.id === userId ? "Your" : "All"} Startups
					</p>

					<ul className="grid flex-1 gap-5 sm:grid-cols-2">
						<Suspense fallback={<StartupCardSkeleton />}>
							<UserStartups userId={userId} />
						</Suspense>
					</ul>
				</div>
			</section>
		</>
	);
}

export default page;

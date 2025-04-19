import Heading from "@/components/base/Heading";
import PinkContainer from "@/components/ui/PinkContainer";
import SearchForm from "@/components/ui/SearchForm";
import StartupCard, { StartupCardType } from "@/components/ui/StartupCard";

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;
	const params = { search: query || null };
	// const posts = await client.fetch(STARTUPS_QUERY);
	// console.log(JSON.stringify(posts, null, 2));
	const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

	return (
		<>
			<section>
				<PinkContainer>
					<Heading>
						Pitch Your Startup, <br /> Connect with Entrepreneurs
					</Heading>

					<p className="sub-heading !max-w-3xl bg-black/50 px-4 py-2 backdrop-blur-xs">
						Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
						Competitions.
					</p>
					<SearchForm query={query} />
				</PinkContainer>
			</section>

			<section className="section-container">
				<p className="text-3xl font-semibold">
					{query ? `Search results for "${query}"` : `All Startups`}
				</p>

				<ul className="card_grid mt-7">
					{posts?.length > 0 ? (
						posts.map((post) => (
							<StartupCard
								key={post?._id}
								post={post as StartupCardType}
							/>
						))
					) : (
						<p className="no_results">No startups found</p>
					)}
				</ul>
			</section>

			<SanityLive />
		</>
	);
}

export default Home;

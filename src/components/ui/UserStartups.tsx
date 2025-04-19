import React from "react";

import StartupCard, { StartupCardType } from "@/components/ui/StartupCard";

import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";

async function UserStartups({ userId }: { userId: string }) {
	const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { userId });

	return (
		<>
			{startups.length > 0 ? (
				startups.map((startup: StartupCardType) => (
					<StartupCard
						key={startup._id}
						post={startup}
					/>
				))
			) : (
				<p className="no_results">No startups</p>
			)}
		</>
	);
}

export default UserStartups;

import React from "react";
import Ping from "@/components/ui/Ping";
import { client } from "@/sanity/lib/client";
import { VIEWS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/writeClient";
import { after } from "next/server";

async function View({ id }: { id: string }) {
	const { views: totalViews } = await client
		.withConfig({ useCdn: false })
		.fetch(VIEWS_BY_ID_QUERY, { startupId: id });

	after(async () => {
		await writeClient.patch(id).inc({ views: 1 }).commit();
	});
    
	return (
		<div className="fixed right-3 bottom-3 mt-5 flex items-center justify-end">
			<div className="absolute -top-2 -right-2">
				<Ping />
			</div>
			<p className="bg-primary-100 rounded-lg px-4 py-2 text-base font-medium capitalize">
				<span className="font-black">{totalViews} Views</span>
			</p>
		</div>
	);
}

export default View;

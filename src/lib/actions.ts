"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/writeClient";
import slugify from "slugify";

export const createPitch = async (
	state: unknown,
	form: FormData,
	pitch: string
) => {
	const session = await auth();

	if (!session)
		return parseServerActionResponse({
			error: "Not authenticated",
			status: "ERROR",
		});

	const { title, description, category, link } = Object.fromEntries(
		Array.from(form).filter(([key]) => key !== "pitch")
	);

	const slug = slugify(title as string, { lower: true, strict: true });

	try {
		const startup = {
			views: 0,
			title,
			slug: {
				_type: "slug",
				current: slug,
			},
			description,
			category,
			image: link,
			pitch,
			author: {
				_ref: session?.user?.id,
				_type: "reference",
			},
		};

		const result = await writeClient.create({
			_type: "startup",
			...startup,
		});

		return parseServerActionResponse({
			...result,
			error: "",
			status: "SUCCESS",
		});
	} catch (error) {
		console.log(error);

		return parseServerActionResponse({
			error: JSON.stringify(error),
			status: "ERROR",
		});
	}
};

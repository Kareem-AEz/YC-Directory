import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("content")
		.items([
			S.documentTypeListItem("author").title("Authors"),
			S.documentTypeListItem("startup").title("Startups"),
		]);

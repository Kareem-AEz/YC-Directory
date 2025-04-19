import React from "react";
import Form from "next/form";
import SearchFormReset from "@/components/ui/SearchFormReset";
import SearchButton from "@/components/ui/SearchButton";

function SearchForm({ query }: { query?: string }) {
	return (
		<Form
			action="/"
			scroll={false}
			className="search-form gap-2"
		>
			<input
				name="query"
				className="search-input "
				placeholder="Search Startups"
				defaultValue={query}
			/>
			<div className="flex gap-2">
				<SearchFormReset query={query || ""} />
				<SearchButton currentQuery={query || ""} />
			</div>
		</Form>
	);
}

export default SearchForm;

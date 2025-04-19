import React from "react";

function Heading({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<h1 className="my-5 max-w-5xl bg-black px-6 py-3 text-center text-4xl leading-12 font-extrabold text-white uppercase sm:text-5xl sm:leading-16">
			{children}
		</h1>
	);
}

export default Heading;

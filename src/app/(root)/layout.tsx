import React from "react";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="flex flex-1 flex-col justify-center">{children}</main>
	);
}

export default layout;

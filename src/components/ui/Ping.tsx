import React from "react";

function Ping() {
	return (
		<div className="relative">
			<div className="absolute top-1 right-1">
				<span className="flex size-3">
					<span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
					<span className="bg-primary relative inline-flex h-3 w-3 rounded-full" />
				</span>
			</div>
		</div>
	);
}

export default Ping;

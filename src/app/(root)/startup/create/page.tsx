import { redirect } from "next/navigation";

import { auth } from "@/auth";

import Heading from "@/components/base/Heading";
import PinkContainer from "@/components/ui/PinkContainer";
import StartupForm from "@/components/ui/StartupForm";

async function Page() {
	const session = await auth();

	if (!session) redirect("/");

	return (
		<>
			<PinkContainer className="min-h-72">
				<Heading>Submit your Startup</Heading>
			</PinkContainer>

			<StartupForm />
		</>
	);
}

export default Page;

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BadgePlus, LogOut } from "lucide-react";

import { auth, signIn, signOut } from "@/auth";

import { Avatar, AvatarImage } from "./avatar";

async function Navbar() {
	const session = await auth();

	return (
		<header className="font-work-sans bg-white px-5 py-3">
			<nav className="flex items-center justify-between">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="logo"
						width={144}
						height={30}
						priority
					/>
				</Link>

				<div className="flex items-center gap-5 text-black">
					{session && session?.user ? (
						<>
							<Link href={"/startup/create"}>
								{/* <span>Create</span> */}
								<BadgePlus />
							</Link>

							<form
								action={async () => {
									"use server";
									await signOut({ redirectTo: "/" });
								}}
							>
								<button className="cursor-pointer text-red-500">
									<LogOut />
								</button>
							</form>

							<Link href={`/user/${session?.user?.id}`}>
								{/* <span>{session?.user?.name}</span> */}
								<Avatar className="size-10">
									<AvatarImage src={session?.user?.image} />
								</Avatar>
							</Link>
						</>
					) : (
						<>
							<form
								action={async () => {
									"use server";
									await signIn("github");
								}}
							>
								<button>Login</button>
							</form>
						</>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Navbar;

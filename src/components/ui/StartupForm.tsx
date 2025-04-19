"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/lib/validation";
import MDEditor from "@uiw/react-md-editor";

import { createPitch } from "@/lib/actions";
import { Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./button";

function StartupForm() {
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [pitch, setPitch] = useState("");
	const router = useRouter();

	const handleFormSubmit = async (prevState: any, formData: FormData) => {
		try {
			const formValues = {
				title: formData.get("title") as string,
				description: formData.get("description") as string,
				category: formData.get("category") as string,
				link: formData.get("link") as string,
				pitch,
			};

			await formSchema.parseAsync(formValues);

			const result = await createPitch(prevState, formData, pitch);

			if (result.status === "SUCCESS") {
				toast.success("Form submitted successfully", {
					description: "Your startup has been submitted successfully",
					duration: 5000,
				});
				router.push(`/startup/${result?._id}`);
			}

			return result;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const fieldErrors = error.flatten().fieldErrors;

				setErrors(fieldErrors as unknown as Record<string, string>);
				toast.error("Validation failed", {
					description: "Please check your inputs, and try again",
					duration: 5000,
				});

				return { ...prevState, error: "Validation failed", status: "ERROR" };
			}

			toast.error("Something went wrong");
			return { ...prevState, error: "Something went wrong", status: "ERROR" };
		}
	};

	const [state, formAction, isPending] = useActionState(handleFormSubmit, {
		error: "",
		status: "INITIAL",
	});

	const [isPendingTest, setIsPendingTest] = useState(false);

	return (
		<>
			<form
				action={formAction}
				className="mx-auto my-10 max-w-2xl space-y-8 bg-white px-6"
			>
				<div>
					<label
						htmlFor="title"
						className="text-xl font-bold text-black uppercase"
					>
						Title
					</label>
					<Input
						id="title"
						name="title"
						className="placeholder:text-black-300 text-text-xl mt-3 rounded-full border-4 border-black px-5 py-7 font-semibold text-black"
						required
						placeholder="Startup Title"
					/>

					{errors.title && (
						<p className="mt-2 ml-5 text-red-500">{errors.title}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="description"
						className="text-xl font-bold text-black uppercase"
					>
						Description
					</label>
					<Textarea
						id="description"
						name="description"
						className="placeholder:text-black-300 mt-3 rounded-l-2xl border-4 border-black p-5 text-xl font-semibold text-black"
						required
						placeholder="Startup Description"
					/>

					{errors.description && (
						<p className="mt-2 ml-5 text-red-500">{errors.description}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="category"
						className="text-xl font-bold text-black uppercase"
					>
						Category
					</label>
					<Input
						id="category"
						name="category"
						className="placeholder:text-black-300 text-text-xl mt-3 rounded-full border-4 border-black px-5 py-7 font-semibold text-black"
						required
						placeholder="Startup Category (e.g. Web3, AI, etc.)"
					/>

					{errors.category && (
						<p className="mt-2 ml-5 text-red-500">{errors.category}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="link"
						className="text-xl font-bold text-black uppercase"
					>
						Image URL
					</label>
					<Input
						id="link"
						name="link"
						className="placeholder:text-black-300 text-text-xl mt-3 rounded-full border-4 border-black px-5 py-7 font-semibold text-black"
						required
						placeholder="Startup Image URL"
					/>

					{errors.link && (
						<p className="mt-2 ml-5 text-red-500">{errors.link[0]}</p>
					)}
				</div>

				<div data-color-mode="light">
					<label
						htmlFor="pitch"
						className="text-xl font-bold text-black uppercase"
					>
						Pitch
					</label>

					<MDEditor
						value={pitch}
						onChange={(value) => setPitch(value || "")}
						id="pitch"
						preview="edit"
						height={300}
						style={{ borderRadius: 10, overflow: "hidden" }}
						textareaProps={{
							placeholder:
								"Briefly describe your startup and what problem it solves. (Markdown Supported)",
						}}
						previewOptions={{
							disallowedElements: ["style"],
						}}
					/>

					{errors.pitch && (
						<p className="mt-2 ml-5 text-red-500">{errors.pitch}</p>
					)}
				</div>

				<Button
					type="submit"
					className="bg-primary group/startupFormButton min-h-16 w-full cursor-pointer rounded-full border-4 border-black p-5 text-xl font-bold text-white transition-[scale] duration-300 "
					disabled={isPending}
				>
					<AnimatePresence
						initial={false}
						mode="popLayout"
					>
						{isPending ? (
							<motion.span
								key={"loading"}
								initial={{ opacity: 0, y: -10 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.2,
									},
								}}
								exit={{ opacity: 0, y: 10 }}
								transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
								className="will-change-transform"
							>
								Creating Startup...
							</motion.span>
						) : (
							<motion.span
								key={"default"}
								initial={{ opacity: 0, y: -10 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.2,
									},
								}}
								exit={{
									opacity: 0,
									y: 10,
								}}
								transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
								className="flex items-center gap-2 will-change-transform"
							>
								Create Startup
								<Send className="size-6 transition-transform duration-200 group-hover/startupFormButton:translate-x-1 group-hover/startupFormButton:-translate-y-1 " />
							</motion.span>
						)}
					</AnimatePresence>
				</Button>
			</form>
		</>
	);
}

export default StartupForm;

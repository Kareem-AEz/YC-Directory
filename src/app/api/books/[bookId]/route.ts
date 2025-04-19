import books from "@/app/api/db";

export async function PUT(
	request: Request,
	context: { params: { bookId: string } }
) {
	const { bookId } = await context.params;
	const book = await request.json();

	const index = books.findIndex((book) => book.id === Number(bookId));
	books[index] = book;
	return Response.json(books);
}

export async function DELETE(
	request: Request,
	context: { params: { bookId: string } }
) {
	const { bookId } = await context.params;
	const index = books.findIndex((book) => book.id === Number(bookId));
	books.splice(index, 1);
	return Response.json(books);
}

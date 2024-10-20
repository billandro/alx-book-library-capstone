import { useState } from "react"

function BookDetails(book) {
    if (!book) {
        return <div>Loading book details...</div>; 
    }
    
    console.log(book)
    return (
        <div className="flex flex-col w-full h-full justify-center items-center sm:p-10">
            <div className="flex flex-row w-full justify-evenly">
                <img
                    src={book.book.volumeInfo.imageLinks.thumbnail || 'default_thumbnail.jpg'}
                    alt="thumbnail"
                    className="w-52 h-auto object-cover mr-4"
                />
                <div className="max-w-4xl">
                    <h1 className="text-base sm:text-2xl font-bold underline">{book.book.volumeInfo.title}</h1>
                    <p className="mt-2 font-light text-base"><span className="font-semibold">Description:</span> {book.book.volumeInfo.description}</p>
                    <p className="mt-2 font-light text-base"><span className="font-semibold">Published Date:</span> {book.book.volumeInfo.publishedDate}</p>
                    <p className="mt-2 font-light text-base"><span className="font-semibold">Page Count:</span> {book.book.volumeInfo.pageCount}</p>
                    <p className="mt-2 font-light text-base"><span className="font-semibold">ISBN Number:</span> {book.book.volumeInfo.industryIdentifiers?.map(id => id.identifier).join(", ")}</p>
                    <p className="mt-2 font-light text-base"><span className="font-semibold">Categories:</span> {book.book.volumeInfo.categories?.join(", ")}</p>
                </div>
            </div>
        </div>
    );
}

export default BookDetails
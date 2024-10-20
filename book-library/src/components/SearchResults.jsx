import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ books }) => {
    const navigate = useNavigate();

    const handleBookSelect = (bookId) => {
        navigate(`/book/${bookId}`); // Navigate to BookDetailsPage with book ID
    };

    return (
        <div className="h-auto w-full flex flex-row justify-center flex-wrap gap-24 mb-32">
            {books.length > 0 ? (
                books.map(book => (
                    <div key={book.id} className="p-0 m-0 flex flex-col items-center sm:w-44 sm:h-auto text-center sm:mt-12 transition ease-in-out hover:scale-110 duration-300">
                        {book.volumeInfo.imageLinks && (
                            <button onClick={() => handleBookSelect(book.id)}> {/* Add onClick to navigate */}
                                <img 
                                    className="p-0 m-0 min-w-40 min-h-44 shadow-2xl transition ease-in-out hover:scale-100 duration-300" 
                                    src={book.volumeInfo.imageLinks.smallThumbnail} 
                                    alt={book.volumeInfo.title} 
                                />
                            </button>
                        )}
                        <p className="w-fit text-xs"><span className="font-bold">Title: </span>{book.volumeInfo.title}</p>
                        {/* Render authors only if they exist */}
                        {book.volumeInfo.authors && (
                            <p className="w-fit text-xs">
                                <span className="font-bold">Authors: </span>{book.volumeInfo.authors.join(', ')}
                            </p>
                        )}
                        {/* Render publisher only if it exists */}
                        {book.volumeInfo.publisher && (
                            <p className="w-fit text-xs">
                                <span className="font-bold">Publisher: </span>{book.volumeInfo.publisher}
                            </p>
                        )}
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
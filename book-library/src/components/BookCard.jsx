import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const my_api_key = "AIzaSyAGXdrpWOqiQ0M6zbW9Ohz_t4GPKZ2y5GA"

function BookCard() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&key=${my_api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            setBooks(data.items);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    },[]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleBookSelect = (bookId) => {
        navigate(`/book/${bookId}`); // Navigate to BookDetailsPage with book ID
    };

    return (
        <div className="flex flex-col max-w-full ">
            <div className="flex items-center justify-evenly h-auto w-full sm:flex-row flex-wrap mb-32 gap-11">
                {books.map(book => (
                    <div key={book.id} className="w-32 p-0 m-0 flex flex-col items-center sm:w-44 sm:h-auto text-center sm:mt-12 transition ease-in-out hover:scale-110 duration-300">
                        <button onClick={() => handleBookSelect(book.id)}> {/* Pass book ID */}
                            <img className="p-0 m-0 min-w-40 min-h-44 transition ease-in-out hover:scale-100 duration-300"
                                src={book.volumeInfo.imageLinks?.thumbnail}
                                alt="thumbnail"
                            />
                        </button>
                        <p className="w-fit text-xs"><span className="font-bold">Title: </span>{book.volumeInfo.title}</p>
                        <p className="w-fit text-xs"><span className="font-bold">Authors: </span>{book.volumeInfo.authors}</p>
                        <p className="w-fit text-xs"><span className="font-bold">Publisher: </span>{book.volumeInfo.publisher}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookCard;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookDetails from "./BookDetails";

const my_api_key = "AIzaSyAGXdrpWOqiQ0M6zbW9Ohz_t4GPKZ2y5GA";

const BookDetailsPage = () => {
    const { id } = useParams(); // Get book ID from URL
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${my_api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch book details");
            }
            return response.json();
        })
        .then(data => {
            setBook(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div>Loading book details...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <BookDetails book={book} />
        </div>
    );
};

export default BookDetailsPage;
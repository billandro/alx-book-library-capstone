import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResults from "./SearchResults";

const SearchResultsPage = () => {
    const { query } = useParams(); // Get the query from the URL
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setSearchResults(data.items || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className=" flex flex-col max-w-full ">
            <h1 className="text-xl font-bold mb-4 mt-4 ml-6">Search Results for "{query}":</h1>
            <SearchResults books={searchResults} /> {/* Use SearchResults component */}
        </div>
    );
};

export default SearchResultsPage;
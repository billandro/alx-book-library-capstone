import React, { useState } from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        onSearch(query); // Call the onSearch function with the current query
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-md p-2">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-16 sm:w-auto flex-grow px-3 py-2 focus:outline-none"
            />
            <button type="submit" className="w-auto ml-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
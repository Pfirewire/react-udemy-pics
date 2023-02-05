import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={query} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;
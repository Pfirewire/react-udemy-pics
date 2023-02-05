import { useState } from "react";

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
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={query} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;
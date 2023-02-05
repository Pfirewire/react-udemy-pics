function SearchBar() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("test");
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
}

export default SearchBar;
export default function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div style={{ marginTop: "25px" }}>
            <input
                type="text"
                placeholder="Search by title"
                aria-label="Search books by title"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}
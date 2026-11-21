export default function BookList({ books, onRemoveBook }) {
    return (
        <section>
            <h2>My Book Collection</h2>
            
                {books.length === 0 && <p>No books to display.</p>}
                <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.creator}</p>
                        <button
                           type="button"
                           onClick={() => onRemoveBook(book.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
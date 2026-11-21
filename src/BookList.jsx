import BookCard from './BookCard';

export default function BookList({ books, onRemoveBook }) {
    return (
        <section>
            <h2>My Book Collection</h2>
            {books.length === 0 && <p>No books to display.</p>}
            <ul>
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                        onRemoveBook={onRemoveBook}
                    />
                ))}
            </ul>
        </section>
    );
}
               
export default function BookList({ books}) {
    return (
        <section>
            <h2>My Book Collection</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.creator}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
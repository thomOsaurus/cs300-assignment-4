export default function BookCard({ book, onRemoveBook }) {
    return (
        <li>        
            <h3>{book.title}</h3>
            <p>{book.creator}</p>
            <button 
                type="button"
                onClick={() => onRemoveBook(book.id)}
            >
                Remove
            </button>
        </li>
    );
}
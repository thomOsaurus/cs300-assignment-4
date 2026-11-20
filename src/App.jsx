import "./styles.css";
import Header from "./Header";
import { useState } from "react";
import startingBooks from "../data/books.json";
import BookList from "./BookList";
import BookForm from "./BookForm";
export default function App() {
//Main application for the Reading Tracker  
  const [books, setBooks] = useState(startingBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function addBook(newBook) {
    const book = {
      ...newBook,
      id: crypto.randomUUID(),
    };
    setBooks((prevBooks) => [...prevBooks, book]);
  }
    function removeBook(bookId) {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  }
  return (
    <main>
      <Header />
    <BookForm onAddBook={addBook} />

    <div style={{ marginTop: "25px" }}>
    <input
        type="text"
        placeholder="Search by title"
        aria-label="Search books by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />  
      </div>

    <BookList books={filteredBooks} onRemoveBook={removeBook} />  
    </main>
  );

}

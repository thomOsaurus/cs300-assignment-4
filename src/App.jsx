import "./styles.css";
import Header from "./Header";
import { useState } from "react";
import startingBooks from "../data/books.json";
import BookList from "./BookList";
import BookForm from "./BookForm";
export default function App() {
//Main application for the Reading Tracker  
  const [books, setBooks] = useState(startingBooks);
  function addBook(newBook) {
    const book = {
      ...newBook,
      id: crypto.randomUUID(),
    };
    setBooks((prevBooks) => [...prevBooks, book]);
  }
  return (
    <main>
      <Header />
     <BookForm onAddBook={addBook} />
      <BookList books={books} />  
    </main>
  );
}

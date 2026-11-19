import "./styles.css";
import Header from "./Header";
import { useState } from "react";
import startingBooks from "../data/books.json";
import BookList from "./BookList";
export default function App() {
//Main application for the Reading Tracker  
  const [books, setBooks] = useState(startingBooks);
  return (
    <main>
      <Header />
      <BookList books={books} />  
    </main>
  );
}

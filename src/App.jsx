import "./styles.css";
import Header from "./Header";
import { useState } from "react";
import startingBooks from "../data/books.json";
export default function App() {
//Main application for the Reading Tracker  
  const [books, setBooks] = useState(startingBooks);
  return (
    <main>
      <Header />
    </main>
  );
}

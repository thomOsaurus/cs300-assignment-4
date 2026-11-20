import { useState } from "react";

export default function BookForm({onAddBook}) {
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [errors, setErrors] = useState({});

function handleSubmit(event) {
    event.preventDefault();
    
  const newErrors = {};
  if (!title.trim()) {
    newErrors.title = "Title is required.";
  }
    if (!creator.trim()) {
      newErrors.creator = "Creator is required.";
    }
  setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
        return;
    }
    
    onAddBook({ title: title.trim(), creator: creator.trim()});
    setTitle("");
    setCreator("");
    setErrors({});
  }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h2>Add a Book</h2>

            <label htmlFor="book-title">Title:</label>
            <input
                id="book-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="error">{errors.title}</p>}

            <label htmlFor="book-creator">Creator:</label>
            <input
                id="book-creator"   
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
            />
            {errors.creator && <p className="error">{errors.creator}</p>}   

            <button type="submit">Add Book</button>
        </form>
    );
}   

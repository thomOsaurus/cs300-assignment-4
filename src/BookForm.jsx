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

           <div>
             <label htmlFor="book-title">Title:</label>
            <input
                id="book-title"
                aria-describedby={errors.title ? "title-error" : undefined}
                aria-invalid={!!errors.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            {errors.title && <p id="title-error" className="error">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="book-creator">Creator:</label>
            <input
                id="book-creator"  
                aria-describedby={errors.creator ? "creator-error" : undefined} 
                aria-invalid={!!errors.creator}
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
            />
            {errors.creator && <p id="creator-error" className="error">{errors.creator}</p>}   
          </div>
            <button type="submit">Add Book</button>
        </form>
    );
}   

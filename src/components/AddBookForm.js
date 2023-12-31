import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';
import './AddBookForm.css';

function AddBookForm() {
  const dispatch = useDispatch();
  const app_id = 'ktMaPkuUjcdRtsd1h31t'; // Your actual app_id
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => {
    console.log('Adding book...');
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    console.log('New Book:', newBook);
    await dispatch(addBookAsync({ app_id, book: newBook }));
    console.log('Book added successfully');
    setTitle('');
    setAuthor('');
  };
  
  return (
    <div className="add-book-form">
      <h2>ADD NEW BOOK</h2>
      <div className="form-fields">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="add-button" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
    </div>
  );
  
}

export default AddBookForm;

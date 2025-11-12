import { useState, useEffect } from 'react';
import { searchBooks, formatBookData } from '../services/BookService';

const BookGrid = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedBooks();
  }, []);

  const loadFeaturedBooks = async () => {
    setLoading(true);
    const booksData = await searchBooks('fiction');
    const formattedBooks = booksData.map(formatBookData);
    setBooks(formattedBooks);
    setLoading(false);
  };

  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  return (
    <div className="featured-books">
      <h2>Featured Books</h2>
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <img 
              src={book.coverImage} 
              alt={book.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150x200/2d3748/4a5568?text=No+Cover';
              }}
            />
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>
            <p className="description">
              {book.description.length > 100 
                ? `${book.description.substring(0, 100)}...` 
                : book.description
              }
            </p>
            <div className="book-meta">
              <span className="genre">{book.genre}</span>
              {book.rating && <span className="rating">⭐ {book.rating}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
import React from "react";
import "../styles/BookDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import genres from "../data/BooksData.js"; // ✅ import your books data

export default function BookDetails({ addToCart }) {
  const { id } = useParams(); // ✅ 1. Get book ID from URL
  const navigate = useNavigate();

  // ✅ 2. Find the book inside the genres array
  let book = null;
  for (const genre of genres) {
    const found = genre.books.find((b, index) => `${genre.name}-${index}` === id);
    if (found) {
      book = found;
      break;
    }
  }

  // ✅ 3. If book not found, show message
  if (!book) {
    return (
      <div className="book-details">
        <p>Book details not found 😢</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  // ✅ 4. Display the book details
  return (
    <div className="book-details-page">
      <div className="book-details-container">
        {/* Left: Book Image */}
        <div className="book-image-section">
          <img src={book.image} alt={book.title} className="book-cover" />
        </div>

        {/* Right: Info */}
        <div className="book-info-section">
          <h1 className="details-title">{book.title}</h1>
          <p className="book-author">
             <b>{book.author}</b>
          </p>

          {/* Price */}
          <div className="book-price">
            <span className="current-price">₹{book.price}</span>
            <span className="old-price">₹{book.price + 250}</span>
          </div>

          {/* Add to Cart */}
          <div className="book-actions">
            <button className="add-cart-btn" onClick={() => addToCart(book)}>
              🛒 Add to Cart
            </button>
            <button className="share-btn">🔗 Share</button>
          </div>

          {/* Description */}
          <div className="book-description">
            <h3>Description</h3>
            <p>
              {book.description
                ? book.description
                : `${book.title} by ${book.author} is a captivating read that explores imagination, creativity, and insight. A must-have for book lovers.`}
            </p>
          </div>

          {/* Dynamic Specifications */}
          <div className="book-specs">
            <h3>Other Specifications</h3>
            <ul>
              {book.language && (
                <li>
                  <b>Language:</b> {book.language}
                </li>
              )}
              {book.pages && (
                <li>
                  <b>Pages:</b> {book.pages}
                </li>
              )}
              {book.publisher && (
                <li>
                  <b>Publisher:</b> {book.publisher}
                </li>
              )}
              {book.category && (
                <li>
                  <b>Category:</b> {book.category}
                </li>
              )}
              {book.bookFormat && (
                <li>
                  <b>Format:</b> {book.bookFormat}
                </li>
              )}
            </ul>
          </div>

              {/* Ratings */}
          <div className="book-rating">
            ⭐ ⭐ ⭐ ⭐ ☆ <span></span>
          </div>

        </div>
      </div>
    </div>
  );
}

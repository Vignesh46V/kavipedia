import React from "react";
import "../styles/WishlistPage.css";
import { useNavigate } from "react-router-dom";

export default function WishlistPage({ wishlist, onRemove }) {
  const navigate = useNavigate();

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">Your Wishlist 💖</h2>

      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty 😢</p>
      ) : (
        <>
          <div className="wishlist-list">
            {wishlist.map((book, index) => (
              <div key={index} className="wishlist-item">
                <img src={book.image} alt={book.title} className="wishlist-img" />

                <div className="wishlist-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p className="price">₹{book.price}</p>

                  <div className="wishlist-buttons">
                    <button
                      className="remove-btn"
                      onClick={() => onRemove(book.title)}
                    >
                      Remove
                    </button>
                    <button
                      className="cart-btn"
                      onClick={() => navigate(`/book/${encodeURIComponent(book.title)}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="wishlist-summary">
            <button className="continue-btn" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

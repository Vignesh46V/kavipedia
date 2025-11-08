import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import "../styles/BookCard.css";

export default function BookCard({
  id,
  image,
  title,
  author,
  price,
  onAddToCart,
  onAddToWishlist,
  isInWishlist = false,
}) {
  const navigate = useNavigate();

  // 🛒 Cart
  const handleAdd = (e) => {
    e.stopPropagation(); // prevent navigation when clicking button
    if (onAddToCart) onAddToCart();
  };

  // ❤️ Wishlist
  const handleWishlist = (e) => {
    e.stopPropagation(); // prevent navigation when clicking heart
    if (onAddToWishlist) onAddToWishlist();
  };

  // 🔗 Navigate to details
  const openDetails = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="book-card" onClick={openDetails}>
      {/* ❤️ Wishlist Icon */}
      <div className="wishlist-icon" onClick={handleWishlist}>
        <Heart
          size={20}
          fill={isInWishlist ? "#ff4d6d" : "none"}
          color={isInWishlist ? "#ff4d6d" : "#555"}
        />
      </div>

      {/* 📘 Book Image */}
      <img src={image} alt={title} className="book-image" />

      {/* 📄 Info */}
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>

        <div className="book-footer">
          <span className="book-price">₹{price}</span>
          <span className="book-old-price">₹{price + 250}</span>
          <button className="book-btn" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

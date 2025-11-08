import React from "react";
import "../styles/CartPage.css"; // your CSS file for styling   
import { useNavigate } from "react-router-dom";

export default function CartPage({ cart, onRemove }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, b) => sum + b.price, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
    <p>Your cart is empty 😢</p>
    <button className="continue-btn" onClick={() => navigate("/")}>
      Continue Shopping
    </button>
  </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((book, index) => (
              <div key={index} className="cart-item">
                <img src={book.image} alt={book.title} />
                <div className="cart-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p className="price">₹{book.price}</p>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(book.title)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>    

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

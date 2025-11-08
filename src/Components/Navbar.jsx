import React, { useState } from "react";
import logo from "../assets/Kavipedia.png";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar({ cartCount = 0 }) {  // ✅ receive cart count
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left: Logo + Brand */}
        <div className="navbar-left" onClick={() => navigate("/")}>
          <img src={logo} alt="Kavipedia Logo" className="navbar-logo" />
          <h1 className="navbar-title">Kavipedia</h1>
        </div>

        {/* Right: Links + Button */}
        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a onClick={() => navigate("/")}>Home</a>
          <a href="#">Categories</a>
          <a onClick={() => navigate("/wishlist")}>Wishlist</a>
          <a href="#">Orders</a>

          <div className="navbar-actions">
            {/* ✅ Cart Button with Badge */}
            <button
              className="navbar-cart"
              onClick={() => navigate("/cart")}
              title="View Cart"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>

            {/* ✅ Sign In */}
            <button className="navbar-btn" onClick={() => navigate("/login")}>
              Sign In
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import HeroBanner from "./Components/HeroBanner.jsx";
import BookCard from "./Components/BookCard.jsx";
import BookDetails from "./Components/BookDetails.jsx";
import genres from "./data/BooksData.js";
import LoginPage from "./Components/LoginPage.jsx";
import CartPage from "./Components/CartPage.jsx";
import WishlistPage from "./Components/WishlistPage.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Footer from "./Components/Footer.jsx";
import Loader from "./Components/Loader.jsx";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState("");

  // ✅ Loader simulation (for GitHub Pages initial blank load)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Loader />; // 👈 show loader while app initializes
  }

  // ✅ Toast handler
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  // ✅ Cart functions
  const addToCart = (book) => {
    setCart((prev) => {
      if (prev.find((b) => b.title === book.title)) {
        showToast("Already in Cart 🛒");
        return prev;
      }
      showToast("Added to Cart ✅");
      return [...prev, book];
    });
  };

  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((b) => b.title !== title));
  };

  // ✅ Wishlist functions
  const toggleWishlist = (book) => {
    setWishlist((prev) => {
      const exists = prev.find((b) => b.title === book.title);
      if (exists) {
        showToast("Removed from Wishlist 💔");
        return prev.filter((b) => b.title !== book.title);
      } else {
        showToast("Added to Wishlist 💖");
        return [...prev, book];
      }
    });
  };

  const removeFromWishlist = (title) => {
    setWishlist((prev) => prev.filter((b) => b.title !== title));
  };

  // ✅ App JSX
  return (
    <div className="app-background">
      <Navbar cartCount={cart.length} />
      <ScrollToTop />

      {toast && <div className="toast">{toast}</div>}

      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <main className="book-section">
                {genres.map((genre, gIndex) => (
                  <section key={gIndex} className="genre-section">
                    <h2 className="genre-title">{genre.name}</h2>
                    <div className="book-grid">
                      {genre.books.map((book, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            navigate(`/book/${genre.name}-${index}`)
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <BookCard
                            id={`${genre.name}-${index}`}
                            {...book}
                            onAddToCart={() => addToCart(book)}
                            onAddToWishlist={() => toggleWishlist(book)}
                            isInWishlist={wishlist.some(
                              (b) => b.title === book.title
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </main>
            </>
          }
        />

        {/* 🧾 Other Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} onRemove={removeFromCart} />}
        />
        <Route
          path="/wishlist"
          element={
            <WishlistPage wishlist={wishlist} onRemove={removeFromWishlist} />
          }
        />
        <Route
          path="/book/:id"
          element={<BookDetails addToCart={addToCart} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

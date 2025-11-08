import React from "react";
import "../styles/Footer.css";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <h2 className="footer-logo" onClick={() => navigate("/")}>
            Kavipedia
          </h2>
          <p className="footer-tagline">
            Discover, read, and love books — all in one place.
          </p>
        </div>

        <div className="footer-center">
          <button className="footer-link" onClick={() => navigate("/")}>
            Home
          </button>

          <div className="footer-socials">
            <a href="https://www.facebook.com/KAVIPEDIATAMIL/"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/kavipedia.india/"><Instagram size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="mailto:support@kavipedia.com"><Mail size={18} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kavipedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

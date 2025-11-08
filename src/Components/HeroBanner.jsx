import React from "react";
import "../styles/HeroBanner.css";
import HeroBannerImage from "../assets/HeroBanner.jpg"; // 🖼️ change this to your image path

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <img src={HeroBannerImage} alt="Hero Banner" className="hero-img" />
    </section>
  );
}

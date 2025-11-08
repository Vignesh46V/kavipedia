import React from "react";
import "../Styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loading-text">Loading Kavipedia...</p>
    </div>
  );
};

export default Loader;

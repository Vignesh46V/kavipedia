import React from "react";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="login-subtext">Sign in to continue your journey with Kavipedia 📚</p>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>

        <div className="login-footer">
          <p>
            Don’t have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

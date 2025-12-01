import React from "react";
import "./CSS/Loginsignup.css";

export const Loginsignup = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card slide-in">
        <h1>Create Account</h1>

        <div className="input-group">
          <input type="text" required />
          <label>Your Name</label>
        </div>

        <div className="input-group">
          <input type="email" required />
          <label>Email Address</label>
        </div>

        <div className="input-group">
          <input type="password" required />
          <label>Password</label>
        </div>

        <button className="animated-btn">Continue</button>

        <p className="login-text">
          Already have an account?
          <span className="login-link"> Login here</span>
        </p>

        <div className="agree-section">
          <input type="checkbox" />
          <p>By continuing, you agree to the Terms & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

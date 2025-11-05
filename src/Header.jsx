import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">My React App</div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        <button className="get-started">Get Started</button>
      </nav>
    </header>
  );
}

export default Header;

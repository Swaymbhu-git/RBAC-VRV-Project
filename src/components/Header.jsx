import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/images/vrvlogo.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger button, visible only on small screens */}
      <button
        className="menu-btn"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {/* Three-bar icon */}
        <span className={`bar ${menuOpen ? "bar1-open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "bar2-open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "bar3-open" : ""}`}></span>
      </button>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item" onClick={() => setMenuOpen(false)}>
            Home
          </li>
          <li className="nav-item" onClick={() => setMenuOpen(false)}>
            About
          </li>
          <li className="nav-item" onClick={() => setMenuOpen(false)}>
            Edit
          </li>
          <li className="nav-item" onClick={() => setMenuOpen(false)}>
            Contact Us
          </li>
        </ul>
      </nav>

      <button
        className="login-btn"
        onClick={() => window.open("login.html", "_blank")}
      >
        Login
      </button>
    </header>
  );
};

export default Header;

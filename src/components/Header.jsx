import React from "react";
import "./Header.css";
import logo from "../assets/images/vrvlogo.jpeg"
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
       <img src={logo}/>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Edit</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </nav>
      <button className="login-btn" onClick={() => window.open("login.html", "_blank")}>Login</button>
      
    </header>
  );
};

export default Header;

import React from "react";
import "./Footer.css";
import logo from '../assets/images/vrvlogo.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Logo and Tagline */}
          <div className="footer-section logo">
            <div className="logo-container">
              <img src={logo} alt="VRV Security Logo" className="footer-logo" />
              <span className="logo-text">VRV Security</span>
            </div>
            <p className="tagline">The ultimate platform for cybersecurity solutions.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Edit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section legal">
            <h5>Legal</h5>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section contact">
            <h5>Get In Touch</h5>
            <p>
              <i className="fa fa-envelope"></i> support@vrvsecurity.in
            </p>
            <p>
              <i className="fa fa-phone"></i> +91-XXXXXX7640
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 VRV Security. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

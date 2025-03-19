// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pabali</h3>
          <p>Your trusted source for premium laptops and tech solutions.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/laptops">Laptops</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Tech Street, Digital City</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@pabali.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pabali. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
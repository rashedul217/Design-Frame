import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>DesignFrame</h3>
          <p>Creating beautiful and functional spaces that inspire and delight. Your vision, our expertise.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/Design.frame3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/ongoing-projects">Ongoing Projects</Link></li>
            <li><Link to="/completed-projects">Completed Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <i className="fas fa-envelope"></i>
            <p>Dframebd22@gmail.com</p>
          </div>
          <div className="contact-info">
            <i className="fas fa-phone"></i>
            <p>+880 1874-543506</p>
          </div>
          <div className="contact-info">
            <i className="fas fa-phone"></i>
            <p>+880 1952-094125</p>
          </div>
          <div className="contact-info">
            <i className="fas fa-map-marker-alt"></i>
            <p>Mohammadpur, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DesignFrame. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
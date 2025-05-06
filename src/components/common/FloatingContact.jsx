import React from 'react';
import { Link } from 'react-router-dom';

const FloatingContact = () => {
  return (
    <Link to="/contact" className="floating-contact" aria-label="Contact Us">
      <i className="fas fa-envelope"></i>
      <span>Contact Us</span>
    </Link>
  );
};

export default FloatingContact;
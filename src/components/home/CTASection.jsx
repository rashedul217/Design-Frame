import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-image">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60" 
          alt="Luxury Interior Space" 
        />
      </div>
      <div className="cta-content">
        <h2>Ready to Transform Your Space?</h2>
        <p>Contact us today for a free consultation</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </div>
    </section>
  );
};

export default CTASection;
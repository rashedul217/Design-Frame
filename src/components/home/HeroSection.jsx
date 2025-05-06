import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-image featured">
          <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&auto=format&fit=crop&q=60" alt="Luxury Living Room" />
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60" alt="Modern Kitchen" />
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&auto=format&fit=crop&q=60" alt="Elegant Bedroom" />
        </div>
      </div>
      <div className="hero-content">
        <span className="subtitle">Interior Design Studio</span>
        <h1>Creating Beautiful Living Spaces</h1>
        <p>Transform your home into a masterpiece with our expert interior design services</p>
        <Link to="/contact" className="cta-button">Get Started →</Link>
      </div>
    </section>
  );
};

export default HeroSection;
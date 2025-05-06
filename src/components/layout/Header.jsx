import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/images/425717273_122165360024011640_1334394412401595504_n.jpg" alt="DesignFrame Logo" className="logo-image" />
            <span className="logo-text">
              <span className="design">Design</span>
              <span className="frame">Frame</span>
            </span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/ongoing-projects">Ongoing Projects</Link></li>
          <li><Link to="/completed-projects">Completed Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
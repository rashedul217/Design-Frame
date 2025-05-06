import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formMessage, setFormMessage] = useState({ text: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const message = {
            id: Date.now(),
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            date: new Date().toISOString(),
            status: 'unread'
        };

        // Here you would typically make an API call to save the message
        // For now, we'll simulate a successful submission
        try {
            // Simulating API call success
            setFormMessage({
                text: 'Thank you! Your message has been sent successfully.',
                type: 'success'
            });
            e.target.reset();

            setTimeout(() => {
                setFormMessage({ text: '', type: '' });
            }, 5000);
        } catch (error) {
            setFormMessage({
                text: 'Sorry, there was an error sending your message. Please try again.',
                type: 'error'
            });
        }
    };

    return (
        <div className="contact-page">
            <header>
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img src="images/425717273_122165360024011640_1334394412401595504_n.jpg" alt="DesignFrame Logo" className="logo-image" />
                            <span className="logo-text">
                                <span className="design">Design</span>
                                <span className="frame">Frame</span>
                            </span>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ongoing-projects">Ongoing Projects</Link></li>
                        <li><Link to="/completed-projects">Completed Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact" className="active">Contact</Link></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </nav>
            </header>

            <main>
                <section className="hero-section">
                    <div className="hero-grid">
                        <div className="hero-image featured">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60" alt="Customer Service" />
                        </div>
                        <div className="hero-image">
                            <img src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&auto=format&fit=crop&q=60" alt="Modern Office" />
                        </div>
                        <div className="hero-image">
                            <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=60" alt="Design Consultation" />
                        </div>
                    </div>
                    <div className="hero-content">
                        <span className="subtitle">Get in Touch</span>
                        <h1>Let's Create Something Amazing</h1>
                        <p>Ready to transform your space? We're here to help bring your vision to life.</p>
                        <a href="#contact-section" className="cta-button">Contact Us →</a>
                    </div>
                </section>

                <section className="contact-section" id="contact-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Contact Us</h2>
                            <p>We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.</p>
                        </div>
                        <div className="contact-wrapper">
                            <div className="contact-info">
                                <div className="info-list">
                                    <div className="info-item">
                                        <div className="icon-box">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="info-content">
                                            <h3>Location</h3>
                                            <p>Mohammadpur, Dhaka<br />Bangladesh</p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="icon-box">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="info-content">
                                            <h3>Phone</h3>
                                            <p>+880 1874-543506</p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="icon-box">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="info-content">
                                            <h3>Email</h3>
                                            <p>Dframebd22@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-links">
                                    <a href="https://www.facebook.com/Design.frame3" className="social-link"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>

                            <div className="contact-form">
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <input type="text" id="name" name="name" required />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                        <div className="input-group">
                                            <input type="email" id="email" name="email" required />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <input type="tel" id="phone" name="phone" required />
                                        <label htmlFor="phone">Phone Number</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" id="subject" name="subject" required />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                    <div className="input-group">
                                        <textarea id="message" name="message" rows="5" required></textarea>
                                        <label htmlFor="message">Your Message</label>
                                    </div>
                                    <button type="submit" className="submit-btn">
                                        Send Message <i className="fas fa-arrow-right"></i>
                                    </button>
                                </form>
                                {formMessage.text && (
                                    <div 
                                        className="form-message" 
                                        style={{ 
                                            display: 'block',
                                            color: formMessage.type === 'success' ? '#27ae60' : '#e74c3c'
                                        }}
                                    >
                                        {formMessage.text}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="map-section">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.06790621279!2d90.34547433037043!3d23.766597041377245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1709316822209!5m2!1sen!2sbd"
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </section>
            </main>
        </div>
    );
};

export default Contact;
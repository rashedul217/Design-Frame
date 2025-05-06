import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/home/CompletedProjects.css';


const CompletedProjects = () => {
    const [projects, setProjects] = useState([]);

    // Sample projects data - replace with your actual data or API call
    const completedProjects = [
        {
            id: 1,
            title: "Modern Living Room",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
            description: "Contemporary design with minimalist aesthetics"
        },
        {
            id: 2,
            title: "Luxury Kitchen",
            category: "Kitchen",
            image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
            description: "High-end kitchen renovation with modern appliances"
        },
        // Add more projects as needed
    ];

    useEffect(() => {
        // Load projects when component mounts
        setProjects(completedProjects);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            title: "Homeowner",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
            quote: "DesignFrame transformed our space beyond our expectations. Their attention to detail and creativity is unmatched."
        },
        {
            id: 2,
            name: "Michael Chen",
            title: "Business Owner",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
            quote: "Working with DesignFrame was a pleasure. They understood our vision and delivered exceptional results."
        }
    ];

    return (
        <main>
        <div className="onPageCss2">
            <section className="hero-section no-gap">
                <div className="hero-grid">
                    <div className="hero-image featured">
                        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=60" alt="Completed Living Room" />
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&auto=format&fit=crop&q=60" alt="Modern Kitchen" />
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60" alt="Elegant Bedroom" />
                    </div>
                </div>
                <div className="hero-content">
                    <span className="subtitle">Portfolio</span>
                    <h1>Completed Projects</h1>
                    <p>Explore our successfully delivered interior transformations</p>
                </div>
            </section>

            <section className="projects-section">
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <span className="category">{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonials">
                <div className="section-header">
                    <h2>Client Testimonials</h2>
                    <p>What our clients say about their experience</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card animate">
                            <div className="client-image">
                                <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <p>"{testimonial.quote}"</p>
                            <h4>{testimonial.name}</h4>
                            <p className="client-title">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content animate">
                    <h2>Ready to Transform Your Space?</h2>
                    <p>Let's create something extraordinary together</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
                <div className="cta-image">
                    <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80" alt="Interior Design" />
                </div>
            </section>
        </div>
        </main>
    );
};

export default CompletedProjects;
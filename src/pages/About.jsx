import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/home/About.css';


const About = () => {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            position: 'Senior Interior Designer',
            bio: 'Experienced interior designer with a passion for modern and minimalist design.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
        },
        {
            name: 'Michael Chen',
            position: 'Project Manager',
            bio: 'Dedicated project manager with 10 years of experience in interior design projects.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
        },
        {
            name: 'Emily Chen',
            position: 'Interior Architect',
            bio: 'Emily specializes in creating functional and beautiful spaces that reflect each client\'s unique style.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
        }
    ];

    useEffect(() => {
        // Add any necessary side effects here
    }, []);

    return (
        <div className="about">
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
                        <li><Link to="/about" className="active">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
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
                            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60" alt="Modern Interior Design" />
                        </div>
                        <div className="hero-image">
                            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60" alt="Design Team" />
                        </div>
                        <div className="hero-image">
                            <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&auto=format&fit=crop&q=60" alt="Elegant Space" />
                        </div>
                    </div>
                    <div className="hero-content">
                        <span className="subtitle">About Us</span>
                        <h1>Our Design Journey</h1>
                        <p>Discover our passion for creating beautiful and functional spaces that inspire.</p>
                        <a href="#about-us" className="cta-button">Learn More →</a>
                    </div>
                </section>

                <div className="main-content">
                    <section className="about-section" id="about-us">
                        <div className="about-grid">
                            <div className="about-content">
                                <h2>Our Story</h2>
                                <p>DesignFrame was founded with a vision to transform spaces into extraordinary environments that inspire and delight. Based in Dhaka, we've quickly established ourselves as a leading interior design firm, known for our innovative approach and attention to detail.</p>
                                <div className="stats-container">
                                    <div className="stat-item">
                                        <span className="stat-number">50+</span>
                                        <span className="stat-label">Projects Completed</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">30+</span>
                                        <span className="stat-label">Happy Clients</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">3+</span>
                                        <span className="stat-label">Years Experience</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about-image">
                                <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80" alt="DesignFrame Studio" />
                            </div>
                        </div>
                    </section>

                    <section className="team-section">
                        <div className="section-header animate">
                            <h2>Meet Our Team</h2>
                            <p>The creative minds behind your dream spaces</p>
                        </div>
                        <div className="team-grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-member animate">
                                    <div className="member-image">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p className="member-role">{member.position}</p>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="values-section">
                        <div className="section-header animate">
                            <h2>Our Values</h2>
                            <p>The principles that guide our work</p>
                        </div>
                        <div className="values-grid">
                            <div className="value-card animate">
                                <i className="fas fa-lightbulb"></i>
                                <h3>Innovation</h3>
                                <p>We constantly push boundaries to create unique and inspiring designs.</p>
                            </div>
                            <div className="value-card animate">
                                <i className="fas fa-heart"></i>
                                <h3>Passion</h3>
                                <p>Our love for design drives us to deliver excellence in every project.</p>
                            </div>
                            <div className="value-card animate">
                                <i className="fas fa-handshake"></i>
                                <h3>Integrity</h3>
                                <p>We maintain the highest standards of professionalism and transparency.</p>
                            </div>
                            <div className="value-card animate">
                                <i className="fas fa-users"></i>
                                <h3>Collaboration</h3>
                                <p>We work closely with our clients to bring their vision to life.</p>
                            </div>
                        </div>
                    </section>

                    <section className="process-section">
                        <div className="section-header animate">
                            <h2>Our Process</h2>
                            <p>How we bring your vision to life</p>
                        </div>
                        <div className="process-timeline">
                            <div className="timeline-item animate">
                                <div className="timeline-number">01</div>
                                <h3>Consultation</h3>
                                <p>We begin with a detailed discussion of your vision, needs, and preferences.</p>
                            </div>
                            <div className="timeline-item animate">
                                <div className="timeline-number">02</div>
                                <h3>Design Concept</h3>
                                <p>Our team develops initial design concepts based on your requirements.</p>
                            </div>
                            <div className="timeline-item animate">
                                <div className="timeline-number">03</div>
                                <h3>Implementation</h3>
                                <p>We execute the approved design with attention to every detail.</p>
                            </div>
                            <div className="timeline-item animate">
                                <div className="timeline-number">04</div>
                                <h3>Final Touches</h3>
                                <p>We perfect every element to create your dream space.</p>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <div className="cta-content animate">
                            <h2>Ready to Transform Your Space?</h2>
                            <p>Let's create something extraordinary together</p>
                            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
                        </div>
                        <div className="cta-image">
                            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80" alt="Interior Design" />
                        </div>
                    </section>
                </div>
            </main>

            <Link to="/contact" className="floating-contact" aria-label="Contact Us">
                <i className="fas fa-envelope"></i>
                <span>Contact Us</span>
            </Link>
        </div>
    );
};

export default About;
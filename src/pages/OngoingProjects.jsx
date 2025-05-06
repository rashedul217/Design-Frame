import React from 'react';
import { Link } from 'react-router-dom';
import ProjectProcess from '../components/ongoing/ProjectProcess';
import CTASection from '../components/home/CTASection';
import FloatingContact from '../components/common/FloatingContact';
import '../styles/components/home/OngoingProjects.css';

const OngoingProjects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3",
      title: "Modern Living Space",
      description: "A contemporary living space design with open concept and natural lighting",
      location: "Gulshan-1, Dhaka",
      status: "In Progress"
    },
    {
      image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601",
      title: "Luxury Villa Interior",
      description: "Complete interior renovation of a luxury villa with custom furnishings",
      location: "Banani, Dhaka",
      status: "Planning"
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      title: "Corporate Office Design",
      description: "Modern office space design focusing on productivity and comfort",
      location: "Mohammadpur, Dhaka",
      status: "Construction"
    }
  ];

  return (
    <main>
      <div className="main-content onPageCSS">
        <section className="hero-section no-gap">
          <div className="hero-grid">
            <div className="hero-image featured">
              <img src="https://images.unsplash.com/photo-1600607688960-5f78d4c7b407" alt="Ongoing Renovation" />
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1600585153490-76fb20a32601" alt="Modern Construction" />
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea" alt="Interior Progress" />
            </div>
          </div>
          <div className="hero-content">
            <span className="subtitle">Current Work</span>
            <h1>Our Ongoing Projects</h1>
            <p>Discover our latest transformations in progress, where innovation meets design excellence.</p>
            <a href="#ongoing-projects" className="cta-button">View Projects →</a>
          </div>
        </section>

        <section className="projects-section" id="ongoing-projects">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-location">
                    <i className="fas fa-map-marker-alt"></i> {project.location}
                  </p>
                  <div className="project-status">
                    {project.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProjectProcess />
        <CTASection />
      </div>
      <FloatingContact />
    </main>
  );
};

export default OngoingProjects;
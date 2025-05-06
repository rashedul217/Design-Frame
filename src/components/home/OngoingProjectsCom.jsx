import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../common/ProjectCard';

const OngoingProjectsCom = () => {
  const projectsRef = useRef(null);

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e",
      title: "Sky View Residence",
      location: "Gulshan-1, Dhaka",
      progress: 75,
      description: "Smart home with contemporary design and luxury amenities",
      isOngoing: true
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Riverside Apartments",
      location: "Banani, Dhaka",
      progress: 45,
      description: "Modern apartment complex with panoramic views",
      isOngoing: true
    },
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      title: "Green Valley Villa",
      location: "Dhanmondi, Dhaka",
      progress: 90,
      description: "Eco-friendly luxury villa with smart features",
      isOngoing: true
    },
    {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Riverside Apartments",
        location: "Banani, Dhaka",
        progress: 45,
        description: "Modern apartment complex with panoramic views",
        isOngoing: true
      },
  ];

  return (
    <section className="ongoing-projects-preview">
      <div className="section-header animate">
        <h2>Current Projects</h2>
        <p>Take a look at what we're working on</p>
      </div>
      <div className="projects-container">
        <button 
          className="scroll-arrow scroll-left" 
          onClick={() => scrollProjects('left')}
          aria-label="Scroll left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <button 
          className="scroll-arrow scroll-right" 
          onClick={() => scrollProjects('right')}
          aria-label="Scroll right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="section-footer animate">
        <Link to="/ongoing-projects" className="btn btn-primary">View All Projects</Link>
      </div>
    </section>
  );
};

export default OngoingProjectsCom;
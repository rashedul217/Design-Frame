import React from 'react';
import ProjectCard from '../common/ProjectCard';

const FeaturedProjects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&q=80&w=1200&fit=crop",
      title: "Modern Living Room",
      description: "Contemporary design with comfort in mind"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&q=80&w=1200&fit=crop",
      title: "Elegant Dining Room",
      description: "Perfect space for family gatherings"
    },
    {
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&q=80&w=1200&fit=crop",
      title: "Luxury Kitchen",
      description: "Where functionality meets elegance"
    },
    {
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&q=80&w=1200&fit=crop",
      title: "Minimalist Bedroom",
      description: "Peaceful and serene sleeping space"
    },
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&q=80&w=1200&fit=crop",
      title: "Modern Office",
      description: "Productive and inspiring workspace"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&q=80&w=1200&fit=crop",
      title: "Luxury Bathroom",
      description: "Spa-like relaxation at home"
    }
  ];

  return (
    <section className="featured-projects">
      <div className="section-header animate">
        <h2>Our Latest Projects</h2>
        <p>Discover our recent transformations</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
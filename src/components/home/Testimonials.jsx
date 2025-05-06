import React from 'react';

const TestimonialCard = ({ image, text, name, role }) => (
  <div className="testimonial-card animate">
    <div className="client-image">
      <img src={image} alt={name} />
    </div>
    <p>{text}</p>
    <h4>{name}</h4>
    <span>{role}</span>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      text: "DesignFrame transformed our space beyond our expectations. Their attention to detail and creativity is unmatched.",
      name: "Sarah Johnson",
      role: "Residential Client"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      text: "DesignFrame has completely transformed our office space. The attention to detail and professional service exceeded our expectations.",
      name: "Michael Chen",
      role: "Corporate Client"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      text: "The team's innovative approach and commitment to excellence made our home renovation project a wonderful experience.",
      name: "David Wilson",
      role: "Residential Client"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "Exceptional design solutions and professional execution. They turned our vision into reality.",
      name: "Emily Rodriguez",
      role: "Commercial Client"
    }
  ];

  return (
    <section className="testimonials">
      <div className="section-header animate">
        <h2>Client Testimonials</h2>
        <p>What our clients say about us</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
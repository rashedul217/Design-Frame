import React from 'react';

const ProjectProcess = () => {
  const processes = [
    {
      icon: "fas fa-lightbulb",
      step: "01",
      title: "Concept Development",
      description: "Understanding your vision and developing initial design concepts that align with your goals."
    },
    {
      icon: "fas fa-pencil-ruler",
      step: "02",
      title: "Design Planning",
      description: "Detailed planning, space optimization, and material selection for your project."
    },
    {
      icon: "fas fa-hammer",
      step: "03",
      title: "Implementation",
      description: "Expert execution of the design plan with regular updates and quality control."
    },
    {
      icon: "fas fa-check-circle",
      step: "04",
      title: "Final Touches",
      description: "Perfecting every detail to ensure the finished space exceeds your expectations."
    }
  ];

  return (
    <section className="project-process">
      <div className="section-header">
        <span className="subtitle">Our Approach</span>
        <h2>Design & Execution Process</h2>
        <p>We follow a systematic approach to bring your vision to life</p>
      </div>
      <div className="process-grid">
        {processes.map((process, index) => (
          <div key={index} className="process-card">
            <div className="process-icon">
              <i className={process.icon}></i>
              <span className="step-number">{process.step}</span>
            </div>
            <h3>{process.title}</h3>
            <p>{process.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectProcess;
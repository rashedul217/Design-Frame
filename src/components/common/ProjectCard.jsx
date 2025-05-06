import React, { useEffect, useRef } from 'react';

const ProjectCard = ({ 
  image, 
  video, 
  title, 
  description, 
  location, 
  progress,
  isOngoing = false 
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => videoRef.current?.play();
    const handleMouseLeave = () => videoRef.current?.pause();

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('mouseenter', handleMouseEnter);
      videoElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('mouseenter', handleMouseEnter);
        videoElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="project-card animate">
      {video ? (
        <div className="video-container">
          <video ref={videoRef} className="project-video" muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <img src={image} alt={title} />
      )}
      <div className="project-info">
        <h3>{title}</h3>
        {isOngoing && location && (
          <p className="location">
            <i className="fas fa-map-marker-alt"></i> {location}
          </p>
        )}
        {isOngoing && progress && (
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress}% Complete
            </div>
          </div>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
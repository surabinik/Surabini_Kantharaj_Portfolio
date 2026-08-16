import React from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, contribution, image, github, demo } = project;

  return (
    <article className="project-card">
      <div className="project-img-container">
        {image ? (
          <img 
            src={image} 
            alt={`${title} Preview`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            loading="lazy"
          />
        ) : (
          <div className="project-img-placeholder" aria-hidden="true">
            <FiFolder />
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-card-title">{title}</h3>
        
        <p className="project-desc">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="project-tags" aria-label="Technologies used">
            {technologies.map((tech, index) => (
              <span key={index} className="project-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {contribution && (
          <div className="project-contribution">
            <strong>My Contribution:</strong> {contribution}
          </div>
        )}

        <div className="project-links">
          {github && (
            <Button 
              href={github} 
              variant="secondary" 
              className="project-btn"
              aria-label={`View code for ${title} on GitHub`}
            >
              <FiGithub /> GitHub
            </Button>
          )}
          {demo && (
            <Button 
              href={demo} 
              variant="primary" 
              className="project-btn"
              aria-label={`View live demo for ${title}`}
            >
              <FiExternalLink /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

import React from 'react';
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from 'react-icons/fi';
import Button from '../components/Button';

const Hero = () => {
  const handleViewProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="animate-fade-in">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Hi, my name is</span>
          <h1 className="hero-title">
            <span className="gradient-text">[YOUR NAME]</span>
          </h1>
          <h2 
            style={{ 
              fontSize: '1.75rem', 
              color: 'var(--text-primary)', 
              fontWeight: '600',
              marginBottom: '1rem' 
            }}
          >
            [YOUR PROFESSIONAL TITLE]
          </h2>
          <p className="hero-description">
            I am a Computer Science & Software Development student at <strong>[YOUR UNIVERSITY]</strong>. 
            I enjoy building clean, user-centric web applications and developing systems structured around 
            Object-Oriented Design. Currently expanding my capabilities in Artificial Intelligence and modern software engineering practices.
          </p>

          <div className="hero-btns">
            <Button onClick={handleViewProjects} variant="primary">
              View My Projects <FiArrowRight />
            </Button>
            <Button href="/assets/CV.pdf" download="Resume.pdf" variant="secondary">
              Download CV <FiDownload />
            </Button>
          </div>

          <div className="hero-socials">
            <Button 
              href="https://github.com/[YOUR_GITHUB_USERNAME]" 
              variant="icon" 
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </Button>
            <Button 
              href="https://linkedin.com/in/[YOUR_LINKEDIN_USERNAME]" 
              variant="icon" 
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </Button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-graphic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

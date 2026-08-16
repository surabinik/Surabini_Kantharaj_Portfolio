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
            <span className="gradient-text">Surabini Kantharaj</span>
          </h1>
          <h2
            style={{
              fontSize: '1.75rem',
              color: 'var(--text-primary)',
              fontWeight: '600',
              marginBottom: '1rem'
            }}
          >
            Aspiring Business Analyst | Business Systems Engineering | Information Systems | Project Management
          </h2>
          <p className="hero-description">
            I’m a Management and Information Technology undergraduate passionate about bridging the gap between business and technology. I’m interested in Business Analysis, Business Systems Engineering, Information Systems, and Project Management, with a focus on solving problems, improving processes, and creating meaningful technology-driven solutions.
          </p>

          <div className="hero-btns">
            <Button onClick={handleViewProjects} variant="primary">
              View My Projects <FiArrowRight />
            </Button>
            {/* <Button href="/assets/CV.pdf" download="Resume.pdf" variant="secondary">
              Download CV <FiDownload />
            </Button> */}
          </div>

          <div className="hero-socials">
            <Button
              href="https://github.com/surabinik"
              variant="icon"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </Button>
            <Button
              href="https://www.linkedin.com/in/surabini-kantharaj/"
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

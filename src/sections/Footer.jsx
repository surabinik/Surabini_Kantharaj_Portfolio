import React from 'react';

const Footer = () => {
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container footer-content">
        <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>
          <span className="gradient-text">Surabini Kantharaj</span>
        </div>

        <nav className="footer-nav" aria-label="Footer Quick Links">
          <a href="#home" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a>
          <a href="#about" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
          <a href="#skills" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
          <a href="#projects" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
          <a href="#experience" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</a>
          <a href="#education" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'education')}>Education</a>
          <a href="#achievements" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'achievements')}>Achievements</a>
          <a href="#contact" className="footer-nav-link" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
        </nav>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} Surabini Kantharaj. All rights reserved.
          Portfolio designed for PPD II evaluation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

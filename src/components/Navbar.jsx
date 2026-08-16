import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from './Button';

const sectionsList = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Highlight header border on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const scrollPosition = window.scrollY + 200; // Offset for header height
      
      for (const section of sectionsList) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" style={{ 
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-md)' : 'none'
    }}>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavLinkClick('home'); }}>
          <span className="gradient-text">[YOUR NAME]</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {sectionsList.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(section.id);
              }}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="nav-actions">
          <div className="nav-socials">
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
          <Button 
            href="/assets/CV.pdf" 
            download="Resume.pdf" 
            variant="outline" 
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            <FiDownload /> CV
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="hamburger" 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar Navigation Drawer */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-links">
          {sectionsList.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`mobile-nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(section.id);
              }}
            >
              {section.label}
            </a>
          ))}
        </div>
        
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
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
          <Button 
            href="/assets/CV.pdf" 
            download="Resume.pdf" 
            variant="primary" 
            style={{ width: '100%' }}
          >
            <FiDownload /> Download CV
          </Button>
        </div>
      </nav>

      {/* Dark Blur Overlay behind Mobile Nav */}
      <div 
        className={`overlay ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;

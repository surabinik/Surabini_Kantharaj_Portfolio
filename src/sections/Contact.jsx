import React, { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate submission state without misleading the user
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <SectionTitle title="Get In Touch" subtitle="Let's Connect" />

        <div className="contact-container">
          {/* Contact Information Details */}
          <div className="contact-info">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', textAlign: 'left', marginBottom: '1rem' }}>
              Connection Details
            </h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'left', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Please feel free to connect via LinkedIn, inspect my code repositories on GitHub, or send a direct email.
            </p>

            <div className="contact-info-card" aria-label="Email details">
              <FiMail className="contact-info-icon" />
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>surabinik@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card" aria-label="LinkedIn profile">
              <FiLinkedin className="contact-info-icon" />
              <div className="contact-info-content">
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/surabini-kantharaj</p>
              </div>
            </div>

            <div className="contact-info-card" aria-label="GitHub profile">
              <FiGithub className="contact-info-icon" />
              <div className="contact-info-content">
                <h4>GitHub</h4>
                <p>github.com/surabinik</p>
              </div>
            </div>
          </div>

          {/* Interactive Form with Static Indicator */}
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Surabini Kantharaj"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="surabinik@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Inquiry / Networking"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Your message details..."
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-status success" role="alert">
                <strong>Submission Received!</strong> Since this is a client-only static portfolio,
                your message has been captured in local state and will not be dispatched to a backend server.
              </div>
            )}

            <Button type="submit" variant="primary" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

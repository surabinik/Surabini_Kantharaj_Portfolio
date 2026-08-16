import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <SectionTitle title="About Me" subtitle="My Academic & Professional Journey" />

        <div className="about-grid">
          <div className="about-details">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>
              Aspiring Software Developer & Emerging Tech Enthusiast
            </h3>

            <p className="about-p">
              I am currently pursuing my undergraduate studies in Computer Science/Software Development.
              My education provides me with a strong foundational understanding of software architecture, data structures, and algorithms,
              which I apply to build clean, efficient systems.
            </p>

            <p className="about-p">
              My engineering approach centers on **Object-Oriented Programming (OOP)** principles and clean code.
              I design relational database schemas using **MySQL** and construct robust logic for application backends.
              On the front end, I enjoy crafting accessible, semantic interfaces utilizing **HTML5**, **CSS3**, and **React.js**.
            </p>

            <p className="about-p">
              Beyond standard web development, I am deeply interested in **Artificial Intelligence (AI)** and emerging technologies.
              I seek opportunities to integrate machine learning workflows, explore neural network foundations, and build intelligent features into developer tools.
            </p>

            <p className="about-p">
              My immediate career goals are to gain hands-on experience through collaborative internships and software engineering opportunities,
              eventually transitioning into a full-stack developer or systems engineer role that leverages both front-end aesthetics and back-end efficiency.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Academic & Contact Highlights</h3>

            <div className="about-info-list">
              <div className="about-info-item">
                <span className="about-info-label">Degree</span>
                <span className="about-info-value">BSc.(Hons.) in Management and Information Technology</span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">University</span>
                <span className="about-info-value">University of Kelaniya, Sri Lanka</span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">Location</span>
                <span className="about-info-value">Sri Lanka</span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">Email</span>
                <span className="about-info-value">surabinik@gmail.com</span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">Interests</span>
                <span className="about-info-value">Business Analysis • Project Management • Business Systems Engineering • Information Systems • Business Process Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

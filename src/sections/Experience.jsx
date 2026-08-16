import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <SectionTitle title="Experience" subtitle="Student Leadership, Internships & Activities" />
        
        <div className="timeline">
          {experienceData.map((item, index) => {
            const sideClass = index % 2 === 0 ? 'left' : 'right';
            return (
              <div key={item.id} className={`timeline-item ${sideClass}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-date">{item.period}</div>
                
                <div className="timeline-card">
                  <h3 className="timeline-title">{item.position}</h3>
                  <div className="timeline-org">{item.organization}</div>
                  
                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <ul className="timeline-list" aria-label="Responsibilities">
                      {item.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="timeline-list-item">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.skillsDeveloped && item.skillsDeveloped.length > 0 && (
                    <div className="timeline-skills" aria-label="Skills developed">
                      {item.skillsDeveloped.map((skill, skillIdx) => (
                        <span key={skillIdx} className="timeline-skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

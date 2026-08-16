import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <SectionTitle title="Education" subtitle="My Academic Timeline" />
        
        <div className="timeline">
          {educationData.map((item, index) => {
            const sideClass = index % 2 === 0 ? 'left' : 'right';
            return (
              <div key={item.id} className={`timeline-item ${sideClass}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-date">{item.period}</div>
                
                <div className="timeline-card">
                  <h3 className="timeline-title">{item.degree}</h3>
                  <div className="timeline-org">{item.institution}</div>
                  
                  {item.expectedGraduation && (
                    <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: '600', marginBottom: '0.5rem' }}>
                      Expected Graduation: {item.expectedGraduation}
                    </div>
                  )}

                  {item.details && item.details.length > 0 && (
                    <ul className="timeline-list" aria-label="Academic details">
                      {item.details.map((detail, detIdx) => (
                        <li key={detIdx} className="timeline-list-item">
                          {detail}
                        </li>
                      ))}
                    </ul>
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

export default Education;

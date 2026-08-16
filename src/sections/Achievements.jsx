import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { achievementsData } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="container">
        <SectionTitle title="Certifications & Achievements" subtitle="Credentials & Activities" />
        
        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="achievement-card">
              <div className="achievement-header">
                <span className="achievement-issuer">{item.issuer}</span>
                <span className="achievement-date">{item.date}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

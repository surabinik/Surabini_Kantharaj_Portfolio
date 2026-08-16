import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle title="Technical Skills" subtitle="My Core Capabilities & Focus Areas" />
        
        <div className="skills-grid">
          {skillsData.map((categoryObj, catIndex) => (
            <div key={catIndex} className="skills-category-card">
              <h3 className="skills-category-title">{categoryObj.category}</h3>
              <div className="skills-list">
                {categoryObj.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skills-item">
                    <span className="skills-name">{skill.name}</span>
                    <span className="skills-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

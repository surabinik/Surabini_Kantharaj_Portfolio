import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;

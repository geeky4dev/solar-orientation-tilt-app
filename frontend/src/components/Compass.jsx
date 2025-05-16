// Component Compass.jsx
import React from 'react';
import './Compass.css';

const Compass = ({ azimuth }) => {
  const rotation = azimuth || 0;

  return (
    <div className="compass-container">
      <svg viewBox="0 0 200 200" className="compass-svg">
        <circle cx="100" cy="100" r="90" stroke="#333" strokeWidth="4" fill="#f4f4f4" />
        <text x="100" y="20" textAnchor="middle" fontSize="16">N</text>
        <text x="180" y="105" textAnchor="middle" fontSize="16">E</text>
        <text x="100" y="190" textAnchor="middle" fontSize="16">S</text>
        <text x="20" y="105" textAnchor="middle" fontSize="16">W</text>

        {/* Needle */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="20"
          stroke="red"
          strokeWidth="4"
          transform={`rotate(${rotation}, 100, 100)`}
        />
      </svg>
      <div className="azimuth-label">Azimut: {azimuth.toFixed(1)}°</div>
    </div>
  );
};

export default Compass;
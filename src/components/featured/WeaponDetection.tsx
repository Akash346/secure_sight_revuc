import React from 'react';
import './FeatureContainers.css';

const WeaponDetection = () => {
  return (
    <div className="feature-container">
      <h2>Realtime Weapon Detection System</h2>
      <div className="video-container">
        <div className="video-placeholder">
          {/* Video player will be added here */}
          <div className="placeholder-text">Video Demo Coming Soon</div>
        </div>
      </div>
      <div className="feature-content">
        <h3>About this Feature</h3>
        <p>Our real-time weapon detection system utilizes advanced AI algorithms to identify and alert security personnel about potential weapons in surveillance footage. This system helps maintain safety and security in various environments.</p>
        <div className="feature-highlights">
          <ul>
            <li>Real-time detection and monitoring</li>
            <li>High accuracy rate</li>
            <li>Instant alert system</li>
            <li>Integration with existing security systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeaponDetection; 
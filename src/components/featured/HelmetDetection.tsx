import React from 'react';
import './FeatureContainers.css';

const HelmetDetection = () => {
  return (
    <div className="feature-container">
      <h2>Construction Safety Helmet Detection</h2>
      <div className="video-container">
        <div className="video-placeholder">
          <div className="placeholder-text">Video Demo Coming Soon</div>
        </div>
      </div>
      <div className="feature-content">
        <h3>About this Feature</h3>
        <p>Our construction safety helmet detection system uses pose estimation and object detection to ensure worker safety compliance. The system monitors construction sites in real-time to detect proper helmet usage.</p>
        <div className="feature-highlights">
          <ul>
            <li>Real-time helmet detection</li>
            <li>Pose estimation for proper usage</li>
            <li>Compliance monitoring</li>
            <li>Automated reporting system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelmetDetection; 
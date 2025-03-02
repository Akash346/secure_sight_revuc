import './FeatureContainers.css';

const SmokeDetection = () => {
  return (
    <div className="feature-container">
      <h2>Smoke and Fire Detection</h2>
      <div className='feature-container-inner'>
        <div className="video-container">
          <div className="video-placeholder">
            <div className="placeholder-text">Video Demo Coming Soon</div>
          </div>
        </div>
        <div className="feature-content">
          <h3>About this Feature</h3>
          <p>Our outdoor smoke and fire detection system provides early warning for potential fire hazards across university premises. Using advanced computer vision, the system can detect smoke and fire in their early stages.</p>
          <div className="feature-highlights">
            <ul>
              <li>Early smoke detection</li>
              <li>Fire pattern recognition</li>
              <li>24/7 monitoring</li>
              <li>Instant alert system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmokeDetection; 
import React from 'react';
import './WeaponDetection.css';

const WeaponDetection = () => {
  return (
    <div className="weapon-detection-container">
      <div className="feature-content-wrapper">
        <h2 className="feature-title">Realtime Weapon Detection System</h2>
        <div className='feature-container'>
          <div className="video-container">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/1N-YasjNKlQ" 
              title="Weapon Detection Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="feature-content">
            <div className="feature-description">
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
        </div>
      </div>
    </div>
  );
};

export default WeaponDetection; 
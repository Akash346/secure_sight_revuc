import './HelmetDetection.css';

const HelmetDetection = () => {
  return (
    <div className="helmet-detection-container">
      <video
        className="construction-video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/images/Rev/Construction.mp4"
        onError={(e) => console.error('Video loading error:', e)}
      />
      <div className="feature-content-wrapper">
        <h2 className="feature-title">Fall Detection & Pose Estimation</h2>
        <div className="feature-container">
          <div className="video-container">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/1RbeksyUffY" 
              title="Fall Detection Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="feature-content">
            <div className="feature-description">
              <h3>About this Feature</h3>
              <p>Our advanced fall detection system uses pose estimation technology to identify when a person has fallen and may need immediate assistance. This critical safety feature is designed to protect vulnerable individuals in various settings - from elderly care facilities and homes to construction sites and playgrounds.</p>
              <div className="feature-highlights">
                <ul>
                  <li>Real-time fall detection using AI pose estimation</li>
                  <li>Immediate alerts to caregivers or emergency contacts</li>
                  <li>Works in various environments (homes, care facilities, workplaces)</li>
                  <li>Reduces response time to potential emergencies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelmetDetection; 
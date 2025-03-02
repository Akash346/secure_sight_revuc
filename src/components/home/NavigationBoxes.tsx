import { Link } from 'react-router-dom';
import './NavigationBoxes.css';

const NavigationBoxes = () => {
  const features = [
    {
      id: 1,
      title: "Realtime Weapon Detection System",
      description: "Advanced AI-powered system for real-time detection and monitoring of weapons in surveillance footage",
      icon: "fas fa-shield-alt",
      link: "/weapon-detection",
      color: "linear-gradient(135deg, #FF6B6B, #FF4757)"
    },
    {
      id: 2,
      title: "AWS Bedrock LLM",
      description: "Get to know anything regarding the safety queries that you have around your area",
      icon: "fas fa-robot",
      link: "/chatbot",
      color: "linear-gradient(135deg, #4070f4, #2952c8)"
    },
    {
      id: 3,
      title: "Report an Incident",
      description: "Report suspicious activities or security concerns immediately",
      icon: "fas fa-exclamation-triangle",
      link: "/report-incident",
      color: "linear-gradient(135deg, #FFA502, #FF7f50)"
    },
    {
      id: 4,
      title: "Real Time Pose Estimation",
      description: "Detection and pose estimation of a person in real-time video streams and automatically detect if the person is in the process of falling or has already fallen ",
      icon: "fas fa-running",
      link: "/helmet-detection",
      color: "linear-gradient(135deg, #2ed573, #7bed9f)"
    },
    {
      id: 5,
      title: "Smoke and Fire Detection",
      description: "University outdoor monitoring system for early detection of smoke and fire hazards",
      icon: "fas fa-fire",
      link: "/smoke-detection",
      color: "linear-gradient(135deg, #FF4757, #FF6348)"
    }
  ];

  return (
    <section id="features" className="navigation-boxes">
      <h2 className="features-title">Features</h2>
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <Link to={feature.link} className="nav-box" key={feature.id}>
              <div className="nav-box-inner">
                <div 
                  className="icon-wrapper"
                  style={{ background: feature.color }}
                >
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="hover-content">
                  <div className="arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationBoxes; 
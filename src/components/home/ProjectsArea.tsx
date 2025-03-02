import { useEffect } from 'react';
import './ProjectsArea.css';

export default function ProjectsArea() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
        const y = ((e.clientY - rect.top) / card.clientHeight) * 100;

        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }, []);

  return (
    <section id="projects" className="projects-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Featured Projects</h2>
            </div>
          </div>
        </div>
        <div className="project-cards-container">
          <div className="project-card wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="/assets/images/testimonials/Screenshot 2025-02-10 194709.png" alt="Student Tracking System" />
            </div>
            <div className="project-content">
              <h4>AI Based Student Tracking System</h4>
              <ul className="project-highlights">
                <li>Real-time attendance tracking using facial recognition</li>
                <li>Performance analytics and progress monitoring</li>
                <li>Behavioral pattern analysis and reporting</li>
                <li>Automated notification system for stakeholders</li>
              </ul>
              <a href="#" className="learn-more">Learn More <i className="ri-arrow-right-line"></i></a>
            </div>
          </div>

          <div className="project-card wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="/assets/images/testimonials/Nuclei.png" alt="Medical Imaging" />
            </div>
            <div className="project-content">
              <h4>Medical Imaging Analysis</h4>
              <ul className="project-highlights">
                <li>Advanced cell nuclei detection and segmentation</li>
                <li>Machine learning-based disease classification</li>
                <li>Automated medical report generation</li>
                <li>High-precision diagnostic assistance tools</li>
              </ul>
              <a href="#" className="learn-more">Learn More <i className="ri-arrow-right-line"></i></a>
            </div>
          </div>

          <div className="project-card wow fadeInUp delay-0-6s">
            <div className="project-image">
              <img src="/assets/images/testimonials/SS.png" alt="Smart Security" />
            </div>
            <div className="project-content">
              <h4>Smart Security System</h4>
              <ul className="project-highlights">
                <li>Real-time threat detection and monitoring</li>
                <li>AI-powered surveillance and analysis</li>
                <li>Automated emergency response system</li>
                <li>Secure data encryption and storage</li>
              </ul>
              <a href="#" className="learn-more">Learn More <i className="ri-arrow-right-line"></i></a>
            </div>
          </div>

          <div className="project-card wow fadeInUp delay-0-8s">
            <div className="project-image">
              <img src="/assets/images/testimonials/ai-wildlife.png" alt="AI Wildlife Camera" />
            </div>
            <div className="project-content">
              <h4>AI Wildlife Camera</h4>
              <ul className="project-highlights">
                <li>Real-time species identification and tracking</li>
                <li>24/7 wildlife monitoring in natural habitats</li>
                <li>Population counting and movement pattern analysis</li>
                <li>Environmental impact assessment capabilities</li>
              </ul>
              <a href="#" className="learn-more">Learn More <i className="ri-arrow-right-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

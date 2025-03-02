import './ServiceArea.css';
import { useEffect } from 'react';

export default function ServiceArea() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-item');
    
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
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Key Challenges We Solve</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>Real-time Detection</h4>
                <p>Instant weapon detection using advanced AI algorithms.Instantly identify critical events as they occur, enabling immediate action to mitigate risks or prevent escalation.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Rapid Response</h4>
                <p>Immediate alert system with automated notification to security personnel.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Evidence Management</h4>
                <p>Secure storage and management of detection events and evidence.</p>
              </div>
            </div>


            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Anonymous Reporting</h4>
                <p>Report incidents securely with location, description, and evidence while maintaining anonymity. Empower individuals to report issues confidentially, fostering trust and encouraging participation without fear of reprisal.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

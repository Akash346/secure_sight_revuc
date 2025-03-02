import Count from '../common/Count'
import './AboutArea.css'

const counter_data: { id: number; title: string; count: number; cls: string }[] = [
  {
    id: 1,
    title: 'Epochs of Training',
    count: 40,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Images for Training',
    count: 44990,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Accurate',
    count: 71,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        {/* <div className="stars-background"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About "Secure Sight"</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content wow fadeInUp delay-0-2s">
                <p style={{ color: "white" }}>Secure Sight is a safety-focused AI platform offering advanced solutions for public and personal security. Our core features include:</p>
                <p style={{ color: "white" }}>Real-time Threat Detection: Powered by advanced AI models like YOLO, our platform provides comprehensive security monitoring across multiple domains. We detect potential threats ranging from weapons and construction site safety violations to fall incidents through pose estimation, while also monitoring for smoke and fire hazards in outdoor environments. Our system instantly alerts designated contacts via Twilio, creating a proactive security ecosystem that safeguards both people and assets.</p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

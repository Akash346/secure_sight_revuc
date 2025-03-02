import { motion } from 'framer-motion';
import './HeroArea.css';

const HeroArea = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        ease: "easeOut",
        duration: 1 
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <div id="hero" className="hero-section">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content">
          <div className="content-wrapper">
            <motion.h1 
              className="main-heading"
              variants={textVariants}
            >
              Empowering Safety Through Every Frame
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={textVariants}
            >
              Serving law enforcement, military defense, fire services, search and rescue teams, first responders, and critical infrastructure.
            </motion.p>
            
            <motion.div 
              className="cta-wrapper"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <motion.button 
                className="cta-button"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Collaborate
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="video-section"
          variants={textVariants}
        >
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/QXfusN_adIE?autoplay=1&mute=1"
              title="SecureSight Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroArea;

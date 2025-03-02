import React from 'react';
import { motion } from 'framer-motion';
import './SmokeDetection.css';

const SmokeDetection = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <motion.div
      className="smoke-detection-container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="smoke-overlay"></div>
      <div className="feature-content-wrapper">
        <motion.h2
          className="feature-title"
          variants={itemVariants}
        >
          Smoke and Fire Detection
        </motion.h2>

        <div className='feature-container-inner'>
          <motion.div
            className="video-container"
            variants={itemVariants}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/pyvbSioO-s0" 
              title="Smoke Detection Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            className="feature-content"
            variants={itemVariants}
          >
            <div className="feature-description">
              <motion.h3 variants={itemVariants}>
                About this Feature
              </motion.h3>
              <motion.p variants={itemVariants}>
                Our outdoor smoke and fire detection system provides early warning for potential fire hazards across university premises. Using advanced computer vision, the system can detect smoke and fire in their early stages.
              </motion.p>
              <motion.div
                className="feature-highlights"
                variants={itemVariants}
              >
                <ul>
                  <motion.li variants={itemVariants}>
                    <span></span>Early smoke detection
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span></span>Fire pattern recognition
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span></span>24/7 monitoring
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <span></span>Instant alert system
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SmokeDetection; 
import './ArchitectureArea.css';

const ArchitectureArea = () => {
  return (
    <div id="architecture" className="architecture-area">
      <div className="architecture-content">
        <h2 className="architecture-pre-title">Architecture</h2>
        <div className="architecture-image-container">
          {/* <div className="architecture-placeholder"> */}
            {/* <i className="fas fa-image"></i>
            <p>Architecture diagram will be placed here</p> */}
            <img
              src="/assets/images/Rev/architcture.png"
              alt="Architecture Diagram"
              className='architecture-image'
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureArea;
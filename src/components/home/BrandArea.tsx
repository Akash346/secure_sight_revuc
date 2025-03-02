import './BrandArea.css'

const BrandArea = () => {
  return (
    <section className="brand-area">
      <div className="container">
        <h2 className="brand-title">Technologies we worked with</h2>
        <div className="brand-list-container">
          <div className="brand-list">
            <div className="brand-item">Python</div>
            <div className="brand-item">Aws</div>
            <div className="brand-item">React</div>
            <div className="brand-item">Flask</div>
            <div className="brand-item">Machine Learning</div>
            <div className="brand-item">Aws-S3</div>
            <div className="brand-item">Aws-EC2</div>
            <div className="brand-item">Bedrock</div>
            <div className="brand-item">Npm</div>
            {/* Duplicate items for seamless loop */}
            <div className="brand-item">Python</div>
            <div className="brand-item">Aws</div>
            <div className="brand-item">React</div>
            <div className="brand-item">Flask</div>
            <div className="brand-item">Machine Learning</div>
            <div className="brand-item">Aws-S3</div>
            <div className="brand-item">Aws-EC2</div>
            <div className="brand-item">Bedrock</div>
            <div className="brand-item">Npm</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandArea 
import React, { useState, useEffect } from 'react';
import './ReportIncident.css';
import HeaderOne from '../../layouts/headers/HeaderOne';

// API configuration for local and production environments
const API_CONFIG = {
  // For local development
  LOCAL: {
    pythonServer: 'http://localhost:5002'
  },
  // For production (update with your EC2 public DNS when ready)
  PRODUCTION: {
    pythonServer: 'http://localhost:5002' // Change this to EC2 DNS later
  }
};

// Use local config for now
const API = API_CONFIG.LOCAL;

const ReportIncident = () => {
  const [location, setLocation] = useState('Fetching location...');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        () => {
          setLocation('Location access denied');
        }
      );
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendAlert = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAlertStatus(null);
    setDebugInfo(null);
    
    try {
      console.log(`Sending to Python server: ${API.pythonServer}/send_report`);
      
      // Use FormData for Python server - only include the required fields
      const formData = new FormData();
      formData.append('description', description);
      formData.append('location', location);
      
      // If we have a selected file, append it
      if (selectedFile) {
        formData.append('photo', selectedFile);
      }
      
      const response = await fetch(`${API.pythonServer}/send_report`, {
        method: 'POST',
        body: formData
      });
      
      const responseText = await response.text();
      
      try {
        const pythonResponse = {
          status: response.status,
          ok: response.ok,
          data: JSON.parse(responseText)
        };
        console.log('Python server response:', pythonResponse);
        
        // Save full response for debugging
        setDebugInfo(JSON.stringify(pythonResponse, null, 2));
        
        if (pythonResponse.ok) {
          const data = pythonResponse.data;
          const successCount = data.successCount || 0;
          const totalAttempted = data.totalAttempted || 1;
          
          setAlertStatus({
            message: `Alert sent successfully! ${successCount} of ${totalAttempted} messages delivered.`,
            type: 'success'
          });
          
          // Reset form on success
          setDescription('');
          setSelectedFile(null);
          setImagePreview(null);
        } else {
          throw new Error(`Server error (${pythonResponse.status}): ${pythonResponse.data.error || 'Unknown error'}`);
        }
      } catch (e) {
        throw new Error(`Invalid response: ${responseText}`);
      }
    } catch (error: any) {
      console.error('Error sending alert:', error);
      setAlertStatus({
        message: `Failed to send alert: ${error.message}`,
        type: 'error'
      });
      
      // Set debug info
      setDebugInfo(JSON.stringify({
        error: error.message
      }, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeaderOne />
      <div className="report-incident-container">
        <div className="feature-content-wrapper">
          <div className='report-incident-container-inner'>
            <div className="form-content">
              <h2 className="feature-title">Report an Incident</h2>
              
              {alertStatus && (
                <div className={`alert-${alertStatus.type}`}>
                  <i className={`fas fa-${alertStatus.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
                  {alertStatus.message}
                </div>
              )}
              
              {debugInfo && (
                <div className="debug-info">
                  <details>
                    <summary>Debug Information (Click to expand)</summary>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{debugInfo}</pre>
                  </details>
                </div>
              )}
              
              <form onSubmit={sendAlert} className="report-form">
                <div className="form-group">
                  <label htmlFor="description">Incident Description</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please provide detailed information about what you witnessed, including when it occurred and any other relevant details..."
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    readOnly
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="photo">Attach Image (Optional)</label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {imagePreview && (
                    <div className="image-preview">
                      <img src={imagePreview} alt="Preview" />
                      <button 
                        type="button" 
                        className="remove-photo" 
                        onClick={() => {
                          setSelectedFile(null);
                          setImagePreview(null);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>

                <div className="button-group">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> Submit Report</>
                    )}
                  </button>
                  
                  <div className="alert-note">
                    <i className="fas fa-info-circle"></i>
                    <span>This will send a WhatsApp alert with your incident details.</span>
                  </div>
                </div>
              </form>
            </div>
            <img
              className="feature-content-image"
              src="/assets/images/Rev/report-an-incident.jpg"
              alt="Report Incident"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportIncident; 
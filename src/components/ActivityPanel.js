// src/components/ActivityPanel.js
import React, { useState } from 'react';
import './ActivityPanel.css';
import { useNavigate } from 'react-router-dom';

function ActivityPanel({
  welcomeText,
  setWelcomeText,
  descriptionText,
  setDescriptionText,
  emailField,
  setEmailField,
  buttonText,
  setButtonText,
  welcomeImage,
  setWelcomeImage,
  imageAlign,
  setImageAlign,
}) {

  const navigate = useNavigate();
  // Local state to control visibility of image-related buttons
  const [showImageOptions, setShowImageOptions] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setWelcomeImage(reader.result);  
      setShowImageOptions(true);       
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setWelcomeImage(null);            
    setShowImageOptions(false);        
  };

  const handleSave = () => {
    alert('Form saved!');             
  };

  const handleDiscard = () => {
    window.location.reload();          
  };

  const handleCancel = () => {
    navigate('/'); // Navigates back to the dashboard
  };

  return (
    <div className="left-panell">
      <h4><span className="iconn">⚙️</span> Settings  <span><button className="cancel-btn" onClick={handleCancel}> ✖</button></span> </h4>

      

      {/* Welcome Screen Editor */}
      <div className="activity">
        
        <label className='ap'>
          Title:
          <input
          className='ip'
            type="text"
            value={welcomeText}
            onChange={(e) => setWelcomeText(e.target.value)}
          />
        </label>
        
        <label className='ap'>
          Description:
          <input
          className='ip'
            type = "text"
            value={descriptionText}
            onChange={(e) => setDescriptionText(e.target.value)}
          />
        </label>
        
        <label className='ap'>
          Button Text:
          <input
          className='ip'
            type="text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
        </label>
        
        <label className='ap'>
          Upload image:
          <input
          className='ip'
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>

        {/* Image Options */}
        {welcomeImage && showImageOptions && (
          <div className="image-options">
            <button onClick={() => setImageAlign('left')}>Align Left</button>
            <button onClick={() => setImageAlign('right')}>Align Right</button>
            <button onClick={handleRemoveImage} className="remove-btn">Remove Image</button>
          </div>
        )}
      </div>

      

      {/* Save and Discard Buttons */}
      <div className="activity">
        <button onClick={handleSave} className="save-btn">Save</button>
        <button onClick={handleDiscard} className="discard-btn">Discard</button>
      </div>
    </div>
  );
}

export default ActivityPanel;

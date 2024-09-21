// src/components/PreviewPanel.js
import React from 'react';

function PreviewPanel({ welcomeText, descriptionText, buttonText, emailField, welcomeImage,  imageAlign }) {
  return (
    <div className="right-panel">
      <div className="preview">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>{welcomeText}</h2>
        <p>{descriptionText}</p>
        <button id ="start">{buttonText}</button>

        {welcomeImage && (
          <img src={welcomeImage} alt="Welcome" style={{ width: '100%', borderRadius: '10px', float: imageAlign,  marginBottom: '20px' }} />
        )}
        
        {emailField && (
          <div>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" />
            </label>
          </div>
        )}

       
      </div>
    </div>
  );
}

export default PreviewPanel;

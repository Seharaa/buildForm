// src/components/EmailFieldPage.js
import React, { useState } from 'react';
import EmailFieldValidation from './EmailFieldValidation';
import { useNavigate } from 'react-router-dom';

function EmailField({ 
  emailTitle,
  setemailTitle,
  emaildescriptionText,
  setemailDescriptionText,
 }) {
  const navigate = useNavigate();

  const handleSave = () => {
    alert('Form saved!');             
  };

  const handleDiscard = () => {
    window.location.reload();          
  };

  const handleCancel = () => {
    navigate('/'); // Navigates back to the dashboard
  };

  const [emailField, setEmailField] = useState(false);

  const handleAddEmailField = () => {
    setEmailField(true);
  };

  return (
    /*<div className="email-field-page">
      <h2>Email Field Configuration</h2>

      {emailField ? (
        <EmailFieldValidation />
      ) : (
        <button onClick={handleAddEmailField}>Add Email Field</button>
      )}

      <button onClick={goBack} className="go-back-btn">Go Back to Dashboard</button>
    </div>*/

    <div className="left-panell">
      <h4><span className="iconn">⚙️</span> Settings  <span><button className="cancel-btn" onClick={handleCancel}> ✖</button></span> </h4>

      

      {/* Welcome Screen Editor */}
      <div className="activity">
        
        <label className='ap'>
          Title:
          <input
          className='ip'
            type="text"
            value={emailTitle}
            onChange={(e) => setemailTitle(e.target.value)}
          />
        </label>
        
        <label className='ap'>
          Description:
          <input
          className='ip'
            type = "text"
            value={emaildescriptionText}
            onChange={(e) => setemailDescriptionText(e.target.value)}
          />
        </label>
        
        
      </div>

      

      {/* Save and Discard Buttons */}
      <div className="activity">
        <button onClick={handleSave} className="save-btn">Save</button>
        <button onClick={handleDiscard} className="discard-btn">Discard</button>
      </div>
    </div>
  );
}

export default EmailField;

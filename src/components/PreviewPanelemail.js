// src/components/PreviewPanel.js
import React from 'react';

function PreviewPanelemail({ emailTitle, emaildescriptionText }) {
  return (
    <div className="right-panel">
      <div className="preview">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>{emailTitle}</h2>
        <p>{emaildescriptionText}</p>
        

       
      </div>
    </div>
  );
}

export default PreviewPanelemail;

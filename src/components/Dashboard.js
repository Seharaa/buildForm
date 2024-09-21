// src/components/Dashboard.js
import React, { useState } from 'react';
import ActivityPanel from './ActivityPanel'; 
import PreviewPanel from './PreviewPanel';
import { useNavigate } from 'react-router-dom';
import EmailField from './EmailField';
import AddFieldModal from './AddFieldModal';



function Dashboard() {
  
  const [showModal, setShowModal] = useState(false);

 
  const handleAddFieldClick = () => {
    setShowModal(true);
  };

  const [currentStep, setCurrentStep] = useState(null);
  const [emailField, setEmailField] = useState(false);

  // Function to handle navigation between the welcome screen and dashboard
  /*const handleWelcomeScreen = () => {
    setCurrentStep('welcome');
  };*/

  const navigate = useNavigate();

  const handleWelcomeScreen = () => {
    navigate('/ActivityPanel'); // Navigates to the welcome screen
  };

  const handleAddField = () => {
    setCurrentStep('addField');
  };

  const handleEndScreen = () => {
    alert("End screen functionality not yet implemented");
  };

  const handleEmailFieldChange = (e) => {
    setEmailField(e.target.checked);
  };
  const handleSave = () => {
    alert('Form saved!');             
  };

  const handleDiscard = () => {
    window.location.reload();          
  };

  return (
    <div className="dashboard">
      <div className="top-bar">
        <p className='title'>Dashboard <span className="icon">⚙️</span></p>
      </div>

      <div className="nav-panel">
        <button className='content'>Content</button>
        <button className='content'>Design</button>
        <button className='content'>Share</button>
        <button className='content'>Replies</button>
      </div>

      <div className="steps-panel">
        <h5>Steps</h5>
        <p className='stepd'>The steps users will take to complete the form</p>
        <button  className =" welcomend" onClick={handleWelcomeScreen}>Welcome Screen</button>
        <br></br>
        <br></br>
        <button className = "addfield"  onClick={handleAddFieldClick}><b>+ Add field</b></button>
      
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <button className = "welcomend" onClick={handleEndScreen}>End Screen</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </div>
      <AddFieldModal showModal={showModal} setShowModal={setShowModal} />

      {/* Render the welcome screen or form builder based on navigation */}
      {currentStep === 'welcome' && <ActivityPanel />}
      {currentStep === 'addField' && <EmailField/>}
        
      
      <div className="activity">
        <button onClick={handleSave} className="save-btn">Save & Publish </button>
        <button onClick={handleDiscard} className="discard-btn">Delete</button>
      </div>
      
    </div>
  );
}

export default Dashboard;

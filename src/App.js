import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ActivityPanel from './components/ActivityPanel';
import PreviewPanel from './components/PreviewPanel';
import Dashboard from './components/Dashboard';
import EmailFieldPage from './components/EmailField';
import PreviewPanelemail from './components/PreviewPanelemail';

function App() {
  const [welcomeText, setWelcomeText] = useState('Welcome to our form');
  const [descriptionText, setDescriptionText] = useState('This is a description of the form');
  const [buttonText, setButtonText] = useState('Start');
  const [emailField, setEmailField] = useState(false);
  const [welcomeImage, setWelcomeImage] = useState(null);
  const [imageAlign, setImageAlign] = useState('center');
  const [emailTitle, setemailTitle] = useState(null);
  const [emaildescriptionText, setemaildescriptionText] = useState(null);

  return (
    <Router>
      <div className="App">
        <div className="main-container">
          {/* Left side: Dashboard */}
          <div className="dashboard-panel">
            <Routes>
              {/* Dashboard Route */}
              <Route path="/" element={<Dashboard />} />

              {/* Activity Panel Route */}
              <Route
                path="/ActivityPanel"
                element={
                  <ActivityPanel
                    welcomeText={welcomeText}
                    setWelcomeText={setWelcomeText}
                    descriptionText={descriptionText}
                    setDescriptionText={setDescriptionText}
                    buttonText={buttonText}
                    setButtonText={setButtonText}
                    emailField={emailField}
                    setEmailField={setEmailField}
                    setWelcomeImage={setWelcomeImage}
                    imageAlign={imageAlign}
                    setImageAlign={setImageAlign}
                  />
                }
              />

              {/* Email Field Page Route */}
              <Route path="/email-field" element={<EmailFieldPage 
              emailTitlet={emailTitle}
              setemailTitle={setemailTitle}
              emaildescriptionText={emaildescriptionText}
              setemaildescriptionText={setemaildescriptionText}
              />} />
            </Routes>
          </div>

          {/* Right side: Preview Panel */}
          <div className="preview-panel">
            <PreviewPanel
              welcomeText={welcomeText}
              descriptionText={descriptionText}
              emailField={emailField}
              buttonText={buttonText}
              welcomeImage={welcomeImage}
              imageAlign={imageAlign}
            />
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;

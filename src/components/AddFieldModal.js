// src/components/AddFieldModal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddFieldModal.css';

function AddFieldModal({ showModal, setShowModal }) {
  const navigate = useNavigate();

  // Close modal when clicking on 'X' button
  const handleClose = () => {
    setShowModal(false);
  };

  // Handle the field selection and navigate to the respective pages
  const handleFieldClick = (field) => {
    if (field === 'email') {
      navigate('/email-field');
    }
    // Add other field navigations here as needed
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add field</h3>
            <button className="close-btn" onClick={handleClose}>✖</button>
            <div className="field-options">
              <button onClick={() => handleFieldClick('multiple-choice')}>Multiple Choice</button>
              <button onClick={() => handleFieldClick('short-text')}>Short Text</button>
              <button onClick={() => handleFieldClick('email')}>Email</button>
              <button onClick={() => handleFieldClick('dropdown')}>Dropdown</button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddFieldModal;

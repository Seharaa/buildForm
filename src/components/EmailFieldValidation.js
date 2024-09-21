// src/components/EmailFieldValidation.js
import React, { useState } from 'react';

function EmailFieldValidation() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputEmail));
  };

  return (
    <div>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{
            borderColor: isValid ? 'green' : 'red',
          }}
        />
      </label>
      {!isValid && <p style={{ color: 'red' }}>Invalid Email Format</p>}
    </div>
  );
}

export default EmailFieldValidation;

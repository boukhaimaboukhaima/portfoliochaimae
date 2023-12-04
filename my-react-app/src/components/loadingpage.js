// LoadingPage.js

import React from 'react';
import logo from '../images/image-removebg-preview.png'; // Adjust the path accordingly

const LoadingPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={logo} alt="Logo" style={{ width: '500px', height: 'auto' }} />
    </div>
  );
};

export default LoadingPage;

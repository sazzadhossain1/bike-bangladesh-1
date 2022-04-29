import React from 'react';
import './GoogleButton.css';
import googleBtn from '../../image/google.png';

const GoogleButton = () => {
    return (
        <div>
        <div className="parent-line">
          <div className="line"></div>
          <p className="or">or</p>
          <div className="line"></div>
          
        </div>
        
        <button className="google-button">
          <img src={googleBtn} alt="" /> <p>Countinue With Google</p>
        </button>
      </div>
    );
};

export default GoogleButton;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from '../GoogleButton/GoogleButton';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
    return (
        <div className="input-container">
        <div className="input-area">
          <form >
            <h3 className='form-title'>Please Login</h3>
  
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              required
            />
  
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
            />
            
            <button className='button'>Login</button>
          </form>
  
          <p className="google-link m-4">
            New to this site?
            <Link to="/signup">Create an Account</Link>
          </p>
  
          <p className="google-link m-4">
            Forget Password?
            <button className='button m-1'  >
              Reset Password
            </button>
          </p>
          <GoogleButton></GoogleButton>

           
        </div>
      </div>
    );
};

export default Login;
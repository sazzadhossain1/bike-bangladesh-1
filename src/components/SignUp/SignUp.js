import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <div className="input-container">
        <div className="input-area">
          <form >
            <h3 className='form-title'>Please Sign Up</h3>
  
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
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              required
            />
            
            <button className='button'>Sign Up</button>
          </form>
  
          <p className="google-link m-4">
            All Have an Account?
            <Link to="/login">Login</Link>
          </p>
  
          <p className="google-link m-4">
            Forget Password?
            <button className='button m-1'  >
              Reset Password
            </button>
          </p>
  
           
        </div>
      </div>
        </div>
    );
};

export default SignUp;
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="input-container">
        <div className="input-area">
          <form >
            <h3>Please Login</h3>
  
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
            
            <button>Login</button>
          </form>
  
          <p className="google-link m-4">
            New to this site?
            <Link to="/signup">Create an Account</Link>
          </p>
  
          <p className="google-link m-4">
            Forget Password?
            <button   >
              Reset Password
            </button>
          </p>
  
           
        </div>
      </div>
    );
};

export default Login;
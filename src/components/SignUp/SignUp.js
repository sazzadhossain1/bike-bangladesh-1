import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleButton from "../GoogleButton/GoogleButton";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = event =>{
      setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = event =>{
      setConfirmPassword(event.target.value);
  };

  const handleCreateUser = event =>{
      event.preventDefault();
      if(password !== confirmPassword){
          setError('Wrong password,Password did not match');
          return;
      }
  }

  return (
    <div>
      <div className="input-container">
        <div className="input-area">
          <form onSubmit={handleCreateUser}>
            <h3 className="form-title">Please Sign Up</h3>

            <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder="Email" required />

            <input
            onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
            />
            <input
            onBlur={handleConfirmPasswordBlur}
              type="Confirm Password"
              name=""
              id=""
              placeholder="Confirm Password"
              required
            />
            <p style={{color:'red'}}>{error}</p>
            <button className="button">Sign Up</button>
          </form>

          <p className="google-link m-4">
            All Have an Account?
            <Link to="/login">Login</Link>
          </p>

          <p className="google-link m-4">
            Forget Password?
            <button className="button m-1">Reset Password</button>
          </p>
          <GoogleButton></GoogleButton>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

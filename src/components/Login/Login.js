import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleButton from "../GoogleButton/GoogleButton";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

const handleResetPassword =()=>{
    sendPasswordResetEmail(auth,email)
    .then(() =>{
        alert('Sent Email for Reset Password')
    })
}


  if (user) {
    navigate(from, {replace: true});
  }

  return (
    <div className="input-container">
      <div className="input-area">
        <form onSubmit={handleUserLogin}>
          <h3 className="form-title">Please Login</h3>

          <input
            onBlur={handleEmailBlur}
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
          />

          <input
            onBlur={handlePasswordBlur}
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && (
            <p style={{ color: "white" }}>
              Loading...
              <br />
              Please Waite
            </p>
          )}
          <button className="button">Login</button>
        </form>

        <p className="google-link m-4">
          New to this site?
          <Link to="/signup">Create an Account</Link>
        </p>

        <p className="google-link m-4">
          Forget Password?
          <button onClick={handleResetPassword} className="button m-1">Reset Password</button>
        </p>
        <GoogleButton></GoogleButton>
      </div>
    </div>
  );
};

export default Login;

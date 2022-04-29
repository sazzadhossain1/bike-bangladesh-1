import React from "react";
import "./GoogleButton.css";
import googleBtn from "../../image/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorUser;


  if(error){
    errorUser = <div>
      <p style={{color:'red'}}>Error:{error.message}</p>
    </div>
  }
  

if(user){
  navigate('/')
}
  return (
    <div>
      <div className="parent-line">
        <div className="line"></div>
        <p className="or">or</p>
        <div className="line"></div>
      </div>
        {errorUser}

        {loading && (
            <p style={{ color: "white" }}>
              Loading...
              <br />
              Please Waite
            </p>
          )}
      <button onClick={() => signInWithGoogle()} className="google-button">
        <img src={googleBtn} alt="" /> <p>Countinue With Google</p>
      </button>
    </div>
  );
};

export default GoogleButton;

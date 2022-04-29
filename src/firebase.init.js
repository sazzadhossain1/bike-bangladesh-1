// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApPrNHwWzW5cm5mtmgI7wIJSmJCsVj2Hk",
  authDomain: "bike-bangladesh.firebaseapp.com",
  projectId: "bike-bangladesh",
  storageBucket: "bike-bangladesh.appspot.com",
  messagingSenderId: "274405996712",
  appId: "1:274405996712:web:b44d2d5108962ef903ea9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

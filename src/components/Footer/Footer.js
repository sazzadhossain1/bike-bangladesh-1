import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      
      <div className="parent-div ">
        <div className="colum">
          <div className="mt-5">
            <h5>Useful Link</h5>
            <p>Legal and Privacy</p>
            <p>Contact</p>
            <p>Gift Card</p>
            <p>Customer Service</p>
            <p>My Account</p>
            <p>Find A Store</p>
          </div>

          <div className="mt-5">
            <h5>Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>

          <div className="mt-5">
            <h5>Shop</h5>
            <p>Yamaha fzs v3</p>
            <p>Yamaha YZR R15 v4</p>
            <p>Yamaha YZR R15 v3</p>
            <p>Honda CBR-150</p>
          </div>
        </div>
        <p className="CopyRight">
          <small>CopyRight @ {year} BIKE BANGLADESH</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import './NotFound.css';
import photo from "../../image/image-404/A-404-Page-Best-Practices-and-Design-Inspiration.jpg";

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 style={{color:'red'}} className="mb-5 mt-5">This Page is Not Found</h1>
            <img src={photo} alt="" />
        </div>
    );
};

export default NotFound;
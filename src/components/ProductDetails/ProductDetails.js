import React from "react";
import picture3 from "../../image/Mileage Bikes/best-bike-3.png";
import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div>
      <div className="detail-container">
        <div className="img">
          <img src={picture3} alt="" />
        </div>
        <div>
          <h5>Supplier Name</h5>
          <h5>Category</h5>
          <p>Price</p>
          <p>Quantity</p>

          <div>
            <input className="text-field" type="text" placeholder="Add Product"/>
            <button className="add-button">Add Product</button>
          </div>
          <button className="mt-3 add-button">Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

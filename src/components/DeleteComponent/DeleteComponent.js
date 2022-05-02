import React from 'react';
import { Link } from 'react-router-dom';
import './DeleteComponent.css';

const DeleteComponent = ({ product }) => {
    const { _id, name, image, Price, quantity, supplierName } = product;
    return (
      <div>
        <div className="products-info">
          <img src={image} alt="" />
          <p className="name">{name}</p>
          <p className="name">Supplier-{supplierName}</p>
          <p className="price">{Price} - Taka</p>
          <p>Quantity-{quantity}</p>
          <button className="update-button">
            <Link to={`/productDetails/${_id}`} className="all-products-btn">
              Update 
            </Link>{" "}
          </button>
          <button className='delete-button'>Delete</button>
        </div>
      </div>
    );
};

export default DeleteComponent;
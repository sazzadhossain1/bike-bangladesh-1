import React from "react";
import { Link } from "react-router-dom";
import "./ProductData.css";

const ProductData = ({ product }) => {
  const { _id, name, image, Price, quantity, supplierName } = product;
  return (
    <div className="">
      <div className="products-info">
        <img src={image} alt="" />
        <p className="name">{name}</p>
        <p className="name">Supplier-{supplierName}</p>
        <p className="price">{Price} - Taka</p>
        <p>Quantity-{quantity}</p>
        <button className="order-button">
          <Link to={`/productDetails/${_id}`} className="all-products-btn">
            Update Product
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductData;

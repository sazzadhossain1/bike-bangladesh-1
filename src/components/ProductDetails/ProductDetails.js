import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';

const ProductDetails = () => {

  const { productId } = useParams();

  const [product, setProduct] = useState({});
  // console.log(product);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  return (
    <div className="mother-container">
      <div className="detail-container mt-5 mb-5">
        <div className="img">
          <img className="mt-5" src={product.image} alt="" />
        </div>
        <div className="info-container">
          <h5>Supplier Name: {product.supplierName}</h5>
          <p>Price - {product.Price}</p>
          <p>Quantity : {product.quantity}</p>

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

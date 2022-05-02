import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import picture3 from "../../image/Mileage Bikes/best-bike-3.png";
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
    <div>
      <div className="detail-container">
        <div className="img">
          <img className="mt-5" src={product.image} alt="" />
        </div>
        <div>
          <h5>Supplier Name: {product.supplierName}</h5>
          <p>Price - {product.quantity}</p>
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

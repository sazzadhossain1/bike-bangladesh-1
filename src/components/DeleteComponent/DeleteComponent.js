import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DeleteComponent.css";

const DeleteComponent = ({ product, handleUserDelete }) => {
  console.log(product);
  const { _id, name, image, Price, quantity, supplierName } = product;

  // const [product1, setProduct1] = useState([]);
  // useEffect(() => {
  //   fetch("https://radiant-meadow-78663.herokuapp.com/product")
  //     .then((res) => res.json())
  //     .then((data) => setProduct1(data));
  // }, []);

  return (
    <div>
      <div className="products-info">
        <img src={image} alt="" />
        <p className="name">{name}</p>
        <p className="name">Supplier-{supplierName}</p>
        <p className="price">{Price} - Taka</p>
        <p>Quantity-{quantity}</p>
        {/* <button className="update-button">
          <Link to={`/productDetails/${_id}`} className="all-products-btn">
            Update
          </Link>{" "}
        </button> */}
        <button
          onClick={() => handleUserDelete(product._id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteComponent;

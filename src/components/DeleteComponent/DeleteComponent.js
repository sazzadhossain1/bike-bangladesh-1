import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DeleteComponent.css";

const DeleteComponent = ({ product }) => {
  console.log(product);
  const { _id, name, image, Price, quantity, supplierName } = product;


  const [product1, setProduct1] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProduct1(data));
  }, []);
  const handleUserDelete = (productId) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("deleting user with id, ", productId);
      const url =` http://localhost:5000/product/${productId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = product1.filter(
            (product) => product._id !== productId
          );
          setProduct1(remaining);
        });
    }
  };


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
        <button onClick={() => handleUserDelete(product._id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default DeleteComponent;

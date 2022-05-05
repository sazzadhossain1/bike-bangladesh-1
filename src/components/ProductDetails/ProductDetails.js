import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  console.log(product);
  const { productId } = useParams();

  // console.log(product);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  const addQuantity = (e) => {
    e.preventDefault();
    const quantity =
      parseInt(e.target.addQuantity.value) + parseInt(product.quantity);
    console.log(quantity);

    const url = `http://localhost:5000/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleDeliver = () => {
    const quantity = product.quantity - 1;
    
    console.log(quantity);

    const url = `http://localhost:5000/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
            <form onSubmit={addQuantity}>
              <input
                name="addQuantity"
                className="text-field"
                type="number"
                placeholder="Add Product"
              />
              <input type="submit" value="add" />
            </form>
          </div>
          <button onClick={handleDeliver} className="mt-3 add-button">Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

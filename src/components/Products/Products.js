import React, { useEffect, useState } from "react";
import DeleteComponent from "../DeleteComponent/DeleteComponent";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="product-container">
      <h1>Our All products</h1>
      <div className="products">
        {products.map((product) => (
          <DeleteComponent key={product._id} product={product}></DeleteComponent>
          
        ))}
        
      </div>
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import ProductData from "../ProductData/ProductData";
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
          <ProductData key={product._id} product={product}></ProductData>
          
        ))}
        
      </div>
    </div>
  );
};

export default Products;

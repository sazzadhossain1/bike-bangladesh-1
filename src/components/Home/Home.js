import React, { useEffect, useState } from "react";
import ProductData from "../ProductData/ProductData";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="home-container">

      </div>
      <div>
            {
                products.map(product => <ProductData key={product.id} product={product}></ProductData>)
            }
            </div>
    </div>
  );
};

export default Home;

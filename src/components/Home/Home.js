import React, { useEffect, useState } from "react";
import ProductData from "../ProductData/ProductData";
import "./Home.css";
import photo1 from "../../image/allBrands/brand-1.jpg";
import photo2 from "../../image/allBrands/brand-2.jpg";
import photo3 from "../../image/allBrands/brand-3.jpg";
import photo4 from "../../image/allBrands/brand-4.jpg";
import photo5 from "../../image/allBrands/brand-5.jpg";
import photo6 from "../../image/allBrands/brand-6.jpg";
import photo7 from "../../image/allBrands/brand-7.jpg";
import photo8 from "../../image/allBrands/brand-8.jpg";
import photo11 from "../../image/allBrands/brand-11.jpg";
import photo9 from "../../image/allBrands/brand-9.jpg";
import photo10 from "../../image/allBrands/brand-10.jpg";
import photo12 from "../../image/allBrands/brand-12.png";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="home-container"></div>

      <div className="products">
        {products.map((product) => (
          <ProductData key={product._id} product={product}></ProductData>
        ))}
      </div>

      <section className="brand-title">
        <p style={{ color: "red" }}>All Brand</p>
        <h3>Popular Brands</h3>
        <div className=" all-brand">
          <div>
            <img src={photo1} alt="" />
            <p>Suzuki</p>
          </div>
          <div>
            <img src={photo2} alt="" />
            <p>Hero </p>
          </div>
          <div>
            <img src={photo3} alt="" />
            <p>Harley Davidson</p>
          </div>
          <div>
            <img src={photo4} alt="" />
            <p>Ducati</p>
          </div>
          <div>
            <img src={photo5} alt="" />
            <p>Yamaha</p>
          </div>
          <div>
            <img src={photo6} alt="" />
            <p>Royal Enfield</p>
          </div>
          <div>
            <img src={photo7} alt="" />
            <p>Honda</p>
          </div>
          <div>
            <img src={photo8} alt="" />
            <p>Aprilia</p>
          </div>
          <div>
            <img src={photo9} alt="" />
            <p>Triumph </p>
          </div>
          <div>
            <img src={photo10} alt="" />
            <p>Kawasaki</p>
          </div>
          <div>
            <img src={photo11} alt="" />
            <p>TVS</p>
          </div>
          <div>
            <img src={photo12} alt="" />
            <p>Vespa</p>
          </div>
        </div>
        <hr />
      </section>
      <section>
        
      </section>



    </div>
  );
};

export default Home;

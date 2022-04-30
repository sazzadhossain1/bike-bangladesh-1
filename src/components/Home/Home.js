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

import picture1 from "../../image/Mileage Bikes/best-bike-1.png";
import picture2 from "../../image/Mileage Bikes/best-bike-2.png";
import picture3 from "../../image/Mileage Bikes/best-bike-3.png";

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
      <section className="mileage-section">
        <p style={{color: 'red'}}>For More Mileage</p>
        <h3 className="mb-5">Best Mileage Bike</h3>
        <div className="mileage-bike">
          <div>
            <img src={picture1} alt="" />
            <h5>Mercedez Benz</h5>
            <p>450,000 Taka</p>
          </div>
          <div>
            <img src={picture2} alt="" />
            <h5>BMW 720 Series</h5>
            <p>400,000 Taka</p>
          </div>
          <div>
            <img src={picture3} alt="" />
            <h5>Honda Civic</h5>
            <p>350,000 Taka</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

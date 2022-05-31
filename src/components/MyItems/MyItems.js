import React, { useEffect, useState } from "react";
import DeleteComponent from "../DeleteComponent/DeleteComponent";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://radiant-meadow-78663.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleUserDelete = (productId) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (proceed) {
      console.log("deleting user with id, ", productId);
      const url = ` https://radiant-meadow-78663.herokuapp.com/product/${productId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter(
            (product) => product._id !== productId
          );
          setProducts(remaining);
        });
    }
  };
  return (
    <div>
      <h1 className="mt-5">This is My Items</h1>
      <div className="products">
        {products.map((product) => (
          <DeleteComponent
            key={product._id}
            product={product}
            handleUserDelete={handleUserDelete}
          ></DeleteComponent>
        ))}
      </div>
    </div>
  );
};

export default MyItems;

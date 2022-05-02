import React from "react";
import "./AddItem.css";

const AddItem = () => {





  const handleAddProduct = (event) => {
    event.preventDefault();
    const supplierName = event.target.supplierName.value;
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    const Price = event.target.Price.value;
    const image = event.target.image.value;

    const product = {
      supplierName,
      name,
      quantity,
      Price,
      image,
      
    };

    // send data to the server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("product add successfully!!!");
        // toast.success("Product Add Successful", { id: "success" });
        event.target.reset();
      });
  };







  return (
    <div className="main-div">
      <h1 className="m-5">Please Add Your Items</h1>
      <form onSubmit={handleAddProduct} className="inpur-field">
        <div className="input-div">
          <input className="input" name="name" type="text" placeholder="Product Name" />
          <br />
          <input className="input" name="supplierName" type="text" placeholder="Supplier Name" />
          <br />
          <input className="input" name="image" type="text" placeholder="Image Url" />
          <br />
          <input className="input" name="Price" type="text" placeholder="Price" />
          <br />
          <input className="input" name="quantity" type="text" placeholder="Quantity" />
          <br />
          <input className="input" type="text" placeholder="Email" />
          <br />
        </div>
          <button className="update-product">Update Product</button>
      </form>
    </div>
  );
};

export default AddItem;

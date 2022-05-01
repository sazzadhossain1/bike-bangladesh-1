import React from "react";
import "./AddItem.css";

const AddItem = () => {
  return (
    <div className="main-div">
      <h1 className="m-5">Please Add Your Items</h1>
      <form className="inpur-field">
        <div className="input-div">
          <input className="input" type="text" placeholder="Product Name" />
          <br />
          <input className="input" type="text" placeholder="Supplier Name" />
          <br />
          <input className="input" type="text" placeholder="Image Url" />
          <br />
          <input className="input" type="text" placeholder="Price" />
          <br />
          <input className="input" type="text" placeholder="Quantity" />
          <br />
          <input className="input" type="text" placeholder="Email" />
          <br />
        </div>
          <button className="update-button">Update Product</button>
      </form>
    </div>
  );
};

export default AddItem;

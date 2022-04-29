import React from 'react';
import './ProductData.css';

const ProductData = ({product}) => {
    const {name, image} = product;
    return (
        <div>
            <img src={image} alt="" />
            <p>name: {name}</p>
        </div>
    );
};

export default ProductData;
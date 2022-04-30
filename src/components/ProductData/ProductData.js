import React from 'react';
import './ProductData.css';

const ProductData = ({product}) => {
    const {name, image, Price} = product;
    return (
        <div >
            <div className='products-info'>
            <img src={image} alt="" />
            <p className='name'>{name}</p>
            <p className='price'>{Price} - Taka</p>
            </div>
        </div>
    );
};

export default ProductData;
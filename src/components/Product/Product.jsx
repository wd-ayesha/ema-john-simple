import React from 'react';
import './Product.css'

const Product = (props) => {
    const{img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <h3>{name}</h3>
           <p>Price: {price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Rating: {ratings} start</p>
           <button>Add to Cart</button>
        </div>
    );
};

export default Product;
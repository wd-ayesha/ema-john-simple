import React, {useEffect, useState} from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },[])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>Products comming here: {products.length}</h2>
                {
                    products.map(product=><Product
                    key={product.id}
                    product= {product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;
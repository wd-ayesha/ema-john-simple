import React, {useEffect, useState} from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },[])

    useEffect( () => {
        // console.log('products', products);

        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id
        // console.log(storedCart);
        for(const id in storedCart){
            // console.log(id)
            //step 2: get the product from products by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                //step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added product', addedProduct)
        }
        // step 5: set cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <>
        {/* <h2>Products comming here: {products.length}</h2> */}
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product
                    key={product.id}
                    product= {product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;
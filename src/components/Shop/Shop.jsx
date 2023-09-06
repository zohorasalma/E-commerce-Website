import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cartItems,setCartItems] = useState([]);

    const handleCart=(product)=>{
        setCartItems([...cartItems,product]);
    }

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} products={product} handleCart={handleCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <h5>Selected Items : {cartItems.length}</h5>

            </div>
            
        </div>
    );
};

export default Shop;
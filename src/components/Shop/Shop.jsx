import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleCart = (product) => {
        const existPd = cart.find(pd => pd.id === product.id);
        if (existPd) {
            existPd.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            setCart([...remaining, existPd]);
        }
        else {
            product.quantity = 1;
            setCart([...cart, product]);
        }
        addToDb(product.id);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    useEffect(() => {
        let newCart = [];
        let storedCart = getShoppingCart();
        if (storedCart && products.length > 0) {
            for (const id in storedCart) {
                let pd = products.find(product => product.id === id);
                pd.quantity = storedCart[id];
                newCart.push(pd);
            }
        }
        setCart(newCart);

    }, [products])
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} products={product} handleCart={handleCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;
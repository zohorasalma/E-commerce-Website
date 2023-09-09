import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product';

const Cart = ({ cart }) => {
    // console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;


    for (let product of cart) {
        totalPrice = totalPrice + product.price*product.quantity;
        totalShipping += product.shipping;
        quantity+= product.quantity
    }
    let tax = totalPrice * 0.07;
    let total = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${total.toFixed(2)}</h5>

            <div className='cart-btn-container'>
                <button id='btn-clear'>Clear Cart <FontAwesomeIcon icon={faDeleteLeft} /></button>
                <button id='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>


        </div>
    );
};

export default Cart;
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, id, name, price, ratings, seller } = props.products;
    const handleCart = props.handleCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button id='btn-cart' onClick={()=>handleCart(props.products)}>Add to cart  <FontAwesomeIcon icon={faCartShopping} /></button>

        </div>
    );
};

export default Product;
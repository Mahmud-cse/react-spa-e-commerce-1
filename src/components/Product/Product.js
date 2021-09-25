import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
// import ReactStars from "react-rating-stars-component";

const Product = (props) => {
    // data come from products of useState
    const {name,img,seller,price,stock,star}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                />
                 {/* <ReactStars
                    count={star}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                /> */}
                <br />

                {/* passing data to handleAddToCart function in shop.js */}
                <button onClick={()=>props.handleAddToCart(props.product)} className="purchase-button">{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;
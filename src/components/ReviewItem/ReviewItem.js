import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,key}=props.product;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>{price}</p>
                <p>{quantity}</p>
                <button onClick={()=>props.handleRemove(key)} className="purchase-button">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;
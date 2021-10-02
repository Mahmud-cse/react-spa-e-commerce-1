import React from 'react';
import './Cart.css';


// data come from handleAddToCart function
const Cart = (props) => {
    const {cart}=props;
    // const total=props.cart.reduce((previous,current)=>previous+current.price*current.quantity,0);
    // const totalQuantity=props.cart.reduce((previous,current)=>previous+current.quantity,0);


    // data is calculated from local storage data
    let totalQuantity=0;
    let itemsPrice=0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        totalQuantity+=product.quantity;
        itemsPrice = itemsPrice + product.price * product.quantity;
    }

    const shipping=itemsPrice>0?15:0;
    const tax=(itemsPrice+shipping)*0.10;
    const grandTotal=(itemsPrice+tax+shipping);

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;
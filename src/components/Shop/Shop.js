import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [page,setPage]=useState(0);
    const [pageCount,setPageCount]=useState(0);  
    const [displayProducts,setDisplayProducts]=useState([]);
    const size=10;
    // Data fetch from local JSON file
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products);

            // display product optionally
            setDisplayProducts(data.products);

            // pagination
            const count=data.count;
            const pageNumber=Math.ceil(count/size);
            setPageCount(pageNumber);
        });
    },[page]);

    // Used to display in UI from local storage
    useEffect(()=>{
        if(products.length){
            const savedCart=getStoredCart();
            const storedCart=[];
            for(const key in savedCart){
                const addedProduct=products.find(product=>product.key===key);
                    const quantity=savedCart[key];
                    addedProduct.quantity=quantity;
                    storedCart.push(addedProduct);
            };
            setCart(storedCart);
        }
    },[products]);

    // cart calculation and value set set in local storage
    const handleAddToCart=(product)=>{
        const newCart=[...cart];
        const existing=cart.find(c=>c.key===product.key);
        if(existing){
            product.quantity+=1;
        }else{
            product.quantity=1;
            newCart.push(product);
        }
        setCart(newCart);
        addToDb(product.key);
    }

    // filter search result
    const handleSearch=(event)=>{
        const searchTest=event.target.value;
        const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchTest.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input type="text" onChange={handleSearch} placeholder="Search Product"/>
            </div>
            <div className="shop-container">
              <div className="product-container">
                <h3>Products: </h3>
                {/* product component */}
                {
                    displayProducts.map(product=><Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
                <div className="pagination">
                {   
                 [...Array(pageCount).keys()].map(number=><button
                    key={number}
                    onClick={()=>setPage(number)}
                    className={number===page?'selected':''}
                 >{number+1}</button>)
                }
                </div>
            </div>
            {/* cart component */}
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="purchase-button">Review Item</button>
                    </Link>
                </Cart>
              </div>
            </div>
        </>
    );
};

export default Shop;
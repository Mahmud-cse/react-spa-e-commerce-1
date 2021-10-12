import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,signOutUsingGoogle}=useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink  to="/shop">Shop</NavLink>
                <NavLink  to="/review">Order Review</NavLink>
                <NavLink  to="/inventory">Manage Inventory</NavLink>
                <span style={{color:"white"}}>{user.displayName}</span>
                {user.email?
                    <button onClick={signOutUsingGoogle} type="button" className="btn btn-primary m-1">Log Out</button>
                    :
                    <NavLink  to="/login">Login</NavLink>
                }
                <NavLink  to="/register">Register</NavLink>
            </nav>
        </div>
    );
};

export default Header;
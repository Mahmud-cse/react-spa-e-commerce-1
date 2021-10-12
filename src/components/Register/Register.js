import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="container custom">
            <form className="p-5">
                <h3>Register</h3>

                <div className="form-group mb-2">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" style={{width:"150%"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" style={{width:"150%"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" style={{width:"150%"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" style={{width:"150%"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Re-enter password</label>
                    <input type="password" className="form-control" placeholder="Re-enter password" style={{width:"150%"}}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-2">Register</button>
                <p className="forgot-password text-right">
                    Already Registered? <Link to="/login" className="custom-link">Log in</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
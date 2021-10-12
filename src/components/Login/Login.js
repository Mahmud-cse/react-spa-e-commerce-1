import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import './Login.css';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/shop';
    console.log('came from',location.state?.from);

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri);            
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode,errorMessage);
          });
    }

    return (
        <div>
            <div className="container custom">
                <form className="p-5">
                    <h3>Sign In</h3>

                    <div className="form-group mb-2">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" style={{width:"150%"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" style={{width:"150%"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-2">Submit</button>
                    <p className="text-right">
                        <Link to="/register" className="custom-link">Forget Password</Link>
                    </p>
                </form>
            </div>
            <div  style={{textAlign:"center"}}>
                <div>---------------or---------------</div>
                <button onClick={handleGoogleLogin} type="button" className="btn btn-primary m-5">Google Sign In</button>
                <button type="button" className="btn btn-success m-5">Github Sign In</button>
            </div>
        </div>
    );
};

export default Login;
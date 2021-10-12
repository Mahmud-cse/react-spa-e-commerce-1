import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="custom">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} placeholder="name"/>
                    <input defaultValue={user.email} {...register("email", { required: true })} placeholder="email"/>
                    <input defaultValue="" {...register("address")} placeholder="address"/>
                    <input defaultValue="" {...register("address")} placeholder="city"/>
                    <input defaultValue="" {...register("zip")} placeholder="zip code"/>
                    <input defaultValue="" {...register("phone")} placeholder="phone"/>
              {errors.email && <span className="error">This field is required</span>}
              <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
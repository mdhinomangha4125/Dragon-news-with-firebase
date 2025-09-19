import React from 'react';
import user from "../assets/demo-user.png"
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-3'>
            <div></div>
            <div className='flex gap-8 justify-center items-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-2 justify-end items-center'><img src={user} alt="user" /><button className='btn btn-primary'>Login</button></div>
        </div>
    );
};

export default Navbar;
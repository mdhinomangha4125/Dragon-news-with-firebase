import React, { use } from 'react';
import userIcon from "../assets/demo-user.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='w-11/12 mx-auto grid grid-cols-3'>
            <div>{user && user.email}</div>
            <div className='flex gap-8 justify-center items-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-2 justify-end items-center'><img src={userIcon} alt="user" /><Link to = "/auth/login" className='btn btn-primary'>Log in</Link></div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
                <h2 className='text-center font-bold text-3xl p-5 mt-5'>Register Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" className="input" placeholder="Your Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Put your Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center'>Have an Account ? <Link className='text-blue-600' to="/auth/login">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
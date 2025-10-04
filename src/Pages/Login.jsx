import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        
        signIn(email, password)
        .then(result => { 
            // console.log(result.user);
            navigate(`${location.state? location.state : ""}`);
        })
        .catch((error) => {
            const errorcode = error.code;
            const errorMessage = error.message;
            alert(errorcode, errorMessage)
        })

    }
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-center font-bold text-3xl p-5 mt-5'>Log In Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/** Email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" required name="email" />
                        {/** Password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" required name="password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4" type="submit">Login</button>
                    </fieldset>
                    <p className='text-center'>Don't have an Account ? <Link className='text-blue-600' to="/auth/register">Register</Link> </p>
                </form >
            </div>
        </div>
    );
};

export default Login;
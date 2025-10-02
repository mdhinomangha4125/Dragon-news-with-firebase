import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext)
    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
                <h2 className='text-center font-bold text-3xl p-5 mt-5'>Register Your Account</h2>
                <form onSubmit={handleRegistration} className="card-body">
                    <fieldset className="fieldset">
                                { /**Name*/}
                        <label className="label">Your Name</label>
                        <input type="text" className="input" placeholder="Your Name" required name="name" />
                                {/**Photo URL*/}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Put your Photo URL" required name="photo" />
                                {/**Email*/}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" required name="email" />
                                {/**Password*/}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" required name="password" />
                                {/**Register*/}
                        <button className="btn btn-neutral mt-4" type="submit">Register</button>
                    </fieldset>
                    <p className='text-center'>Have an Account ? <Link className='text-blue-600' to="/auth/login">Log In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
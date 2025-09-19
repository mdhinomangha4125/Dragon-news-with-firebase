import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mt-5'>Login With</h2>
            <div className='mt-5 space-y-3'>
                <button className='btn btn-outline w-full btn-secondary'><FaGoogle size={24}></FaGoogle> Log In with Google</button><button className='btn btn-outline w-full btn-primary'><FaGithub size={24}></FaGithub> Log In with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;
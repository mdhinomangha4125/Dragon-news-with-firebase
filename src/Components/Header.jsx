import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-5'>
            <img className='w-1/2' src={logo} alt="logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>

        </div>
    );
};

export default Header;
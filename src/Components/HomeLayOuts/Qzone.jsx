import React from 'react';
import swimming from "../../assets/swimming.png"
import classroom from "../../assets/class.png"
import playground from "../../assets/playground.png"

import adSpace from "../../assets/bg.png"

const Qzone = () => {
    return (
        <div className='p-5 bg-white'>
            <h2 className='font-black mb-5'>Q-Zone</h2>
            <div>
                <img src={swimming} />
                <img src={classroom} />
                <img src={playground} />
                <img src={adSpace} />
            </div>
        </div>
                
    );
};

export default Qzone;
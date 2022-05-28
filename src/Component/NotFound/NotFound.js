import React from 'react';
import notFound from '../../assets/notFound.png';

const NotFound = () => {
    return (
        <div className='mt-24'>
            <img className='w-full h-screen' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
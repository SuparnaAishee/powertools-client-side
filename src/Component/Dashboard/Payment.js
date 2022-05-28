import React from 'react';
import payment from '../../assets/payment.png'
const Payment = () => {
    return (

        <div>
            <h1 className='text-3xl text-center text-green-500 my-5 font-bold'>Payment Process coming very Soon !!! </h1>
            <div className='flex justify-center items-center mt-20'>
            <img className=' h-80' src={payment} alt="" />
        </div>
        </div>
        
    );
};

export default Payment;
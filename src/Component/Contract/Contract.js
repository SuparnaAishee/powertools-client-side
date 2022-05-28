import React from 'react';

const Contract = () => {
    return (
        <div className='mx-24 my-20 flex justify-center items-center'>
            <div class="card w-full bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="card text-2xl font-bold  text-center">Contact Us</h2>
                    <div class="divider"></div>
                    <div className='text-center'>
                    <input type="text" placeholder="Enter Your Name" class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                    <input type="text" placeholder="enter Your Email" class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                    <input type="text" placeholder="Enter Your Phone" class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                    </div>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
import React from 'react';

import country from '../../assets/globe.jpg'
import analysis from '../../assets/tools.svg.png'
import client from '../../assets/kindpng_743103.png'
import like from '../../assets/188-1881441_evaluation-icon.png'
const BusinessSummry = () => {
    return (
        <div className='mt-10 flex justify-center items-center'>
            <div>
                <h1 className='text-center  my-10 text-3xl font-bold text-orange-400 '> Business Summary</h1>

                <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>

                    <div class="card w-80 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={country} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">100+</h2>
                            <p>countries</p>
                        </div>
                    </div>
                    <div class="card w-80 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={client} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">1000+</h2>
                            <p>Clients</p>
                        </div>
                    </div>
                    <div class="card w-80 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={analysis} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">100 +</h2>
                            <p>Tools</p>
                        </div>
                    </div>
                    <div class="card w-80 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={like} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">600+ </h2>
                            <p>Feed Back</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummry;
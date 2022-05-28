import React from 'react';
import Banner from './Banner';
import HomeTools from './HomeTools';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Review from './Review';
import BusinessSummry from './BusinessSummry';
import Contract from '../Contract/Contract';


const Home = () => {

    const [tools, setTools] = useProduct({});

    const filteredTools = tools?.slice(0, 6)

    /* navigating all tools page  */
    const navigate = useNavigate();

    const seeAllProduct = () => {
        navigate('/allTools');
    }
    return (
        <div className='mt-8  pb-20 flex justify-center items-center   bg-slate-100	'>
            <div>
                <Banner></Banner>

                <h1 className='text-4xl  font-bold  text-orange-400 text-center '>Our Tools</h1>
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider mx-60 "></div>
                </div>



                <div className=' px-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                    {
                        filteredTools?.map(tool => <HomeTools key={tool._id} tool={tool}></HomeTools>)
                    }
                </div>
                <div className='text-center py-10 '>
                    <button className='btn ' onClick={seeAllProduct}> All Product</button>
                </div>


                <Review></Review>
                <BusinessSummry></BusinessSummry>
                <Contract></Contract>
            </div>

        </div>
    );
};

export default Home;
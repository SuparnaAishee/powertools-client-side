import React from 'react';
import niloy from '../../assets/FB_IMG_1641300195181.jpg'
const MyPortFolio = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-24 '>
                <div class="card w-80 bg-base-100 h-[300px] my-5 shadow-xl">
                    <div className=''><figure><img src={niloy} className="w-full  " alt="Shoes" /></figure></div>
                </div>
            </div>
            <div className='flex justify-center items-center text-center' >
                <div>
                    <h2 class="card-title  ml-10  font-bold text-2xl ">Suparna Dhar </h2>
                    <p class="card-title ml-7 font-bold text-xl ">Web Developer</p>
                    <p class="card-title   font-bold text-xl ">suparnad806@gmail.com</p>
                </div>
            </div>
            <div className='my-20  mx-20 grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="my-3 card-title text-orange-400">Educational Qualification </h2>
                        <hr />
                        <h2 class="card-title">Bsc Honors in CSE</h2>
                        <p><b>Chittagong Independent University </b></p>
                        <hr />
                        <h2 class="card-title">Higher Secondary Certificate</h2>
                        <p><b>Ranguniya Govt College</b></p>
                        <hr />
                        <h2 class="card-title"> Secondary School Certificate</h2>
                        <p><b>Kpm High School And College </b></p>
                        
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="my-3 card-title text-orange-400"> My project Link </h2>
                        <hr />
                        <p>1. <b>https://fabulous-moxie-834cef.netlify.app/</b></p>
                        <hr />
                        <p>2. <b>https://matrimony-convention-hall.netlify.app/ </b></p>
                        <hr />
                        <p>3. <b> https://lighthearted-biscuit-5624a1.netlify.app/</b></p>
                        <hr />
                        
                        
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="my-3 card-title text-orange-400">skills  </h2>
                        <h3>Html, Css ,Twailindcss,GitHub, Css frameWork , javascript, ES6, React js, React library, MonoDB,Mode js, Database, </h3>
                        
                        
                    </div>
                </div>
                
            </div>
           

        </div>
    );
};

export default MyPortFolio;
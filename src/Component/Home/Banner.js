import React from 'react';
import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image-2.webp';
import image3 from '../../assets/power-tools-isometric-banner-vector.webp'
const Banner = () => {
    return (
        <div className='my-10 flex justify-center items-center w-[100vw] '>

            <img src={image3} alt="" className='w-full h-100' />
        </div>
    );
};

export default Banner;
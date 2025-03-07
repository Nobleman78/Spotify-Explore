import React from 'react';
import notFound from '../../assets/page-404.png'
const NotFound = () => {
    return (
        <div className='w-[40%] mt-10 mx-auto'>
            <img  src={notFound} alt="" />
            <h2  className='w-[40%]  mx-auto font-bold text-2xl'>Page Not Found</h2>
            
        </div>
    );
};

export default NotFound;
import React from 'react';
import { assets } from '../../assets/assets';

const Navbar = () => {
    return (
        <>
            <div className='w-full flex justify-around items-center font-semibold' >
                <div className='flex items-center gap-2'>
                    <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Arrow-Left" />
                    <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Arrow-Left" />

                </div>
                <div className='flex items-center gap-2'>
                    <p className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Premium</p>
                    <p className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Support</p>
                    <p className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Download</p>

                </div>
                <div className='flex items-center gap-4'>
                    {/* <p className='bg-white text-black px-4 py-1.5 cursor-pointer hidden md:block rounded-3xl '>Explore Premium</p> */}
                    <p className='bg-black  text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] py-1 px-3 cursor-pointer rounded-2xl text-[15px]  '>Install App</p>
                </div>
                <div className='flex items-center gap-3 px-10'>
                    <button className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,1)]'>Sign up</button>
                    <button className='bg-white text-black px-4 py-2 rounded-3xl'>Login</button>

                </div>

            </div>
        </>
    );
};

export default Navbar;
import React from 'react';
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[25%] h-full  p-2 gap-2 flex-col text-white hidden lg:flex'>
            {/* Home and Search Div Start */}
            <div className=' h-[15%]  bg-[#121212] flex  flex-col justify-around'>
                <div onClick={()=>navigate(`/`)} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="Home Icon" />
                    <p>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="Search Icon" />
                    <p>Search</p>
                </div>
            </div>
            {/* Home and Search Div End */}
            
            <div className='h-[85%] bg-[#121212] rounded'>
                <div className='flex p-4 items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt="Stack Icon" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="Arrow Icon" />
                        <img className='w-5' src={assets.plus_icon} alt="Plus Icon" />

                    </div>
                </div>
                <div className='bg-[#242424] m-2 flex p-4 gap-1  flex-col font-semibold items-start  rounded'>
                    <h1>Create Your First Playlist</h1>
                    <p className='font-light'>It's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-2xl mt-4 cursor-pointer'>Create PlayList</button>

                </div>
                <div className='bg-[#242424] m-2 flex p-4 gap-1  flex-col font-semibold items-start  rounded'>
                    <h1>Lets Find Some Products to follow</h1>
                    <p className='font-light'>We will keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-2xl mt-4 cursor-pointer'>Browse Podcasts</button>

                </div>

            </div>


        </div>


    );
};

export default Sidebar;
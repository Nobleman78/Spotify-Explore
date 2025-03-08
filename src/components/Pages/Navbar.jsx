import React from 'react';
import { assets } from '../../assets/assets';
import Login from '../NavPages/Login';
import Signup from '../NavPages/Signup'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full  p-4 rounded  h-[16%]  '>

      <div className='w-full flex justify-between items-center font-semibold' >
        <div className='flex items-center gap-2'>
          <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Arrow-Left" />
          <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Arrow-Left" />

        </div>
        {/* <div className='flex items-center gap-2'>
          <a className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Premium</a>
          <a className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Support</a>
          <a className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Download</a>

        </div> */}
        {/* <div className='flex items-center gap-4'> */}
        {/* <p className='bg-white text-black px-4 py-1.5 cursor-pointer hidden md:block rounded-3xl '>Explore Premium</p> */}
        {/* <a className='bg-black  text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] py-1 px-3 cursor-pointer rounded-2xl text-[15px]  '>Install App</a>
        </div> */}
        <div className='flex items-center gap-3 '>
          <a className='cursor-pointer  text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,1)]'><Signup></Signup></a>
          <a className='bg-white cursor-pointer text-black px-4 py-2 rounded-3xl'><Login></Login></a>

        </div>

      </div>


    </div>
  );
};

export default Navbar;







{/* 
            import React, { useState } from "react";

const Navbar = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Update state to "logged in"
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update state to "logged out"
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        {/* Always show these items */}
{/* <li>
          <a href="#" className="hover:text-gray-300">
            Premium
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Support
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Download/Install App
          </a>
        </li> */}

{/* Conditionally render based on login status */ }
{/* {isLoggedIn ? ( */ }
// Show "My Account" and "Logout" if logged in
{/* <>
            <li>
              <a href="#" className="hover:text-gray-300">
                My Account
              </a>
            </li>
            <li>
              <button onClick={handleLogout} className="hover:text-gray-300">
                Logout
              </button>
            </li>
          </> */}
{/* ) : (
          // Show "Sign Up" and "Login" if not logged in
          <>
            <li>
              <a href="#" className="hover:text-gray-300">
                Sign Up
              </a>
            </li>
            <li>
              <button onClick={handleLogin} className="hover:text-gray-300">
                Login
              </button>
            </li>
          </> */}
{/* )}
      </ul>
    </nav>
  );
}; */}

// export default Navbar;
import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full  bg-[#121212] p-4 rounded  h-[16%]  '>

            <div className='w-full flex justify-around items-center font-semibold' >
                <div className='flex items-center gap-2'>
                    <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Arrow-Left" />
                    <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Arrow-Left" />

                </div>
                <div className='flex items-center gap-2'>
                    <NavLink to="/premium" className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Premium</NavLink>
                    <NavLink to="/support" className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Support</NavLink>
                    <NavLink to="/download" className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] '>Download</NavLink>

                </div>
                <div className='flex items-center gap-4'>
                    {/* <p className='bg-white text-black px-4 py-1.5 cursor-pointer hidden md:block rounded-3xl '>Explore Premium</p> */}
                    <NavLink to="/install App" className='bg-black  text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,5)] py-1 px-3 cursor-pointer rounded-2xl text-[15px]  '>Install App</NavLink>
                </div>
                <div className='flex items-center gap-3 px-10'>
                    <NavLink to='/signup' className='cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,1)]'>Sign up</NavLink>
                    <NavLink to='/login' className='bg-white text-black px-4 py-2 rounded-3xl'>Login</NavLink>

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
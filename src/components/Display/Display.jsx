import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import DisplayHome from '../Pages/DisplayHome';
import Navbar from '../Pages/Navbar';
import Premium from '../NavPages/Premium';
import Support from '../NavPages/Support';
import Signup from '../NavPages/Signup';
import Login from '../NavPages/Login';

const Display = () => {
    return (
        <div className='w-[100%] flex-col gap-2 rounded  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Navbar></Navbar>
            <Routes>
                <Route path='/premium' element={<Premium></Premium>}></Route>
                <Route path='/support' element={<Support></Support>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/' element={<DisplayHome></DisplayHome>}></Route>
            </Routes>

        </div>
    );
};

export default Display;
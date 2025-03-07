import React from 'react';
import {Route, Routes } from 'react-router-dom';
import DisplayHome from '../Pages/DisplayHome';
import Navbar from '../Pages/Navbar';

const Display = () => {
    return (
        <div className='w-[100%] flex-col gap-2 rounded   text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<DisplayHome></DisplayHome>}></Route>
            </Routes>

        </div>
    );
};

export default Display;
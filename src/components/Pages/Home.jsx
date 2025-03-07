import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Display from '../Display/Display';
import Player from '../Player/Player';

const Home = () => {
    return (
        <div className='h-screen bg-black'>
      <div className='h-[90%] flex border'>
        <Sidebar></Sidebar>
        <Display></Display>
      </div>
      <Player></Player>
     
    </div>
    );
};

export default Home;
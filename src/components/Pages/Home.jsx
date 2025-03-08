import React, { useContext } from 'react';

import { PlayerContext } from '../../Context/Context';

const Home = () => {
  const {audioRef,track} = useContext(PlayerContext) 
  
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex border'>
        <Sidebar></Sidebar>
        <Display></Display>
      </div>
      <Player></Player>
      <audio ref={audioRef} track={track.file} preload='auto'></audio>

    </div>
  );
};

export default Home;
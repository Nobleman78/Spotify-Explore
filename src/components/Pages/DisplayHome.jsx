import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../../assets/assets';
import Album from '../AlbumData/Album';
import Songs from '../SongsData/Songs';

const DisplayHome = () => {
    
    return (
        <>
            <Navbar></Navbar>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {
                        albumsData.map((data, index) => (<Album key={index} name={data.name} desc={data.desc} image={data.image} id={data.id}></Album>))
                    }
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {
                        songsData.map((data, index) => (<Songs key={index} name={data.name} desc={data.desc} image={data.image} id={data.id}></Songs>))
                    }
                </div>
            </div>

        </>



    );
};

export default DisplayHome;
import React, { useContext } from 'react';
import Navbar from '../Pages/Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../../assets/assets';
import { PlayerContext } from '../../Context/Context';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id]

    const{playWithId} = useContext(PlayerContext)

    return (
        <>
            <Navbar></Navbar>
            {/* Album Data */}
            <div className='mt-10 flex flex-col  ms-1 gap-8 md:flex-row md:items-end '>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5 ' src={assets.spotify_logo} alt="" />
                        <b className=''>Spotify</b>
                        1,238989 likes
                        <b className=''>50 songs,</b>
                        about 3 hr 5 min
                    </p>

                </div>

            </div>
            {/* Songs Data which are in album data */}
            <div className='sm:gap-0  grid grid-cols-4 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <b className='mr-4 '>#</b>
                <p>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item, index) => (
                    <div  onClick={()=>playWithId(item.id)} key={index} className=' grid grid-cols-4 sm:grid-cols-5   p-2 items-center cursor-pointer text-[#a7a7a7] hover:bg-[#ffffff2b]'>
                        <b className='mr-4  text-[#a7a7a7]'>{index + 1}</b>
                        <p className='text-white'>
                            
                            <img className='inline w-10 mr-5' src={item.image} alt="" />
                            {item.name}

                        </p>
                        <p>
                            {albumData.name}
                        </p>
                        <p className='text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-center '>{item.duration}</p>
                    </div>
                ))
            }
        </>
    );
};

export default DisplayAlbum;
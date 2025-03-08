import React, { useContext } from 'react';
import { PlayerContext } from '../../Context/Context';


const Songs = ({name,image,desc,id}) => {
    const{playWithId} = useContext(PlayerContext)
    return (
        <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{desc}</p>
            <p>{id}</p>
        </div>
    );
};

export default Songs;
import React from 'react';


const Songs = ({name,image,desc,id}) => {
    return (
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{desc}</p>
            <p>{id}</p>
        </div>
    );
};

export default Songs;
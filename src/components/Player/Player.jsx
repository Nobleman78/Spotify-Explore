import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { PlayerContext } from '../../Context/Context';

const Player = () => {
    const {seekBg,track,seekBar,playStatus,time,play,pause,previous,next,seeksong} = useContext(PlayerContext);
   
    return (
        <div className='h-[10%] bg-black flex justify-between items-center  text-white px-4'>
            {/* Song Image and Song title Part Start */}
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt="" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>

            </div>
            {/* Song Image and Song Title Part End */}

            {/* Play Button , next btn, prev btn part start */}
            <div className='flex flex-col items-center gap-1 m-auto  '>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffle Icon" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Prev Icon" />
                    {
                        playStatus?  <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause Icon" /> :                    <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play Icon" />
                    }

                  
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next Icon" />
                    <img  className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop Icon" />

                </div>
                <div className='flex items-center gap-5'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg}onClick={seeksong} className='w-[60vw] max-w-[400px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                        
                    </div>
                    <p>{time.TotalTime.minute}:{time.TotalTime.second}</p>

                </div>
            </div>
            {/* Play btn, next btn, prev btn part end */}



            {/* Plays icon, mike icon, queue icon part start */}
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <div className='flex gap-4'>
                    <img className='w-4' src={assets.plays_icon} alt="" />
                    <img className='w-4' src={assets.mic_icon} alt="" />
                    <img className='w-4' src={assets.queue_icon} alt="" />
                    <img className='w-4' src={assets.speaker_icon} alt="" />
                    <img className='w-4' src={assets.volume_icon} alt="" />
                    <span className='w-20 bg-slate-50 h-1  rounded mt-1.5 '></span>
                    <img className='w-4' src={assets.mini_player_icon} alt="" />
                    <img className='w-4' src={assets.zoom_icon} alt="" />
                </div>

            </div>
            {/* Plays icon, mike icon, queue icon part end */}

        </div>
    );
};

export default Player;
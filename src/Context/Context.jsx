import React, { createContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../assets/assets';

export const PlayerContext = createContext();

const Context = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();


    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        TotalTime: {
            second: 0,
            minute: 0

        }
    })
    // This fucntion is for pause and play audio
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);

    }
    const playWithId  = async(id)=>{
        await setTrack(songsData[id])
        await audioRef.current,play();
        setPlayStatus(true);

    }
    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }


    useEffect(() => {

        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+'%'
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    TotalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)

                    }

                })
            }

        }, 1000)
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId
    }


    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default Context;
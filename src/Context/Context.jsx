import React, { createContext, useRef } from 'react';

export const PlayerContext = createContext();

const Context = (props) => {
    const audioRef = useRef();

    const contextValue ={
        audioRef
    }
    
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}    
        </PlayerContext.Provider>
    );
};

export default Context;
import { useContext } from 'react'
import './App.css'
import { PlayerContext } from './Context/Context'
import Sidebar from './components/Sidebar/Sidebar';
import Display from './components/Display/Display';
import Player from './components/Player/Player';

function App() {
  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex border'>
        <Sidebar></Sidebar>
        <Display></Display>
      </div>
      <Player></Player>
    
      <audio ref={audioRef} src={track.file} preload='auto'></audio>

    </div>
  );
}

export default App

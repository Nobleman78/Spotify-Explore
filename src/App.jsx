import './App.css'
import Display from './components/Display/Display'
import Player from './components/Player/Player'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex border'>
        <Sidebar></Sidebar>
        <Display></Display>
        

      </div>
      <Player></Player>

    </div>
  )
}

export default App

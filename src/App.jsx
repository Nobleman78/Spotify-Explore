import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import Premium from './components/NavPages/Premium'
import Support from './components/NavPages/Support'
import Signup from './components/NavPages/Signup'
import Login from './components/NavPages/Login'
import NotFound from './components/Pages/NotFound'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/premium' element={<Premium></Premium>}></Route>
        <Route path='/support' element={<Support></Support>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App

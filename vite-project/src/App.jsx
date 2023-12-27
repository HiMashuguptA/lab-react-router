import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Router } from 'react-router-dom'
import AllRoutes from './Components/Routes/AllRoutes'
function App() {


  return (
    <div>
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App

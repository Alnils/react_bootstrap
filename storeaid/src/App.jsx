import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'

function App() {
  return (
    <>
    <Navbar />

    <main>
      <Home />
      <AboutUs />
    </main>
     
    </>
  )
}

export default App

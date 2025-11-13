import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Brandsbanner from './components/Brandsbanner.jsx'

function App() {
  return (
    <>
    <Navbar />

    <main>
      <Home />
      <AboutUs />
      <Brandsbanner />
      
    </main>
     
    </>
  )
}

export default App

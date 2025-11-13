import { Component, useState } from 'react'

import './App.css'

// Components imports
import Navbar from './components/Navbar.jsx'
import Brandsbanner from './components/Brandsbanner.jsx'
import Testimonials from './components/Testimonials.jsx'
import Chooseus from './components/Chooseus.jsx'
import Pricing from './components/Pricing.jsx'
import Bookingbanner from './components/Bookingbanner.jsx'
import Blogposts from './components/Blogposts.jsx'
import Subscribebanner from './components/Subscribebanner.jsx'
import Footer from './components/Footer.jsx'


// Pages imports
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'

function App() {
  return (
    <>
    <Navbar />

    <main>
      <Home />
      <AboutUs />
      <Brandsbanner />
      <Services />
      <Testimonials />
      <Chooseus />
      <Pricing />
      <Bookingbanner />
      <Blogposts />
      <Subscribebanner />
      <Footer />

    </main>
     
    </>
  )
}

export default App

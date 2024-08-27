import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <NavBar />
     <Hero />
     <Services />
     <Gallery />
     <Contact />
    </>
  )
}

export default App

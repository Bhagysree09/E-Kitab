import React from 'react'

//pages directory

import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from  './pages/Gallery';
import About from './pages/About';
import Resources from './pages/Resources';
//Components directory
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Skills from './components/Skills';
import Banner from './components/Banner';
import Experts from './components/Experts';
import Plans from './components/Plans';
import Contact1 from './components/Contact1';
import Footer from './components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      {/* <Home />
      <About />
      <Gallery />
      <Resources />
      <Contact /> */}
      <Header />
      <Routes>
       <Route index element = {<Home />} />
       <Route path='/About'   element = {<About />} />
       <Route path='/Resources' element = {<Resources/>} />
       <Route path='/Gallery' element = {<Gallery/>} />
       <Route path='/Contact' element = {<Contact/>} />
      </Routes>
      {/* <Banner/>
     <Experts />
     <Aboutus />
     <Skills />
     <Plans />
     <Contact1 />
     <Footer /> */}
    </div>
  )
}

export default App


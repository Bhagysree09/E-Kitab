import React from 'react'
import Banner from '../components/Banner';
import Aboutus from '../components/Aboutus';
import Experts from '../components/Experts';
import Skills from '../components/Skills';
import Plans from '../components/Plans';
import Contact from '../components/Contact1';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
    <Banner />
   
<Experts />
<Skills />
<Plans />
<Contact />

    <Footer/>
    </div>
  )
}

export default Home

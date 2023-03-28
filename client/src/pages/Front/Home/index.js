import React from 'react'
import NavbarHome from '../../../components/NavbarHome'
import {BrowserRouter as Router} from 'react-router-dom'
import HeroSection from '../../../components/HeroSection'
import InfoSection from '../../../components/InfoSection'
import Orfanatos from '../../../components/Orfanatos'
import Actividade from '../../../components/Actividade'
import Footer from '../../../components/Footer'

function Home() {
  return (
    <div>
      <NavbarHome />
      <HeroSection />
      <InfoSection />
      <Orfanatos />
      <Actividade />
      <Footer />
    </div>
  )
}

export default Home
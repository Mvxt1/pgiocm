import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import NavbarHome from '../../../components/NavbarHome'
import VerticalCard from '../../../components/VerticalCard'
import foto from '../../../images/CasaAlegria.jpg'
import * as C from './styles'

function Orfanatos() {
  return (
    <C.Container>
      <NavbarHome />
      <Header title='ORFANATOS' path={foto}/>
      <C.HeaderH1>Todos Orfanatos</C.HeaderH1>
      <C.Wrap>
        
        <VerticalCard 
        Nome="Casa Da Alegria" 
        Localizacao='Magoanine'
        Telefone='848488484'
        NrCriancas='12' />
        <VerticalCard 
        Nome="Casa Da Alegria" 
        Localizacao='Magoanine'
        Telefone='848488484'
        NrCriancas='12' />
        <VerticalCard 
        Nome="Casa Da Alegria" 
        Localizacao='Magoanine'
        Telefone='848488484'
        NrCriancas='12' />
        <VerticalCard 
        Nome="Casa Da Alegria" 
        Localizacao='Magoanine'
        Telefone='848488484'
        NrCriancas='12' />
      </C.Wrap>
      <Footer />
    </C.Container>
  )
}

export default Orfanatos
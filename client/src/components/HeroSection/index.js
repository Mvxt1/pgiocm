import React from 'react'
import * as C from './styles'
import Child from '../../images/dancing.jpg'

function HeroSection() {
  return (
    <C.HeroContainer >
        <C.HeroBg>
            <C.Img src={Child}/>
        </C.HeroBg>
        <C.HeroContent>
            <C.HeroH1>Bem vindo a Plataforma para a Gestao de Informacao de Orfanatos da 
                Cidade de Maputo
            </C.HeroH1>
            <C.HeroP>A Plataforma que veio para ajudar a quem realmente precisa!</C.HeroP>
        </C.HeroContent>
    </C.HeroContainer>
  )
}

export default HeroSection
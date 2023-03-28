import React from 'react'
import * as C from './styles'
import Criancas from '../../images/svg2.svg'

function InfoSection() {
  return (
    <C.InfoContainer>
        <C.InfoWrapper>
            <C.InfoRow>
                <C.Collumn1>
                    <C.TextWrapper>
                        <C.TopLine>INICIE UMA NOVA AVENTURA</C.TopLine>
                        <C.Heading>As Criancas Sao As Flores Que Nunca Murjam</C.Heading>
                        <C.Subtitle>Venha junto a nos contribuir para que hajam mais criancas felizes e escolarizadas</C.Subtitle>
                        <C.BtnWrapper>
                            <C.Button to="home">Ver Criancas</C.Button>
                        </C.BtnWrapper>
                    </C.TextWrapper>
                </C.Collumn1>
                <C.Collumn2>
                    <C.ImgWrap>
                        <C.Img src={Criancas}/>
                    </C.ImgWrap>
                </C.Collumn2>
            </C.InfoRow>
        </C.InfoWrapper>
    </C.InfoContainer>
  )
}

export default InfoSection
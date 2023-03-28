import React from 'react'
import * as C from './styles'
import CasaAlegria from '../../images/CasaAlegria.jpg'

function Orfanato() {
  return ( 
    <C.OrfanatoContainer>
        <C.OrfanatoH1>ORFANATOS</C.OrfanatoH1>
        <C.OrfanatoWrapper>
            <C.OrfanatoCard>
                <C.OrfanatoIcon src={CasaAlegria} />
                <C.OrfanatoH2>Casa da Alegria</C.OrfanatoH2>
                <C.OrfanatoP>Casa da Alegira e' sesta aqui</C.OrfanatoP>
            </C.OrfanatoCard>
            <C.OrfanatoCard>
                <C.OrfanatoIcon src={CasaAlegria} />
                <C.OrfanatoH2>1o de maio</C.OrfanatoH2>
                <C.OrfanatoP>Casa da Alegira e' aqui</C.OrfanatoP>
            </C.OrfanatoCard>
            <C.OrfanatoCard>
                <C.OrfanatoIcon src={CasaAlegria} />
                <C.OrfanatoH2>Remar</C.OrfanatoH2>
                <C.OrfanatoP>Casa da Alegira e' sesta aqui</C.OrfanatoP>
            </C.OrfanatoCard>
            <C.OrfanatoCard>
                <C.OrfanatoIcon src={CasaAlegria} />
                <C.OrfanatoH2>Orfanato </C.OrfanatoH2>
                <C.OrfanatoP>Casa da Alegira e' sesta aqui</C.OrfanatoP>
            </C.OrfanatoCard>
        </C.OrfanatoWrapper>
    </C.OrfanatoContainer>
  )
}

export default Orfanato
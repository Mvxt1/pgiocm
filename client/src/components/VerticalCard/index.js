import React from 'react'
import * as C from './styles'

function VerticalCard({Nome, Localizacao, Telefone, NrCriancas}) {
  return (
    <C.CardContainer>
      <C.Img src=''/>
      <C.Cardtitle>{Nome}</C.Cardtitle>
      <C.CardWrap>
        <C.Cardline>Nome: {Nome}</C.Cardline>
        <C.Cardline>Localizacao: {Localizacao}</C.Cardline>
        <C.Cardline>Telefone: {Telefone}</C.Cardline>
        <C.Cardline>Nº Criancas: {NrCriancas}</C.Cardline>
        <C.BtnWrapper>
          <C.Button to="home">Ver Mais</C.Button>
        </C.BtnWrapper>
      </C.CardWrap>
    </C.CardContainer>
  ) 
}

export default VerticalCard
import React from 'react'
import * as C from './styles'

function VerticalCard({Id ,Nome, Localizacao, Telefone, NrCriancas, caminhoFoto, caminhoUrl}) {
  return (
    <C.CardContainer>
      <C.Img src={caminhoFoto}/>
      <C.Cardtitle>{Nome}</C.Cardtitle>
      <C.CardWrap>
        <C.Cardline>Nome: {Nome}</C.Cardline>
        <C.Cardline>Localizacao: {Localizacao}</C.Cardline>
        <C.Cardline>Telefone: {Telefone}</C.Cardline>
        <C.Cardline>Nº Criancas: {NrCriancas}</C.Cardline>
        <C.BtnWrapper>
          <C.Button to={"/orfanatos/"+Id}>Ver Mais</C.Button>
        </C.BtnWrapper>
      </C.CardWrap>
    </C.CardContainer>
  ) 
}

export default VerticalCard
import React from 'react'
import * as C from './styles'

function Actividade() {
  return (
    <C.ActContainer>
        <C.ActH1>Actividades Recentes</C.ActH1>
        <C.ActWrapper>
            <C.ActCard>
                <C.ActIcon />
                <C.ActContent>
                    <C.ActH2>1o de Maio</C.ActH2>
                    <C.ActP>HehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehheh
                    </C.ActP>
                </C.ActContent>
            </C.ActCard>
            <C.ActCard>
                <C.ActIcon />
                <C.ActContent>
                    <C.ActH2>1o de Maio</C.ActH2>
                    <C.ActP>HehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehheh
                        HehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehhehHehehheehheh
                    </C.ActP>
                </C.ActContent>
            </C.ActCard>
        </C.ActWrapper>
    </C.ActContainer>
  )
}

export default Actividade
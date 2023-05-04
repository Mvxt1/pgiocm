import React, { useState, useEffect } from 'react'
import * as C from './styles'
import CasaAlegria from '../../images/orf.png'
import axios from 'axios'

function Criancas() { 

    const [dataTable, setDataTable] = useState([])

    useEffect (() => {
        axios.get('http://localhost:3001/todaCrianca').then(res => res.data)
        .then((data) => {
            setDataTable(data)
        })
        console.log(dataTable)
        },[])

  return (  
    <C.OrfanatoContainer>
        <C.OrfanatoH1>Criancas</C.OrfanatoH1>
        <C.OrfanatoWrapper>       
            {
                dataTable.map( record => {
                    return(
                        <a href='/orfanatos/1'>
                            <div id={record.id}>
                                <C.OrfanatoCard>
                                    <C.OrfanatoIcon src={CasaAlegria} />
                                    <C.OrfanatoH2>{record.nome}</C.OrfanatoH2>
                            </C.OrfanatoCard>
                        </div>
                        </a>
                       
                    )
                })
            }
        </C.OrfanatoWrapper>
    </C.OrfanatoContainer>
    )
}

export default Criancas
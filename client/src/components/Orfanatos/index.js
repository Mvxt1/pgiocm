import React, { useState, useEffect } from 'react'
import * as C from './styles'
import CasaAlegria from '../../images/CasaAlegria.jpg'
import axios from 'axios'

function Orfanato() {

    const [dataTable, setDataTable] = useState([])

    useEffect (() => {
        axios.get('http://localhost:3001/orfanatos4').then(res => res.data)
        .then((data) => {
            setDataTable(data)
        })
        console.log(dataTable)
        },[])

  return (  
    <C.OrfanatoContainer>
        <C.OrfanatoH1>ORFANATOS</C.OrfanatoH1>
        <C.OrfanatoWrapper>
            {
                dataTable.map( record => {
                    return(
                        <div id={record.id}>
                         <C.OrfanatoCard>
                            <C.OrfanatoIcon src={CasaAlegria} />
                            <C.OrfanatoH2>{record.nome}</C.OrfanatoH2>
                        </C.OrfanatoCard>
                        </div>
                    )
                })
            }
        </C.OrfanatoWrapper>
    </C.OrfanatoContainer>
    )
}

export default Orfanato
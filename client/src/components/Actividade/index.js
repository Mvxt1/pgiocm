import React, { useState, useEffect } from 'react'
import * as C from './styles'
import axios from 'axios'

function Actividade() {

    const [dataTable, setDataTable] = useState([])

    useEffect (() => {
        axios.get('http://localhost:3001/backOrf/actividade').then(res => res.data)
        .then((data) => {
            setDataTable(data)
        })
        console.log(dataTable)
        },[])

        
  return (
    <C.ActContainer>
        <C.ActH1>Actividades Recentes</C.ActH1>
        <C.ActWrapper>
            {
                dataTable.map (record => {
                    return(
                        <>
                         <C.ActCard>
                            <C.ActIcon />
                            <C.ActContent>
                                <C.ActH2>Casa da Alegria</C.ActH2>
                                <C.ActP>{record.texto}</C.ActP>
                            </C.ActContent>
                        </C.ActCard>
                        </>
                    )
                })
            }
        </C.ActWrapper>
    </C.ActContainer>
  )
}

export default Actividade
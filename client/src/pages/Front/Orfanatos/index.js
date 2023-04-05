import React, { useState, useEffect } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import NavbarHome from '../../../components/NavbarHome'
import VerticalCard from '../../../components/VerticalCard'
import foto from '../../../images/CasaAlegria.jpg'
import * as C from './styles'
import axios from 'axios'


function Orfanatos() {

  const [dataTable,setDataTable] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:3001/orfanatos').then(res => res.data)
    .then((data) => {
      setDataTable(data)
    })
    console.log(dataTable)
  },[])

  return (
    <C.Container>
      <NavbarHome />
      <Header title='ORFANATOS' path={foto}/>
      <C.HeaderH1>Todos Orfanatos</C.HeaderH1>
      <C.Wrap>
        {
         dataTable.map( record => {
          return(
            <div id={record.id}>
            <VerticalCard
            Id={record.id}
            Nome={record.nome} 
            Localizacao={record.endereco}
            Telefone={record.contacto}
            NrCriancas={record.nr_criancas} />
            </div>
          )
         })
        }
      </C.Wrap>
      <Footer />
    </C.Container>
  )
}

export default Orfanatos
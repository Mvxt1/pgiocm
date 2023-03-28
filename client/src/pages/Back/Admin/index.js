import React, { useEffect, useState } from 'react'
import * as C from './styles'
import Sidebar from '../../../components/Sidebar'
import NavbarAdmin from '../../../components/NavbarAdmin'
import Widget from '../../../components/Widget'
import TableAdmin from '../../../components/TableAdmin'
import axios from 'axios'




function Admin() {

  const [amountAdmin,setAmountAdmin] = useState(null)
  const [amountOrfanto,setAmountOrfanato] = useState(null)


  useEffect (() => {
    const fetchCount = async () => {
      try{
        const fetchDataOrfanato = await axios.get('http://localhost:3001/admin/nr/orfanatos');
        setAmountOrfanato(fetchDataOrfanato.data[0]['COUNT(*)'])
        const fetchDataAdmin = await axios.get('http://localhost:3001/admin/nr/admin');
        setAmountAdmin(fetchDataAdmin.data[0]['COUNT(*)'])
      }
      catch (err){
        console.log(err);
      }
    }
    fetchCount();
  },[])

  return (
    <C.Home>
      <Sidebar />
      <C.homeContainer>
        <NavbarAdmin />
        <C.title>
          Painel de Controle
        </C.title>
        <C.subtitle>
          Bem-vindo Super Admin
        </C.subtitle>
        <C.widgets>
          <Widget title='Orfanatos' counter={amountOrfanto} link='Ver todos os orfanatos' 
          caminho='/Admin/orfanatos/newOrf' caminho2="/Admin/orfanatos"/>
          <Widget title='Administradores' counter={amountAdmin} link='Ver todos os administradores' 
          caminho='/Admin/administradores/newAdmin' caminho2="/Admin/administradores"/>
        </C.widgets>
        <C.listContainer>
          <C.listTitle>5 ORFANATOS MAIS RECENTES</C.listTitle>
          <TableAdmin />
        </C.listContainer>
      </C.homeContainer>
    </C.Home>
  )
}

export default Admin
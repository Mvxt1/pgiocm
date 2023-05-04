import React, { useEffect, useState } from 'react'
import * as C from './styles'
import SidebarOrf from '../../components/SidebarOrf'
import NavbarOrf from '../../components/NavbarOrf'
import MinWidget from '../../components/minWidget'
import TableOrf from '../../components/TableOrf'
import axios from 'axios'



function backOrfa() {

  const [amountCrianca,setAmountCrianca] = useState(null)
  const [amountActividade, setAmountActividade] = useState(null)

  useEffect (() => {
    const fetchCount = async () => {
      try{
        const fetchDataOrfanato = await axios.get('http://localhost:3001/admin/nr/crianca');
        setAmountCrianca(fetchDataOrfanato.data[0]['COUNT(*)'])
        const fetchDataAdmin = await axios.get('http://localhost:3001/admin/nr/actividade');
        setAmountActividade(fetchDataAdmin.data[0]['COUNT(*)'])
      }
      catch (err){
        console.log(err);
      }
    }
    fetchCount();
  },[])

  return (
    <C.Home>
      <SidebarOrf />
      <C.homeContainer>
        <NavbarOrf />
        <C.title>
          Painel de Controle
        </C.title>
        <C.subtitle>
          Bem-vindo Casa da Alegria 
        </C.subtitle>
        <C.widgets>
          <MinWidget title='Crianças' counter={amountCrianca} link='Ver todas as crianças' 
          caminho='/backOrf/newcrianca' caminho2="/backOrf/crianca"/>
          <MinWidget title='Actividades' counter={amountActividade} link='Ver todas actividades' 
          caminho='/backOrf/newactividade' caminho2="/backOrf/actividade"/>
          <MinWidget title='Adopção' counter='0' link='Ver todos os pedidos' 
          caminho='/Admin/orfanatos/newOrf' caminho2="/Admin/orfanatos"/>
          <MinWidget title='Doações' counter='0' link='Ver todos os historicos' 
          caminho='/Admin/administradores/newAdmin' caminho2="/Admin/administradores"/>
        </C.widgets>
        <C.listContainer>
          <C.listTitle>5 CRIANCAS MAIS RECENTES</C.listTitle>
          <TableOrf />
        </C.listContainer>
      </C.homeContainer>
    </C.Home>
  )
}

export default backOrfa
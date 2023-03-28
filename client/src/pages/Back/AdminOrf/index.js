import React, { useEffect, useState } from 'react'
import * as C from './styles'
import SidebarOrf from '../../components/SidebarOrf'
import NavbarOrf from '../../components/NavbarOrf'
import MinWidget from '../../components/minWidget'
import TableOrf from '../../components/TableOrf'
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";


function backOrfa() {

  const [amount,setAmount] = useState(null)

  useEffect (() => {
    const fetchData = async () => {
      const userNumber = query(
        collection(db, 'administrador'),
      );

      const number = await getDocs(userNumber)
      setAmount(number.docs.length)
    }
    fetchData()
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
          <MinWidget title='Crianças' counter='4' link='Ver todas as crianças' 
          caminho='/backOrf/newcrianca' caminho2="/backOrf/crianca"/>
          <MinWidget title='Actividades' counter={amount} link='Ver todas actividades' 
          caminho='/backOrf/newactividade' caminho2="/backOrf/actividade"/>
          <MinWidget title='Adopção' counter='4' link='Ver todos os pedidos' 
          caminho='/backOrf/orfanatos/newOrf' caminho2="/Admin/orfanatos"/>
          <MinWidget title='Doações' counter={amount} link='Ver todos os historicos' 
          caminho='/backOrf/administradores/newAdmin' caminho2="/Admin/administradores"/>
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
import React from 'react'
import * as C from './styles'
import SidebarOrf from '../../../../components/SidebarOrf'
import NavbarOrf from '../../../../components/NavbarOrf'
import DataTable from '../../../../components/DatatableCrianca'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'

function ListCrianca() {
  return (
    <C.list>
        <SidebarOrf />
        <C.listContainer>
            <NavbarOrf />
            <C.titles>
              <C.back>
                <ArrowBackIcon className='icon'/>
                Lista de Crianças
              </C.back>
              <Link to='/backOrf/newcrianca'>
              <C.buttonMod> Criar </C.buttonMod>
              </Link>
            </C.titles>
            <DataTable />
        </C.listContainer>
    </C.list>
  )
}

export default ListCrianca
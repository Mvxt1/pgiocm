import React from 'react'
import * as C from './styles'
import SidebarOrf from '../../../../components/SidebarOrf'
import NavbarOrf from '../../../../components/NavbarOrf'
import DataTable from '../../../../components/DatatableActividades'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'

function ListActividade() { 
  return (
    <C.list>
        <SidebarOrf />
        <C.listContainer>
            <NavbarOrf />
            <C.titles>
              <C.back>
                <ArrowBackIcon className='icon'/>
                Lista de Actividades
              </C.back>
              <Link to='/backOrf/newactividade'>
              <C.buttonMod> Criar </C.buttonMod>
              </Link>
            </C.titles>
            <DataTable />
        </C.listContainer>
    </C.list>
  )
}

export default ListActividade
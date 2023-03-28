import React from 'react'
import * as C from './styles'
import Sidebar from '../../../../components/Sidebar'
import NavbarAdmin from '../../../../components/NavbarAdmin'
import DataTable from '../../../../components/DatatableOrf'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'

function ListOrf() {
  return (
    <C.list>
        <Sidebar />
        <C.listContainer>
            <NavbarAdmin />
            <C.titles>
              <C.back>
                <ArrowBackIcon className='icon'/>
                Lista de Orfanatos
              </C.back>
              <Link to='/Admin/orfanatos/newOrf'>
              <C.buttonMod> Criar </C.buttonMod>
              </Link>
            </C.titles>
            <DataTable />
        </C.listContainer>
    </C.list>
  )
}

export default ListOrf
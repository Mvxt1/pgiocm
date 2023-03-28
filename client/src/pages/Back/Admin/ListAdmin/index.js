import React from 'react'
import * as C from './styles'
import Sidebar from '../../../../components/Sidebar'
import NavbarAdmin from '../../../../components/NavbarAdmin'
import DataTable from '../../../../components/DatatableAdmin'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'

function ListAdmin() {
  return (
    <C.list>
        <Sidebar />
        <C.listContainer>
            <NavbarAdmin />
            <C.titles>
              <C.back>
                <ArrowBackIcon className='icon'/>
                Lista de Administradores
              </C.back>
              <Link to='/Admin/administradores/newAdmin'>
              <C.buttonMod> Criar </C.buttonMod>
              </Link>
            </C.titles>
            <DataTable />
        </C.listContainer>
    </C.list>
  )
}

export default ListAdmin
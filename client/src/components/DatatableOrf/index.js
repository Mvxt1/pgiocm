import React, { useEffect, useState } from 'react'
import * as C from './styles'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios'


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 160 },
  { field: 'endereco', headerName: 'Localização', width: 160 },
  { field: 'contacto', headerName: 'Telefone', width: 130 },
  { field: 'nr_criancas', headerName: 'N° Crianças', type: Number, width: 100 },
  { field: 'administrador', headerName: 'Administrador', width: 160 },
  { field: 'accao', headerName: 'Acção', width: 180, renderCell:()=>{

    return( 
      <C.cellAction>
        <Link to="/Admin/orfanatos/sergio" style={{textDecoration: 'none'}}> 
          <C.viewButton>Ver</C.viewButton>
        </Link>
        <C.deleteButton>Apagar</C.deleteButton>
     </C.cellAction>
    )
  }},
];



function DataTableOrf() {

  const [dataTable,setDataTable] = useState ([]);

  useEffect (() => {
    axios.get('http://localhost:3001/Admin/orfanatos').then(res => res.data)
    .then((data) => {
      setDataTable(data)
    })
  },[])

  console.log(dataTable)

  return (
    <C.datatable>
        <DataGrid
            rows={dataTable}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
    </C.datatable>
  )
}

export default DataTableOrf
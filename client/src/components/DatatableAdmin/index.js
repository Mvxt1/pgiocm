import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as C from './styles'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "./datatablesource"
import axios from 'axios'



function DataTableAdmin() {

const [dataTable,setDataTable] = useState ([]);

useEffect (() => {
  axios.get('http://localhost:3001/Admin/administradores').then(res => res.data)
  .then((data) => {
    setDataTable(data)
  })
},[])

const handleDelete = (id) => {
  setDataTable(dataTable.filter((data) => data.id !== id))
}

console.log(dataTable)

const actionColumn = [{ field: 'accao', headerName: 'Acção', width: 180, renderCell:(params)=>{
  return(
    <C.cellAction>
      <Link to={"/Admin/administradores/"+params.row.id} style={{textDecoration:'none'}}>
        <C.viewButton>Editar</C.viewButton>
      </Link>
      <C.deleteButton onClick={() => handleDelete(params.row.id)}>Apagar</C.deleteButton>
   </C.cellAction>
  )
}}
];

  return (
    <C.datatable>
        <DataGrid
            rows={dataTable}
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
    </C.datatable>
  )
}

export default DataTableAdmin
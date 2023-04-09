import React, { useEffect, useState } from 'react'
import * as C from './styles'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios'



function DataTableAct() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'titulo', headerName: 'Titulo', width: 270 },
    { field: 'texto', headerName: 'Descrição', width: 270 },
    { field: 'data_act', headerName: 'Data de Publicação', width: 250 },
    { field: 'accao', headerName: 'Acção', width: 180, renderCell:(params)=>{
  
      return( 
        <C.cellAction>
          <Link to={"/backOrf/actividade/"+params.row.id} style={{textDecoration: 'none'}}> 
            <C.viewButton>Editar</C.viewButton>
          </Link>
          <C.deleteButton onClick={() => handleDelete(params.row.id)}>Apagar</C.deleteButton>
       </C.cellAction>
      )
    }},
  ];

  const [dataTable,setDataTable] = useState ([]);

  useEffect (() => {
    axios.get('http://localhost:3001/backOrf/actividade').then(res => res.data)
    .then((data) => {
      setDataTable(data)
    })
  },[])


  const handleDelete = async(id) => {
    try {
      axios.delete(`http://localhost:3001/backOrf/actividade/${id}`)
      setDataTable(dataTable.filter((data) => data.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

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

export default DataTableAct
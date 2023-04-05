import React, { useEffect, useState } from 'react'
import * as C from './styles'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios'



function DataTableOrf() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 160 },
    { field: 'endereco', headerName: 'Localização', width: 160 },
    { field: 'contacto', headerName: 'Telefone', width: 130 },
    { field: 'nr_criancas', headerName: 'N° Crianças', type: Number, width: 100 },
    { field: 'administrador', headerName: 'Administrador', width: 160 },
    { field: 'accao', headerName: 'Acção', width: 180, renderCell:(params)=>{
  
      return( 
        <C.cellAction>
          <Link to={"/Admin/orfanatos/"+params.row.id} style={{textDecoration: 'none'}}> 
            <C.viewButton>Editar</C.viewButton>
          </Link>
          <C.deleteButton onClick={() => handleDelete(params.row.id)}>Apagar</C.deleteButton>
       </C.cellAction>
      )
    }},
  ];

  const [dataTable,setDataTable] = useState ([]);

  useEffect (() => {
    axios.get('http://localhost:3001/Admin/orfanatos').then(res => res.data)
    .then((data) => {
      setDataTable(data)
    })
  },[])


  const handleDelete = async(id) => {
    try {
      axios.delete(`http://localhost:3001/Admin/orfanatos/${id}`)
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

export default DataTableOrf
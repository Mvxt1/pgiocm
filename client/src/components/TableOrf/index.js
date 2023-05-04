import React, { useEffect, useState } from 'react'
import * as C from './styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

 
function TableOrf() {

    const [dataTable,setDataTable] = useState ([]);

    useEffect (() => {
        axios.get('http://localhost:3001/backOrf/crianca5').then(res => res.data)
        .then((data) => {
        setDataTable(data)
        })
    },[])

    console.log(dataTable)

  return (
    <C.table>
        { <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell><C.tableRow>ID</C.tableRow> </TableCell>
                <TableCell><C.tableRow>Nome</C.tableRow></TableCell>
                <TableCell><C.tableRow>Apelido</C.tableRow></TableCell>
                <TableCell><C.tableRow>Idade</C.tableRow></TableCell>
                <TableCell><C.tableRow>Genero</C.tableRow></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {dataTable.map((dataTable) => (
                <TableRow
                key={dataTable.id}>
                <TableCell><C.tableCell>{dataTable.id}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.nome}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.apelido}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.idade}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.genero}</C.tableCell></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer> }
    </C.table>
  )
}

export default TableOrf
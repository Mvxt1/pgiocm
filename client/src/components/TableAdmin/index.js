import React from 'react'
import * as C from './styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useEffect, useState } from 'react'


function TableAdmin() {

    const [dataTable,setDataTable] = useState ([]);

    useEffect (() => {
        axios.get('http://localhost:3001/Admin/orfanatos5').then(res => res.data)
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
                <TableCell><C.tableRow>Localização</C.tableRow></TableCell>
                <TableCell><C.tableRow>Telefone</C.tableRow></TableCell>
                <TableCell><C.tableRow>N.Criancas</C.tableRow></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {dataTable.map((dataTable) => (
                <TableRow
                key={dataTable.id}>
                <TableCell><C.tableCell>{dataTable.id}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.nome}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.endereco}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.contacto}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{dataTable.nr_criancas}</C.tableCell></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer> }
    </C.table>
  )
}

export default TableAdmin
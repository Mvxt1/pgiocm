import React from 'react'
import * as C from './styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableOrf() {

    const rows = [
        {
            id:1,
            nome: 'Berta Almeida',
            localizacao: 'Martins',
            Telefone: '5',
            nrCriancas: 'Femenino'
        },
        {
            id:2,
            nome: 'Alice ',
            localizacao: 'Massango',
            Telefone: '7',
            nrCriancas: 'Femenino'
        },
        {
            id:3,
            nome: 'Pedro',
            localizacao: 'Chionisse',
            Telefone: '6',
            nrCriancas: 'Masculino'
        },{
            id:4,
            nome: 'Carlos',
            localizacao: 'David',
            Telefone: '5',
            nrCriancas: 'Masculino'
        },{
            id:5,
            nome: 'Marcos',
            localizacao: 'Chongo',
            Telefone: '8',
            nrCriancas: 'Masculino'
        },
    ]

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
            {rows.map((row) => (
                <TableRow
                key={row.id}>
                <TableCell><C.tableCell>{row.id}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{row.nome}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{row.localizacao}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{row.Telefone}</C.tableCell></TableCell>
                <TableCell><C.tableCell>{row.nrCriancas}</C.tableCell></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer> }
    </C.table>
  )
}

export default TableOrf
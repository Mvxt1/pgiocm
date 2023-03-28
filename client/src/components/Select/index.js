
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';




export default function Select({Label, HelperText}) {
  const [administrador, setAdministrador] = React.useState([]);
  const [data,setData] = useState ([]);


  const handleChange = (event) => {
    setAdministrador(event.target.value);
  };


  useEffect (() => {
    const fetchData = async () => {
      let list = []
      try{
        axios.get('http://localhost:3001/Admin/lista/orfanatos').then(res => res.data)
        .then((data) => {
          list.push({data});
        });
        setData(list)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  },[])

  console.log(data)

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 2, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label={Label}
          value={administrador}
          onChange={handleChange}
          helperText={HelperText}
          color='success'
        >
          {data.map(data => {
              return(
                <MenuItem key={data.nome} value={data.nome}>
                    {data.nome}
                </MenuItem>
              )
            }
          )}
        </TextField>
      </div>
    </Box>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({DefaultValue ,Label, Id, Name, OnChange, Type, stats, Value, Size, Required}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: {Size} },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField defaultValue={DefaultValue} required={Required} value={Value} name={Name} disabled={stats} id={Id} type={Type} label={Label} onChange={OnChange} variant="outlined" color='success' />
    </Box>
  );
}
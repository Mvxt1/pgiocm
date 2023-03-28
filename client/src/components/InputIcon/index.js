import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Icon from "@mui/material/Icon";

export default function InputIcon({optionIcon, Label, change, value, name}) {
  return (
    <Box sx={{ '& > :not(style)': { marginBottom: 0  } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
        <Icon sx={{ color: '#0e8c34', mr: 1, my: 0.5 }}>{optionIcon}</Icon>
        <TextField onChange={change} sx={{width: 350}} id="input-with-sx" label={Label} value={value} name={name} variant="standard" color='success' size='medium'/>
      </Box>
    </Box>
  );
}

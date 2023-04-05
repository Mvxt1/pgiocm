import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputMulti({DefaultValue ,OnChange, Id, Name, Value}) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '67ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id={Id}
          name={Name}
          label="Descrição"
          multiline
          rows={4}
          color='success'
          defaultValue={DefaultValue}
          onChange={OnChange}
        />
      </div>
    </Box>
  );
}

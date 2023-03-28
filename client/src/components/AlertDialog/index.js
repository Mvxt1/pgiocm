import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AlertDialog({type, msg}) {

  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity={type}>
          {msg}
        </Alert>
      </Stack>
    </>
  )
}

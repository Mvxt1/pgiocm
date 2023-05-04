import React from 'react'
import * as C from './styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';


function Navbar() {
  return (
    <C.navbar>
        <C.wrapper>
           <C.item>
            <AccountCircleIcon />
            Casa Da Alegria
           </C.item>
           <C.item>
            <ListIcon />
           </C.item>
        </C.wrapper>
    </C.navbar>
  )
}

export default Navbar
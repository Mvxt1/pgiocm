import React from 'react'
import * as C from './styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';


function NavbarAdmin() {
  return (
    <C.navbar>
        <C.wrapper>
           <C.item>
            <AccountCircleIcon />
            USERNAME
           </C.item>
           <C.item>
            <ListIcon />
           </C.item>
        </C.wrapper>
    </C.navbar>
  )
}

export default NavbarAdmin
import React, { useEffect, useState } from 'react'
import * as C from './styles'
import Button from '../NrButton'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Link} from 'react-router-dom'


function Widget({title, counter, link, caminho, caminho2}) {

  return (
    <C.container>
      <C.widget>
        <C.left>
          <C.title>{title}</C.title>
          <Link to={{pathname: caminho}}>
            <Button Text='Criar'/>
          </Link>
        </C.left>
        <C.right>
          <C.subtitle>Total</C.subtitle>
          <C.counter>{counter}</C.counter>
        </C.right>
      </C.widget>
      
      <Link to={{pathname: caminho2}} style={{textDecoration: "none"}}>
        <C.link>
          {link}
          <ArrowCircleRightIcon className='icon'/>
        </C.link>
      </Link>
    </C.container>
  )
}

export default Widget
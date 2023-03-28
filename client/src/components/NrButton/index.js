import React from 'react'
import * as C from './styles'

function NrButton({Text, OnClick}) {
  return (
    <C.Button onClick={OnClick}>
        <C.Text>{Text}</C.Text>
    </C.Button>
  )
}

export default NrButton
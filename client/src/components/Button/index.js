import React from 'react'
import * as C from './styles'

function Button({Text, OnClick, lgo}) {
  return (
    <C.Button onClick={OnClick}>
      <C.Text>{Text}</C.Text>
      <C.logo src={lgo} />
    </C.Button>
  )
}

export default Button
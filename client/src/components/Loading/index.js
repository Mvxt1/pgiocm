import React from 'react'
import * as C from './styles'
import Loader from '../../images/Loading.svg'

function Loading() {
  return (
    <C.loader src={Loader} />
  )
}

export default Loading
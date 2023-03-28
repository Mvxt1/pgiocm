import React from 'react'
import * as C from './styles'

function Header({path,title}) {
  return (
    <C.HeaderContainer>
      <C.HeaderBg>
        <C.Img src={path} />
      </C.HeaderBg>
      <C.HeaderContent>
        <C.HeaderH1>{title}</C.HeaderH1>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}

export default Header
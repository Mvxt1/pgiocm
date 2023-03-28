import React from 'react'
import * as C from './styles'
import logo from '../../images/Logo.png'

function NavbarHome() {
  return (
    <>
        <C.Nav>
            <C.NavbarContainer>
                <C.NavLogo to="/Home"><C.lgo src={logo} /></C.NavLogo>
                <C.NavMenu>
                    <C.NavItem>
                        <C.NavLinks to="/home">CASA</C.NavLinks>
                    </C.NavItem>
                    <C.NavItem>
                        <C.NavLinks to="/orfanatos">ORFANATOS</C.NavLinks>
                    </C.NavItem>
                    <C.NavItem>
                        <C.NavLinks to="/actividades">ACTIVIDADES</C.NavLinks>
                    </C.NavItem>
                </C.NavMenu>
                <C.NavBtn>
                    <C.NavBtnLink to="/doacao">DOAR</C.NavBtnLink>
                </C.NavBtn>
            </C.NavbarContainer>
        </C.Nav>
    </>
  )
}

export default NavbarHome
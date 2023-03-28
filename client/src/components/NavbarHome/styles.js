import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Nav = styled.nav`
    background: white;
    height: 65px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font: 1rem;
    top: 0;
    z-index: 10;

`

export const lgo = styled.img`
    width: 90px;
    height: 52px;
`

export const  NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(NavLink)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks =  styled(NavLink)`
   color: #424242;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

   .not-active {
    color: black;
    border-bottom: 3px solid #01bf71;
   }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`

export const NavBtnLink = styled(NavLink)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
`
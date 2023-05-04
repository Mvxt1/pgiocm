import React from 'react'
import Header from '../../../../components/Header'
import NavbarHome from '../../../../components/NavbarHome'
import * as C from './styles'
import foto from '../../../../images/CasaAlegria.jpg'
import { Button } from '../../../../components/VerticalCard/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FaceIcon from '@mui/icons-material/Face';
import { Link } from 'react-router-dom'
import Footer from '../../../../components/Footer'



function SingleOrfanato() { 

  
  return (
    <C.Container> 
        <NavbarHome />
        <Header title='Casa da Alegria' path={foto} />
        <C.Top> 
            <C.TLeft>
                <C.Text>A Casa da Alegria é um orfanato pertencente a congregação religiosa católica intitulada Missionarias de Caridade e foi fundada na India com o objectivo deservir aos mais pobres dos pobres através da vivencia do evangelho de Jesus Cristo.</C.Text>
                <Link to="/adopcao">
                <Button>ADOPTAR</Button>
                </Link>
                
            </C.TLeft>
            <C.TRight>
                <C.Objects>
                    <C.Line><LocationOnIcon className='icon'/> Hulene B</C.Line>
                    <C.Line><EmailIcon className='icon'/> casadaalegria@gmail.com</C.Line>
                    <C.Line><LocalPhoneIcon className='icon'/> +258 84 902 7390</C.Line>
                    <C.Line><FaceIcon className='icon'/>8 Criancas</C.Line>
                </C.Objects>
                <Link to="/doacao">
                <Button >DOAR</Button>
                </Link>
            </C.TRight>            
        </C.Top>
        <Footer />
    </C.Container>
  )
}

export default SingleOrfanato
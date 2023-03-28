import React from 'react'
import NavbarAdmin from '../../../components/NavbarAdmin'
import Sidebar from '../../../components/Sidebar'
import * as C from './styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Alegria from '../../../images/User.png'

function Perfil() {
  return (
    <C.perf>
        <Sidebar />
        <C.perfilContainer>
            <NavbarAdmin />
            <C.title>
                <C.back>
                    <ArrowBackIcon className='icon'/>
                    Perfil
                </C.back>
            </C.title>
            <C.perfil>
                <C.cima>
                    <img src={Alegria} alt="" className='foto'/>
                </C.cima>
                <C.meio>
                    <C.nome> Carlos </C.nome> 
                </C.meio>
                <C.linha>
                </C.linha>
                <div className='bt'>
                    <C.button>Editar</C.button>
                </div>
            </C.perfil>
            
        </C.perfilContainer>
    </C.perf>  
  )
}

export default Perfil
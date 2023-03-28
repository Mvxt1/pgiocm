import React from 'react'
import NavbarAdmin from '../../../../components/NavbarAdmin'
import Sidebar from '../../../../components/Sidebar'
import * as C from './styles'
import Alegria from '../../../../images/CasaAlegria.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputIcon from '../../../../components/InputIcon'
import Input from '../../../../components/Input'
import InputMulti from '../../../../components/InputMult'
import Select from '../../../../components/Select'

function OrfSingle() {
    return (
    <C.single>
        <Sidebar />
        <C.singleContainer>
            <NavbarAdmin />
                <C.titles>
                    <C.back>
                        <ArrowBackIcon className='icon'/>
                        Lista de Orfanatos / Casa da Alegria
                    </C.back>
                </C.titles>
                <C.admin>
                    <C.cima>
                        <img src={Alegria} alt="" className='foto'/>
                    </C.cima>
                    <C.meio>
                        <form>
                            <C.imgInput>
                                <input type="file" style={{color:'transparent'}}/>
                            </C.imgInput>
                        </form>
                        <C.nome> Casa da Alegria </C.nome>    
                    </C.meio>
                    <C.linha>
                        <div>
                            <Input Label="Nome" Value="Hahahah"/> 
                        </div>
                        <div>
                            <Input Label="Localização"/>
                        </div>
                    </C.linha>
                    <C.linha>
                        <div>
                            <Input Label="Telefone"/>
                        </div>
                        <div>
                            <Select Label="Administrador" HelperText="Selecione um Administrador"/>
                        </div>
                    </C.linha>
                    <C.linha>
                        <InputMulti />
                    </C.linha>
                    <div className='bt'>
                        <C.button>Editar</C.button>
                    </div>
            </C.admin>
        </C.singleContainer>
    </C.single>
    )
}

export default OrfSingle
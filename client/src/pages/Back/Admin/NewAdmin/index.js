import React, { useState } from 'react'
import NavbarAdmin from '../../../../components/NavbarAdmin'
import Sidebar from '../../../../components/Sidebar'
import * as C from './styles'
import Alegria from '../../../../images/User.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '../../../../components/Input'
import Select from '../../../../components/Select'
import axios from 'axios'

function NewAdmin({title}) {

    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        console.log(values)
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
        axios.post('http://localhost:3001/Admin/administradores/newAdmin', {
            name: values.name,
            senha: values.senha,
            apelido: values.apelido
        }).then((response)=> {
            console.log(response)
        })
    }
    
 
    return (
        <C.single>
            <Sidebar />
            <C.singleContainer>
                <NavbarAdmin />
                <C.titles>
                    <C.back>
                        <ArrowBackIcon className='icon' />
                        {title}
                    </C.back>
                </C.titles>
                <C.admin>
                    <C.cima>
                    </C.cima>
                    <C.meio>
                        <form>
                            <C.nome> Novo administrador </C.nome>
                            <C.linha>
                                <div>
                                    <Input 
                                        Label="Nome"
                                        Id="nome"
                                        Name='name'
                                        OnChange={handleChangeValues} 
                                    />
                                </div>
                                <div>
                                    <Input 
                                        Label="Apelido" 
                                        Id="apelido"
                                        Name='apelido'
                                        OnChange={handleChangeValues} 
                                    />
                                </div>
                            </C.linha>
                            <C.linha>
                                <div>
                                    <Input 
                                        Label="Senha" 
                                        Id="senha"
                                        Name='senha'
                                        OnChange={handleChangeValues} 
                                    />
                                </div>
                                <div>
                                    <Select 
                                        Label="Orfanato" 
                                        HelperText="Selecione um orfanato" 
                                    />
                                </div>
                            </C.linha>
                            <div className='bt'>
                                <C.button onClick={handleClickButton}>Guardar</C.button>
                            </div>
                        </form>
                    </C.meio>
                </C.admin>
            </C.singleContainer>
        </C.single>
    )
}

export default NewAdmin
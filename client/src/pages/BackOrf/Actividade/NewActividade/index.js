import React, { useEffect, useState, navigate } from 'react'
import NavbarOrf from '../../../../components/NavbarOrf'
import SidebarOrf from '../../../../components/SidebarOrf'
import * as C from './styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '../../../../components/Input'
import InputMulti from '../../../../components/InputMult';
import axios from 'axios';

function NewActividade() {    

    const [values, setValues] = useState([]);
    const [data, setData] = useState({});

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value
        setData({ ...data, [id]: value });
        console.log(data)
    }

    const handleChangeValues = (value) => {
        console.log(values)
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
        axios.post('http://localhost:3001/backOrf/newactividade', {
            titulo: data.titulo,
            data_act: data.data_act,
            texto: data.texto
        }).then((response)=> {
            // navigate("/backOrf/actividade")
            console.log(response)
        })
    }
    

    return (
        <C.single>
            <SidebarOrf />
            <C.singleContainer>
                <NavbarOrf />
                <C.titles>
                    <C.back>
                        <ArrowBackIcon className='icon' />
                        Nova Actividade
                    </C.back>
                </C.titles>
                <C.admin>
                    <C.meio>
                        <form>
                            <C.nome> Registrar Actividade </C.nome>
                            <C.linha>
                                <div>
                                    <Input 
                                        Label="titulo"
                                        Id="titulo"
                                        OnChange={handleInput} 
                                    />
                                </div>
                                <div>
                                    <Input 
                                        Id="data_act"
                                        Type="date"
                                        OnChange={handleInput} 
                                    />
                                </div>
                            </C.linha>
                            <C.linha>
                                <InputMulti 
                                Id='texto'
                                OnChange={handleInput}/>
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

export default NewActividade
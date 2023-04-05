import React, { useEffect, useState } from 'react'
import NavbarAdmin from '../../../../components/NavbarAdmin'
import Sidebar from '../../../../components/Sidebar'
import * as C from './styles'
import Alegria from '../../../../images/CasaAlegria.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputIcon from '../../../../components/InputIcon'
import Input from '../../../../components/Input'
import InputMulti from '../../../../components/InputMult'
import Select from '../../../../components/Select'
import axios from 'axios'

function OrfSingle() {

    const [dataServer,setDataServer] = useState ([]);
    const slug = window.location.pathname;
    const id = /[^/]*$/.exec(slug)[0];
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        console.log(values)
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    useEffect (() => {
        axios.get('http://localhost:3001/orfanatos').then(res => res.data)
        .then((data) => {
          setDataServer(data)
        })
      },[])

    const filtered = dataServer.filter((data) => data.id == id);

    const updateInfo = async(id, body) => {
        try {
          axios.put(`http://localhost:3001/Admin/orfanatos/${id}`)
        } catch (error) {
          console.log(error)
        }
      }

    console.log(filtered)

    

    return (
    <C.single>
        <Sidebar />
        <C.singleContainer>
            <NavbarAdmin />
                <C.titles>
                    <C.back>
                        <ArrowBackIcon className='icon'/>
                        {
                            filtered.map(data => {
                                return(
                                    <>
                                    Lista de Orfanatos / {data.nome}
                                    </>
                                )
                            })
                        }
                    </C.back>
                </C.titles>
                <C.admin>
                    {
                        filtered.map(data => {
                            return(
                                <>
                                <C.cima>
                                    <img src={Alegria} alt="" className='foto'/>
                                </C.cima>
                                <C.meio>
                                    <form>
                                        <C.imgInput>
                                            <input type="file" style={{color:'transparent'}}/>
                                        </C.imgInput>
                                    </form>
                                    <C.nome> {data.nome} </C.nome>    
                                </C.meio>
                                </>
                            )
                        })
                    }
                    {
                        filtered.map(data => {
                            return(
                                <>
                                <C.linha>
                                    <div>
                                        <Input OnChange={handleChangeValues} Type="text" Label="Nome" DefaultValue={data.nome}/> 
                                    </div>
                                    <div>
                                        <Input OnChange={handleChangeValues} Label="Localização" DefaultValue={data.endereco}/>
                                    </div>
                                </C.linha>
                                <C.linha>
                                    <div>
                                        <Input Type="tel" OnChange={handleChangeValues} Label="Telefone" DefaultValue={data.contacto}/>
                                    </div>
                                    <div>
                                        <Select Label="Administrador" HelperText="Selecione um Administrador"/>
                                    </div>
                                </C.linha>
                                <C.linha>
                                    <InputMulti OnChange={handleChangeValues} DefaultValue={data.descricao}/>
                                </C.linha>
                                <div className='bt'>
                                    <C.button>Guardar</C.button>
                                </div>
                                </>
                            )
                        })
                    }
            </C.admin>
        </C.singleContainer>
    </C.single>
    )
}

export default OrfSingle
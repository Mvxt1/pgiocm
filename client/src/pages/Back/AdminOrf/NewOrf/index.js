import React, { useState } from 'react'
import NavbarAdmin from '../../../../components/NavbarAdmin'
import Sidebar from '../../../../components/Sidebar'
import * as C from './styles'
import Foto from '../../../../images/User.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '../../../../components/Input'
import InputMulti from '../../../../components/InputMult'
import Select from '../../../../components/Select'
import axios from 'axios'

function NewOrf() {

    const [file,setFile] = useState("");
    const [data, setData] = useState({});
    const [nome, setNome] = useState("")

    const setImgFile = (event) => {
        setFile(event.target.files[0]);
      };

    const setNomeValue = (event) => {
        setNome(event.target.value);
      };

    const formData = new FormData();
    formData.append('image', file); 
    formData.append('nome', nome);

    const configVars = {
        headers:{
            "Content-Type" : "multipart/form-data",
        }
    }

    const handleClickButton = () => {
        axios.post('http://localhost:3001/Admin/orfanatos/newOrf', formData, configVars, { 
            nome: data.nome,
            descricao: data.descricao,
            endereco: data.endereco,
            contacto: data.contacto
        }).then((response)=> {
            console.log(response)
        })
    }


    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value
        setData({ ...data, [id]: value });
    }
 
    console.log(data)

    return (
    <C.single>
        <Sidebar />
        <C.singleContainer>
            <NavbarAdmin />
                <C.titles>
                    <C.back>
                        <ArrowBackIcon className='icon'/>
                        Lista de Orfanatos / Novo Orfanato
                    </C.back>
                </C.titles>
                <C.admin>
                    <C.cima>
                        <img src={ file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt="" className='foto'/>
                    </C.cima>
                    <C.meio>
                        <form>
                            <C.imgInput>
                                <input 
                                    type="file" 
                                    name='image'
                                    id="image" 
                                    onChange={setImgFile} 
                                    style={{color:'transparent'}}
                                />
                            </C.imgInput>
                            <C.nome> </C.nome>    
                            <C.linha>
                                <div>
                                    <Input 
                                        Label="Nome" 
                                        Id="nome"
                                        OnChange={setNomeValue}
                                    />
                                </div>
                                <div>
                                    <Input 
                                        Label="Localização"
                                        Id="endereco"
                                        OnChange={handleInput}
                                    />
                                </div>
                            </C.linha>
                            <C.linha>
                                <div>
                                    <Input 
                                        Label="Telefone"
                                        Id="contacto"
                                        OnChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <Select 
                                        Label="Administrador" 
                                        HelperText="Selecione um Administrador"
                                        OnChange={handleInput}
                                    />
                                </div>
                            </C.linha>
                            <C.linha>
                                <InputMulti 
                                    Id="descricao"
                                    Name="Descricao"
                                    OnChange={handleInput}
                                />
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

export default NewOrf
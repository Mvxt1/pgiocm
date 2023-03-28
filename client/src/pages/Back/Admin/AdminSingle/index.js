import React, { useState } from 'react'
import NavbarAdmin from '../../../../components/NavbarAdmin'
import Sidebar from '../../../../components/Sidebar'
import * as C from './styles'
import Alegria from '../../../../images/User.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Input from '../../../../components/Input'
import Select from '../../../../components/Select'
import { useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import {db} from "../../../../firebase"
 

function AdminSingle() {

    const [data,setData] = useState ([]);
    const [user, setUser] = useState([]);
    const slug = window.location.pathname;
    const [editable,setEditable] = useState(false)
    const id = /[^/]*$/.exec(slug)[0];

    useEffect (() => {
        const fetchData = async () => {
          let list = []
          try{
            const querySnapshot = await getDocs(collection(db, "administrador"));
            querySnapshot.forEach((doc) => {
              list.push({id: doc.id, ...doc.data()});
            });
            setData(list)
          } catch (err) {
            console.log(err)
          }
        }
        fetchData();
      },[])

    
    const filtered = data.filter(data => {
        return data.id === id;
    });
    
    
   



  return (
    <C.single>
        <Sidebar />
        <C.singleContainer>
            <NavbarAdmin />
                <C.titles>
                    <C.back>
                        <ArrowBackIcon className='icon'/>
                        Lista de Administradores / {data.nome}
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
                        <C.nome> </C.nome>    
                    </C.meio>
                    {filtered.map(data => {
                        return (
                            <>
                            <C.linha>
                                <div>
                                    <Input Label="Nome" Value={data.nome}/>                                
                                </div>
                                <div>
                                    <Input Label="Nome" Value={data.email}/>
                                </div>
                            </C.linha>
                            <C.linha>
                                <div>
                                    <Input Label="Nome" Value={data.nome}/>                                
                                </div>
                                <div>
                                    <Input Label="Nome" Value={data.email}/>
                                </div>
                            </C.linha>
                            </>
                        )
                    })}        
                    <div className='bt'>
                        <C.button>Editar</C.button>
                      
                    </div>                    
            </C.admin>
        </C.singleContainer>
    </C.single>
  )
}

export default AdminSingle
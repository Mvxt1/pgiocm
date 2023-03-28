import React, { useEffect, useState } from 'react'
import NavbarOrf from '../../../../components/NavbarOrf'
import SidebarOrf from '../../../../components/SidebarOrf'
import * as C from './styles'
import Alegria from '../../../../images/User.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '../../../../components/Input'
import Select from '../../../../components/Select'
import {doc,setDoc,addDoc,collection, serverTimestamp} from 'firebase/firestore'
import { auth, db, storage } from '../../../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom'
import InputMulti from '../../../../components/InputMult'

function NewActividade({title}) {

    const [file,setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPer] = useState(null);
    const navigate = useNavigate()

    useEffect (() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPer(progress)
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                    default:
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData((prev) => ({...prev, img:downloadURL}))
                });
            }
            );
        };
        file && uploadFile();
    },[file])
    

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value

        setData({ ...data, [id]: value });
    }

    console.log(data)

    const handleAdd = async(e) => {
        e.preventDefault()
        try{
            const res = await createUserWithEmailAndPassword(auth,data.email,data.password);
            await setDoc(doc(db, "administrador", res.user.uid), {
                ...data, 
                timeStamp: serverTimestamp(),
                
        });     
        navigate("/Admin/administradores")
        } catch (err) {
            console.log(err)
        }
             
    }



 
    return (
        <C.single>
            <SidebarOrf />
            <C.singleContainer>
                <NavbarOrf />
                <C.titles>
                    <C.back>
                        <ArrowBackIcon className='icon' />
                        {title} sadas
                    </C.back>
                </C.titles>
                <C.admin>
                    <C.meio>
                        <form>
                            <C.nome> Registrar Actividade </C.nome>
                            <C.linha>
                                <div>
                                    <Input 
                                        Label="Titulo"
                                        Id="titulo"
                                        OnChange={handleInput} 
                                    />
                                </div>
                                <div>
                                    <Input 
                                        Id="dataPub"
                                        Type="date"
                                        OnChange={handleInput} 
                                    />
                                </div>
                            </C.linha>
                            <C.linha>
                                <InputMulti />
                            </C.linha>
                            <div className='bt'>
                                <C.button disabled={per !== null && per <100} onClick={handleAdd}>Guardar</C.button>
                            </div>
                        </form>
                    </C.meio>
                </C.admin>
            </C.singleContainer>
        </C.single>
    )
}

export default NewActividade
import React, { useContext, useState } from 'react'
import * as C from './styles'
import Progress from '../../../components/Progress'
import logonext from '../../../images/next3.png'
import Button from '../../../components/Button'
import logo from '../../../images/Logo.png'
import InputIcon from '../../../components/InputIcon'
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from '../../../firebase'
import AlertDialog from '../../../components/AlertDialog'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import axios from 'axios'



function Login() {

  const [body, setBody] = useState({ username: '', password: ''})
  const {dispatch} = useContext(AuthContext)

  const inputChange = ({ target }) => {
    const { name, value } = target 
    setBody({
      ...body,
      [name]: value
    })
  }


  const onSubmit = () => {
    axios.post('http://localhost:3001/api/login', body)
    .then(({data})=>{
      const user = body.username;
      console.log(user);
      dispatch({type:"LOGIN", payload:user})
      setLoading(true)
        const timerL = setTimeout(() => {
          setLoading(false)
          setSuccess(true)
        },1500)
        const timerE = setTimeout(() => {
          setSuccess(false)
          navigate("/admin")
        },3000)
    })
    .catch(({response})=>{
      setLoading(true)
      const timerL = setTimeout(() => {
         setLoading(false)
         setError(true)
       },1500)
      const timerE = setTimeout(() => {
         setError(false)
       },3000)
    })
  }

  //Old Login Method
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate()




  //Firebase Login Method
  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      //   dispatch({type:"LOGIN", payload:user})
        setLoading(true)
        const timerL = setTimeout(() => {
          setLoading(false)
          setSuccess(true)
        },1500)
        const timerE = setTimeout(() => {
          setSuccess(false)
          navigate("/")
        },3000)
    })
    .catch((error) => {
      setLoading(true)
      const timerL = setTimeout(() => {
         setLoading(false)
         setError(true)
       },1500)
      const timerE = setTimeout(() => {
         setError(false)
       },3000)
    });
  }

  return (
    <C.Container>
      <C.Content>
        <C.lgo src={logo} />
        <C.Label>BEM-VINDO</C.Label>
        <C.SubLabel>Preencha os campos para entrar na plataforma</C.SubLabel>
        <InputIcon Label="Usuario" value={body.username} name='username' change={inputChange} optionIcon={<AccountCircle />} />
        <InputIcon Label="Password" value={body.password} name='password' change={inputChange} optionIcon={<KeyIcon />} />
        <C.LabelStatus>{loading && <Progress/>}</C.LabelStatus>
        <C.LabelStatus>{success && <AlertDialog type="success" msg="Dados validados"/>}</C.LabelStatus>
        <C.LabelStatus>{error && <AlertDialog type="error" msg="Dados incorrectos!"/>}</C.LabelStatus>
        <Button Text="Entrar" OnClick={onSubmit} lgo={logonext} />
      </C.Content>
    </C.Container>
  )
}

export default Login
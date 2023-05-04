import React, { useState } from 'react'
import Header from '../../../components/Header'
import NavbarHome from '../../../components/NavbarHome'
import ImgDoar from '../../../images/Doacao.png'
import * as C from './styles'
import Input from '../../../components/Input'
import InfoIcon from '@mui/icons-material/Info';
import Footer from '../../../components/Footer'
import Foto from '../../../images/CasaAlegria.jpg'
import Mpesa from '../../../images/Mpesa.png'
import { Button } from '../../../components/VerticalCard/styles'
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Progress from '../../../components/Progress'



function Doacao() {
    const [numero, setNumero] = useState();
    const [quantia, setQuantia] = useState();
    const [open, setOpen] = useState(false);
    const [processando,setProcessando] = useState(false);
    const [desprocessandoSuccess,setDesprocessandoSuccess] = useState(false);
    const [desprocessandoFailed,setDesprocessandoFailed] = useState(false);
    const [resposta, setResposta] = useState();
        
    const inSubmit = async (event) => {
        setOpen(true);
        setProcessando(true)
        event.preventDefault();
        try {
            let response = await axios.post('http://localhost:3001/doacao/doar', {
                numero,
                quantia})
                if (response.data=='pass') {
                    setResposta('A sua transaccao foi efectuada com sucesso');
                    setProcessando(false)
                    setDesprocessandoSuccess(true)
                }
            } 
        catch (error) {
            setProcessando(false)
            setDesprocessandoFailed(true)
        }
    } 

    const handleClose = () => {
        setOpen(false);
      };

  return (
    <C.Container>
        <NavbarHome />
        <Header title="Doação para a Casa da Alegria" path={ImgDoar} />
        <C.Description>A Casa da Alegria é um orfanato pertencente a congregação religiosa católica intitulada Missionarias de Caridade e foi fundada na India com o objectivo deservir aos mais pobres dos pobres através da vivencia do evangelho de Jesus Cristo
        A sua doação sera mais que bem-vinda, pois com ela você vai ajudar a quem realmente precisa de ajuda e orfanato agradece antecipadamente o seu acto de caridade.</C.Description>
        <C.Title>Doação</C.Title>
        <C.BottomWrap>
            <C.Left>
                <C.Top>Dados Pessoais:</C.Top>
                <C.Middle> 
                    <Input Label='Nome' />
                    <Input Label='Apelido' />
                </C.Middle>
                <C.Middle>
                    <Input Label='Telemovel' />
                    <Input Label='Email' />
                </C.Middle>
                <C.Middle>
                    <InfoIcon className='icon'/>
                    <p className='txt'>O Preenchimeto dos dados acima não é de caracter obrigatorio</p>
                </C.Middle>
            </C.Left>
            <C.Righ>
                <C.Top>Dados da doação:</C.Top>
                <C.MiddleDonation>
                    <C.ImgOrf src={Foto} />
                    <C.InfoDonation>
                        <C.Line>Orfanato Casa da Alegria</C.Line>
                        <C.Line>Quantia:</C.Line>
                        <C.Line><Input Type='number' OnChange={(e) => setQuantia(e.target.value)}/>MT</C.Line>
                    </C.InfoDonation>
                </C.MiddleDonation>
                <C.Lineb>Pagar via Mpesa <C.MinImg src={Mpesa} /></C.Lineb>
                <C.Lineb>
                    <Input Required='True' Label="Numero de Telefone" OnChange={(e) => setNumero(e.target.value)}/>
                    <Button onClick={inSubmit} className='btn'>Confirmar</Button>
                </C.Lineb>
            </C.Righ>
        </C.BottomWrap>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" align='center'>
            {"MPESA"}
            </DialogTitle>

                <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '5px'}}>
                    <C.InformacaoSucess>{processando && <Progress/>}</C.InformacaoSucess>
                    <C.InformacaoSucess>{desprocessandoSuccess && "PARABENS!"}</C.InformacaoSucess>
                    {/* <C.InformacaoFailed>{desprocessandoSuccess && "SEM EXITO!"}</C.InformacaoFailed> */}
                </div>
            
            <DialogActions>
            <Button onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
        <Footer />
    </C.Container>
  )
}

export default Doacao
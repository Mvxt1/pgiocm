import React from 'react'
import Header from '../../../components/Header'
import NavbarHome from '../../../components/NavbarHome'
import Img from '../../../images/adoptar.png'
import * as C from './styles'
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '../../../components/VerticalCard/styles'

function Adopcao() {
  return (
    <C.Container>
        <NavbarHome />
        <Header title="Adpotar uma criança do orfanato" path={Img} />
        <C.Description>A Casa da Alegria é um orfanato pertencente a congregação religiosa católica intitulada Missionarias de Caridade e foi fundada na India com o objectivo deservir aos mais pobres dos pobres através da vivencia do evangelho de Jesus Cristo
        O processo de adopção requer a submissão de alguns documentos para posterior avaliação por parte do orfanato e o Ministério do Gênero, Criança e Acção Social.</C.Description>
        <C.Title>Manifesto de interesse de adopção</C.Title>
        <C.BottomWrap>
            <C.Left>
                <C.Top>Notas:</C.Top>
                <C.Bottom>1 -  Os documentos a serem submetidos passaram por uma avaliação e a posterior será contactado (email) para receber a sua resposta e os proximos passos.</C.Bottom>
                <C.Bottom>2 -  O adoptador pode ser um homem ou mulher com maior de 18 anos sem precisar necessariamente ser casado</C.Bottom>
                <C.Bottom>3 -  Podera ser necessario receber uma visita por parte da entidade responsavel para averiguar as condicoes  onde a crianca sera inserida</C.Bottom>
                <C.Bottom>4 -  O adoptador nao podera escolher a dedo a crianca que deseja adoptar, essa tarefa esta ao cargo do orfanato em escolha, porem o adoptador podera dizer as suas preferencia na estrevista que lhe sera feita pela entidade responsavel</C.Bottom>
            </C.Left>
            <C.Righ>
                <C.Part1>
                    <C.TextBig>Dados Pessoais</C.TextBig>
                    <InfoIcon className='icon'/>
                    <C.TextSmall>Os documentos devem ter o formato JPG, PNG ou PDF</C.TextSmall>
                </C.Part1>
                <C.Part2>
                    <Input Label="Nome" />
                    <Input Label="Apelido" />
                </C.Part2>
                <C.Part3>
                    <C.LeftLine>
                        <C.TextMiddle>Bilhete de Identidade:</C.TextMiddle>
                        <C.TextMiddle>Certidão de Nascimento:</C.TextMiddle>
                        <C.TextMiddle>Comprovativo de Residência:</C.TextMiddle>
                        <C.TextMiddle>Comprovativo de Rendimentos: </C.TextMiddle>
                        <C.TextMiddle>Atestado Médico:</C.TextMiddle>
                    </C.LeftLine>
                    <C.RightLine>
                        <C.ImgInput>
                            <input type="file" 
                                id="file" 
                                // onChange={(e) => setFile(e.target.files[0])} 
                                style={{}} 
                            />
                        </C.ImgInput>      
                        <C.ImgInput>
                            <input type="file" 
                                id="file" 
                                // onChange={(e) => setFile(e.target.files[0])} 
                                style={{}} 
                            />
                        </C.ImgInput>
                        <C.ImgInput>
                            <input type="file" 
                                id="file" 
                                // onChange={(e) => setFile(e.target.files[0])} 
                                style={{}} 
                            />
                        </C.ImgInput>
                        <C.ImgInput>
                            <input type="file" 
                                id="file" 
                                // onChange={(e) => setFile(e.target.files[0])} 
                                style={{}} 
                            />
                        </C.ImgInput>
                        <C.ImgInput>
                            <input type="file" 
                                id="file" 
                                // onChange={(e) => setFile(e.target.files[0])} 
                                style={{}} 
                            />
                        </C.ImgInput>
                        </C.RightLine>
                </C.Part3>
                <C.Part4>
                    <Button>Submeter</Button>
                </C.Part4>
            </C.Righ>
        </C.BottomWrap>
        <Footer />
    </C.Container>
  )
}

export default Adopcao
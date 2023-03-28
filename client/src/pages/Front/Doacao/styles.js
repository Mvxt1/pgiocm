import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InformacaoSucess = styled.p`
    color: green;
    font-size: 14px;
    text-align: justify;
    padding-bottom: 5px;
`

export const InformacaoFailed = styled.p`
    color: red;
    font-size: 14px;
    text-align: justify;
    padding-bottom: 5px;
`

export const Description = styled.p`
    padding-top: 190px;
    font-size: 1.2rem;
    color: #838383;
    text-align: justify;
    margin: 0 70px;
`

export const Title = styled.h1`
    padding: 40px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #3D3D3D;
`

export const BottomWrap = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;

    .icon{
        color: red;
    }
`

export const Left = styled.div`
    width: 550px;
    height: 300px;
    -webkit-box-shadow: 1px 0px 17px 5px #D6D6D6; 
    box-shadow: 1px 0px 17px 5px #D6D6D6;
    border-radius: 5px;
`

export const Righ = styled.div`
    width: 550px;
    height: 300px;
    -webkit-box-shadow: 1px 0px 17px 5px #D6D6D6; 
    box-shadow: 1px 0px 17px 5px #D6D6D6;
    border-radius: 5px;
`

export const Top = styled.p`
    padding-top: 25px;
    font-weight: bold;
    color: #838383;
    font-size: 22px;
    padding-left: 20px;
    padding-bottom: 20px;
`

export const Bottom = styled.p`
    padding-top: 5px;
    color: #838383;
    font-size: 18px;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-right: 30px;
    text-align: justify;
`

export const Middle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    gap: 20px;

    .txt{
        font-size: 15px;
        color: red;
        margin-left: -10px;
    }
`

export const MiddleDonation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const ImgOrf = styled.img`
    width: 150px;
    height: 120px;
    padding-left: 20px;
`

export const MinImg = styled.img`
    width: 55px;
    height: 25px;
    padding-left: 20px;
`

export const InfoDonation= styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 10px;
`

export const Line = styled.p`
    color: #838383;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export const Lineb = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #838383;
    font-size: 18px;
    padding-left: 20px;
    padding-top: 10px;

    .btn{
        margin-left: 40px;
    }
`


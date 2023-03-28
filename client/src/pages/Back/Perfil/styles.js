import styled from "styled-components";
import { Button } from "../../../components/NrButton/styles"

export const perf = styled.div`
    display: flex;
`

export const perfilContainer = styled.div`
    flex: 6;
`

export const perfil = styled.div`
    padding: 10px 50px;
    margin: 50px 150px;
    -webkit-box-shadow: 1px 0px 17px 5px #D6D6D6; 
    box-shadow: 1px 0px 17px 5px #D6D6D6;
    border-radius: 5px;
    height: 400px;

    .foto{
        height: 100px;
        width: 100px;
        border-radius: 50px;
        object-fit: cover;
    }

    .bt{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

`

export const cima = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    justify-content: center;

`

export const linha = styled.div`
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    .input{
        font-size: 21px;
        width: 100%;
        border: none;
        border-bottom: 1px solid grey;
        text-decoration: none;
    }
`

export const nome = styled.h1`
    font-size: 24px;
    color: #585858;
`
export const Label = styled.label`
    font-size: 21px;
    padding-right: 5px;
`

export const button = styled(Button)`
    font-size: 18px;
    height: 40px;
    align-items: center;
`

export const back = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

export const title = styled.div`
    font-size: 21px;
    font-weight: 900;
    display: flex;
    flex-direction: row;
    padding-left: 25px;
    padding-top: 35px;
    justify-content: space-between;
    padding-right: 20px;
    align-items: center;
    color: #585858;

    .icon{
        cursor: pointer;
    }
`

export const meio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

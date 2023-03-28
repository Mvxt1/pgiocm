import styled from "styled-components";

export const CardContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: fit-content;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom: 40px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const Img = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const BtnWrapper = styled.div`
    display: flex;
    padding-top: 10px;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    height: 47px;
    width: 143px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #008037;
    color: white;
    max-width: 390px;
    font-size: 16px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const Cardtitle = styled.h1`
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
`

export const Cardline = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;
`

export const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
`
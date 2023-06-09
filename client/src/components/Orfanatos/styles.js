import styled from "styled-components";
 
export const OrfanatoContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606;
    margin-top: -180px;
`

export const OrfanatoWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`

export const OrfanatoCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const OrfanatoIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const OrfanatoH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
`

export const OrfanatoH2 = styled.h2`
    font-size: 1.2rem;
    margin-top: 10px;
    text-align: center;
    
`

export const OrfanatoP = styled.p`
    font-size: 1rem;
    text-align: justify;
`

export const A = styled.a`
    style="text-decoration: none;
`
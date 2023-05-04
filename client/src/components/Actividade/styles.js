import styled from "styled-components";

export const ActContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;

`
export const ActWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const ActCard = styled.div`
    background: #010606;
    display: flex;
    height: 120px;
    width: 1000px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ActContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 810px;
 
`

export const ActIcon = styled.img`
    height: 80px;
    width: 80px;
    margin-right: 10px;
`

export const ActH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    padding-bottom: 35px;
`

export const ActH2 = styled.h2`
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    margin-bottom:-10px

`

export const ActP = styled.p`
    color: #d1d1d1;
    font-size: 1rem;
    text-align: justify;
    word-break: break-all;
`
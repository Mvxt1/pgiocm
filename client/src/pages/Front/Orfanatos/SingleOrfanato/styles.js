import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Top = styled.div`
    padding-top: 190px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export const TLeft = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    padding: 0 50px 0 70px;
    text-align: justify;
`

export const TRight = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`

export const Text = styled.div`
    font-size: 1.2rem;
    color: gray;
`

export const Objects = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding-left: 70px;
    
`

export const Line = styled.p`
    display: flex;
    font-size: 1.2rem;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: gray;
    padding-bottom: 5px;

    .icon{
        color: green;
    }

`
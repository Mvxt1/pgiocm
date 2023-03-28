import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
`;

export const Text = styled.text`
    font-size: 16px;
    font-weight: 600;
`

export const logo = styled.img`
    width: 29px;
    height: 28px;
    margin-left:10px;
`;
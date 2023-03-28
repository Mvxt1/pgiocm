import styled from "styled-components";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 380px;
    -webkit-box-shadow: 1px 0px 17px 5px #D6D6D6; 
    box-shadow: 1px 0px 17px 5px #D6D6D6;
    border-radius: 5px;
`

export const widget = styled.div`
    display: flex;
    flex: 1;
    padding: 10px;
    justify-content: space-between;
`

export const left = styled.div`
    display: flex;
    padding-left: 10px;
    flex-direction: column;

`
export const right = styled.div`
    display: flex;
    padding-right: 15px;
    flex-direction: column;
`

export const title = styled.span`
    padding-top: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #585858;
`
export const subtitle = styled.text`
    padding-top: 35px;
    font-size: 18px;
    font-weight: 600;
    color: #585858;
`
export const counter = styled.text`
    font-size: 20px;
    font-weight: 700;
    color: #585858;
    text-align: center;
`
export const link = styled.text`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #008037;
    height: 40px;
    padding: 10px 10px 10px 10px;
    background-color: #D9D9D9;
    cursor: pointer;

    .icon{
        width: 35px;
        height: 30px;
        cursor: pointer;
        
    }
`
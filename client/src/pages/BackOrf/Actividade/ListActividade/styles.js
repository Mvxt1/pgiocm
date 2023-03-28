import { style } from "@mui/system"
import styled from "styled-components"
import { Button } from "../../../../components/NrButton/styles"

export const list = styled.div`
    display: flex;
`
export const listContainer = styled.div`
    flex: 6;
`
export const titles = styled.div`
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

export const buttonMod = styled(Button)`
    font-size: 18px;
    height: 40px;
    align-items: center;
    margin: 0;
    border-radius: 5px;
`

export const back = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;


`

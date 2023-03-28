import img from '../../../images/porr.png'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-image: url(${img});
    background-size: cover;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    border-radius: 10px;
`;

export const lgo = styled.img`
    width: 117px;
    height: 72px;
`
export const infLogo = styled.img`
    width: 24px;
    height: 23px;
`

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width: 450px;
    padding: 20px;
    border-radius: 5px;
    margin-top: -100px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #585858;
`;

export const SubLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #585858;
`;

export const LabelLogar = styled.label`
    font-size: 16px;
    color: #676767;
`;

export const LabelStatus = styled.label`
    font-size: 14px;
    margin: -5px;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }
`

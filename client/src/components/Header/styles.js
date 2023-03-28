import styled from "styled-components";

export const HeaderContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    max-width: 100%;
    align-items: center;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index: 1;
    margin-bottom: -140px;
`

export const HeaderBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #232a24;
    opacity: 0.5;
    filter: blur(4px);
`

export const HeaderContent = styled.div`
    position: absolute;
`

export const HeaderH1 = styled.h1`
    color: #fff;
    text-shadow: gray;
    font-size: 48px;
    text-align: left;
    width: 500px;
    padding-left: 30px;
    margin-top: -25px;
`
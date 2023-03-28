import styled from "styled-components";

export const sidebar = styled.div`
    flex: 1;
    border-right: 0.5px solid rgb(230, 227, 277);
    min-height: 100vh;
    background-color: white ;

    .top{
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 0.5px solid rgb(230, 227, 277);
        cursor: pointer;
    }

    .center{
        padding-left: 15px;
        padding-top: 20px;
        
        ul{
            list-style: none;
            margin: 0;
            padding: 0;

            .title{
                font-size: 10px;
                font-weight: bold;
                color: #999;
                
                margin-top: 20px;
                margin-bottom: 5px;
            }

            li{
                display: flex;
                align-items: center;
                padding: 5px;
                cursor: pointer;

                &:hover{
                    background-color: #ece8ff;
                }

                .icon{
                    margin-right: 10px;
                    color: #008037;
                }

                span{
                    color: #404040;
                    font-weight: 600;
                    font-size: 15px;
                }
            }
        }
    }

` 

export const lgo = styled.img`
    width: 70px;
    height: 40px;
`
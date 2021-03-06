import styled from "styled-components";

export const AreaLogin = styled.div`
    background: #FFFEEB;
    padding: 50px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;

    h1{
        font-size: 18px;
    }

    .organize{
        display: flex;
        a{
            color: #000;
        }
    }

    p{
        font-size: 14px;
        color: #9c9c9c;
    }

    .center{
        padding: 5px;
    }

    .form-input{
        text-align: left;

        label{
            display: block;            
        }

        input{
            margin-buttom: 10px;
            padding: 5px;
            font-size: 12px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 240px;
            transition0.3s;

            &:hover{
                border: 1px solid #7d2ae8
            }
        }
    }

    .footerLogin{
        font-size: 13px;
        a{
            font-weight: bold;
            margin-left: 5px;
            color: #4e129c;
            transition: 0.4s;
            cursor: pointer;

            &:hover{
                color: #7d2ae8;
            }
        }
    }
`;
import styled from 'styled-components';

export const BtnDefaultIcons = styled.button`
    display: flex;
    align-items: center;
    width: 240px;
    padding: 10px;
    border-radius: 5px;
    border: 2px;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    margin-buttom: 10px;
    transition: 0.4s;
    margin: 10px 0px 10px 0px;

    &:hover{
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%
    }
`;

export const BtnDefault = styled(BtnDefaultIcons)`
    padding: 20px;
    background-color: #F8B3C5;
    color: #000;
    display: inline;

    &:hover{
        background-color: #ccc;
    }
`;
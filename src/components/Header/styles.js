import styled from 'styled-components';

export const TopBar = styled.div`
  width: 100%;
  background-color: #FFFEEB;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Options = styled.div`
  width: 100%;
  height: 30px;
  background-color: #FFFEEB;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #F8B3C5;
`;

export const InputSearch = styled.input`
  border: 1px solid #cecece;
  border-radius: 4px;
  height: 40px;
  margin-left: 10px;
  width: 100%;
  background-color: #ffffff;
  padding-left: 20px;
`;

export const TextType = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const FinishButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 5px;
  margin-left: 10px;
  cursor: pointer;
  background: transparent;
  outline: none;
  border: 1px solid #cecece;
  border-radius: 4px;
`;

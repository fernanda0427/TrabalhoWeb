
import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  background: #FFFEEB;
  min-height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  height: 65px;
  background-color: #FFFEEB;
  display: flex;
  align-items: center;
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

export const TextType = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Text = styled.span`
  font-size: 15px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFEEB;
  padding: 20px;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const ItemBox = styled.div`
  width: 100%;
  background-color: #FFFEEB;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  background-color: #FFFEEB;
  margin-top: 20px;
  border-color: black;
  border-radius: 4px;
  margin-right: 20px;
  flex-wrap: wrap;
`;

export const TitleItem = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Photo = styled.img`
  width: 130px;
  height: 160px;
`;

export const InfoBox = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  width: 700px;
  display: flex;
  height: 250px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border: 1px solid #cecece;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #FFFEEB;
  border-color: transparent;
`;

export const Input = styled.input`
  border: 1px solid #cecece;
  height: 30px;
  margin-left: 10px;
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  padding-left: 10px;
`;

export const DataBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  align-items: center;
  width: 100%;
`;

  export const FinishButton = styled.button`
    cursor: pointer;
    background: transparent;
    outline: none;
    border: 1px solid #000;
    border-radius: 4px;
    margin-top: 10px;
    height: 40px;
    font-weight: bold;
    width: 200px;
  `;

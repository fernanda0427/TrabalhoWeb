import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFEEB;
`;

export const Text = styled.span`
  font-size: 15px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Container = styled.div`
  width: 100%;
  height: 913px;
  background-color: #FFFEEB;
  display: flex;
  justify-content:center;
`;

export const Card = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  padding: 24px 32px;
  height: 400px;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const Box = styled.div`
  border: 1px solid #000;
  width: 440px;
  height: 150px;
  border-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const TitleItem = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

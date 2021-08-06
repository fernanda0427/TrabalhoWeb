import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFEEB;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #FFFEEB;
`;

export const LeftSidebar = styled.div`
  height: 100%;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 20px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 20px 20px 20px;
`;

export const ProductImage = styled.img`
  height: auto;
  width: 200px;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

export const ProductInfo = styled.span`
  font-size: 18px;
  font-weight: 500;
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`

export const ProductFilter = styled.select`

`;

export const PriceFilter = styled.select`

`;

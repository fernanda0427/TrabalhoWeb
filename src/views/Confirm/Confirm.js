import React from 'react';
import { useEffect, useState } from 'react';
import {
  Page,
  Container,
  Card,
  Title,
  Box,
} from './styles';
import { TitleItem } from '../Cart/styles';
import Header from '../../components/Header/Header';
import useCart from '../../hooks/useCart';


function Confirm() {
  const [total, setTotal] = useState();

  const { cart, data } = useCart();

  useEffect(() => {
    if (cart.length > 0) {
      let newTotal = 0;

      cart.forEach(item => newTotal +=  parseInt(item.price));

      setTotal(newTotal);
    }
  }, [cart]);

  return (
    <Page>
      <Header />
      <Container>
        <Card>
          <Title>Resumo da compra</Title>
          <TitleItem>Preço total:</TitleItem>
          <span style={{ fontSize: 24 }}>R$ {total}</span>
          <TitleItem>Local de entrega:</TitleItem>
          <span>Rua: {data.address}, Cidade: {data.city}, Número: {data.number}, Complemento: {data.complement}, CEP: {data.cep}</span>
          <TitleItem>Seu pedido chegará em até {Math.floor((Math.random() * 10)) + 1} dias!</TitleItem>
        </Card>
      </Container>
    </Page>
  );
}

export default Confirm;

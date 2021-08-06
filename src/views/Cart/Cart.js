import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Login from '../Login';
import App from '../../App';

import {
  Page,
  Container,
  Text,
  Title,
  Item,
  InfoBox,
  ItemBox,
  TitleItem,
  InfoItem,
  DataBox,
  Input,
  FinishButton,
} from './styles';

import useCart from '../../hooks/useCart';
import Header from '../../components/Header/Header';

function Cart({ history }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');

  const { cart, data, setData } = useCart();

  const handleSubmit = () => {
    setData({
      name,
      address,
      number,
      complement,
      city,
      cep,
    });

    console.log({
      name,
      address,
      number,
      complement,
      city,
      cep,
    });

    history.push('/confirm')
  }
    return (
      <Page>
        <Header />
      <Container>
        <Title>Itens no seu carrinho</Title>
        <ItemBox>
          <Item>
            {cart && cart.map(item => (
              <InfoItem key={item.id}>
                <TitleItem>Nome do produto:</TitleItem>
                <Text>{item.name}</Text>
                <TitleItem>Categoria:</TitleItem>
                <Text>{item.category}</Text>
                <TitleItem>Preço:</TitleItem>
                <Text>{item.price}</Text>
              </InfoItem>
            ))}
          </Item>
          <InfoBox>
            <Title>Meus dados</Title>
            <DataBox>
              <Text>Nome</Text>
              <Input name="name" placeholder="Nome" type="text" onChange={event => setName(event.target.value)}/>
            </DataBox>
            <DataBox>
              <Text>Endereço</Text>
              <Input placeholder="Endereço" type="text" onChange={event => setAddress(event.target.value)}/>
            </DataBox>
            <DataBox>
              <Text>Número</Text>
              <Input placeholder="Nº" onChange={event => setNumber(event.target.value)} />
              <Text style={{ marginLeft: 5 }}>Complemento</Text>
              <Input placeholder="Complemento" type="text" onChange={event => setComplement(event.target.value)}/>
            </DataBox>
            <DataBox>
              <Text>Cidade</Text>
              <Input placeholder="Cidade" type="text" onChange={event => setCity(event.target.value)}/>
              <Text style={{ marginLeft: 5 }}>CEP</Text>
              <Input placeholder="CEP" onChange={event => setCep(event.target.value)} />
            </DataBox>
            <FinishButton onClick={handleSubmit}>
              Finalizar
            </FinishButton>
          </InfoBox>
        </ItemBox>
      </Container>
      </Page>
  );  
}

export default withRouter(Cart);
